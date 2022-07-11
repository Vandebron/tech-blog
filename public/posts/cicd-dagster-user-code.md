---
title: Why and how of Dagster user code deployment automation
description: If you frequently deploy new Dagster repositories, you want to automate this process. However, this is not so straightforward as it may seem at first. This post explains what we did at Vandebron.
createdAt: 2022-07-08
coverImage: images/dagster-cicd.png
tags: dagster, cicd, orchestration, data pipeline, kubernetes
author: Pieter Custers
---

_If you frequently deploy new user code in Dagster, you want to automate this process. However, this is not so straightforward as you may expect. This post explains what we did at Vandebron._

Before you read on, I expect the following:
* You (plan to) host Dagster on Kubernetes and manage/automate its deployment (e.g. with Ansible and Helm)
* You _want to_ automate the deployment of new Dagster user code repositories
* You want to be able to (re)deploy the whole Dagster system and user code from scratch within a few seconds

### Why Dagster?

In short Dagster is a tool to orchestrate complex data pipelines, and it does so incredibly well. Equally true is that Dagster is a Python library to build data applications. For us, in the end, Dagster improved the development cycle for things like simple cron jobs as well as complex ML pipelines. Testing the flows locally was never so easy, for instance. And with features like [asset materialization](https://docs.dagster.io/concepts/assets/asset-materializations) and [sensors](https://docs.dagster.io/concepts/partitions-schedules-sensors/sensors), we can trigger downstream jobs based on the change of an external state that an upstream job caused, without having these jobs to know of each others existence.

However, deployment of new [user code respositories](https://docs.dagster.io/concepts/repositories-workspaces/repositories) caused some kinks in the CI/CD-cable...

### System and user code are separated

Dagster separates the system deployment - the Dagit UI server and the daemons that coordinate the runs - from the user code deployment - the actual data pipeline. In other words: the user code (gRPC) servers run in complete isolation from the system and each other. This is a great feature of which the advantages are obvious: user code repositories have their own Python environment, teams can manage these separately, and if a user code server breaks down the system is not impacted. In fact, it even doesn't require a restart when user code is updated!

In helm terms: there is 2 charts, namely the _system_: `dagster/dagster` ([values.yaml](https://github.com/dagster-io/dagster/blob/master/helm/dagster/values.yaml)), and the _user code_: `dagster/dagster-user-deployments` ([values.yaml](https://github.com/dagster-io/dagster/blob/master/helm/dagster/charts/dagster-user-deployments/values.yaml)). Note that you have to set `dagster-user-deployments.enabled: true` in the `dagster/dagster` values yaml to enable this).

![Dagster architecture. The _Company Repositories_ can be deployed separately from the _Dagit Web Server_ and _Daemon_. Source: https://docs.dagster.io/deployment/guides/kubernetes/deploying-with-helm.](images/dagster-architecture.png)

#### Or aren't they?

You might find it peculiar that in the values file of the system deployment, _you need to specify the user code servers_. That looks like this:

```
workspace:
    enabled: true
    servers:
      - host: "k8s-example-user-code-1"
        port: 3030
        name: "user-code-example"
```

**This means system and user code are not actually completely separated.**

So, if I want to add a __new__ user code repository, I need to:

1. add the user code server to the system's `values.yaml` (via a PR in the Git repo of your company's platform team, probably)
1. do a helm-upgrade of the corresponding `dagster/dagster` chart
1. add the user code repository to the user code's `values.yaml` (via that same PR)
1. do a helm-upgrade of the corresponding `dagster/dagster-user-deployments` chart

Formerly this is the process to go through. If you are fine with this, stop reading here. It's the cleanest solution anyway. But it is quite cumbersome, so...

If you are in a situation in which new repositories get added multiple times a day - for instance because you are in the middle of a migration to Dagster, or you want a staging environment for every single PR - then read on.

#### Give me more details

How it works is that [for every new repository Dagster spins up a (gRPC) server to host the user code](https://docs.dagster.io/deployment/guides/kubernetes/deploying-with-helm#user-code-deployment). The separation is clear here. But the Dagster _system_ also needs to know about these user code servers, and it does so through a workspace yaml-file. If you run Dagit locally it relies on a `workspace.yaml` file, in the cluster it relies on a ConfigMap they named `dagster-workspace-yaml`. 

This workspace-yaml is the connection between the system and the user code, and it is the reason we need to redeploy the whole system for every new respository. To my knowledge, [it is not on their roadmap to improve this, however they seem to consider it](https://github.com/dagster-io/dagster/discussions/3851).

### Our solution

_Disclaimer: what we present here is a workaround that we'll keep in place until the moment Dagster releases a version in which the Dagster user code deployment is **actually completely separated** from the system deployment. So far we did not run into any issues with this slightly hacky workaround, it works like a charm._

**Remember: the desired situation is that we do not have to edit the values yaml files (through a PR) and redeploy all of Dagster for every new respository.**

First of all, we added an extra ConfigMap in Kubernetes that contains the `values.yaml` for the `dagster/dagster-user-deployments` chart. We named it `dagster-user-deployments-values-yaml`.

Then, whenever a new respository gets added, these are the steps:
1. (a) get the `dagster-user-deployments-values-yaml` Configmap, (b) add the new repository, (c) upload the editted ConfigMap, and (d) helm-upgrade the `dagster/dagster-user-deployments` chart with it
2. (a) get the `dagster-workspace-yaml` ConfigMap, (b) add the server, and (c) upload the editted ConfigMap
3. do a rolling restart of the `dagster-dagit` and `dagster-daemon` deployment to pull the latest workspace to these services

**Refresh the workspace in the UI and there it is, your new repository!**

Notes:
* The steps above are completely automatable through your favorite CI/CD pipeline automation tool
* There is no interaction with a (platform team) Git repository.
* The process, unfortunately, still requires a restart of the system. This is unavoidable. The daemon terminates, then restarts, and it might cause a short interuption. Note that this will also happen if you add a respository "manually".
* If you want to make changes to an existing repository (no user code changes but server setting changes), you only have to do the first step (and _edit_ instead of _add_).

#### How to prevent conflicts

With many of your team members adding new Dagster repositories through an automated CI/CD pipeline, you might face the situation that 2 people try to add a new respository at around the same time. When this happens, you run into the fact that the `dagster-user-deployments-values-yaml` ConfigMap cannot be uploaded in the first step because Kubernetes demands that you provide the latest applied configuration when doing an update. If it doesn't match, the upload fails. This is perfect, we do not want to overwrite the changes of the conflicting flow that beat us by a few seconds. You can optionally build in a retry that starts over with pulling the ConfigMap again.

#### How to deploy from scratch

The above does not yet cover how we are able to deploy the Dagster system _and user code_ completely from scratch. Why do we want this? Well, for in case somebody accidently deletes the `dagster` namespace for instance. Or hell breaks loose in any other physical or non-physical form. Or when we simply want to bump the Dagster version, actually.

The key to this is that we version both the `dagster-user-deployments-values-yaml` and `dagster-workspace-yaml` as a final step to the flow described above (we do it on S3, in a versioned bucket). Whenever we redeploy Dagster (with Ansible) we pull the latest versions and use them to compile both the `values.yaml` files from it. 

#### How to clean up old repositories

The above described automation _adds_ new repository, but doesn't take care of the cleanup. The steps for removing a repo are the same for adding one. The exact implementation depends on your situation. You might want to automatically remove PR staging respositories after closing a PR. We also have a script in place that removes a repository based on a given repository name.

### Conclusion

Dagster is an incredibly powerful tool that enabled us to build complex data pipelines with much ease. Having streamlined the CI/CD pipeline for user code respositories enabled us to migrate to Dagster very quickly and saves us lots of time on a daily basis. Still we are very much looking forward to the moment Dagster releases a version which makes this article obsolete.
