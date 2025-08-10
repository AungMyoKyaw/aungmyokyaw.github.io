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
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AungMyoKyaw/meta-knowledge/tree/master/'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AungMyoKyaw/meta-knowledge/tree/master/',
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
      title: 'Aung Myo Kyaw',
      logo: {
        alt: 'Aung Myo Kyaw Logo',
        src: 'img/logo.svg'
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
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://linkedin.com/in/aungmyokyaw/',
          label: 'LinkedIn',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge',
          items: [
            {
              label: 'Knowledge Base',
              to: '/docs/intro'
            },
            {
              label: 'License',
              to: '/docs/license'
            }
          ]
        },
        {
          title: 'Professional',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/aungmyokyaw/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AungMyoKyaw'
            },
            {
              label: 'Portfolio',
              href: 'https://aungmyokyaw.com'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog'
            },
            {
              label: 'Contact',
              href: 'mailto:realAungMyoKyaw@duck.com'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aung Myo Kyaw. Built with Docusaurus. Content licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>.<br/><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:0.5em;"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" alt="Creative Commons BY-NC-SA 4.0 License" style="vertical-align:middle;opacity:0.8;"/></a>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
