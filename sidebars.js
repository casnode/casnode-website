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
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'main-features',
        'installation',
        'BTpanel',
        'Docker',
      ]
    },
    {
      type: 'category',
      label: 'API reference',
      collapsed: false,
      items: [
        'api-overview',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture-overview',
        'main-package',
        'routers',
        'controllers'
      ],
    },
        'internationalization',
  ],
};
