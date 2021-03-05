package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/signal"
	"sync/atomic"
	"time"

	lvs "github.com/nanobox-io/golang-lvs"
)

const (
	version = "0.0.1"
)

var (
	remoteURL       string
	remoteAddr      string
	conPath         string
	debug           bool
	logToOut        = log.New(os.Stdout, "ipvs_client: ", log.LstdFlags)
	logToErr        = log.New(os.Stderr, "ipvs_client: ", log.LstdFlags)
	healthy         int32
	gitCommit       string
	val             string
	ipvsServerCount float64
)

var listIpvs lvs.Ipvs
var jsonIpvs lvs.Service

type responseObject struct {
	Services []lvs.Service `json:"services"`
}

func httpGet(remoteURL string) []byte {
	if debug != false {
		_, err := url.ParseRequestURI(remoteURL)
		if err != nil {
			panic(err)
		}
	}

	req, err := http.NewRequest(http.MethodGet, remoteURL, nil)
	if err != nil {
		logToErr.Fatalf("ERROR: -- new HTTP request -- %v", err)
	}

	ipvsClient := http.Client{
		Timeout: time.Second * 2, // Timeout after 2 seconds
	}
	req.Header.Set("User-Agent", "go-ipvs-get \tversion: "+version+"\t Git Commit: "+gitCommit)
	res, err := ipvsClient.Do(req)
	if err != nil {
		logToErr.Fatalf("ERROR: -- ipvsClient -- %v\n", err)
	}

	if res.Body != nil {
		defer res.Body.Close()
	}

	body, readErr := ioutil.ReadAll(res.Body)
	if readErr != nil {
		logToErr.Fatalf("ERROR: -- body -- %v\n", readErr)
	}

	return body
}

func unmarshal(body []byte) []lvs.Service {

	res := &responseObject{
		Services: listIpvs.Services,
	}

	jsonErr := json.Unmarshal(body, &res)
	if jsonErr != nil {
		logToErr.Fatalf("ERROR: -- Unmarshal -- %v \n", jsonErr)
	}

	if debug != false {
		logToOut.Fatalf("DEBUG: -- res -- %v \n", res.Services)
	}

	r := res.Services

	return r
}

// Specified a channel to constantly poll every x seconds the IPVS routes, to prevent every call to create load on the system
func clientChan(c chan bool) {
	logToOut.Println("Starting time based IPVS Admin add")

	pollInterval := 10
	timerCh := time.Tick(time.Duration(pollInterval) * time.Second)
	// Time based loop to generate Global variable
	for range timerCh {
		select {
		// when shutdown is received we break
		case <-c:
			logToOut.Println("Received shutdown, stopping timer")
			break
		default:

			logToOut.Println("Clearing & Adding servers...")
			// Before we add Servers we need to clear the existing list
			lvs.Clear()
			addServers(remoteAddr)
			if debug != false {
				logToOut.Printf("IPVS servers added:\t%v", ipvsServerCount)
			}
		}
	}
}

func fromJSON(body []byte) {
	err := jsonIpvs.FromJson(body)
	if err != nil {
		logToErr.Printf("ERROR: -- Printing fromJSON function -- \n%v", err)
	}
}

func addServers(remoteAddr string) {
	body := httpGet(remoteAddr)
	jsonData := unmarshal(body)

	for i, v := range jsonData {
		if debug != false {
			logToOut.Printf("DEBUG: -- range jsonDATA --\n")
			logToOut.Printf("ipvsCount=%v, value=%v", i, v)
		}

		err := lvs.DefaultIpvs.AddService(v)
		if err != nil {
			logToErr.Printf("ERROR: -- AddService -- %v", err)
		}

		i++
		ipvsServerCount = float64(i)
	}
}

func main() {
	// Flags set for Client
	flag.StringVar(&remoteURL, "remote-addr", "http://ipvs.com", "URL where nifi scheduler can be reached")
	flag.StringVar(&conPath, "remote-path", "/metrics", "The path where the remote scheduler connection details are available")
	remotePort := flag.String("remote-port", "9000", "Port where Remote scheduler listens on")

	// Flags set for this application
	debug := flag.Bool("debug", false, "Prints debug information")
	ver := flag.Bool("v", false, "Prints version information")

	flag.Parse()

	if *debug {
		logToOut.Println("DEBUG mode enabled")
	}

	if *ver {
		fmt.Println("Version:", version, "\tBuild:", gitCommit)
		os.Exit(0)
	}

	remoteAddr = remoteURL + ":" + (*remotePort) + conPath

	notificationChannel := make(chan bool)
	go clientChan(notificationChannel)

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
		logToOut.Println("Server is shutting down...")
		// Set the atomic counter to 0 indicating shutdown in healthz
		atomic.StoreInt32(&healthy, 0)

		// Timeout after cancel is not performed after 30s
		_, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()

		// Closing channel
		close(done)
	}()

	// Block till server is closed, send notification after
	<-done
	logToOut.Println("Server stopped")
}
