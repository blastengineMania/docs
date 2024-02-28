// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'blastengine開発者向けドキュメント',
  tagline: 'SDKの使い方や開発の手引き',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blastenginemania.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'blastengineMania', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ogp.png',
      navbar: {
        title: '開発者向けドキュメント',
        logo: {
          alt: 'blasterengine開発者向けドキュメント',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'ドキュメント',
          },
          {to: 'https://qiita.com/organizations/blastengine', label: 'Qiita', position: 'left'},
          {
            href: 'https://github.com/blastengineMania/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '公式情報',
            items: [
              {
                label: '公式サイト',
                to: 'https://blastengine.jp/',
              },
              {
                label: 'Getting Started',
                to: 'https://blastengine.jp/getting_started/',
              },
              {
                label: 'APIドキュメント',
                to: 'https://blastengine.jp/documents/',
              },
              {
                label: 'SDKドキュメント',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Teratail',
                href: 'https://teratail.com/tags/blastengine',
              },
              {
                label: 'connpass',
                href: 'https://blastengine.connpass.com/',
              },
              {
                label: 'X',
                href: 'https://twitter.com/blastengine',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Qiita',
                to: 'https://qiita.com/organizations/blastengine',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/blastengineMania/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} blastengine. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
