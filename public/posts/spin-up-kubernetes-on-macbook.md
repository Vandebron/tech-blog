---
title: Howto Spin Up A Kubernetes Cluster On Your Macbook
description: It is can be useful to create a disposable Kubernetes sandbox to play with when you are exploring a new application and how it could work..
createdAt: 2021-01-25
coverImage: images/spin-up-kubernetes-on-macbook.jpg
imageSource: https://pixabay.com/it/users/mari_sparrow-13090456/
tags: Kubernetes, k8s, local
author: Marco Nicotra
---

In Vandebron we have been using container clusters to host our services since the foundation of our Big Data team. 
Recently our cluster of choice has declared End-Of-Life development stage, so we decided to make a step forward and get a ticket for the Kubernetes boat.

A change in the OS that is used to run your services and applications can look quite challenging and not everyone is on the same experience level. To make everyone comfortable it is a good choice to give everyone the possibility to play with the new tools and learn what can be done and how: **you need a sandbox.**

Our developers are provided with a Macbook and at the moment of writing there some options you can go for when deciding how to setup your playground:

- **Docker CE Kubernetes**: This is the easiest solution since there is a handy button to run your containers into a kubernetes environment.

- **Vagrant and Virtualbox**: This solution is the one that can give you more control and you can easily create a cluster the size you want, but you need to be handy with VMs, the hypervisor of choice and Vagrant. It's the old school way to do it but, while it's a chunk your platform engineers can bite, it can be a steep and frustrating process for people that are not used to handle VMs.

- **Multipass + some bash magic glue**: Since Canonical created this tool for MacOS, creating an Ubuntu VM became a breeze and you can have a single, easily manageable VM with its networking up and running in less than a minute, without having to handle disks, distros and stuff. On top of it the command line interface is straight forward and it has just the basic commands we will need, so wrapping the entire process into a bash script is a piece of cake.

I have found this super cool in depth [article](https://jyeee.medium.com/kubernetes-on-your-macos-laptop-with-multipass-k3s-and-rancher-2-4-6e9cbf013f58) from Jason Yee (kudos to you bruh) that guided me through the installation of my first single node kubernetes cluster.

The process is not that long but it involves a lot of copy/pasting and, once learned the basics, i didn't want to go under the same process more times, plus it could be interesting for me as a Platform Engineer, but it may be boring and pointless for developers who just want to have a sandbox replica of what they are working on in the remote environment.
My automator (aka do-it-once-never-do-it-again) spirit kicked in and i decided to wrap every step in a small command line tool with only 3 options:
- **install**
- **cleanup**
- **help**


### What is happening under the hood

What the script does is substantially automating all the steps needed to:
1. Create a new VM using Multipass (tool released by Canonical)
2. Fetch the VM IP address and adding it to your local `/etc/hosts` file
3. Install k3s (a lightweight distribution of Kubernetes) on top of the VM
4. Install the Kubernetes command line tools on your laptop
5. Install Helm (the Kubernetes package manager) on your laptop
6. Install cert-manager (certificate manager) package on top of your k3s cluster
7. Install Rancher (a Kubernetes control plane) package on top of your k3s cluster

If you are looking for a more in-depth breakdown of the single steps you can download and inspect [the script](https://gist.githubusercontent.com/nikotrone/50b1a5f8d137411879eb2467e689bfbe/raw/090b4b4323d96ac28d96bbb346e2e657073722e6/bronernetes) (one of the many advantages of [OpenSource](https://en.wikipedia.org/wiki/Open_source) projects) or checkout and read the original [article](https://jyeee.medium.com/kubernetes-on-your-macos-laptop-with-multipass-k3s-and-rancher-2-4-6e9cbf013f58): it explains line by line what the specific commands are doing.

#### 1. Multipass VM
[Multipass](https://multipass.run/) is a tool from Canonical (the company developing and maintaining the Ubuntu Linux distribution) that leverages Hyperkit (macOS feature to handle virtualization) in order to create and handle a Virtual Machine directly on your Mac.

#### 2. Edit /etc/hosts
Once we have our VM up and running we need to make it available with an easy url that is also gonna be used to generate the SSL certificate, in our case we picked up `rancher.localdev`.
It is important to have a name setup in the beginning since this one will need to match with the certificate so we can use it programmatically.

#### 3. Install K3S
This step is pretty straightforward: just fetch a script that is publicly available on the [k3s official website](https://get.k3s.io) and feed it to your bash.
K3s is a lightweight version of kubernetes with all the needed dependencies and executebale packaged in a convenient installation script. Because of its light nature, it is often used in embedded devices that have a limited amount of resources to offer.

#### 4 & 5. Kubernetes and Helm cli
**Kubernetes cli** (`kubectl`) is used to talk and interact with your kubernetes cluster. It can be used to manage multiple clusters according to the content of your KUBECONFIG environment variable. 
The variable itself contains just a path to where your cluster configuration is stored, so you can switch from a cluster to another by simply pointing to another file that contains the configuration of another cluster.

**Helm** instead is the "package manager" of Kubernetes: you can use it to add repositories to specific `charts` which are the blueprint that contains a way to install a specific tool on your cluster.
Both of these tools have to be installed and run from your local laptop, either in the case you are managing a local VM or in the case you are interacting with a remote cluster.

#### 6 & 7. cert-manager and Rancher

**Rancher** is the control plane for our cluster: it provides a GUI and an overview of our single node cluster. It offers other goodies like management of multiple clusters, deployed on different locations like AWS Azure and GCP or even on your own hardware, plus certificate deployment and some other handy functionalities.

**cert-manager** is installed via Helm chart and it is the tool used by Rancher to generate and deploy a certificate across the entire cluster.

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

Having a sandbox is very useful to play around the concepts of a new setup or service and it packs up a huge amount of positive sides. No matter what is the language or the nature of the system you are trying to replicate, it can be challenging and involve a long list of instructions or manual operations and, sometimes, even dedicated hardware. Although with some bash glue, it is possible to automate most of those processes and the investment cost can be enormously beneficial for yourself (less work the next time you do it) and for the other people working with you (they can use the tool, comment and suggest improvements). Most of all, in the case of infrastructure, it helps raise the knowledge of "what's going on here" and documents for the ones interested in taking a trip down the rabbit hole.

