---
title: Automate Dagster user code repository deployment
description: If you frequently deploy new Dagster repositories, you want to automate this process. However, this is not so straightforward as it may seem at first. This post explains what we did at Vandebron.
createdAt: 2022-07-08
coverImage: images/cypress-component-design-technique-for-react-applications.png
tags: dagster, cicd, orchestration, data pipeline, kubernetes
author: Pieter Custers
---

This post assumes the following:
* You (plan to) host Dagster on Kubernetes and manage its deployment with Helm
* You (plan to) automate the Dagster system deployment
* You _want to_ automate the deployment of new Dagster user code repositories
* You want to be able to spin up the whole Dagster system and user code from scratch within a few seconds

## TL;DR

If you frequently deploy new Dagster repositories, you want to automate this process. However, this is not so straightforward as it may seem at first. This post explains what we did at Vandebron.

## The problem

Dagster separates the system deployment - the Dagit UI server and the daemons that coordinate the runs - from the user code deployment - the actual data pipeline. In other words: the user code (gRPC) servers run in complete isolation from the system and each other. This is a great feature of which the advantages are obvious: user code repositories have their own Python environment, teams can manage these separately, and if a user code server breaks down the system is not impacted. In fact, it even doesn't require a restart when user code is updated!

So far, so good. But what if... 

_I want to add a __new__ user code repository?_

You need to:

1. add the user code server to the system's `values.yaml`
2. add the user code repository to the user-code's `values.yaml`
3. do a helm upgrade of the system and user-code deployment

Or in short: you need to bother your platform team. Formerly this is the process to go through. If you are fine with this, stop reading here. It's the cleanest solution anyway.

_But what if I want to do this multiple times a day?_

If you are in a situation in which new repositories get added multiple times a day - for instance because you are in the middle of a migration to Dagster, or you want a staging environment for every single PR - then read on.

### The problem in more detail

Alright, so for every new repository Dagster spins up a (gRPC) server to host the user code. The separation is clear here. But the Dagster system also needs to know about these user code servers, and it does so through a workspace yaml-file. If you run Dagit locally it relies on a `workspace.yaml` file, in the cluster it relies on a `dagster-workspace-yaml` ConfigMap. 

This workspace-yaml is the connection between the system and the user code, and it is the reason we need to redeploy the whole system for every new respository. To my knowledge, [it is not on their roadmap to improve this, however they seem to consider it](https://github.com/dagster-io/dagster/discussions/3851).

## Our solution

_Disclaimer: what we present here is a workaround that we'll keep in place until the moment Dagster releases a version in which the Dagster user code deployment is **actually completely separated** from the system deployment. So far we did not run into any issues with this slightly hacky workaround, it works like a charm._

First of all, we added an extra ConfigMap that contains the `values.yaml` for the user code deployment (`dagster-user-code-values-yaml`). The notes below the steps make clear why we need this.

Then, whenever a new respository gets added, these are the steps (that we automated through ci/cd):
1. get the `dagster-user-code-values-yaml` Configmap, add the repository, upload the editted ConfigMap, and helm-upgrade the user code deployment
2. get the `dagster-workspace-yaml` ConfigMap, add the server, and upload the editted ConfigMap
3. do a rolling restart of the `dagster-dagit` and `dagster-daemon` deployment to pull the latest workspace

Notes:
* When two new repositories get deployed at the same time, you run into the fact that the user-code ConfigMap cannot be uploaded in the first step because Kubernetes demands that you provide the _latest applied configuration_ when doing an update. If it doesn't match, the upload fails. This is perfect, we do not want to overwrite an earlier deployment. You can optionally build in a retry that starts over with pulling the ConfigMap again.
* The process, unfortunately, still requires a restart of the system. This is unavoidable. The daemon terminates, then restarts, and it might cause a short interuption. Note that this will also happen if you add a respository "manually".

### How to deploy from scratch

The above does not yet cover how we are able to deploy the Dagster system _and user code_ completely from scratch (for in case somebody accidently deletes the `dagster` namespace - it actually happened).

The key to this is that we version both the `dagster-user-code-values-yaml` and `dagster-workspace-yaml` as a final step to the flow described above. Whenever we redeploy Dagster we pull the latest versions and use them to compile both the `values.yaml` files from it.

Note that the Dagster state and run logs are saved in a Postgres database. By default Dagster manages this for you, but I'd recommend managing this yourself so it's separated from the Dagster deployment itself.

### Clean up old repositories

The steps are the same. We have a script in place that removes at least the staging environments for closed or stale PRs. The same script can delete a repository based on a given repository name.

## Conclusion

Dagster is an incredibly powerful tool that enabled us to build complex data pipelines with much ease. Having streamlined the CI/CD pipeline for user code respositories enabled us to migrate to very quickly and saves us loads of time on a daily basis. Still we are very much looking forward to the moment Dagster releases a version which makes this article obsolete.
