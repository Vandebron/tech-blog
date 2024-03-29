---
title: Creating a Self-Service Data Model
description: How we migrated to a modern data stack to enable self-servicing across the business
createdAt: 2024-02-07
coverImage: images/self_service.jpg
tags: [dbt, snowflake, lightdash, datamodel, self-service]
author: Mats Stijlaart
---

The title of this article could have also been "*Getting Rid of an Unmanageable Legacy Data Model*", but after a year-long migration project the current title does more justice to the progress made. 

#### Compiled Legacy as a Data Model

Our former data model was a series of parallel custom python jobs all covering every step of the *Extract-Transform-Load* (ETL) process from sources into report. Specific transformation got performed a numerous amount of times in multiple different jobs, daily. This made us prone to bugs, slow on development and maxing out on compute. 

The situation became so pressing that keeping alive simple reporting to the business became a daily burden on the Data Analytics team, limiting resources for advanced analytics and leveraging data sources for competitive insights.

We concluded the old set-up to be outdated and looked around for current best practices concerning data infrastructure. Trying not to reinvent the wheel and staying away from designing custom solutions that had bitten us in the past, we decided to adopt a combination of *Snowflake*, *dbt* and *Lightdash* to start forming a new data landscape.

This revamping of the set-up gave us the opportunity to start over, using the power of *dbt* to create a modular data model where you could leverage different stages of data, while creating shared definitions, a single source of truth and documentation.

#### What We Came Up With?

We went for a pretty classic *dbt* data model design, introducing 5 layers of data: staging, entity, intermediate, mart and api. Each layer serving a specific purpose.

##### Staging

With all data coming in from different sources, this is where we ensure the data all adheres to the same conventions and formatting. This introduces a nice developer experience for the next layers, by introducing consistency across different sources. It also serves as the go to place for advanced or deep dive analysis that do not get answered by the downstream layers, which could potentially spark data modelling developments.

##### Entity

After uniforming the data, we create entities that form the building blocks of the downstream layers and analyses of our business analysts. We built entities along the core aspects of our product, capturing shared definitions in data and bringing together relevant features using the *One-Big-Table* (OBT) principle. We try to refrain from long queries or extensive use of CTE's, resulting in simplistic models. These models serve our business analysts by reducing the complexity of their queries with all joins and filters taken care of, denormalizing the database structure. This has shifted the place where ad-hoc BI requests are fulfilled from the central data team to the domain business teams, applying principles of a data mesh.

##### Intermediate

With some models rising in complexity and computation, we use the intermediate layer to split this complexity and computation across multiple models. These intermediate models are rarely queried because they serve no reporting or analytical purpose. Think of incremental date spine explosions or highly complex business logic broken down into multiple models.

##### Mart

This is the main layer where we provide self-service to less technical employees within the organization, creating ready-made tables. We aggregate along date spines and dimensions to create readable models. It is where we leverage *Lightdash* metrics to create dynamic tables to provide business teams with a certain amount of freedom in terms of the granularity and dimensions they want to report on in their dashboarding. The use of entities as building blocks has aligned reporting across domain business teams, creating a single and centralized source of truth and relieving the data team from explaining distinctions. So while the dimensions can be tweaked for specific use cases, the definitions of the metrics are set in code.

##### API

With some dependencies outside of the data model, we use an API layer on top of our mart to record exposures towards different services and provide views which explicitly contain only the necessary datapoints.

![A schematic overview of the data model structure](/images/schematic_data_layers.jpg "A schematic overview of the data model structure")

#### The Process

We decided to take advantage of the chaos created by the old situation: no real single source of truth gave us the opportunity to create a truth. Investigating business teams' needs, we created data definitions in entities. We kept a pragmatic approach to these definitions, being flexible towards business teams' specific needs but also limiting the allowed complexity or number of exceptions. The new data model should answer everyone's questions, but should also be understood by everyone.

We forced ourselves to have descriptions for all data from the entity layer onwards, because only defining and describing the entities in code is not enough. We leveraged the embedded business analysts' knowledge to form the descriptions, noting that the best description is the one the user understands (because they wrote it).

With the ready-made marts in place, we decided to give away most of the dashboarding responsibility to the business teams. The embedded analysts are very apt at defining and designing their relevant insights into dashboards. The central data team only took ownership of company wide dashboards and provided support on the dashboarding where necessary.

After the adoption of the new stack, we noticed that the more technical embedded analysts were very interested in learning a new tool and language. So, we started a data model group and onboarded multiple embedded business analysts as data model developers. This has massively increased the speed of development of the data model. Primarily, because of specific business domain knowledge not needed to be transferred to the developers in the central data team first, but the knowledge holders developed models themselves. The central data team took on a different role: providing infrastructural support, improving on efficiency, monitoring costs and creating a vision and strategy for organic but structured growth.

![A schematic overview of the final self-servicing data model product](/images/schematic_data_product.jpg "A schematic overview of the final self-servicing data model product")

#### What Did We Learn?

Few key takeaways:

- Some business teams have more requirements in terms of definitions than other teams, so if other teams allow, be pragmatic and just go for the stricter requirements.
- Enabling self-service analysis means giving away control, take this into account in your data descriptions. They should be clear and concise.
- Educate users on the designed structure of the data model, explain what layer serves which purpose and what questions can be answered how and where.
- Create clear communication and support channels for the business to kickstart the adoption, you are not the only one learning a new tool.
- Data is not only for the data team, so encourage those passionate and enthusiastic analysts to co-create! (Just keep an eye on the project.) 