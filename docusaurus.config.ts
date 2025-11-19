import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Reforma Tributária - Viggo',
  tagline: 'Documentação completa sobre IBS e CBS',
  favicon: 'img/fvcon.ico',

  future: {
    v4: true,
  },

  // 🌐 URL pública do GitHub Pages
  url: 'https://willamegabriel.github.io',
  baseUrl: '/reforma-tributaria/',

  organizationName: 'willamegabriel',
  projectName: 'reforma-tributaria',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // docs direto na raiz do site
          sidebarPath: './sidebars.ts',
          // Sem editUrl → remove o “Edit this page”
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Sem editUrl → remove link de edição no blog também
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 🖼 Social Card (igual ao projeto antigo)
    image: 'img/entrega-social-card.png',

    // 🔖 Meta tags (copiadas e adaptadas do projeto anterior)
    metadata: [
      { name: 'description', content: 'Documentação completa da Reforma Tributária (IBS e CBS)' },
      { property: 'og:title', content: 'Reforma Tributária - Viggo' },
      { property: 'og:description', content: 'Documentação completa da Reforma Tributária (IBS e CBS)' },
      { property: 'og:image', content: 'img/entrega-social-card.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Reforma Tributária - Viggo' },
      { name: 'twitter:description', content: 'Documentação completa da Reforma Tributária (IBS e CBS)' },
      { name: 'twitter:image', content: 'img/entrega-social-card.png' },
    ],

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Reforma Tributária',
      logo: {
        alt: 'Logo Reforma Tributária',
        src: 'img/icntitle.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        }
      ],
    },

    // 🌐 Footer atualizado igual ao projeto antigo
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/viggosistemas?igsh=MXNnaTd6cjlqaGR1cQ==',
            },
            {
              label: 'Site Viggo',
              href: 'https://viggo.digital/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Viggo Sistemas.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
