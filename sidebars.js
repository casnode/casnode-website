/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      link: {type: "generated-index"},
      items: [
        "overview",
        "main-features",
        "installation",
        "bt-panel",
        "docker",
        "migration",
      ],
    },
    {
      type: "category",
      label: "API reference",
      link: {type: "generated-index"},
      items: [
        "api-overview",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      link: {type: "generated-index"},
      items: [
        "architecture-overview",
        "main-package",
        "routers",
        "controllers",
        "server-side-rendering",
      ],
    },
    "internationalization",
  ],
};
