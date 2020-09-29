---
title: Building native images and compiling with GraalVM and sbt
description: At Vandebron we organized a two-day long Hackathon, a colleague and I took the chance to dig into the wonderful world of GraalVM.
createdAt: 2020-09-20
coverImage: /images/vandebron_thuis.jpg
tags: graalvm, scala
author: Katrin Grunert
---

At Vandebron we organized a two-day long Hackathon, a colleague and I took the chance to dig into the wonderful world of GraalVM.

I've heard of GraalVM first around two years ago, where Oleg Šelajev toured through Java User Groups in Germany and held talks about GraalVM. [Here](https://www.youtube.com/watch?v=GinNxS3OSi0) is one from 2019 (not Germany, but Spain this time).

GraalVM promises a significant speedup in compile times and as I am working with Scala which is notoriously known for its long compile times this seems interesting.
Furthermore, GraalVM provides functionality to build native executables. Meaning, an application can be run without a Java Virtual Machine.
  
Thanks to the Hackathon I took finally the time to get to know GraalVM a bit better.
With this blog post, I want to share our findings, experiences, and results, as they might be helpful for you too!

## What is GraalVM?

  
GraalVM is a high-performance JVM that supports efficient ahead-of-time (AOT) and just-in-time (JIT) compilation, but also allows non-JVM languages (e.g. Ruby, Python, C++) to run on the JVM. The ahead-of-time compilation feature is the base for creating native executable programs, meaning an application can be run independently from the JVM.
Seeing the versatile features of GraalVM it is worth looking a bit under its hood.
Actually, GraalVM is defined by three main technologies:

