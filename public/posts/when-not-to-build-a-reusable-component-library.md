# When Not To Build a Reusable Component Library

When I started my journey at Vandebron two months ago, one of the projects I was first diving into was their efforts to build a component library. On the internet you can find many articles that describe why a reusable component library is a good investment for your development team(s). Although there's much to say about the advantages of component libraries, most articles don't state the (obvious) disadvantages such projects can have. In this post I'll point out some of our learnings and why you might not need such a reusable component library.

## About component libraries
Together with the rise of popular JavaScript frontend frameworks and libraries like React and Vue, component libraries also became more and more popular. These technologies are very suitable for quickly building interactive components that you can use in your application. But if you want to use these components in multiple applications without copy-pasting the code, these applications have to exist in the same (mono)repo or you could create a component library. 

## Disadvantages of component libaries

- Monorepo
- Slower releases
- Usage of different react versions (aliases might solve this)
- Peerdependencies vs (dev)dependencies

## Why you need a component library

