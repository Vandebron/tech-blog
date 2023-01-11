---
title: How Vandebron is balancing the Dutch energy grid together with OnLogic & Talos Linux
description: Our journey to find the best fitting hardware and operating system to use for our flex services
createdAt: 2023-01-11
coverImage: images/flex-wallpaper.webp
tags: iot, flexibility services, curtailment, onlogic, talos linux, kubernetes, arm64, raspberry pi
author: Sietse Bruinsma & Tim van Druenen
---

Vandebron is a Dutch green-tech energy company on a mission to accelerate the transition to 100% renewable energy, 100% of the time. As part of [our mission and strategy](https://vandebron.nl/100procentgroen), we are constantly innovating and looking for ways to optimize energy operations and reduce negative impacts when it comes to energy production.

[Our new mission: 100% renewable energy, 100% of the time](https://youtu.be/_Yf8jk4gZbI)

### The importance of curtailment and flexibility services

One area where we are currently focusing our efforts is the area of curtailment and flexibility of wind turbines, solar parks, industrial batteries and electric vehicles. [Curtailment](https://vandebron.nl/blog/curtailment-slimmer-omgaan-met-goeie-energie) refers to the practice of reducing the electricity inflow to balance the electricity grid. In other words, it involves adjusting the operation of, for example, a wind turbine in order to match the demand for electricity at any given time.

[This is often necessary](https://vandebron.nl/blog/hoe-houdt-onze-technologie-het-energienet-in-balans) because the output of renewable energy sources can vary significantly due to changes in weather conditions. If the output of these sources exceeds the demand for electricity, it can lead to an excess of electricity on the grid, which can cause stability issues. On the other hand, if the output of wind turbines is too low, it can lead to a deficit of electricity on the grid, which can cause blackouts or other disruptions. To tackle this, we look at our customer’s batteries and electric vehicles offering flexibility capabilities.

### Our journey to finding reliable, secure and energy-efficient hardware and software

To optimize these curtailment and flexibility efforts, we were in need of a gateway device that we could place at the installations of the producers on our platform. To keep it close to our mission, we preferred an ARM-based CPU for its [energy efficiency](https://www.redhat.com/en/topics/linux/ARM-vs-x86) compared to an x86-based CPU. After all, we don’t want to consume all of the produced energy to power an actively cooled NUC… 😉

While gathering our hardware requirements, we concluded there was really only one competitor. Therefore, we partnered up with OnLogic! We chose their [Factor 201 device](https://www.onlogic.com/fr201/), which boasts the ARM-based Raspberry Pi CM4 module packed in a small and beautiful orange industrial chassis. The model also enables a lot of custom configurations. For example, we are able to configure multiple (wireless) networks, add extra SSD storage or optionally mount on DIN rails.

![OnLogic Factor 201](/images/flex-onlogic-factor-201.jpg "OnLogic Factor 201")

To ensure our gateway devices are secure and agile (like us, developers, 😛) we needed them to integrate well into our existing technology landscape based on Kubernetes. After struggling for some time to harden several (lightweight) operating systems and bootstrapping lightweight Kubernetes clusters our eyes fell on a new kid in town: ‘Talos Linux, the Kubernetes Operating system’ built by [Sidero Labs](https://www.siderolabs.com/). Again our predetermined wishlist was covered (even more), and what we got is a minimal OS tailored for Kubernetes, hardened, immutable and ephemeral out-of-the-box. Can you survive even more buzzwords than that? 

Until the present day though, they have fulfilled every promise made on [their website](https://www.talos.dev/). It initially didn’t work on our ARM CM4-based device from OnLogic. But after testing a lot together with their team (thank you!) the [latest release (v1.3.0)](https://www.talos.dev/v1.3/introduction/what-is-new/#raspberry-generic-images) officially supports our ARM devices. Ready for action! Right after the stable release the first batches were shipped and installed at the installations of our producers on the platform.

Overall, Vandebron's use of OnLogic's fabricated IoT devices running Talos Linux demonstrates the potential of edge & IoT computing to drive innovation and sustainability in the renewable energy industry. By leveraging the power of these technologies combined, we are one step closer to achieving our goal of 100% renewable energy, 100% of the time. Care to join our mission? Look for [open positions](https://werkenbij.vandebron.nl/).

