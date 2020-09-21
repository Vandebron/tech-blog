// Pass the modules you would like to see transpiled, will be solved in future versions of Next.js
// https://github.com/vercel/next.js/issues/12079
const withTM = require("next-transpile-modules")(["@vandebron/windmolen"]);

module.exports = withTM();
