---
title: Choosing Remix as a Server-Side Rendering (SSR) Framework
description: We had our own custom SSR framework. It was time to move on. Find out why we picked Remix over NextJS as the replacement!
createdAt: 2024-10-18
coverImage: images/remix-migration-remix-vs-nextjs.png
tags: [remix, ssr, typescript, react, nextjs, ADR]
author: John Fisher
---

## The Background

We at Vandebron have a mission to get the news out about [our good work](https://vandebron.nl/missie), and we understand that [Server Side Rendering (SSR)](https://web.dev/articles/rendering-on-the-web#server-side) can really help with that. Among other things, it provides an easy way for search engines to discover our pages, so you, our (future?!) customer, can find them more easily. That means more people choosing green energy, and ultimately, a cleaner environment!  🎉

## We rolled our own

The year was 2017, Covid was still a word that sounded more like a bird than anything else... The world was heating up and Vandebron was 4 years into its mission to bring 100% renewable energy throughout all of the Netherlands.

As far as web technologies are concerned, 4 years was ages ago. It was a time when NextJS was less than a year old, and Remix was still several years from coming out. But we needed a way to deliver that high-quality content to all of you. So, the innovators that we were, we decided to build our own SSR framework. In short, we wanted pizza, but there were no pizza shops in town... So we made our own!

It's been great but not without issue...

<table>
  <tr style="border: none;">
    <td><img src="../images/remix-migration-ugly-window-mock.png" alt="ugly-window-mock" width="500"/></td>
    <td><img src="../images/remix-migration-mocking-a-window.png" alt="remix-migration-mocking-a-window" width="500"/></td>
  </tr>
</table>



## A Short Note: Why Server Side Rendering

You might not be satisfied with the short explanation of why we picked an SSR framework in the first place. This article isn't really about that - if you're interested in more analysis on when and where to choose an SSR framework, check out these excellent articles from Splunk:
* [The User Experience (UX) Benefits of SSR](https://www.splunk.com/en_us/blog/learn/server-side-rendering-ssr.html)
* [The SEO Benefits of SSR](https://www.splunk.com/en_us/blog/learn/server-side-rendering-ssr.html)

## Decisions Made the Right Way - A Comparison

Nowadays, there are better, industry standard technologies available! I.e. pizza shops have opened nearby!! Let's find a good one. Of course, you don't want to just go to any spot. Especially if there's more than one shop in town - you'd be silly not to check which one is closest, and look at the menu. Which one has better reviews, is that one very angry customer just upset that there wasn't any anchovies in the vegan pizza shop? What were they expecting anyway?
<img src="../images/remix-migration-vegan-pizza-shop.png" alt="vegan-pizza-shop" width="600"/>

At Vandebron we're a React shop, so we limited ourselves to just SSR frameworks supporting React. The choice of one framework over another is of crucial importance, so, as part of our analysis, we built a small part of our [vandebron.nl/blog](https://vandebron.nl/blog) page twice. Two of our engineers then presented these prototypes to our Front End Guild, and this discussion fed heavily into the Architecture Decision Record that we wrote comparing the results.

\* At Vandebron, Guilds are groups of engineers from disparate teams that are interested in a single domain: i.e. Backend, Frontend, IAM and Auth, etc. 

The Background for the decision record states this:

> _"Our Frontend currently uses a custom-built, hard to maintain SSR solution, which we'd like to replace with a modern and standard library. Possible candidates are NextJS and Remix. The goal is to investigate which one suits our needs best."_

Yes, there are other options we could have considered but we wanted to stay with a tried-and-tested framework and one that was compatible with our existing React setup.
![remix-migration-adr-options-considered.png](../images/remix-migration-adr-options-considered.png)

As you can see, the comparison between the two frameworks was very similar. In the end we favoured the simple, opinionated direction of Remix over that of the more full-featured but potentially complex setup of NextJS. Even though Remix has a smaller community, we attributed this mostly to the age of the framework and not the quality  of the framework itself. Though the Positivity has gone down a bit (as listed in [the 2023 StateOfJS survey](https://2023.stateofjs.com/en-US/libraries/meta-frameworks/),) the decrease has been relatively minor and in line with most-other frameworks (notable exceptions for Astro and SvelteKit which have both seen big upticks in both Usage and Positivity)
![State of JS Positivity](../images/remix-migration-sojs-framework-positivity.png)
Finally, we noted that NextJS is tightly coupled with Vercel. At Vandebron we value platform independence and not getting tied to specific hosting providers or platforms. Remix gives us the independence we're looking for by providing a SSR framework without a potential to be tied into other solutions/platforms in the future.

Outcome
> _"Most members favoured Remix’s focus on web standards and usage of standard libraries and were put off (a little) by NextJS’s uncertainty in development direction."_

## So, How's it Going?

The migration effort is still underway but already we can report that it's going quite well - developers are excited to work on the new tech stack because it's seen as a developer-friendly platform and one of the two leading frameworks in the industry. In the words of one engineer: "Dev experience has improved massively, it's fun, it's easy to work with"
Here are some of the things we still need to work on:
- Our Docker image is quite large as it includes all the `node_modules`. We think we can clean this up a bit by using Yarn's Plug'n'Play (PnP) feature which should lead to faster image-build times and faster container startup times.
- With our custom SSR solution, we use Redux Toolkit (RTK) and RTKQuery on the server... This is of course an anti pattern on the server, since server-side logic should be stateless. The Remix framework does already tries to be smart with it's loaders, so the benefits we might have gotten from RTK aren't needed there.
- We feel the application we're migrating from is doing too much - it includes our marketing pages like the _Blog_ and _Mission_ pages we've been working on for the initial release, as well as the pages for our our signup and renewal process (become a Vandebron customer [here](https://vandebron.nl)!!!) This is a separate conversation, and ultimately one for the FE Guild, but the existing app's size and purpose is making the migration take longer than it should, and forcing us to put some routing rules in place to make sure the right parts of our old site are getting swapped out for the new.
- Previously, many of the images and PDFs we used on our website were checked directly into the repo. Part of our migration to Remix made us realize we should be using a CMS for this. We are already integrated with a CMS, we just need to be making better use of it in some cases.
- We haven't explored the Remix-specific linting rules yet. While we're confident in the existing React and TS lint rules we already have, it seems like configs like [@remix-run/eslint-config](https://www.npmjs.com/package/@remix-run/eslint-config) could be quite handy.
