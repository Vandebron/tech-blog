package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"strconv"
	"strings"
	"sync/atomic"
	"time"

	lvs "github.com/nanobox-io/golang-lvs"
)

type key int

const (
	version          = "0.0.1"
	requestIDKey key = 0
)

var (
	remoteURL  string
	remoteAddr string
	conPath    string
	debug      bool
	logToOut   = log.New(os.Stdout, "ipvs-server: ", log.LstdFlags)
	logToErr   = log.New(os.Stderr, "ipvs-server: ", log.LstdFlags)
	healthy    int32
	gitCommit  string
	ipvsString string
	ipvsJSON   string
)

var listIpvs lvs.Ipvs
var jsonIpvs lvs.Service

type responseObject struct {
	Services []lvs.Service `json:"services"`
}

// Specified a channel to constantly poll every x seconds the IPVS routes, to prevent every call to create load on the system
func childChan(c chan bool) {
	fmt.Println("Starting time based IPVS Admin poll")

	pollInterval := 10
	timerCh := time.Tick(time.Duration(pollInterval) * time.Second)
	// Time based loop to generate Global variable
	for range timerCh {
		select {
		// when shutdown is received we break
		case <-c:
			fmt.Println("Received shutdown, stopping timer")
			break
		default:
			var err error
			listIpvs.Save()
			ipvsString = fmt.Sprintln(listIpvs.Services)

			res := &responseObject{
				Services: listIpvs.Services,
			}

			ipvsJSONbyte, err := json.Marshal(res)
			if err != nil {
				logToErr.Printf("ERROR: -- Marshal JSON -- %v\n", err)
			}

			ipvsString = string(ipvsJSONbyte)
			ipvsJSON = strings.Replace(ipvsString, `\n`, ``, -1)
			if debug != false {
				logToOut.Println("DEBUG: -- ipvsJSON --", ipvsJSON)
			}
		}
	}
}

func index() http.Handler {
	// Generating the Index
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// Only available when debug is on
		if debug != false {
			logToOut.Println("DEBUG: -- index --", ipvsString)
		}

		if r.URL.Path != "/" {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}
		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
		// Site security testers expect this header to be set
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.WriteHeader(http.StatusOK)
		fmt.Fprintln(w, ipvsString)
	})
}

func jsonz() http.Handler {
	// Generating the Index
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// Only available when debug is on
		if debug != false {
			logToOut.Println("DEBUG: -- jsonz --", ipvsJSON)
		}

		if r.URL.Path != "/json" {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		// Site security testers expect this header to be set
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.WriteHeader(http.StatusOK)
		fmt.Fprintln(w, ipvsJSON)
	})
}

func healthz() http.Handler {
	// Generating the healthz endpoint
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if atomic.LoadInt32(&healthy) == 1 {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		w.WriteHeader(http.StatusServiceUnavailable)
	})
}

func tracing(nextRequestID func() string) func(http.Handler) http.Handler {
	// Tracing the http requests so its easier to check if server is reached
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			requestID := r.Header.Get("X-Request-Id")
			if requestID == "" {
				requestID = nextRequestID()
			}
			ctx := context.WithValue(r.Context(), requestIDKey, requestID)
			w.Header().Set("X-Request-Id", requestID)
			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}

func logging(logToOut *log.Logger) func(http.Handler) http.Handler {
	// Creating logging entry tracing the http requests
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			defer func() {
				requestID, ok := r.Context().Value(requestIDKey).(string)
				if !ok {
					requestID = "unknown"
				}
				logToOut.Println(requestID, r.Method, r.URL.Path, r.RemoteAddr, r.UserAgent())
			}()
			next.ServeHTTP(w, r)
		})
	}
}

// getProcessOwner function is to see who is running the process. It needs to be a sudo / root user
func getProcessOwner() string {
	stdout, err := exec.Command("ps", "-o", "user=", "-p", strconv.Itoa(os.Getpid())).Output()
	if err != nil {
		logToErr.Printf("ERROR: -- getProcessOwner -- %v\n", err)
		os.Exit(1)
	}
	return string(stdout)
}

func init() {
	// Placing the Save and val in the init, else we will need to wait for channel to perform its first run
	listIpvs.Save()
	ipvsString = fmt.Sprintln(listIpvs.Services)
}

func main() {
	// Flags set for Server
	listenPort := flag.String("port", "19000", "Port where this server listens on")
	debug := flag.Bool("debug", false, "Prints debug information")
	ver := flag.Bool("v", false, "Prints version information")
	flag.Parse()

	listenFormat := ":" + (*listenPort)

	// Only prints version when -v flag is given.
	if *ver {
		fmt.Println("Version:", version, "\tBuild:", gitCommit)
		os.Exit(0)
	}

	// Adds version to the logs to pickup in logstash
	logToOut.Println("Version:\t", version, "\tGit commit:\t", gitCommit)
	logToOut.Println("Beginning to serve on port:", listenFormat)
	if *debug {
		fmt.Println("You are running as:", getProcessOwner())
	}

	// Creating the channel in a go routine to ensure the timer runs concurrently in the background
	notificationChannel := make(chan bool)
	go childChan(notificationChannel)

	router := http.NewServeMux()
	router.Handle("/", index())
	router.Handle("/json", jsonz())
	router.Handle("/healthz", healthz())

	// Generating request id's
	nextRequestID := func() string {
		return fmt.Sprintf("%d", time.Now().UnixNano())
	}

	// Setting the parameters for the http server
	server := &http.Server{
		Addr:         listenFormat,
		Handler:      tracing(nextRequestID)(logging(logToOut)(router)),
		ErrorLog:     logToOut,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  15 * time.Second,
	}

	// Setting clean shutdown mechanisms
	done := make(chan bool)
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)

	go func() {
		// quit blocks till the process gets a shutdown signal
		<-quit
		// Send notification to close the time loop in childChan
		notificationChannel <- true
		// Notifying the server shutdown is received.
		fmt.Println("Server is shutting down...")
		// Set the atomic counter to 0 indicating shutdown in healthz
		atomic.StoreInt32(&healthy, 0)

		// Timeout after cancel is not performed after 30s
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()

		server.SetKeepAlivesEnabled(false)
		if err := server.Shutdown(ctx); err != nil {
			logToErr.Fatalf("ERROR: Could not gracefully shutdown the server: %v\n", err)
		}
		// Closing channel
		close(done)
	}()

	logToOut.Println("Server is ready to handle requests at", listenFormat)
	// Set atomic counter to indicate service health when server is ready to serve
	atomic.StoreInt32(&healthy, 1)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		logToErr.Fatalf("ERROR: Could not listen on %s: %v\n", listenFormat, err)
	}

	// Block till server is closed, send notification after
	<-done
	logToOut.Println("Server stopped")
}
