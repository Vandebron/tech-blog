---
title: Howto Spin Up A Kubernetes Cluster On Your Macbook
description: It is can be useful to create a disposable Kubernetes sandbox to play with when you are exploring a new application and how it could work..
createdAt: 2021-01-25
coverImage: images/spin-up-kubernetes-on-macbook.jpg
imageSource: https://pixabay.com/it/users/mari_sparrow-13090456/
tags: Kubernetes, k8s, local
author: Marco Nicotra
---

In Vandebron we have been using distributed operating systems to host our services since the foundation of our Big Data team. 
Recently our OS of choice has declared End-Of-Life development stage, so we decided to make a step forward and get a ticket for the Kubernetes boat.

A change in the OS that is used to run your services and applications can look quite challenging and not everyone is on the same experience level.To make everyone comfortable it is a good choice to give everyone the possibility to play with the new tools and learn what can be done and how: **you need a sandbox.**

Most of our developers are provided with a Macbook and at the moment of writing there some options you can go for when deciding how to setup your playground:

- **Docker CE Kubernetes**: This is the easiest solution since there is a handy button to run your containers into a kubernetes environment.

- **Vagrant and Virtualbox**: This solution is the one that can give you more control and you can easily create a cluster the size you want, but you need to be handy with VMs, Vagrant and the other tools. It's the oldschool way to do it but, while it's a chunk your platform engineers can bite, it can be a steep and frustrating process for people that are not used to handle VMs.

- **Multipass + some bash magic glue**: Since Canonical created this tool for MacOS, creating a ubuntu VM became a breeze and you can have a single, easily manageable VM and it networking up and running in less than a minute, without having to handle disks, distros and stuff. On top of it the command line interface is straight forward and it has just the basic commands we will need, so wrapping the entire process into a bash script is a piece of cake.

I have found this super cool indepth [article](https://jyeee.medium.com/kubernetes-on-your-macos-laptop-with-multipass-k3s-and-rancher-2-4-6e9cbf013f58) from Jason Yee (kudos to you bruh) that guided me through the installation of my first single node kubernetes cluster.

The process is not that long but it involves a lot of copy/pasting and, once learned the basics, i didn't want to go under the same process more times, plus it could be interesting for me as a Platform Engineer, but it may be boring and pointless for developers who just want to have a sandbox replica of what they are working on in the remote environment.
My automator (aka do-it-once-never-do-it-again) spirt kicked in and i decided to wrap every step in a small command line tool with only 3 options:
- **install**
- **cleanup**
- **help**


### What is happening under the hood



### How to use it

All the steps will involve the use of a Terminal window
#### Installation
First thing you need to do is download [this script](https://gist.githubusercontent.com/nikotrone/50b1a5f8d137411879eb2467e689bfbe/raw/090b4b4323d96ac28d96bbb346e2e657073722e6/bronernetes) and save it in a folder on your Mac (let's assume `~/bronernetes`) by executing
```bash
    mkdir ~/bronernetes
    cd ~/bronernetes
    curl https://gist.githubusercontent.com/nikotrone/50b1a5f8d137411879eb2467e689bfbe/raw/090b4b4323d96ac28d96bbb346e2e657073722e6/bronernetes > bronernetes
    export PATH=$PATH:$(pwd)
```

Now we are have the toolset and you can confirm it works by simply running `bronernetes help`.

#### Spin up Kubernetes
Next step is to run the installation process with the command `bronernetes install`

#### Clean up
When you are done or you just want to hard reset your environment you can just type `bronernetes cleanup` and it will take care of cleaning up the VM you just used, leaving you with a pristine machine, as nothing ever happened :)

### Conclusion

Having a sandbox is very useful to play around the concepts of a new setup or service and it packs up a huge amount of positive sides. No matter what is the language or the nature of the system you are trying to replicate, it can be challenging and involve a long list of instructions or manual operations and, sometimes, even dedicated hardware. Altought with some bash glue, it is possible to automate most of those processes and the investment cost can be enormously beneficial for yourself (less work the next time you do it) and for the other people working with you (they can use the tool, comment and suggest improvements). Most of all, in the case of infrastructure, it helps raising the knowledge of "what's going on here" and document for the ones interested into taking a trip down the rabbit hole.

