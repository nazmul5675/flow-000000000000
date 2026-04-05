# Flow Frontend Work

A premium **frontend-only creative agency landing page** built with **React + Vite** and inspired by the Floka-style one-page design direction. The project focuses on strong editorial layout, smooth motion, reference-driven section structure, and modern interactive presentation.

**Live Demo:** [flowfrontendwork.surge.sh](https://flowfrontendwork.surge.sh)

---

## Overview

This project is a single-page agency website implementation built around:

- large editorial hero composition
- smooth scrolling and scroll-based motion
- section-by-section landing page storytelling
- reusable React components
- local asset-driven design workflow
- frontend-only delivery with no backend dependencies

The site includes sections for hero, approach, portfolio, expertise, results, logo wall, testimonials, contact, awards, team, FAQ, blog, and footer CTA.

---

## Features

- **React + Vite** application structure
- **Tailwind CSS** design system with custom colors, fonts, and radius tokens
- **GSAP + ScrollTrigger** for entrance animations and scroll-based effects
- **Lenis** smooth scrolling
- **Three.js / React Three Fiber** integration for advanced visual effects
- **Reusable section components** for scalable page structure
- **Reference-based asset mapping** through a centralized data file
- **Responsive layouts** across mobile, tablet, laptop, and desktop
- **Frontend-only contact UI** with no backend or form submission service

---

## Tech Stack

### Core
- React 18
- Vite 5
- JavaScript (ES Modules)

### Styling
- Tailwind CSS
- PostCSS
- Autoprefixer

### Motion / Interaction
- GSAP
- GSAP ScrollTrigger
- Lenis
- Framer Motion

### 3D / Media
- Three.js
- @react-three/fiber
- @react-three/drei

### Utilities
- clsx
- lucide-react

---

## Project Structure

```text
.
├── public/
│   └── assets/
│       ├── images/
│       │   ├── approach/
│       │   ├── blog/
│       │   ├── expertise/
│       │   ├── hero/
│       │   ├── portfolio/
│       │   ├── reel/
│       │   ├── results/
│       │   └── team/
│       ├── logos/
│       ├── refs/
│       └── videos/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── motion/
│   │   ├── sections/
│   │   ├── three/
│   │   └── ui/
│   ├── data/
│   │   └── assets.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## Main Sections

The current codebase is organized around these sections:

- Header
- Hero
- Intro / Approach
- Marquee Statement
- Portfolio
- Expertise
- Results
- Logo Wall
- Testimonials
- Contact
- Awards
- Team
- FAQ
- Blog
- Footer

Each section lives in `src/components/sections/` and is composed in `src/App.jsx`.

---

## Asset Strategy

This project uses a **local asset-first workflow**.

### Key idea
All production assets are served from `public/assets`, and paths are centralized in:

```text
src/data/assets.js
```

### Asset groups
- `public/assets/images/` → production images by section
- `public/assets/videos/` → video assets
- `public/assets/logos/` → SVG and logo assets
- `public/assets/refs/` → visual reference screenshots for layout matching

### Notes
- `refs/` files are intended as **design references**, not live content images
- Components should consume media paths from `src/data/assets.js` instead of hardcoding paths repeatedly

---

## Typography

This project is configured with a mixed typography system in Tailwind:

- **Inter** → UI text, paragraphs, labels, metadata, buttons
- **Funnel Display** → editorial/display headings

Configured in `tailwind.config.js`:

- `font-sans` → Inter
- `font-display` → Funnel Display

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nazmul5675/flow-000000000000.git
cd flow-000000000000
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## Available Scripts

```bash
npm run dev      # start Vite dev server
npm run build    # create production build
npm run preview  # preview production build locally
```

---

## Component Highlights

### `Header`
Sticky top navigation with scroll-aware styling.

### `HeroSection`
Large media-first hero with layered typography and floating card composition.

### `RippleVideo`
WebGL-based ripple/distortion treatment for media interactions using React Three Fiber.

### `ParticleLogoHero`
Three.js particle component intended for decorative / interactive hero visuals.

### `Reveal`
Reusable motion wrapper for section or element entrance animation.

### `CustomCursor`
Desktop-only cursor enhancement for premium interaction feel.

---

## Styling Notes

The visual system is driven by custom Tailwind extensions in `tailwind.config.js`, including:

- warm off-white background color
- near-black foreground color
- custom rounded sizes
- custom font families
- base card and button utility patterns

Global styles live in:

```text
src/styles/index.css
```

---

## Responsiveness

The layout is designed to support:

- mobile
- tablet
- laptop
- desktop

Responsive behavior is handled with Tailwind utility classes inside section components. Large editorial sections and mixed-grid areas may require section-level visual tuning as the design is refined.

---

## Deployment

The project is currently deployed on **Surge**:

**Live URL:** [flowfrontendwork.surge.sh](https://flowfrontendwork.surge.sh)

To deploy your own build:

```bash
npm run build
```

Then deploy the generated `dist/` folder with your preferred static hosting platform such as:

- Surge
- Netlify
- Vercel
- GitHub Pages

---

## Development Notes

- This is a **frontend-only** project
- No API, backend, auth, or database is included
- Contact forms are present as UI only
- Media and layout accuracy depend heavily on the local asset set and reference screenshots
- Motion should remain secondary to layout accuracy when refining the design

---

## Future Improvements

Potential next refinements:

- tighter pixel-accuracy pass against the reference screenshots
- additional responsive polishing across section breakpoints
- optimization of heavy media interactions for lower-powered devices
- improved accessibility states for interactive elements
- cleanup of experimental motion features not used in the final layout

---

## Author

Built and maintained by **Nazmul**.

GitHub: [nazmul5675](https://github.com/nazmul5675)

---


