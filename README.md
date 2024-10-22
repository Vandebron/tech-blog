## Vandebron.tech blog

Leading the renewable energy transition with innovative solutions. This blog demonstrates some highlights of tech activities that we would like to share with you!


### Getting started

You need to clone this repository on your local machine, and move into the cloned directory after doing so. In that directory you need to run:

```bash
yarn
```

Or the npm equivalent `npm i`

To install the project's dependencies. After installing, you can run the project locally with the command:

```bash
yarn dev
```

Or the npm equivalent `npm run dev`.

### Contributing

To create a post yourself you can create a new `.md` file in the directory `public/posts`, the filename will be the slug that's used to navigate to the article on the website. Image assets can be added to the directory `public/images`.
Once you're done with your post, it seems like you also need to run `node ./generate-rss.mjs` to update the RSS feed.

### Testing

Before you deploy please run your post in your local env to check if the appearance is good enough to be published.
In order to run the blog locally just do the following:

```bash
yarn next build
yarn start
```
NB: Remember to rebuild everytime you change something on your post

### Publishing

When your post is ready and reviewed, you can merge it with master and simply:

```bash
yarn deploy
```

Your post will appear at [https://vandebron.tech/](https://vandebron.tech/).

### Questions?

Any questions regarding the vandebron.tech blog can be asked on Slack.
