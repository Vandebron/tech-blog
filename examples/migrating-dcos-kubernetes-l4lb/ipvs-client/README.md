# IPVS client

This application is made fetch ipvs routes from an JSON endpoint, this will be then used to restore these routes on the Kubernetes side. We use it to build an ipvs loadbalancer to make Kubernetes communicate with Mesos/DCOS.

## Requirements

The requirement to get this application running are:

- ipvsadm
- ipvs kernel modules (in general most Distro's already supply these)
- sudo / root capabilities.

## Go build

We build our Golang applications with the git sha, if you do not pass this flag then the build should continue.
You can build this application with:

```bash
go build -v -ldflags "-X main.gitCommit=$(git rev-list -1 HEAD)" .
```
