const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Casnode · Open-source forum with the look of Discourse, built with Go and Next.js",
  url: "https://casnode.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "casnode", // Usually your GitHub org/user name.
  projectName: "casnode-website", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "fr", "de", "ko", "ru", "ja"],
  },
  themeConfig: {
    algolia: {
      appId: "D23M79WNKM",
      apiKey: "608237dde484891d17f2c8b31f37f6d9",
      indexName: "casnode",
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hotjar: {
      applicationId: "3332322",
    },
    navbar: {
      title: "Casnode",
      logo: {
        alt: "My Site Logo",
        src: "img/casbin.svg",
      },
      items: [
        {
          type: "doc",
          docId: "introduction",
          position: "left",
          label: "Docs",
        },
        {
          type: "doc",
          docId: "api",
          position: "left",
          label: "API",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },
        {
          label: "Help",
          to: "/help",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: "<hr style=\"margin: 0.3rem 0;\">",
            },
            {
              to: "https://crowdin.com/project/casnode-website",
              label: "Help translate",
            },
          ],
        },
        {
          href: "https://github.com/casnode/casnode",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "custom-community",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
            {
              label: "Get Started",
              to: "/docs/installation",
            },
            {
              label: "Casnode API",
              to: "/docs/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/casnode",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/search?q=casnode",
            },
            {
              label: "Discord",
              href: "https://discord.gg/d8dsAWgn43",
            },
            {
              label: "QQ Group",
              href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casnode.png",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/casnode/casnode",
            },
            {
              html: `
              <iframe src="https://ghbtns.com/github-btn.html?user=casnode&repo=casnode&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casnode</iframe>
              `,
            },
            {
              html: `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?493c52d30425ea40af256baccc6c2c3b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
`,
            },
            {
              html: "<div class=\"placeholderads\"></div>",
            },
          ],
        },
      ],
      logo: {
        alt: "Casbin Logo",
        src: "img/casbin_min.svg",
        href: "/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Casbin contributors.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: ({docPath}) => {
            return `https://github.com/casnode/casnode-website/edit/master/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: ({blogDirPath, blogPath}) => {
            return `https://github.com/casnode/casnode-website/edit/master/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    "docusaurus-plugin-hotjar",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {from: "/docs/overview", to: "/docs/introduction"},
          {from: "/docs/main-features", to: "/docs/features"},
          {from: "/docs/bt-panel", to: "/docs/deployment"},
          {from: "/docs/migration", to: "/docs/importing"},
          {from: "/docs/provider", to: "/docs/accounts-and-sso"},
          {from: "/docs/api-overview", to: "/docs/api"},
          {from: "/docs/architecture-overview", to: "/docs/architecture"},
          {from: "/docs/main-package", to: "/docs/architecture"},
          {from: "/docs/routers", to: "/docs/architecture"},
          {from: "/docs/controllers", to: "/docs/architecture"},
          {from: "/docs/server-side-rendering", to: "/docs/architecture"},
          {from: "/docs/internationalization", to: "/docs/development"},
        ],
      },
    ],
  ],
  scripts: [
    {
      src: "/js/isMainland.js",
      async: true,
    },
  ],
};