- the Graal compiler, a high-performance JIT-compiler that can make Java applications run faster from within the JVM
- [SubstrateVM](https://www.graalvm.org/reference-manual/native-image/SubstrateVM/), includes the necessary components to run a JVM-app as a native executable ( Garbage Collector, Thread Scheduler, ...)
- [Truffle Language Implementation Framework](https://www.graalvm.org/reference-manual/truffle-framework/), the basis for the polyglot support from GraalVM

Our motivation for trying out GraalVM was tackling the pain points of Scala, Java projects, and microservices.
During the hackathon, we were most interested in the building of native images for Scala applications.

## Project setup

The project we worked on during the Hackathon is an API that is used to apply as a developer at Vandebron.
Exposing one endpoint with which a resume and contact information can be submitted.

It is also a good project to test out GraalVM, nothing too complex but also not as simple as "Hello World".

The full setup can be found [on github](https://github.com/erewl/graalvm-scala). But I'll give here a short summary:
The project is built around the following libraries, no particular reason, simply because I like them.

- _cats_ for working with effects, such as IO
- _http4s_ for running the server
- _tapir_ for defining the endpoints
- _circe_ for JSON de/serialisation
- _pureconfig_ for reading config-files
- _logback_ for logging

The project can be run via `sbt run` and with Postman or similar a POST-request can be sent like so:

```json
POST localhost:8080/api/v1/apply

{
	"email": "my@email.de",
	"name": "My Name",
	"phoneNumber": "+310123456789",
	"applicationBase64": "VGhpcyBjb3VsZCBiZSB5b3VyIGFwcGxpY2F0aW9uIQ=="
}

Response:
"*confetti* Thanks for handing in your application, we will get back to you within the next days! *confetti*"
```

## Setup GraalVM with sbt

With this initial project setup in mind, GraalVM needs to be installed locally.

For the installation of GraalVM the [setup guide](https://www.graalvm.org/docs/getting-started-with-graalvm/#install-graalvm) can be followed.

After the installation sbt needs to know that not the regular JDK/JVM is used. This can be done with the `java-home` option on sbt bootup:
To make the path to GraalVM a bit more accessible and easy to use it can be exported as an environment variable.

```bash
export GRAAL_HOME=/Library/Java/JavaVirtualMachines/graalvm-ce-java8-20.1.0/Contents/Home
sbt -java-home $GRAALHOME
```

The path to GraalVM can vary depending on OS and installation.
We followed the basic installation for macOS.

Now sbt using GraalVM can be verified with:

```bash
sbt -java-home $GRAALHOME
scala> eval System.getProperty("java.home")
[info] ans: String = /Library/Java/JavaVirtualMachines/graalvm-ce-java8-20.1.0/Contents/Home/jre
```

That means everything running in this sbt instance is getting compiled by GraalVM. Awesome!

We didn't measure the compile-time and build time with GraalVM because in this project of this size we haven't noticed any significant difference. And some resources did a good job of benchmarking towards that matter.

In general, sbt's boot-up time is just what is taking quite some time, and also with GraalVM as an underlying JVM we didn't notice any significant speed up with that.

The next step now is to become strong and independent and learn how to run without an underlying JVM with the help of building native images.

## Building native images

GraalVM ships with the [GraalVM Updater](https://www.graalvm.org/docs/reference-manual/native-image/) (`gu`) to install the `native-image` on your machine.

```bash
GRAALHOME/bin/gu install native-image
```

[sbt-native-packager](https://sbt-native-packager.readthedocs.io/en/latest/) provides functionality to build packages efficiently (e.g. building Docker images) and added to that, it also provides support for building native images.
In order to build native images with sbt commands this plugin has to be added to the project:

```java scala
// inside project/plugins.sbt
addSbtPlugin("com.typesafe.sbt" % "sbt-native-packager" % "1.7.3")
```

And the `GraalVMNativeImagePlugin` needs to be enabled:

```java scala
// inside build.sbt
enablePlugins(GraalVMNativeImagePlugin)
```

From within sbt it should be able to autocomplete and suggest graal-commands, e.g.:

```java scala
sbt:apply-at-vdb> graalvm
graalvm-native-image:       graalvmNativeImageOptions
```

With that setup, native images are just a stone's throw away!

---

### Disclaimer

The next three sections are not a write-up but rather the main steps we had to take to make it work. This includes failing images and troubleshooting.
I want to keep this in because it might be interesting for others when they have to troubleshoot.
For the summary and happy path you can jump directly to [Summary](#summary)

---

### First try building a native image

Next up `graalvm-native-image:packageBin` can be run from within sbt. This might take a while (on our systems it took about a minute)

Some warnings start to pop up:

```
[error] warning: unknown locality of class Lde/katrin/pricetracker/server/Main$anon$exportedReader$macro$24$1;,
assuming class is not local. To remove the warning report an issue to the library or language author.
The issue is caused by Lnl/vandebron/apply-at-vdb/server/Main$anon$exportedReader$macro$24$1;
which is not following the naming convention.

[error] warning: unknown locality of class Lfs2/internal/Algebra$Done$2$;,
assuming class is not local.
To remove the warning report an issue to the library or language author.
The issue is caused by Lfs2/internal/Algebra$Done$2$;
which is not following the naming convention.
```

The library-specific warnings can be ignored for now. Ultimately it fails with:

```
Error: com.oracle.graal.pointsto.constraints.UnresolvedElementException:
Discovered unresolved type during parsing: org.slf4j.impl.StaticLoggerBinder.
To diagnose the issue you can use the --allow-incomplete-classpath option.
The missing type is then reported at run time when it is accessed the first time.
```
Actually a good hint on where to start fine-tuning the GraalVM config:
```java scala
// inside build.sbt
graalVMNativeImageOptions ++= Seq(
	"--allow-incomplete-classpath",
)
```

Some things like a `StaticLoggerBinder` only get resolved at runtime, meaning at build time the classpath needs to be allowed to be incomplete. This option allows resolution errors to be ignored at build time and only pop up during runtime.

During the build of a native image, GraalVM tries to resolve those runtime dependencies already at compile-time, as it is part of the Ahead-Of-Time-compilation process. With this flag, GraalVM knows "hey, don't worry about it now, we cross the bridge when we get there" (or something like that).

### Adding resource files

A `reload` (or restart) of sbt is needed to activate these new options. And we can try to build the native image up new.
This time the build finished successfully and the executable file `target/graalvm-native-image/apply-at-vdb` has been created!
This is an executable that can be run without a JVM:

```bash
target/graalvm-native-image/apply-at-vdb
```

But what's that? It actually cannot be started...

```bash
target/graalvm-native-image/apply-at-vdb

SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
*** An error occured! ***
Cannot convert configuration to a de.erewl.pricetracker.server.Config. Failures are:
at the root:
- Key not found: 'host'.
- Key not found: 'port'.
```

The first three lines relate to the error that occurred during the first build. It simply says that logging hasn't been set up correctly (maybe due to the absence of a `src/main/resources/logback.xml` or some other misconfiguration), triggering the default setting of not logging anything at all.
The second error states that a configuration file has not the right keys or cannot be found at all.
Looking into `src/main/resources`:

```bash
ls src/main/resources/
application.conf logback.xml
```

and peeking into `application.conf`:

```bash
cat src/main/resources/application.conf
	host = "localhost"
	port = 8080
```

Hm, so everything is actually in place. But somehow GraalVM can't find them.
It requires still some more GraalVM fine-tuning here.

By default, GraalVM doesn't include any resource/configuration-files.
The option `-H:ResourceConfigurationFiles=path/to/resource-config.json` defines a path to a JSON configuration file:
So inside the `resource-config.json` we can include our `application.conf` and our `logback.xml`.
But writing those config files can be tedious and it is difficult in larger projects to find all necessary classes that need to be included.
GraalVM provides some support with writing those files and actually does all the work. In the project's root directory a configs-folder can be created which will contain all necessary config-files.
```bash
mkdir configs
$GRAALHOME/bin/java -agentlib:native-image-agent=config-output-dir=./configs -jar target/scala-2.12/apply-at-vdb-assembly-0.1.0-SNAPSHOT.jar
```

With this command above the jar gets to run with GraalVM but adds to that the [dynamic lookups](https://www.graalvm.org/docs/Native-Image/user/CONFIGURE) are being intercepted during runtime and written to the files: `jni-config.json`, `proxy-config.json`, `reflect-config.json` and `resource-config.json`.

Those generated files can be included in the GraalVMNativeImageOptions:

```java scala
// build.sbt
graalVMNativeImageOptions ++= Seq(
	"--allow-incomplete-classpath",
	"-H:ResourceConfigurationFiles=../../configs/resource-config.json",
	"-H:ReflectionConfigurationFiles=../../configs/reflect-config.json",
	"-H:JNIConfigurationFiles=../../configs/jni-config.json",
	"-H:DynamicProxyConfigurationFiles=../../configs/proxy-config.json"
)
```

The build with those updated options should succeed and the app can be run once again: 

```bash
target/graalvm-native-image/apply-at-vdb

SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
```

Still no logging, sadly. But the server is actually running and responds to POST requests via its exposed endpoint:

```json
POST localhost:8080/api/v1/apply

{
	"email": "my@email.de",
	"name": "itsame",
	"phoneNumber": "1234567890",
	"applicationBase64": "VGhpcyBjb3VsZCBiZSB5b3VyIGFwcGxpY2F0aW9uIQ=="
}

Response:
"*confetti* Thanks for handing in your application, we will get back to you within the next days! *confetti*"
```

The next and last step will investigate why logging is not picked up by GraalVM.

### Investigating the missing logging

So first I wanted to have a look if it was an overall issue with logging.
I stepped back from using logging-framework and tried the most basic logging with the java-integrated `java.util.Logging`. GraalVM's [docs](https://www.graalvm.org/docs/Native-Image/user/LOGGING) stated that GraalVM supports any logging that depends on that.

And with that logging was working.

So it must be something with the dependencies?

For further investigation, I added the [sbt-dependency-graph](https://github.com/jrudolph/sbt-dependency-graph) plugin and checked out the dependency-tree with `sbt dependencyBrowserTree`. The library `logback` wasn't included in the dependency tree.
Which is odd, since `logback` is clearly in the library-dependencies.

```java scala
// inside build.sbt
libraryDependencies ++= Seq(
	...
	"ch.qos.logback" % "logback-classic" % "1.2.3" % Runtime,
	"ch.qos.logback" % "logback-core" % "1.2.3" % Runtime,
	...
)
```

Having a closer look, the appendix `% Runtime` on logback's dependency is present.

Not sure where this was coming from but it is most probably blindly copy-pasted from somewhere when gathering the dependencies for this project.

[sbt reference manual](https://www.scala-sbt.org/1.x/docs/Scopes.html#Scoping+by+the+configuration+axis) states that the appendix `Runtime` defines that this dependency will be only included in the runtime classpath.

So this explains probably why logging was only working when the server was run from inside sbt.

With removing this and building the native-image, `logback` appears in the dependency-tree, and logging works when the native image is executed!

This "bug" was interesting as it showed that dynamic class loading is not supported by GraalVM and classes and dependencies have to be present during compile time to make a fully functional application. 

### Building native images - Summary

A successful setup of sbt and GraalVM to build native-images requires to TODO

- install GraalVM's native-image via ...
- add sbt-native-packager to sbt
- identify the needed files via ...
- fine-tune GraalVM with the following options:
- build the native image via ...
- run the executable file without the need of java

With a working native-image it is time to dockerize.

## Building Docker images

In this section two Docker containers will be built.
One, following the "normal"-java way and the other will be using the native-image to build a Docker-container without Java.

Before getting started with native images, a regular JAR-file and Docker image for comparison can be built.

With the [sbt-assembly](https://github.com/sbt/sbt-assembly) plugin you can create JAR-files with all of its dependencies (fat JARs).
`sbt assembly` creates this `target/scala-2.12/apply-at-vdb-assembly-0.1.0-SNAPSHOT.jar` which has a size of around 42MB:

```shell
 ls -lh target/scala-2.12/apply-at-vdb-assembly-0.1.0-SNAPSHOT.jar
 target/scala-2.12/apply-at-vdb-assembly-0.1.0-SNAPSHOT.jar
```

This application can be run locally via `java -jar target/scala-2.12/apply-at-vdb-assembly-0.1.0-SNAPSHOT.jar` with the prerequisite Java is installed on that machine.

Creating the Docker image for this jar-file can be done manually, but luckily `sbt-native-package` supports building regular Docker images out of the box, only the `DockerPlugin` needs to be enabled:

```java scala
// build.sbt
enablePlugins(DockerPlugin)
```

`sbt Docker:publishLocal` creates the Docker image `apply-at-vdb`.
 
```shell
docker images | grep apply-at-vdb
apply-at-vdb 	0.1.0-SNAPSHOT 		f488d4c06f28 	555MB
```

A whopping 555MB for a server exposing one endpoint which jar-file was only 42MB. But to run this jar-file in a container, this container needs to ship with a JVM, and that's where the overhead lies.

With that Docker image and jar file as a reference, the native-image will be called into action.

GraalVM does not support cross-building, meaning an application cannot be expected to be built in a Mac environment and run in a Linux environment. It has to be built and run on the same platform. With the help of Docker, the desired built environment can be provided.
The `Dockerfile` looks as follows:
```docker
FROM oracle/graalvm-ce AS builder  
RUN gu install native-image  
RUN curl https://bintray.com/sbt/rpm/rpm > bintray-sbt-rpm.repo \  
   && mv bintray-sbt-rpm.repo /etc/yum.repos.d/ \  
   && yum install -y sbt  
COPY . /app/apply-at-vdb  
WORKDIR /app/apply-at-vdb  
RUN sbt "graalvm-native-image:packageBin"  
  
FROM alpine:latest  
COPY --from=builder /app/apply-at-vdb/target/graalvm-native-image/apply-at-vdb /app/  
CMD ./app/apply-at-vdb
```

This Dockerfile can be run with:
```shell
$ docker build -t native-apply-at-vdb .
```
It does the following:
The first docker container, as the name implies, is our builder. As a base image the official [GraalVM image](https://hub.docker.com/r/oracle/graalvm-ce) is used.
 This image needs two more things, GraalVM's native-image command and sbt, and this is what the two follow-up rows are providing.
 Once that's done, the project is copied into this container and the native image is built from within sbt.

The next steps bring the native executable into its docker container.
As a base image we use the light-weight [Alpine Linux image](https://hub.docker.com/_/alpine)  and from our builder-container we copy the native executable to this new container. The last step is that the app gets run on container startup.

`docker run -p 8080:8080 native-apply-at-vdb` starts the container and shows that everything is working just as before. 
But what about the image size? Let's have a look.
```
$ docker images | grep apply-at-vdb
native-apply-at-vdb		latest              17b559e78645		84.4MB
apply-at-vdb			0.1.0-SNAPSHOT      f488d4c06f28		555MB
```
That is impressive! We created an app that is 6.5 times smaller than our original app.

## Summary

The initial start and setup of GraalVM with sbt is pretty easy and straight forward. Getting GraalVM to compile an sbt project is nice and simple. 

This Hackathon showed us that it is difficult and requires a lot of fine-tuning to integrate GraalVM into an existing project or product. At Vandebron we work with a complex stack of technologies including Spark, Kafka, Akka which made it difficult to port the findings from this small toy service to one of our existing microservices. This made extensive troubleshooting in the Hackathon not possible.

All in all, GraalVM allows you to give up some Java overhead and create significant smaller Docker images. 
Sadly this comes at the cost of giving up dynamic linking and class loading. 
A silver lining is, that inside Scala's ecosystem this rarely a problem. Scala relies heavily on compile-time mechanisms for detecting bugs early and creating type-safe applications. (read [here](https://blog.softwaremill.com/small-fast-docker-images-using-graalvms-native-image-99c0bc92e70b) but also see e.g. [Scala's compiler phases](https://typelevel.org/scala/docs/phases.html))
