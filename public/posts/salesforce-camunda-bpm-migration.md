---
title: Camunda BPM migration
description: Migration from Salesforce Flow_Runner to Camunda BPM
createdAt: 2024-09-04
coverImage: images/camunda-rising.png
tags: [salesforce, camunda, bpm, process_orchestration]
author: Andrei Karabovich
---


## Salesforce + FlowRunner golden age

Since 2015, Vandebron has been using Salesforce. At the time, Salesforce for Vandebron, was like a Swiss Army knife - versatile, multifunctional, and seemingly capable of addressing most of the business requirements. It quickly became the central hub for various operations - it became a workspace for agents, a CTI platform, a platform to send service emails and much more. Over time, Salesforce evolved beyond just a customer relationship management tool for Vandebron. It became a full-fledged platform that managed customer-related processes, such as the Signup process, Renewal process, Meter Reading process, etc. 
To support this transition, Vandebron developed a custom mechanism known as FlowRunner, which was designed to automate and execute these processes within Salesforce.
Initially, FlowRunner seemed like the perfect solution. It was tailor-made to handle the increasingly complex workflows that Vandebron needed to manage. While it successfully managed to support Vandebron’s operations for several years, this system was not without its flaws. These issues, which will be discussed in detail later, eventually led to the need for a more robust and scalable solution. But for a time, FlowRunner did its job, enabling Vandebron to leverage Salesforce far beyond its original purpose.


## Salesforce + FlowRunner solution problems


Broadly, the problems can be divided into two categories: technical and organizational.

Technical Problems: 
- Async Transactions Daily Limit. 250000 async transactions per 24 hours. For bulk processes, it is often not enough. We need to watch it carefully and adjust settings to avoid disaster.
- Number of concurrent async jobs. Up to 5 async jobs simultaneously. 
- The FlowRunner mechanism in Salesforce creates lots of data. It uses ~ 25% of our storage. Data is expensive in Salesforce. 
- The Salesforce platform is not equipped for a custom BPM solution.This makes the Vandebron Salesforce codebase too large to be used with Salesforce DX (Salesforce CI/CD product). Furthermore, it forces us to maintain a lot of custom code that is available on the market.

Organizational Problems:
- Centralization of Customer-Related Processes: With most customer-related processes embedded in Salesforce, any changes to these processes require intervention from the Salesforce team. This centralization creates a bottleneck, as all modifications, updates, and optimizations must pass through a single team, slowing down the overall pace of innovation and response.
- Domain Overlap and Knowledge Dilution: The Salesforce team at Vandebron is responsible for managing approximately 50 different processes, each belonging to various business domains. This wide scope of responsibility leads to a dilution of expertise, as the team cannot maintain deep knowledge of every process. The result is a lower overall level of understanding and efficiency, making it difficult to ensure the smooth operation and timely updates of all processes.



## Point of no return

At the beginning of 2022, Europe was hit by an unprecedented energy crisis. Gas and electricity prices skyrocketed, fluctuating unpredictably, and placing immense pressure on energy providers like Vandebron to adapt swiftly. In response, Vandebron introduced a solution designed to navigate this volatile market: the Flexible Variable Tariffs proposition.
From a technical standpoint, implementing this new offering required the execution of a relatively complex process - Flow_VariableTariff  for approximately 50% of our customer base. However, it soon became clear that the FlowRunner mechanism and Salesforce in general were not sufficient to handle the demands of this new process. The total execution time for Flow_VariableTariff was projected to be enormous, spanning over 20 days, which was far too long for a business that needed to respond rapidly to market changes.
Recognizing the urgency of the situation, we immediately sought ways to optimize the process. While we succeeded in significantly simplifying Flow_VariableTariff, these improvements alone were insufficient to meet our needs. It was at this critical juncture that we realized Salesforce and the FlowRunner were no longer adequate for Vandebron’s evolving requirements. The limitations of these tools became glaringly apparent, signaling the need for a more powerful and flexible solution to support our operations in the face of such a dynamic and challenging environment.


## Why Camunda?

Choosing the right process orchestration tool is a critical decision, especially for a company like Vandebron, where efficient workflow management is essential for operational success. To ensure we made the best choice, we began by establishing a set of criteria that the new tool needed to meet. These criteria were designed to address our current challenges and future-proof our operations. Here are some of the most crucial criteria:
- Compliance with BPMN 2.0 Standard: We prioritized tools that adhered to the BPMN 2.0  standard. This would make any future migration to another tool less painful, ensuring a smoother transition if needed.
- CI/CD Integration: The ability to seamlessly integrate the tool with Vandebron's CI/CD pipeline was crucial. This integration would allow us to automate deployments, streamline updates, and maintain a high level of consistency across our development processes.
- Support for Multiple Programming Languages: Given our diverse technology stack, we needed a tool that allowed us to implement flowstep logic in multiple programming languages, with a particular emphasis on supporting Scala, which is heavily used within our systems.
- Unit Testing: The tool had to enable us to unit-test individual steps and parts of flows. This capability was essential for ensuring the reliability and accuracy of our processes before they were deployed to production.

