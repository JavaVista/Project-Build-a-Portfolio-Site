# TECHNO-LOGIC — Javier Carrion Portfolio & Technical Blog

Modern, mobile-first software engineering portfolio and blog built with **Astro 5**, **TypeScript**, **Vanilla Modern CSS**, and **Markdown-based publishing**.

* **Live Website:** [https://techno-logic.us/](https://techno-logic.us/)
* **Hosting:** Netlify Edge (Static Site Generation)

---

## Project Evolution & Background

> **Origin:** Originally built in 2018 as a capstone project for the **Udacity Front-End Web Developer Nanodegree**, translating an initial design mockup into a responsive web page.

### 2026 Architectural Modernization
In 2026, I revisited the repository to completely rebuild and modernize the site from the ground up, reflecting modern web standards and senior engineering practices:

* **Framework Modernization:** Re-architected from legacy static HTML files into **Astro 5 (Static Site Generation)** with strict TypeScript and typed content collections.
* **Modern CSS System:** Designed a clean token system using Vanilla CSS, CSS Custom Properties, and `clamp()` fluid typography without heavy CSS frameworks.
* **Performance & Core Web Vitals:** Optimized assets with WebP compression, eager LCP prioritization, and native lazy loading for near-instant page loads.
* **Expanded Platform:** Scaled into a comprehensive developer hub featuring an engineering blog with RSS syndication, project case studies, conference speaking appearances, and an accessible, print-friendly resume.

---

## Architecture & Technology Stack

* **Core Framework:** [Astro 5 (SSG)](https://astro.build/) — Zero client-side JavaScript overhead by default.
* **Typing:** Strict TypeScript (`astro/tsconfigs/strict`).
* **Styling:** Vanilla CSS with Design Tokens (`src/styles/tokens.css` & `global.css`), CSS Grid, Flexbox, and `clamp()` fluid typography.
* **Content Collections:** Strict Zod schema validation for blog articles, engineering projects, and speaking presentations.
* **Theming:** Fast, accessible light/dark theme switch with zero flash of unstyled content (FOUC).
* **Analytics & Privacy:** Privacy-preserving, cookieless metrics with [Umami Cloud](https://umami.is/) and zero PII collection.
* **SEO & Syndication:** XML Sitemap (`@astrojs/sitemap`), RSS Feed (`/rss.xml`), canonical URLs, and OpenGraph/Twitter social cards.
* **Static Assets:** SCRUMBLE logic puzzle game and legacy assets preserved under `public/scrumble/` and `public/assets/`.

---

## Directory Structure

```text
├── docs/
│   └── analytics.md         # Umami analytics architecture, taxonomy, & testing
├── public/
│   ├── assets/images/       # Preserved brand and project images
│   ├── scrumble/            # SCRUMBLE game landing page and legal docs
│   ├── resume.pdf           # Downloadable PDF resume
│   └── robots.txt           # Search engine indexing rules
├── src/
│   ├── content/
│   │   ├── config.ts        # Zod schemas for blog, projects, and speaking
│   │   ├── blog/            # Technical articles (.md)
│   │   ├── projects/        # Featured engineering projects (.md)
│   │   └── speaking/        # Talks, presentations, and workshops (.md)
│   ├── components/
│   │   ├── Header.astro     # Sticky glassmorphism nav with mobile drawer
│   │   ├── Footer.astro     # Semantic 2-row footer with social links
│   │   ├── Hero.astro       # Introduction with subtle laptop overlay & CTAs
│   │   ├── ProjectCard.astro# 16:9 project showcase card
│   │   ├── ArticleCard.astro# Featured and compact article cards
│   │   ├── BentoNavCard.astro # 3-column navigation cards
│   │   ├── VideoFacade.astro  # Privacy-friendly YouTube video cards
│   │   ├── ThemeToggle.astro  # Light/dark mode toggle
│   │   └── ConnectBanner.astro# Contact callout banner
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, meta tags, and theme script
│   ├── pages/
│   │   ├── index.astro      # Homepage Bento portfolio
│   │   ├── about.astro      # Detailed About Me page
│   │   ├── projects.astro   # Complete projects portfolio
│   │   ├── blog/            # Blog index and dynamic [slug].astro routes
│   │   ├── speaking.astro   # Talks, Sessionize link, and presentations
│   │   ├── resume.astro     # Interactive resume with PDF download
│   │   ├── privacy.astro    # Privacy policy & cookieless analytics notice
│   │   ├── rss.xml.ts       # RSS feed endpoint
│   │   └── 404.astro        # Custom 404 error page
│   └── styles/
│       ├── tokens.css       # Design tokens (colors, radii, spacing, fonts)
│       └── global.css       # Resets, bento grid classes, and utilities
├── astro.config.mjs         # Astro static build & sitemap configuration
├── netlify.toml             # Netlify deployment configuration
└── tsconfig.json            # Strict TypeScript configuration
```

---

## Getting Started Locally

### Prerequisites
* **Node.js:** `v20+` or `v22+` (Tested on Node v22.13.1)
* **npm:** `v9+` or `v10+`

### Installation
```bash
npm install
```

### Development Server
Run the local dev server:
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### Type Checking & Build
Run TypeScript and Astro diagnostics:
```bash
npm run check
```

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## Authoring New Content

### Adding a Blog Post
Create a new `.md` file in `src/content/blog/` (e.g., `src/content/blog/my-new-article.md`):

```markdown
---
title: "My Article Title"
subtitle: "Optional subtitle"
description: "A short 1-2 sentence summary for search and previews."
publishDate: 2026-10-21
author: "Javier Carrion"
coverImage: "/assets/images/laptop-3190194_640.jpg"
tags: ["Angular", "TypeScript"]
draft: false
readingTime: "5 min read"
---

Your markdown content here...
```

### Adding a Featured Project
Create a new file in `src/content/projects/`:
```markdown
---
title: "Project Name"
description: "Short project summary."
featured: true
order: 4
coverImage: "/assets/images/my-project.png"
tags: ["TypeScript", "PWA"]
demoUrl: "https://demo.example.com"
repoUrl: "https://github.com/JavaVista/repo"
---
```

### Adding a Speaking Entry
Create a new file in `src/content/speaking/`:
```markdown
---
title: "Talk Title"
event: "Event or Conference Name"
date: "Month Year"
description: "Talk summary."
youtubeId: "VIDEO_ID_HERE"
channelName: "GDG Central Florida"
role: "Speaker"
featured: true
order: 4
---
```

---

## Analytics & Privacy

Techno-Logic uses **Umami Cloud** for privacy-conscious, cookieless web analytics:

* **Zero Tracking Cookies:** Fully compliant with GDPR, CCPA, and PECR without intrusive cookie banners.
* **No PII Collected:** IP addresses and personal identifiers are never stored or tracked across sites.
* **Environment Isolation:** Automatically disabled during local development (`localhost`) and Netlify deploy previews via `import.meta.env.PROD` and domain gating.
* **Declarative Custom Events:** Tracks key interactions (resume downloads, project demo clicks, outbound profile links) using native HTML `data-umami-event` attributes without client-side script overhead.
* **Documentation & Policy:**
  * Architecture, setup, and event schema: [`docs/analytics.md`](docs/analytics.md)
  * Public privacy notice: [`src/pages/privacy.astro`](src/pages/privacy.astro) (live at `/privacy/`)

---

## Deployment to Netlify

The project includes a `netlify.toml` file configured for static output:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Netlify will automatically build the site from the repository and deploy the `dist/` folder to the global edge network without affecting existing routes or SCRUMBLE URLs.

---

## Contact & Connect

* **Website:** [https://techno-logic.us/](https://techno-logic.us/)
* **LinkedIn:** [linkedin.com/in/technologic](https://www.linkedin.com/in/technologic)
* **GitHub:** [github.com/JavaVista](https://github.com/JavaVista)
* **Bluesky:** [@code-vista.bsky.social](https://bsky.app/profile/code-vista.bsky.social)
* **YouTube:** [@JavierCarrion](https://www.youtube.com/@JavierCarrion)

---

## License

Distributed under the MIT License. See [LICENSE.md](LICENSE.md) for more information.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)