# IPVS server

This application is made to serve `ipvsadm -L -n` output in a json endpoint, this can then be picked up by a client to ingest this. We use it to build an ipvs loadbalancer to make Kubernetes communicate with Mesos/DCOS.

## Requirements

The requirements to get this application running are:

- ipvsadm
- ipvs kernel modules (in general most Distro's already supply these)
- sudo / root capabilities.

## Docker build

You can build the Dockerfile with the following command:

```bash
docker build --build-arg=GIT_COMMIT="$(git rev-list -1 HEAD)" -f "${DOCKER_FILE_LOC}" -t "${DOCKER_REPO}/${TEAM}/${APP_NAME}:${VERSION}" .
```

## Go build

We build our Golang applications with the `git sha`, if you do not pass this flag then the build should continue.
You can build this application with:

```bash
go build -v -ldflags "-X main.gitCommit=${GIT_COMMIT}" .
```
