# Aung Myo Kyaw's Portfolio Website

A modern, elegant personal portfolio website built with SvelteKit, featuring a dark zen aesthetic inspired by Japanese minimalism.

🌐 **Live Site**: [aungmyokyaw.github.io](https://aungmyokyaw.github.io)

## ✨ Features

- **🎨 Dark Zen Design**: Minimalist Japanese-inspired aesthetic with custom typography
- **📱 Fully Responsive**: Optimized for all Apple devices (iPhone, iPad, Mac)
- **🚀 Dynamic GitHub Integration**: Automatically fetches and displays public repositories
- **⚡ Lightning Fast**: Built with Svelte 5 and SvelteKit for optimal performance
- **🎯 SEO Optimized**: Complete meta tags for social media sharing (Open Graph, Twitter Cards)
- **♿ Accessible**: Semantic HTML and ARIA labels
- **🎭 PWA Ready**: Includes manifest.json and favicon support
- **📦 Zero Runtime Overhead**: Compiled to vanilla JavaScript

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) (v2.49.1)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.1.17) + Custom CSS
- **Typography**: Cormorant Garamond (serif) + JetBrains Mono (monospace)
- **Package Manager**: [Bun](https://bun.sh/)
- **Deployment**: GitHub Pages via GitHub Actions
- **Adapter**: `@sveltejs/adapter-static`

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/aungmyokyaw/aungmyokyaw.github.io.git
cd aungmyokyaw.github.io

# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
.
├── src/
│   ├── routes/
│   │   ├── +layout.svelte      # Root layout
│   │   ├── +page.svelte        # Homepage with GitHub repos
│   │   └── layout.css          # Global styles
│   ├── lib/                    # Shared components
│   └── app.html                # HTML template
├── static/
│   ├── favicon.svg             # Site favicon
│   ├── manifest.json           # PWA manifest
│   └── og-image.svg            # Social media preview image
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
└── svelte.config.js            # SvelteKit configuration
```

## 🎨 Design Features

### Color Palette

- **Ink**: `#0a0a0a` - Deep black background
- **Paper**: `#f5f2eb` - Off-white text
- **Accent**: `#c4a77d` - Warm gold for highlights
- **Subtle**: `#2a2a2a` - Dark gray for borders

### Typography

- **Display**: Cormorant Garamond (elegant serif for headings)
- **Mono**: JetBrains Mono (modern monospace for body)

### Animations

- Fade-in and slide-in transitions
- Staggered card reveals
- Subtle grain texture overlay
- Smooth hover effects

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 768px (iPhone SE to iPhone 14 Pro Max)
- **Tablet**: 769px - 1024px (iPad)
- **Desktop**: 1025px+ (Mac, large screens)
- **Safe Area**: iOS notch support with `env(safe-area-inset-*)`

## 🔧 Scripts

```bash
bun run dev          # Start dev server
bun run build        # Build for production
bun run preview      # Preview production build
bun run lint         # Lint code with ESLint & Prettier
bun run format       # Format code with Prettier
bun run check        # Type-check with svelte-check
bun run test         # Run tests
```

## 🌐 Deployment

The site automatically deploys to GitHub Pages when you push to the `master` branch via GitHub Actions.

### Manual Deployment

```bash
# Build the site
bun run build

# The static site will be in the `build/` directory
# Deploy the contents to your hosting provider
```

## 🎯 GitHub Integration

The homepage automatically fetches your public repositories using the GitHub API:

```javascript
fetch('https://api.github.com/users/aungmyokyaw/repos?sort=updated&per_page=100&type=public');
```

Displays:

- Repository name, description, and language
- Stars and forks count
- Last updated date
- Language-specific color coding

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aung Myo Kyaw**

- Website: [aungmyokyaw.com](https://www.aungmyokyaw.com/)
- GitHub: [@aungmyokyaw](https://github.com/aungmyokyaw)

---

_"Simplicity is the ultimate sophistication"_
