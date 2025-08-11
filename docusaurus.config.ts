import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aung Myo Kyaw',
  tagline: 'Software Engineer • Solution Architect • DevOps Expert',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://aungmyokyaw.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AungMyoKyaw', // Your GitHub username
  projectName: 'meta-knowledge', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'AMK Monogram',
        src: `data:image/svg+xml,${encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" height="256" width="256" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:rgb(52, 152, 219);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(41, 128, 185);stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="20" fill="url(#grad1)"></rect>
            <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="#fff">AMK</text>
          </svg>`
        )}`,
        width: 40,
        height: 40
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge Base'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/AungMyoKyaw',
          position: 'right',
          className: 'fa-brands fa-github fa-xl',
          'aria-label': 'GitHub repository'
        },
        {
          href: 'https://linkedin.com/in/aungmyokyaw/',
          position: 'right',
          className: 'fa-brands fa-linkedin fa-xl',
          'aria-label': 'LinkedIn profile'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Aung Myo Kyaw.
        <br/>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
      `
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
      integrity:
        'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
      crossorigin: 'anonymous'
    }
  ]
};

export default config;
