# When (Not) To Build A Reusable Component Library

Two months ago I started my journey at Vandebron and one of the projects I was first diving into were their efforts to build a component library. On the internet you can find many articles that describe why a reusable component library is a good investment for your development team(s). Although there's much to say about the advantages of component libraries, most articles don't state the (obvious) disadvantages such projects can have. In this post I'll point out some of our learnings and why you might not need such a reusable component library.

## About component libraries

Often you find yourself repeating the same lines of code to make in example a button or the layout of a page look nice, especially when you're working on multiple projects. Or as a designer you get frustrated every time the styling for a part of the application is off when a new page or project is created. Many companies have already found multiple solutions to preventing themselves from repeating styling, which is the main reason for design inconsistencies. And therefore component libaries were created.

A component library is a collection of all the styled parts (or components) of a website or multiple websites, that make it easier for developers to reuse these parts. Also, designers will know for sure that all components in the component library adhere to there designs, and therefore all projects that use these components will conform. Often these libaries consist of different layers  of components, in example offering atoms, molecules and organisms when an [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) pattern is applied. Following this pattern developers can use the parts to style their templates and pages in a consistent way.

Component libraries are becaming more and more popular with the rise of JavaScript libraries and frameworks like React and Vue. These technologies are very suitable for quickly building interactive components that you can use in your application, and can easily be exposed as a libary on NPM or Github Packages. At Vandebron we're building all our web and mobile applications with React and React Native, and are using [Storybook](https://storybook.js.org/) to develop our components in a shared library between the engineering and design teams. This can potentially create a lot of advantages to both the developers and designers, as you can read below.

## Why you *might* need a component libary

Before making the decision to create a component library for your team or company, you probably want to hear about the advantages such a project can lead to. The main advantages of component libaries are briefly mentioned in the first section above, and and are often defined as:

- **Reducing code duplication**: With a component library you can create components that can be shared across multiple websites or applications, therefore you no longer have to duplicate styling in different projects. This can seriously decrease the amount of code duplication that you have in your projects, also reducing the amount of bugs or design inconsistencies.  

- **Preventing design inconsistencies**: By adding all your components and styled parts to the component library you're certain that these will look the same on all the places they're used. Not only will all the component look the same on every page, when designers make a change to one of these components they can be easily updated on all the places they're used.

- **Easier collaborating**: Component libraries make it easier for developers and designers to collaborate on applications and designs, with the component library as the common "playground". By using a tool like Storybook you can also make this playground visible to non-technical people and show what components are already available to use for new features.

But this doesn't mean every team or company is able to make use of these advantages, as I'll explain in the next section.

## Disadvantages of component libaries

Besides the obvious advantages of a component libary, it can also have serious disadvantages that are listed below. Whether or not these disadvantages are applicable to you depend on numerous things which are discussed later on in this article.

- **Increased complexity**: 

- **Time consuming**

- **Conflicting libraries**:

As mentioned before there are reasons why these disadvantages might apply to you which are the team size, number of teams and projects at the company, development or release lifecycles, and how your source code is organized. It clearly doesn't make sense to invest in a component library if you have just a small amount of people work on just one project, or a sole team is working on all the different projects making it easier to manage code duplication or design inconsistencies.

## Considerations before starting

There are two main alternatives that you need to take into consideration before building a reusable component library, which are (obviously) using or extending an existing component libary or sourcing your code in a monorepo. 

Using an existing component library is an efficient way to create consistent (web) pages and reduce the amount of complexity of your own proect, while also taking advantage of best practices of large open source projects. Popular examples of component libraries are [Ant Design For React](https://ant.design/docs/react/introduce) or [various implementations](https://material.io/develop) for Google's Material Design. These libraries allow you to move quickly without having all the overhead of creating complex components, but limit you to the style guides of these component libraries.

If you don't want to take advantage of existing libraries or are very keen to apply your own styling to components across multiple applications without having to copy-paste the code, you can host the source code of applications in a monorepo. With the monorepo approach you can create a shared folder that includes all the components used by your applications, making it possible to apply changes with a simple pull request and import these components from every project in that monorepo.


