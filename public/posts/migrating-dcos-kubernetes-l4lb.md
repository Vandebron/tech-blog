---
title: Migrating from DCOS to Kubernetes, dealing with the l4lb loadbalancer
description: When you want minimal downtime, you need to build your own tools
createdAt: 2021-03-05
coverImage: images/migrating-dcos-kubernetes-l4lb.jpg
imageSource: https://pixabay.com/users/praesentator-4372890/
tags: Kubernetes, k8s, mesos, l4lb, ipvs, ipvsadm
author: Rogier Dikkes
---

In October 2020 D2IQ [announced](https://d2iq.com/blog/d2iq-takes-the-next-step-forward) that they are moving onwards with their Kubernetes offering. Vandebron has been a D2IQ customer for their DCOS offering, we were just in the middle of a migration of our first workloads to DCOS Enterprise. We have evaluated the D2IQ K8s offering and decided to go for another Kubernetes product. We had a few migrations over the years, we migrated from Azure to AWS, we migrated workloads from normal instances to spot instances and all these migrations were done with nearly any downtime. We plan to reduce the downtime to a couple of minutes this migration and this is a real challenge. The first challenge that we will discuss today: We want to pair our Kubernetes clusters to the DCOS/Mesos clusters, while we move a workload it should be able to connect to its dependencies in the DCOS cluster. We use DCOS for our NoSQL databases like Cassandra, internal data that we want to keep internal. Pairing DCOS and Kubernetes clusters enable us to reduce downtime, enabling us to switch back if we run into issues and move faster because it reduces complexity.

## L4LB

The internal layer 4 load balancer DCOS provides is used in the majority of our workloads. When our data scientists schedule a spark driver, they connect to the spark dispatcher through the Layer 4 load balancer. Most of the DCOS frameworks use this Layer 4 load balancer as an internal service discovery tool, with Vandebron we use this layer 4 load balancer to communicate between services. In a default DCOS set up this load balancer responds on domain names like: `spark-dispatcher.marathon.l4lb.thisdcos.directory:7077`

When we ping the spark dispatcher we get the following:

```bash
PING spark-dispatcher.marathon.l4lb.thisdcos.directory (11.155.161.35) 56(84) bytes of data.
64 bytes from 11.155.161.35 (11.155.161.35): icmp_seq=1 ttl=64 time=0.024 ms
```

After some investigation we found out that this IP range is not actually on a network interface, it is a Linux kernel functionality called `IPVS`. With IPVS you can do layer 4 load balancing, you provide the target location and the location you want to respond on.

When we search for the IP from the spark dispatcher with ipvsadm, we get 3 results:

```bash
sudo ipvsadm -L -n |grep --color '11.155.161.35\|$'
TCP  11.155.161.35:80 wlc
  -> 10.2.7.146:16827             Masq    1      0          0
TCP  11.155.161.35:4040 wlc
  -> 10.2.7.146:16826             Masq    1      0          0
TCP  11.155.161.35:7077 wlc
  -> 10.2.7.146:16825             Masq    1      0          0
````

As you can see the IP `11.155.161.35` points towards `10.2.7.146`, even the ports are configured and forwarded. We can add our route with ipvsadm, to understand IPVS a bit better. For example:

```bash
sudo ipvsadm -A -t 1.2.3.4:80 -s wlc # we add the target server and assign the scheduler
sudo ipvsadm -a -r 10.2.7.146:16825 -t 1.2.3.4:80 -m # we configure the real server and target server and configure Masquerading
curl 1.2.3.4:80
{
  "action" : "ErrorResponse",
  "message" : "Missing protocol version. Please submit requests through http://[host]:[port]/v1/submissions/...",
  "serverSparkVersion" : "2.3.4"
}
```

This results in that the spark dispatcher now also is available on `1.2.3.4:80`. As mentioned before we wanted to connect our DCOS and Kubernetes clusters, getting hundreds of entries from ipvsadm and manually adding them one by one didn’t sound appealing to us. Especially if you consider that sometimes services fail and run on a different port or different host after recovery, maintaining this by hand would be a nightmare. We therefore decided to build a tool to sync IPVS entries from DCOS to Kubernetes.

## Stack

Within Vandebron we have our tech stack, we strongly believe it is good to eat your own dog food. When possible and when our use cases are similar we use the same tools as our Developers use. The parts of the stack we will be using are:

- AWS ELB in front of Traefik 1.7
- DCOS
- Kubernetes

Within our platform team, we use Golang as our scripting language. Golang gives us the ability to build binary files with all the required libraries in the binary, we don’t have to install any packages, we do not even need to install Golang on the machine the application will be running on.

In our DCOS cluster we use Traefik 1.7, this version of Traefik only forwards HTTP requests. We decided to use Traefik to expose a JSON endpoint so we can gather the IPVS information from this location.

## ipvs-server

Within our DCOS cluster we will expose the IPVS information through a JSON endpoint. We have built a tool for this to expose this information in multiple ways. In the next section, we are going to discuss some of the concepts and choices we made, we won’t deep dive into Go specifics. We have provided the entire code for this project in the examples directory of our GitHub repo:
<https://github.com/Vandebron/tech-blog>

First, let’s discuss the library we use: <https://github.com/nanobox-io/golang-lvs>. This library in its essence translates to ipvsadm commands, it helped save us time to implement this ourselves. There are some gotcha’s, such as newlines are not filtered out from the output. We solved this by cleaning up some of the data.

In the `childChan` function we create a go channel that is responsible for polling `ipvsadm` every 10 seconds and stores the result in a couple of variables we use in our HTTP endpoints. IPVS is a Linux kernel functionality and should be highly performant, we do not want to trigger kernel panics when the server gets overloaded with requests. We expect that every 10 seconds gives us accurate enough results, we can always lower this interval to ensure faster results. We also added in this function the string manipulation to ensure all the newlines were gone in the JSON output. The newline gave issues when we tried to add the IPVS scheduler entries.

```go
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
```

Next is the index handler, we set our headers correctly and print the result as we would receive through ipvsadm. The index is mainly for our platform engineers to debug and verify the output. Thanks to this overview we found much faster that there was a newline hidden in the scheduler output.

```go
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
```

The JSON endpoint is what we use in the client communicate with the server. 

```go
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
```

We ask our Developers often to implement a basic health endpoint, in DCOS we use this to see if a service needs to be restarted. In our application we enable set the statusOK in the index or in the JSON endpoint.

```go
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
```

In our logging and tracing functions we want to register the clients that are connecting, this gives us information where calls are coming from. It helps us debugging if we see weird behaviour.

```go
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
```

IPVS needs to be executed with root privileges, to ensure this is correct we get the userid and print it when starting the server.

```go
// getProcessOwner function is to see who is running the process. It needs to be a sudo / root user
func getProcessOwner() string {
   stdout, err := exec.Command("ps", "-o", "user=", "-p", strconv.Itoa(os.Getpid())).Output()
   if err != nil {
       logToErr.Printf("ERROR: -- getProcessOwner -- %v\n", err)
       os.Exit(1)
   }
   return string(stdout)
}
```

We added the init function to ensure we print results the moment the server starts up, if we would not do this it would take 10 seconds for the go channel to activate

```go
func init() {
   // Placing the Save and val in the init, else we will need to wait for channel to perform its first run
   listIpvs.Save()
   ipvsString = fmt.Sprintln(listIpvs.Services)
}
```

In the main function, we set the configurable flags, such as debugging to show error messages. It proved useful during the creation of this tool to keep track and print output. If we would print the output at every call to our logs, our Elastic cluster would get thousands of logs that add little to no value.

We configure the listen port in the flags, we can use the portIndex from DCOS to assign a random port on the host to listen on. We also provided to print the version we are running. In our versioning, we use a constant to list the application semver version, we also provide the git-commit hash.
When we begin the server we print the version information, the port we listen on and the user running the process. We then start the server process with the go channel, in setting up the go channel we ensure that when the server stops we try to gracefully stop the server within a 30-second timeframe. Since our ipvsadm timer is 10 seconds it should be able to cleanly shutdown within that period.

### Docker build

In the repository, we have included a Dockerfile and a script to build the Dockerfile. In this Dockerfile, we pass the git commit hash to the go install. This way we always get the Git Hash from our GitHub repo and we can use this information in our version output.

### DCOS service.json

In the repository, we have provided the service.json file, since it is opinionated on using Traefik you might need to change it. But in this service.json you see how we set up Traefik, the health check, and port index. Since the Mesos UCR container has fewer abstractions and has fewer limited capabilities. We can run the IPVS server inside a UCR container and get all the output as if we were running this directly as root on the host machine.

## ipvs-client

The IPVS client is the component we use in the Kubernetes environment. The client connects to the server and gets the IPVS entries from the IPVS server inside our DCOS cluster. It then adds these IPVS entries to each node in the Kubernetes cluster. You, therefore, need to run each client per Kubernetes node.

You can find the code from the IPVS client in our repository.

```go
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
```

In the httpGet function we can debug the URL and check if it is valid. Again we set the correct headers and retrieve the JSON body.

```go
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
```

In the unmarshal function we unmarshal the JSON and turn it in a slice of lvs.Service.

```go
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
```

In the addServers function we add the servers to IPVS.

```go
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
```

Like we did in the IPVS server we create a go channel to poll every 10 seconds the server endpoint. We perform this to get at a set interval the IPVS entries.

Since we run the IPVS client as a binary directly on the Kubernetes hosts we build the binary with a few parameters we pass to the go build command. The binary we build with this command we host on an internal s3 bucket, we can download this binary with systemd unit files.

```bash
GOOS=linux
GOARCH=amd64
GIT_COMMIT=$(git rev-list -1 HEAD)

export GOOS
export GOARCH
export GIT_COMMIT

env GOOS=${GOOS} GOARCH=${GOARCH} go build -v -ldflags "-X main.gitCommit=${GIT_COMMIT}" .
```

When we run the IPVS client we can verify if the IPVS routes are added by running the `ipvsadm -L -n` command.

### Unit files

Since IPVS is part of the Linux kernel it is hard to deploy this in a docker container, the capabilities are more restricted in Kubernetes. We decided to deploy the IPVS client on each host machine through a systemd unit file, the main reason was that we ran into restrictions that slowed us down and this is not a permanent solution. By adding the IPVS client on the machines alone does not make it possible for containers to use the IPVS routes. We needed to add NET_ADMIN capabilities to all containers using the l4lb loadbalancer locations and configure `hostNetworking: true` in the Kubernetes pods.

We provided a deployment.yml file that runs a Ubuntu docker container with ipvsadm only installed extra. When the pods are deployed in this deployment you can use kubectl exec to get into the pod and run the `ipvsadm -L -n` command.

## Vacancy at Vandebron

We are looking for a platform engineer in Vandebron. As you can understand this is not a typical scenario we daily run across, but it is part of the workloads that we will support when working on our platform. Within Vandebron we try to use the best technology available, when it is not available we build it. Due to this as platform engineers, we have many interesting challenges and offer engineers to support further than only a strict domain. We support all components of our entire platform, regardless if it is a Linux kernel issue like this, involves setting up and maintaining a NoSQL cluster, or helping the business with something like requesting a certificate.

If you are interested in learning more about this position, take a look at our Vacancy and get in contact with us.
<https://werkenbij.vandebron.nl/>
