const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Casnode · A beautiful and simple next-generation forum software based on Go and React",
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
  trailingSlash: false,
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
      applicationId: "2775554",
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
          docId: "overview",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://forum.casbin.com/swagger/",
          label: "RESTful API",
          position: "left",
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
          href: "https://casdoor.com",
          label: "For Enterprise",
          position: "left",
        },
        {
          href: "https://casdoor.com",
          label: "Hosting Plan (SaaS)",
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
          href: "https://github.com/casbin/casnode",
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
        {
          type: "custom-casdoor",
          label: "Sign Up",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-signup casdoor-link",
        },
        {
          type: "custom-casdoor",
          label: "Login",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-login casdoor-link",
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
              label: "Overview",
              to: "/docs/overview",
            },
            {
              label: "Get Started",
              to: "/docs/installation",
            },
            {
              label: "Casnode API",
              href: "https://forum.casbin.com/swagger/",
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
              href: "https://discord.gg/qteNGWt8UY",
            },
            {
              label: "QQ Group",
              href: "https://qm.qq.com/cgi-bin/qm/qr?k=QKJ53gmeMj5BnnPsf23JasAQdmQF8yEl&jump_from=webapi",
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
              href: "https://github.com/casbin/casnode",
            },
            {
              html: `
              <iframe src="https://ghbtns.com/github-btn.html?user=casbin&repo=casnode&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casdoor</iframe>
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
          editUrl: ({locale, docPath}) => {
            if (locale === "en") {
              return `https://github.com/casnode/casnode-website/edit/master/docs/${docPath}`;
            }
            if (locale === "zh") {
              return "https://crowdin.com/project/casnode-website/zh-CN";
            }
            return `https://crowdin.com/project/casnode-website/${locale}`;
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: ({locale, blogDirPath, blogPath}) => {
            if (locale === "en") {
              return `https://github.com/casnode/casnode-website/edit/master/${blogDirPath}/${blogPath}`;
            }
            if (locale === "zh") {
              return "https://crowdin.com/project/casnode-website/zh-CN";
            }
            return `https://crowdin.com/project/casnode-website/${locale}`;
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
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-hotjar"],
  scripts: [
    {
      src: "/js/isMainland.js",
      async: true,
    },
    {
      src: "/js/tawk.js",
      async: true,
    },
  ],
};
