---
title: So, back to the monolith it is then?
description: A recent Amazon article explaining how they managed to save costs by merging some of their services has lead some to question the value of microservices. What is our take?
createdAt: 2023-05-20
coverImage: images/monolith.webp
tags: dagster, cicd, ci-cd, orchestration, data pipeline, kubernetes, migration, helm, ansible
author: Sam Theisens
---


### Amazon embraces the mighty monolith

<img src="/images/step-functions.webp" alt="image alt text" style="width: 50%; float: left; padding: 5px;" />

In March 2023, Amazon published a [blog post](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90)
, detailing how they had managed to reduce the cost of their audio-video monitoring service by 90%.
The _key_ to this reduction was migrating from a distributed, microservice architecture to a _monolith_.
The blog post went viral, prompting some software industry celebrities to 
[question](https://world.hey.com/dhh/even-amazon-can-t-make-sense-of-serverless-or-microservices-59625580) the entire concept of microservices.

### What should we learn from this?

So, does this mean microservices are fundamentally flawed? Should we all migrate back to monoliths?
_No_ and _definitely no_ I would say. Instead, my takeaways from this article are:

1.  **Microservices aren't about scaling for performance.** At least not primarily. Although horizontally scalability for
computationally intensive operations _can_ be very useful or even essential in some cases, it tends to be a rare benefit. Very often, performance bottlenecks are IO bound caused by external systems beyond your control.
Nevertheless, there _are_ other compelling reasons to consider microservices: they _force_ you to communicate via contracts, _encourage_ you to organize your functionality around domains,
and _allow_ you to scale your organization. Of course, all this comes at considerable costs. There's no [free lunch 👇](#presentation).
2.  <iframe width="372" height="208" src="https://www.youtube.com/embed/RC_FHNRI8Lg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="float: right; padding: 5px;"></iframe> <b>Don't underestimate the power of a single CPU in 2023</b>. To judge whether a process is unreasonably slow or not, I tend to think of the fact that already in the 1990s, screens showed 65K pixels at any given time. Back then, multiple arithmetic calculations (additions, subtractions) could be performed for each pixel, a hundred times per second. Nowadays, your screen probably displays more than 5 Million pixels at once. So, if the amount of datapoints you are dealing with in the order of millions, you should generally be able to process them in a matter of seconds on a single machine. If you can't, you're likely doing something <i>very</i> inefficient.
3.  **Software engineering is hard**. Mistakes are made all the time, everywhere. Even at the big 4 tech companies. Kudos to Amazon 👏 for openly sharing their mistake they made so that we may all learn.
In the next section we will share one of our own experiences, not entirely different from the Amazon example.

### The 90% cost reduction case at Vandebron

#### Distributed computing
Considering that all the functionality used in the Amazon case all belongs to the same domain, it's arguably not even 
a case against improper use of microservices, but instead an example of misuse of *distributed computing*.

#### Predicting the production of electricity
For utility companies, accurately predicting both electricity consumption and production is crucial.
Failing to do so can result in blackouts or overproduction, both of which are [very costly](https://vandebron.nl/blog/hoe-houdt-onze-technologie-het-energienet-in-balans).
Vandebron is a unique utility company in that the electricity that our customers consume is produced by a [very large
amount](https://vandebron.nl/energiebronnen) of relatively small scale producers, who produce electricity using windmills or solar panels.
The large number and the weather dependent nature of these producers make it very hard to predict electricity generation accurately.

To do this, we use a machine learning model that is trained on historical production data 
and predictions from the national weather [institute](https://www.knmi.nl/). As you can imagine, this is a computationally intensive task, involving large amounts of data.
Fortunately, we have [tooling in place](https://www.vandebron.tech/blog/fueling-the-energy-transition-with-spark-part-1) that
allows us to distribute computations of a cluster of machines if the task is too large for a single machine to handle.

However, here's the catch: the fact that we _can_ distribute computations does not mean that we should. Initially it seemed that
we couldn't analyze the weather data quick enough for the estimation of our production to still be a _prediction_
rather than a _postdiction_. We decided to distribute the computation of the weather data over a cluster of machines.
This worked, but it made our software more complex and Jeff Bezos even richer than he already was.

Upon closer inspection, we found an extreme inefficiency in our code. It turned out that we were repeatedly reading the entire weather dataset
into memory, for _every_ single "pixel". After removing this performance bug, the entire analysis could _easily_ be done
on a single machine. 

### How are microservices used at Vandebron?

<a id="presentation"> </a>

At [Vandebron](https://vandebron.nl/), we jumped onto the Microservice bandwagon circa 2019. 
We had read the [literature](https://samnewman.io/books/building_microservices_2nd_edition/) and this wasn't a decision
made on a whim.
These are some of the dangers we saw and what we did to mitigate them:
 * **A stagnating architecture**: compile and unit-test time detection of breaking changes
 * **Complicated and error prone deployments**: modular CI/CD [pipelines](https://github.com/Vandebron/mpyl)
 * **Team siloization**: a single repository (AKA monorepo) for all microservices and a discussion platform for cross-domain and cross-team concerns
 * **Duplication of code**: shared in house libraries for common functionality


The following presentation to the students of [VU University, Amsterdam](https://vu.nl/) explains how we implemented
these decisions and what we learned from them.

[![Presentation about micro services to students of VU Amsterdam](/images/play_presentation.webp)](https://youtu.be/HDs-pCsEzKM)
