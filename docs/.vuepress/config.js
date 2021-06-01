const pkg = require("../../package.json");

module.exports = {
  title: `${pkg.name} (${pkg.version})`,
  description: pkg.description,
  dest: `www`,
  themeConfig: {
    search: false,
    nav: [
      { text: "NPM", link: "https://www.npmjs.com/package/typewriter-vue" },
      { text: "Github", link: "https://github.com/p4trykJ/typewriter-vue" },
    ],
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: `${__dirname}/../../src/`,
      },
    ],
    "demo-code",
  ],
};
