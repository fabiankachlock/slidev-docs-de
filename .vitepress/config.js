// @ts-check

const Guide = [
  {
    text: 'Warum Slidev',
    link: '/guide/why',
  },
  {
    text: 'Erste Schritte',
    link: '/guide/',
  },
  {
    text: 'Installation',
    link: '/guide/install',
  },
  {
    text: 'Markdown Syntax',
    link: '/guide/syntax',
  },
  {
    text: 'Navigation',
    link: '/guide/navigation',
  },
  {
    text: 'Animationen',
    link: '/guide/animations',
  },
  {
    text: 'Exportieren',
    link: '/guide/exporting',
  },
  {
    text: 'Präsentation aufzeichnen',
    link: '/guide/recording',
  },
  {
    text: 'Moderatoren Modus',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Editor Integrationen',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Theme = [
  {
    text: 'Theme benutzen',
    link: '/themes/use',
  },
  {
    text: 'Themen Gallerie',
    link: '/themes/gallery',
  },
  {
    text: 'Theme erstellen',
    link: '/themes/write-a-theme',
  },
]

const Translations = [
  {
    text: 'English',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: 'Individualisierung',
    link: '/custom/',
  },
  {
    text: 'Ordner Struktur',
    link: '/custom/directory-structure',
  },
  {
    text: 'Schriftarten',
    link: '/custom/fonts',
  },
  {
    text: 'Highlighters',
    link: '/custom/highlighters',
  },
  {
    text: 'Vue konfigurieren',
    link: '/custom/config-vue',
  },
  {
    text: 'Vite konfigurieren',
    link: '/custom/config-vite',
  },
  {
    text: 'Windi CSS konfigurieren',
    link: '/custom/config-windicss',
  },
  {
    text: 'Monaco konfigurieren',
    link: '/custom/config-monaco',
  },
  {
    text: 'KaTeX konfigurieren',
    link: '/custom/config-katex',
  },
  {
    text: 'Mermaid konfigurieren',
    link: '/custom/config-mermaid',
  },
  {
    text: 'Shortcuts konfigurieren',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Globaler Kontext',
    link: '/custom/vue-context',
  },
  {
    text: 'Globale Ebnen',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'Beispielprojekte',
    link: '/showcases',
  },
  {
    text: 'Gesammelte Titelbilder',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: 'Guide',
    children: Guide,
  },
  {
    text: 'Themes',
    children: Theme,
  },
  {
    text: 'Individualisierung',
    children: Customizations,
  },
  {
    text: 'Built-in',
    children: [
      {
        text: 'Komponenten',
        link: '/builtin/components',
      },
      {
        text: 'Layouts',
        link: '/builtin/layouts',
      },
    ],
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: 'Präsentationsfolien für Entwickler',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Präsentationsfolien für Entwickler' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Schlage Verbesserungen an dieser Seite vor',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:de']
      }
    },

    nav: [
      {
        text: 'Guide',
        items: Guide,
      },
      {
        text: 'Theme',
        items: Theme,
      },
      {
        text: 'Individualisieren',
        items: Customizations,
      },
      {
        text: 'Ressourcen',
        items: Resources,
      },
      {
        text: 'English',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
