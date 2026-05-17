// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Open-Deck ドキュメント",
  tagline: "Open-Deckについて知りたいことはありますか？",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },
  plugins: [
    "docusaurus-plugin-image-zoom",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["ja"],
      },
    ],
  ],

  url: "https://kawa-nobu.github.io",
  baseUrl: "/Open-Deck-Wiki/",
  organizationName: "kawa-nobu",
  projectName: "Open-Deck-Wiki",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/kawa-nobu/Open-Deck-Wiki/tree/main/",
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/open-deck-social-card.png",

      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // ナビゲーションバー
      navbar: {
        title: "Open-Deck",
        logo: {
          alt: "Open-Deck ロゴ",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "ドキュメント",
          },
          {
            position: "left",
            label: "拡張機能版",
            to: "/docs/extension/overview",
          },
          {
            position: "left",
            label: "デスクトップアプリ版",
            to: "/docs/desktop/overview",
          },
          {
            type: "dropdown",
            label: "GitHub",
            position: "right",
            items: [
              {
                label: "拡張機能版",
                href: "https://github.com/kawa-nobu/Open-Deck",
              },
              {
                label: "デスクトップ版",
                href: "https://github.com/kawa-nobu/Open-Deck-Desktop",
              },
            ],
          },
        ],
      },

      // フッター
      footer: {
        style: "dark",
        links: [
          {
            title: "ドキュメント",
            items: [
              {
                label: "はじめに",
                to: "/docs",
              },
              {
                label: "インストール（拡張機能版）",
                to: "/docs/getting-started/extension-install",
              },
              {
                label: "インストール（デスクトップ版）",
                to: "/docs/getting-started/desktop-install",
              },
              {
                label: "共通機能ガイド",
                to: "/docs/category/共通機能",
              },
            ],
          },
          {
            title: "ダウンロード",
            items: [
              {
                label: "Chrome Web Store",
                href: "https://chromewebstore.google.com/detail/open-deck/gmkadaeibmhchpimnfplodelecmogdic",
              },
              {
                label: "Firefox Add-ons (AMO)",
                href: "https://addons.mozilla.org/ja/firefox/addon/open-deck/",
              },
              {
                label: "デスクトップ版 Releases",
                href: "https://github.com/kawa-nobu/Open-Deck-Desktop/releases/",
              },
            ],
          },
          {
            title: "リンク",
            items: [
              {
                label: "GitHub（拡張機能版）",
                href: "https://github.com/kawa-nobu/Open-Deck",
              },
              {
                label: "GitHub（デスクトップ版）",
                href: "https://github.com/kawa-nobu/Open-Deck-Desktop",
              },
              {
                label: "バグ報告・機能要望",
                href: "https://github.com/kawa-nobu/Open-Deck/issues",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} kawa-nobu. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "json"],
      },
      zoom: {
        selector: ".markdown img, .zoomable",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        config: {
          margin: 100,
        },
      },
    }),
};

export default config;
