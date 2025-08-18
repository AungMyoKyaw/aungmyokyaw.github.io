> **Note:** This repository is where I keep my public notes and knowledge that I want to save and publish. It is built and published using [Docusaurus](https://docusaurus.io).

> **Live Site:** https://aungmyokyaw.github.io/

# 📚 meta-knowledge

![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC--BY--NC--SA%204.0-green?style=flat-square)

meta-knowledge is a personal knowledge base and public notes repository used to collect, organise, and publish notes, tutorials, and references.

This repository is a Docusaurus v3 site (docs + blog) and serves as the source for the static site published to GitHub Pages.

## Quick links

- Live site: https://aungmyokyaw.github.io/
- Source: this repository
- License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0

## What's in this repo

- `docs/` — documentation pages and notes (Docusaurus docs)
- `blog/` — blog posts and images
- `src/` — custom React components, pages and site styles
- `static/` — static assets shipped with the site (favicon, images)
- `docusaurus.config.ts` — site configuration
- `build/` — generated static site (output from `npm run build`)

## Quick start (local development)

# 📚 meta-knowledge

1. Install dependencies

```bash
# using npm
npm ci

# or using yarn
yarn install

# or using pnpm
pnpm install
```

2. Start local dev server

```bash
npm start
# open http://localhost:3000
```

3. Build for production

```bash
npm run build
# the static site will be output to `build/`
```

4. Preview the built site

```bash
npm run serve
# or serve the `build/` directory with any static server
```

## Build & Deploy

This repository is configured to publish the `build/` output to GitHub Pages. CI (GitHub Actions) uses Node 22 and runs `npm ci` and `npm run build` before deploying.

To deploy manually:

```bash
npm run build
npm run deploy
```

Refer to `.github/workflows/deploy.yml` for the CI configuration and Node version used in Actions.

## License

This repository (content and code) is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0).

See the `LICENSE` file for full terms.

![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green?style=flat-square)
