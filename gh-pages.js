var ghpages = require("gh-pages");

ghpages.publish("out", { dotfiles: true }, () => console.log("success"));
