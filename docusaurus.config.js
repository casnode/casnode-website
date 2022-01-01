const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Casnode',
  tagline: 'Next-generation forum software based on Go and React',
  url: 'https://casnode.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'casnode', // Usually your GitHub org/user name.
  projectName: 'casnode-website', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'fr', 'de', 'ko', 'ru', 'ja'],
  },
  themeConfig: {
    algolia: {
      apiKey: '8ea21f5a34d5486e211da2d38a70bd37',
      indexName: 'casnode',
      searchParameters: {
        facetFilters: ['language:LANGUAGE'],
      },
    },
    navbar: {
      title: 'Casnode',
      logo: {
        alt: 'My Site Logo',
        src: 'img/casbin.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          label: 'Help',
          to: '/help',
          position: 'left',
        },
        {
          href: 'https://forum.casbin.com/swagger/',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://forum.casbin.com/',
          label: 'Online Demo',
          position: 'left',
        },
        {
          href: 'https://qm.qq.com/cgi-bin/qm/qr?k=QKJ53gmeMj5BnnPsf23JasAQdmQF8yEl&jump_from=webapi',
          label: 'QQ Group',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://crowdin.com/project/casnode-website',
              label: 'Help translate',
            },
          ],
        },
        {
          href: 'https://github.com/casbin/casnode',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'Get Started',
              to: '/docs/installation',
            },
            {
              label: 'Casnode API',
              href: 'https://forum.casbin.com/swagger/'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Casnode',
              href: 'https://casnode.org',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/search?q=casnode',
            },
            {
              label: 'Online Demo',
              href: 'https://forum.casbin.com/',
            },
            {
              label: "QQ Group",
              href: "https://gitter.im/casbin/Lobby",
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/casbin/casnode',
            },
            {
              html: `
              <iframe src="https://ghbtns.com/github-btn.html?user=casbin&repo=casnode&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casdoor</iframe>
              `
            },
            {
                html: `
                <head>
                <script>
                var _hmt = _hmt || [];
                </script>
                </head>
                <body>
                <script type="text/javascript">
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?493c52d30425ea40af256baccc6c2c3b";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
                  })();
                  </script>
                  </body>
                `
            },
          ],
        },
      ],
      logo: {
        alt: 'Casbin Logo',
        src: 'img/casbin_min.svg',
        href: 'https://casbin.org/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Casbin contributors.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/casnode/casnode-website/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/casnode/casnode-website/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
