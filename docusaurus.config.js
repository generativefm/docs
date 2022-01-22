// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Generative.fm documentation',
  tagline: 'Learn & contribute to Generative.fm',
  url: 'https://docs.generative.fm',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'generativefm', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //          editUrl:
          //           'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Generative.fm documentation',
        logo: {
          alt: 'Generative.fm logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/generativefm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Code of conduct',
                to: 'docs/Contributing/code-of-conduct',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/generativefm',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/3KPnkv2UbP',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/generativefm',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/generativefm',
              },
            ],
          },
          {
            title: 'More Generative.fm',
            items: [
              {
                label: 'Play',
                href: 'https://play.generative.fm',
              },
              {
                label: 'Record',
                href: 'https://record.generative.fm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alex Bainter. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
