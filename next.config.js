// Pass the modules you would like to see transpiled, will be solved in future versions of Next.js
// https://github.com/vercel/next.js/issues/12079
const withTM = require("next-transpile-modules")(["@vandebron/windmolen"]);
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
      defaultImageLoader: "responsive-loader",
      responsive: {
        adapter: require("responsive-loader/sharp"),
        sizes: [1200, 800, 400],
      },
    },
  ],
  withTM,
  {
    basePath: "/" 
  },
]);
