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
        "introduction",
        "features",
        "installation",
        "docker",
        "configuration",
        {
          type: "link",
          label: "PDF Download",
          href: "/pdf",
        },
      ],
    },
    {
      type: "category",
      label: "Operations",
      link: {type: "generated-index"},
      items: [
        "accounts-and-sso",
        "administration",
        "email",
        "importing",
        "deployment",
        "troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Development",
      link: {type: "generated-index"},
      items: [
        "development",
        "architecture",
        "api",
      ],
    },
  ],
};
