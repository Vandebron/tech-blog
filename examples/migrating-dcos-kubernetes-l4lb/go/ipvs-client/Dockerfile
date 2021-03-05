FROM golang:1.15.7-buster

LABEL version="0.0.1"
LABEL maintainer="Vandebron Platform team"
LABEL application="ipvs-server"

WORKDIR $GOPATH/src/ipvs-server/

ENV GOFLAGS=-mod=vendor
ENV GOOS=linux
ENV GOARCH=amd64
ARG GIT_COMMIT=0
ENV GIT_COMMIT=$GIT_COMMIT

COPY ./main.go .

RUN apt update && \
    apt install -y ipvsadm && \
    apt-get clean && \
    go get -d -v ./ && \
    go install -v -ldflags "-X main.gitCommit=${GIT_COMMIT}" ./...

ENTRYPOINT [ "ipvs-server" ]