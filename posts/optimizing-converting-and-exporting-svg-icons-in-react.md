---
title: Optimizing, Converting And Exporting SVG Icons In React
description: If you've ever build a component library, you probably dealt with optimizing and converting icons before. With SVGO and SVGR you can do this at scale.
createdAt: 2020-12-10
coverImage: images/optimizing-converting-and-exporting-svg-icons-in-react.jpg
tags: React, component library
author: Roy Derks
---

At Vandebron we're maintaining a component library called [Windmolen](https://windmolen.netlify.app/) (Dutch for "wind turbine"). And if you've ever built a component library, you probably dealt with optimizing and converting icons before. With SVGO and SVGR you can do this at scale, without compromising the quality or size of your icons.

## The problem

The web is full of icons, and often these icons are rendered from SVG files to ensure you can increase (or decrease) the size of the icons depending on the use case. Designers often create these icons from design tools like Adobe Photoshop or Sketch. Although these icons might look pretty, exporting a SVG out of these tools is often difficult as [this article](https://medium.com/sketch-app-sources/the-best-way-to-export-an-svg-from-sketch-dd8c66bb6ef2) explains. Also, added lot of code in the form of metadata is added to the SVG file. Let's have a look at what a typical SVG file exported out of Sketch looks like:

```svg
<!-- something.svg -->
<?xml version="1.0" encoding="UTF-8"?>
<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 46 (44423) - http://www.bohemiancoding.com/sketch -->
    <title>last</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="last" transform="translate(2.000000, 0.000000)" fill-rule="nonzero" fill="#666666">
            <polygon id="Fill-2" points="6.6902923 9.6812703 9.3700469 7.0005052 6.6902923 4.3187297 2.37257308 0 0 2.37358354 4.3177192 6.6902923 4.6279322 7.0005052 4.3177192 7.3107182 0 11.6274269 2.37257308 14"></polygon>
        </g>
    </g>
</svg>
```

The SVG file above holds a lot of information about Sketch, such as the `title` of the icon and a `desc`ription. Next to that, there's a lot of elements that could be combined into one element to reduce the file size.

## Optimizing SVGs

What's cool about SVG files is that you can optimize and minify them, without affecting what the SVG looks like. This is something you can try out yourself using the website [SVGOMG](https://jakearchibald.github.io/svgomg/), which is powered by the library SVGO that you'll learn more about later.


You can optimize the SVG file above by following these steps:

1. Go to [https://jakearchibald.github.io/svgomg/](https://jakearchibald.github.io/svgomg/)
2. Click on `Paste markup` an paste the SVG code that you exported from Sketch (a.k.a. the SVG file above)
3. You will see the icon rendered, now you have to either click at the `Copy as a text` or `Download` button to get the optimized SVG file

With these simple steps you've optimized the SVG from over 450 bytes, which is already small, to 173 bytes (a decrease of over 62%!). If you'd open this file in the editor of your choice, you can see a lot of the useless (meta)data from the original file has been deleted. Also, the different elements of the SVG are combined in a single `path` that renders the icon:

```svg
<!-- something.svg -->
<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.69 9.681l2.68-2.68-2.68-2.682L4.373 0 2 2.374 6.318 6.69l.31.31-.31.31L2 11.628 4.373 14z" fill-rule="nonzero" fill="#666"/>
</svg>
```

This SVG can be even further optimized by checking the "Prefer viewbox to width/height" in SVGOMG, but let's save that for later when we use SVGO instead.

## Using SVGO

By using SVGOMG you've already experienced what power [SVGO](https://github.com/svg/svgo) has, as SVGOMG is described by its creators as *" SVGO's Missing GUI, aiming to expose the majority if not all the configuration options of SVGO"*. Instead of using the GUI, you can also use SVGO directly from the command line as a CLI-tool or as a Node.js module. For the sake of this article, we'll be using it solely as CLI.

SVGO can be installed globally on your machine, or locally in your project, from npm by running:

```bash
npm i -g svgo

# Yarn equivalent
yarn add -G svgo
```

After doing this you can run `svgo` from the command line and optimize any SVG file instantly. But, you don't want to do this manually on your machine anytime you're adding a new icon to a project (or component library). Therefore, you can also add SVGO to a project locally and add a script to the `package.json` file to optimize all SVGs in a certain directory.

```json
// package.json
{
 // ...
 "scripts": {
     // ...
    "optimize-svg": "svgo --config=.svgo.yml -f ./src/assets/icons"
 }
}
```

The `optimize-svg` script will run SVGO in the directory `src/assets/icons` and optimize all the SVG files based on the settings in `.svgo.yml`. This file is where you can configure the rules for SVGO, as the previously mentioned "Prefer viewbox to width/height":

```yaml
# .svgo.yml
plugins:
  - removeViewBox: false
  - removeDimensions: true # this deletes width/height and adds it to the viewBox
  - removeDoctype: true
  - removeComments: true
  - removeMetadata: true
  - removeEditorsNSData: true
  - cleanupIDs: true
  - removeRasterImages: true
  - removeUselessDefs: true
  - removeUnknownsAndDefaults: true
  - removeUselessStrokeAndFill: true
  - removeHiddenElems: true
  - removeEmptyText: true
  - removeEmptyAttrs: true
  - removeEmptyContainers: true
  - removeUnusedNS: true
  - removeDesc: true
  - prefixIds: false
  - prefixClassNames: false
```
   
From the rules above you'll get an idea about all the redundant and useless lines of code that might be present in your SVG files. But luckily, they will all get removed when you run the command `npm run optimize-svg`.

## Converting SVGs with SVGR

You've now learned how to optimize your SVG files, and are probably wondering how to use these files in a React application. To render an SVG in React, you need to either configure Webpack in a way that it knows how to deal with SVG files or use a library called SVGR. By default, any application created with `create-react-app` can render SVG files as a component, using the following `import` statement:

```jsx
// MyComponent.jsx
import React from 'react';
import { ReactComponent as MySVG } from './something.svg';

const MyComponent = () => {
  return (
    <div>
      <MySVG />
    </div>
  );
}
export default MyComponent;
```

More information about how this is done can be found in [this article](https://blog.logrocket.com/how-to-use-svgs-in-react/), but let me show you how to solve that with SVGR.

With [SVGR](https://react-svgr.com/) you can convert SVG files into React Components, either by adding it to Webpack or by using the SVGR CLI or Node.js module. In the same way, as we optimized the SVGs from the command line with SVGO, we can also convert these icons from the command line with SVGR:

```json
// package.json
{
 // ...
 "scripts": {
     // ...
    "optimize-svg": "svgo --config=.svgo.yml -f ./src/assets/icons",
    "convert-svg": "svgr -d ./src/components/Icon ./src/assets/icons"
 }
}
```

Whenever you run the command `npm run convert-svg` a JSX file will be created for every SVG file that's present in the directory `src/assets/icons`. These JSX files can be found in the directory `src/components/Icons`, together with an `index.js` file that exports all these components from this directory.

An example of such a converted SVG file is:


```jsx
// MySVG.jsx
import * as React from 'react';

const MySVG = (props) => (
  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M8.69 9.681l2.68-2.68-2.68-2.682L4.373 0 2 2.374 6.318 6.69l.31.31-.31.31L2 11.628 4.373 14z" fill-rule="nonzero" fill="#666"/>
  </svg>
);

export default MySVG;
```

And, as we now have a directory filled with converted SVGs these can be imported into any React component like this:

```jsx
// MyComponent.jsx
import React from 'react';
import MySVG from './MySVG.jsx';

const MyComponent = () => {
  return (
    <div>
      <MySVG />
    </div>
  );
}
export default MyComponent;
```

Often SVGR is used alongside SVGO, so you can even automatically optimize all SVGS that will be converted by SVGR. This is done by adding the flag `--no-svgo true` and point it towards your SVGO configuration file:

```json
// package.json
{
 // ...
 "scripts": {
     // ...
    "convert-svg": "svgr -d ./src/components/Icon ./src/assets/icons --no-svgo true --svgo-config .svgo.yml"
 }
}
```

By running the `convert-svg` script you both optimize and convert all the SVG files in `src/assets/icons` to React components based on optimized SVGs.

## Reading further

The examples in this post are the tip of the metaphorical iceberg on what problems SVGO and SVGR can solve. There are many other features you can enable, such as using them as Node.js modules or enabling TypeScript support. To read further make sure to have a look at the SVGR [playground](https://react-svgr.com/playground/) or [documentation](https://react-svgr.com/docs/getting-started/).
