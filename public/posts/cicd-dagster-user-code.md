---
title: Automate Dagster repository deployment
description: If you frequently deploy new Dagster repositories, you'll discover that automating it is not so straightforward.
createdAt: 2022-07-08
coverImage: images/cypress-component-design-technique-for-react-applications.png
tags: Dagster, CICD, Orchestration
author: Pieter Custers
---

## TL;DR

If you frequently deploy new Dagster repositories, you want to automate this process. However, this is not so straightforward as it may seem at first. This post explains what we did at Vandebron.

## Outline

### Intro

Dagster is cool

But separation of core and user code not well done

They say: *teams* can work in their own repo with own requirements, but in reality every *project* might have its own requirements

Formerly the process should be: create PR in platform; build container based on user code in other repo; deploy PRs; subsequent changes: restart user code container

If you are fine with this: do it. It's curretly the most clean solution. But if you:

- Don't want analysts have to create PRs in the platfom repo and redeploy all of dagster everytime (in the end that was the point of separation)
- Create many many repo's, per project and pr env
- Want to cicd it

Then read on

### Reasoning

- No changes in deployment, no interference of platform team
- Changing parts versioned so complete redeploy can always happen (s3 not git, easier to implement)
- Fully automated cicd
- Temporary solution, hopefully!

Mention dagster prs that improve this potentially

### Steps cicd

Principle: the user code servers are mentioned in the workspace yaml, that's it. 
So we only update that configmap and trigger restarts. 
We prevent conflicts by saving user code in configmap as well.