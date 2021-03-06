---
title: When (Not) To Build A Reusable Component Library
description: You can find much information on why a reusable component library is a good investment, but most articles don't state the (obvious) disadvantages..
createdAt: 2020-10-05
coverImage: images/when-not-to-build-a-reusable-component-library.jpg
imageSource: https://pixabay.com/users/stevepb-282134/
tags: React, component library
author: Roy Derks
---

Two months ago, I started my journey at Vandebron. One of the projects I first dove into was their efforts to build a [component library](https://windmolen.netlify.app/). Something I was already familiar with from previous companies I worked at. 

On the internet, you can find many articles that describe why a reusable component library is a good investment for your development team(s). Although there's much to say about the advantages of component libraries, most articles don't state the (obvious) disadvantages such projects can have. In this post, I'll point out some of our learnings and why you might not need such a reusable component library.

## About component libraries

Often you find yourself repeating the same lines of code to make, for example, a button or the layout of a page look nice, especially when you're working on multiple projects. Or as a designer, you get frustrated every time the styling for a part of the application is off when a new page or project is created. Many companies have already found multiple solutions to preventing themselves from repeating styling, which is the main reason for design inconsistencies. And therefore component libraries were created.

A component library is a collection of all the styled parts (or components) of a website or multiple websites that make it easier for developers to reuse these parts. Also, designers will know for sure that all components in the component library adhere to their designs, and therefore all projects that use these components will conform. Often these libraries consist of different layers of components, for example, offering atoms, molecules, and organisms when an [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) pattern is applied. Following this pattern, developers can use the parts to style their templates and pages consistently.

Component libraries are becoming more and more popular with the rise of JavaScript libraries and frameworks like React and Vue. These technologies are very suitable for quickly building interactive components that you can use in your application, and can easily be exposed as a library on NPM or Github Packages. At Vandebron, we're building all our web and mobile applications with React and React Native and are using [Storybook](https://storybook.js.org/) to develop our components in a shared library between the engineering and design teams. This can potentially create a lot of advantages for both the developers and designers, as you can read below.

## Why you *might* need a component library

Before deciding to create a component library for your team or company, you probably want to hear about the advantages such a project can lead to. The main advantages of component libraries are briefly mentioned in the first section above and are often defined as:

- **Reducing code duplication**: With a component library, you can create components that can be shared across multiple websites or applications. This way you no longer have to duplicate styling in different projects. This can seriously decrease the amount of code duplication that you have in your projects, also reducing the number of bugs or design inconsistencies.

- **Preventing design inconsistencies**: By adding all your components and styled parts to the component library you're certain that these will look the same on all the places they're used. Not only will all the components look the same on every page, when designers make a change to one of these components they can be easily updated on all the places they're used.

- **Easier collaborating**: Component libraries make it easier for developers and designers to collaborate on applications and designs, with the component library as the common "playground". By using a tool, like Storybook, you can also make this playground visible to non-technical people and show what components are already available to use for new features.

But these advantages come at a certain price, as I'll explain in the next section.

## Disadvantages of component libraries

Besides the obvious advantages of a component library, it can also have serious disadvantages that are listed below. Whether or not these disadvantages apply to you depends on numerous things that are discussed later on in this article.

- **Increasing complexity**: With all attempts to make code more generic,  an increased level of complexity also comes to play. Reusable components should be easy to extend or customize, which requires you to think about the different use cases beforehand or force you to add many different variations to a component. With every new project that starts to use the component library, you get the risk of increasing the complexity of the library even more.

- **Time-consuming**: Every time you want to add a component to your project, you need to create that component in the component library first and import it locally in the project to test it. Therefore you need to be working in multiple projects at the same time, which requires you to set up a more time-consuming workflow. Also, when you want to use this new component from the library, you have to publish a new version of the library to make the component available.

- **Conflicting dependencies**: When you're using different versions of dependencies across your projects and the component library, you're forced to sync those with each other. Imagine having, for example, an older version of React running in one of your projects that doesn't use a recent React API that you want to use in your component library. In this scenario, you either have to update that project or are unable to keep your component library on par with the latest release of your dependency on React. Both solutions have pros and cons, and would rather be avoided.

As mentioned before, there are reasons why these disadvantages might apply to you that are the team size, the number of teams and projects at the company, development or release lifecycles, and how your source code is organized. It clearly doesn't make sense to invest in a component library if you have just a small amount of people work on just one project, or a sole team is working on all the different projects making it easier to manage code duplication or design inconsistencies.

## Considerations before starting

There are two main alternatives that you need to take into consideration before building a reusable component library, which is (obviously) using or extending an existing component library or sourcing your code in a monorepo. 

- **Existing component libraries:** Using an existing component library is an efficient way to create consistently (web) pages and reduce the amount of complexity of your own project, while also taking advantage of best practices of large open-source projects. Popular examples of component libraries are [Ant Design For React](https://ant.design/docs/react/introduce) or [various implementations](https://material.io/develop) for Google's Material Design. These libraries allow you to move quickly without having all the overhead of creating complex components but limit you to the design guidelines of these component libraries.

- **Monorepo:** If you don't want to take advantage of existing libraries or are very keen to apply your own styling to components across multiple applications without having to copy-paste the code, you can host the source code of applications in a monorepo. With the monorepo approach, you can create a shared folder that includes all the components used by your applications. This makes it possible to apply changes with a simple pull request and import these components from every project in that repository.

Besides these two alternatives, you also need to have proper design guidelines set by your designer(s). When the design guidelines are flexible and fluctuating, you could be structuring components incorrectly with the risk of doing a lot of work that will be omitted once the project evolves.

## To summarize

Component libraries are a great way to reduce the amount of code duplication in your applications, prevent design inconsistencies, and increase collaborations between developers, designers, and different teams. But this comes with increased complexity, slower development cycles, and possible code conflicts between projects. Therefore you should consider if using an existing component library or having a monorepo for your source code is a workable solution. At Vandebron we decided to build our own component library (called [windmolen](https://windmolen.netlify.app/)) and if you'd decide the same, then be sure that your design guidelines are properly structured and mature enough.