Our market analysis of process orchestration tools led us to evaluate five potential solutions:
- Camunda 8
- IBM Business Automation Workflow (BAW)
- Bonita
- Kogito
- Flowable


Each vendor provided us with a demo and/or a trial version of their product. During this evaluation process, we rigorously tested each tool against our criteria. Although all five options met our hard requirements, it quickly became evident that Camunda is the true leader in the market.

Several factors contributed to our decision to choose Camunda:

- SaaS Offering: Camunda's SaaS version provided us with the flexibility and scalability we needed, reducing the burden on our infrastructure and allowing us to focus on process management rather than platform maintenance.
- Comprehensive Documentation: Camunda's clear and well-organized documentation made it easier for our teams to learn and implement the tool effectively, reducing the learning curve and speeding up the integration process.
- Out-of-the-Box Connectors: Camunda offers a wide range of connectors right out of the box, enabling quick integration with various systems and services. This saved us time and effort, allowing us to implement new workflows faster.
- User-Friendly Interface: The tool's intuitive and clean UI made it accessible to both technical and non-technical users, facilitating collaboration across teams and improving overall efficiency.
- Responsive Support: Camunda's quick and helpful support was another decisive factor. Their team was readily available to assist us with any issues or questions, ensuring a smooth onboarding experience.

In the end, Camunda stood out as the optimal choice for Vandebron’s process orchestration needs, offering the perfect balance of functionality, usability, and support.

## First steps with Camunda

Before we could begin migrating our processes from Salesforce to Camunda, it was essential to establish a robust infrastructure that would allow Camunda to seamlessly integrate with the rest of Vandebron’s ecosystem, particularly Salesforce. Since Salesforce would continue to serve as the primary workspace for our agents, we needed to ensure smooth communication and data flow between the two platforms. To achieve this, we developed several key infrastructural applications:

- CamundaGateway: Camunda API (Zeebe API) operates using the gRPC protocol, which is not natively supported by Salesforce. To bridge this gap, we created the CamundaGateway, a proxy application that translates HTTP calls into a format that Zeebe API can understand. This application acts as an intermediary, enabling effective communication between Salesforce and Camunda.
- CamundaSync: Each Camunda process instance has a corresponding representation in Salesforce. To keep the status of these instances up to date across both platforms, we implemented CamundaSync. This job regularly pulls the status of process instances from Camunda and updates the relevant records in Salesforce, ensuring that agents always have access to the most current information.
- CamundaJobWorker: Not all process steps can be handled by simple connectors like the RestConnector. Some steps are more complex and require custom logic to be executed. To manage these, we developed the CamundaJobWorker service, which contains handlers for these complex process steps. This service allows us to extend Camunda’s capabilities and handle sophisticated workflow requirements efficiently.
- BPM app (React): Certain processes require input from users, particularly agents working within Salesforce. To facilitate this, we built the BPM app, which includes a set of forms necessary for running specific processes. This application ensures that agents can interact with and influence the workflow directly from their workspace, maintaining the user experience they are accustomed to.


![A schematic overview of the camunda infrastructure](../images/camunda_infrastructure.png "A schematic overview of the camunda infrastructure")

As of September 2024, we have successfully implemented the basic infrastructure needed for Camunda integration, and three customer-related processes have been migrated from Salesforce to Camunda, with several more in progress. 
It's important to highlight that the migration process involved a comprehensive analysis of the existing process, including the removal of legacy components, identification of common errors, and targeted optimization efforts. As a result, we achieved a substantial reduction in errors. Specifically, the Flow_Renewal process, which previously had a 2% failure rate, now experiences only a 0.62% dropout rate post-migration, reflecting a 69% decrease in errors.


## Future plans

By the end of the year, we aim to migrate up to 10 processes to Camunda, further reducing our reliance on Salesforce for process orchestration. In parallel, we plan to enhance our infrastructure applications—CamundaGateway, CamundaSync, CamundaJobWorker, and the BPM frontend app - to improve their performance, scalability, and ease of use. These enhancements will ensure that our systems remain robust and efficient as we expand our use of Camunda across more of Vandebron's operations.
Moving forward, We will continue to leverage Camunda's capabilities to automate and optimize more processes, ultimately driving greater efficiencies and innovations across Vandebron.