# Einstein Tribute Website - System Architecture

> *"The important thing is not to stop questioning. Curiosity has its own reason for existing."* — Albert Einstein

A comprehensive tribute website celebrating the life, work, and legacy of Albert Einstein. Features a vintage academic aesthetic with warm parchment tones, handwritten equations, and immersive cosmos backgrounds.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Design System](#design-system)
4. [File Structure](#file-structure)
5. [Component Architecture](#component-architecture)
6. [API Design](#api-design)
7. [Database Schema](#database-schema)
8. [Interactive Visualizations](#interactive-visualizations)
9. [Performance Strategy](#performance-strategy)
10. [Security](#security)
11. [Deployment](#deployment)
12. [Testing](#testing)

---

## Overview

### Project Vision

Create an immersive, educational experience that honors Einstein's contributions to science while making complex physics concepts accessible through interactive visualizations and elegant design.

### Target Audience

- **Students** (high school, undergraduate)
- **Educators** seeking teaching resources
- **Science enthusiasts** and curious minds
- **Researchers** interested in historical context

### Core Features

| Feature | Description | Priority |
|---------|-------------|----------|
| Homepage | Hero section with animated cosmos, featured content | P0 |
| Biography | Interactive timeline of Einstein's life | P0 |
| Theories | Interactive physics visualizations | P0 |
| Quotes | Curated gallery with categorization | P1 |
| Photo Gallery | Historical images with context | P1 |
| Educational Resources | Lesson plans, worksheets, activities | P2 |

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI framework |
| Vite | 5.x | Build tool & dev server |
| TypeScript | 5.x | Type safety |
| TailwindCSS | 3.x | Utility-first styling |
| Framer Motion | 10.x | Animations |
| Three.js | 0.160.x | 3D cosmos visualizations |
| D3.js | 7.x | Data visualizations |
| React Router | 6.x | Client-side routing |
| React Query | 5.x | Server state management |
| MathJax | 3.x | Equation rendering |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20.x LTS | Runtime |
| Express | 4.x | Web framework |
| TypeScript | 5.x | Type safety |
| PostgreSQL | 15.x | Primary database |
| Redis | 7.x | Caching & sessions |
| Prisma | 5.x | ORM |
| Sharp | 0.33.x | Image processing |
| Multer | 1.x | File uploads |
| Winston | 3.x | Logging |
| Jest | 29.x | Testing |

### DevOps & Infrastructure

| Technology | Purpose |
|------------|---------|
| Docker & Docker Compose | Containerization |
| Nginx | Reverse proxy & static serving |
| GitHub Actions | CI/CD |
| Vercel / Netlify | Frontend hosting (optional) |
| Railway / Render | Backend hosting (optional) |
| Cloudflare | CDN & DDoS protection |

---

## Design System

### Color Palette

#### Primary - Parchment & Sepia

```css
:root {
  /* Parchment Base */
  --parchment-50: #FFFBF5;   /* Lightest - backgrounds */
  --parchment-100: #FFF8E7;  /* Cards, sections */
  --parchment-200: #F5E6D3;  /* Borders, dividers */
  --parchment-300: #E8D4C0;  /* Hover states */
  
  /* Sepia Tones */
  --sepia-400: #D4B896;      /* Secondary text */
  --sepia-500: #B8956A;      /* Primary accents */
  --sepia-600: #9C7B4F;      /* Active states */
  --sepia-700: #7A5C36;      /* Primary text */
  --sepia-800: #5C4328;      /* Headings */
  --sepia-900: #3D2B1F;      /* Deep emphasis */
  
  /* Ink Colors */
  --ink-primary: #2C2416;    /* Main text */
  --ink-secondary: #4A3F2A;  /* Secondary text */
  --ink-accent: #8B4513;     /* Links, CTAs */
}
```

#### Secondary - Cosmos

```css
:root {
  /* Night Sky */
  --cosmos-900: #0D1117;     /* Deep space */
  --cosmos-800: #161B22;     /* Star field bg */
  --cosmos-700: #21262D;     /* Nebula base */
  
  /* Stars & Nebulae */
  --star-white: #F0F6FC;     /* Bright stars */
  --star-gold: #FFD700;      /* Golden stars */
  --nebula-purple: #6B4C7A;  /* Nebula accents */
  --nebula-blue: #3B5998;    /* Deep nebula */
  --galaxy-pink: #B84A6B;    /* Galaxy highlights */
}
```

#### Semantic Colors

```css
:root {
  --success: #4A7C59;        /* Positive actions */
  --warning: #C4A35A;        /* Caution states */
  --error: #8B3A3A;          /* Error states */
  --info: #3B5998;           /* Informational */
}
```

### Typography

#### Font Families

```css
:root {
  /* Primary - Academic Elegance */
  --font-heading: 'Cormorant Garamond', 'Garamond', serif;
  --font-body: 'EB Garamond', 'Georgia', serif;
  
  /* Equations - LaTeX Style */
  --font-math: 'Latin Modern Math', 'Cambria Math', serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Handwritten - Annotations */
  --font-handwriting: 'Homemade Apple', 'Caveat', cursive;
}
```

#### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero | 4.5rem (72px) | 300 | 1.1 | -0.02em |
| H1 | 3rem (48px) | 400 | 1.2 | -0.01em |
| H2 | 2.25rem (36px) | 500 | 1.25 | 0 |
| H3 | 1.75rem (28px) | 500 | 1.3 | 0 |
| H4 | 1.25rem (20px) | 600 | 1.4 | 0.01em |
| Body | 1rem (16px) | 400 | 1.7 | 0 |
| Small | 0.875rem (14px) | 400 | 1.6 | 0 |
| Caption | 0.75rem (12px) | 400 | 1.5 | 0.02em |
| Equation | 1.125rem (18px) | 400 | 2.0 | 0 |

### Visual Elements

#### Paper Texture Overlay

```css
.parchment-texture {
  background-color: var(--parchment-100);
  background-image: 
    url('/textures/paper-grain.png'),
    linear-gradient(135deg, rgba(212, 184, 150, 0.1) 0%, rgba(184, 149, 106, 0.05) 100%);
  background-blend-mode: multiply;
}
```

#### Equation Motifs

```css
.equation-bg {
  position: absolute;
  font-family: var(--font-math);
  color: var(--sepia-400);
  opacity: 0.08;
  font-size: 2rem;
  user-select: none;
  pointer-events: none;
}

/* Signature equations positioned decoratively */
.equation-emc2 { content: 'E = mc²'; }
.equation-field { content: 'Gμν + Λgμν = κTμν'; }
.equation-photoelectric { content: 'E = hf - φ'; }
```

#### Starry Cosmos Background

```css
.cosmos-bg {
  background: radial-gradient(ellipse at bottom, 
    var(--cosmos-700) 0%, 
    var(--cosmos-800) 40%, 
    var(--cosmos-900) 100%);
  overflow: hidden;
}

.cosmos-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, var(--star-white), transparent),
    radial-gradient(2px 2px at 40px 70px, var(--star-gold), transparent),
    radial-gradient(1px 1px at 90px 40px, var(--star-white), transparent),
    radial-gradient(2px 2px at 160px 120px, var(--star-white), transparent);
  background-size: 200px 200px;
  animation: twinkle 4s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}
```

#### Ornamental Dividers

```css
.ornamental-divider {
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--sepia-500) 20%, 
    var(--sepia-500) 80%, 
    transparent 100%);
  position: relative;
  margin: 3rem 0;
}

.ornamental-divider::after {
  content: '✦';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: var(--sepia-600);
  font-size: 1.5rem;
  background: var(--parchment-100);
  padding: 0 1rem;
}
```

#### Vintage Frame Component

```css
.vintage-frame {
  border: 3px double var(--sepia-600);
  padding: 1rem;
  position: relative;
  background: var(--parchment-100);
  box-shadow: 
    0 4px 6px rgba(61, 43, 31, 0.1),
    inset 0 0 20px rgba(184, 149, 106, 0.1);
}

.vintage-frame::before {
  content: '';
  position: absolute;
  inset: -4px;
  border: 1px solid var(--sepia-400);
  pointer-events: none;
}

/* Corner flourishes */
.vintage-frame::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--sepia-700);
  top: 8px;
  left: 8px;
  border-right: none;
  border-bottom: none;
}
```

### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Breakpoints

```javascript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
};
```

---

## File Structure

```
einstein-tribute/
│
├── frontend/                          # React + Vite Application
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   ├── robots.txt
│   │   └── assets/
│   │       ├── images/
│   │       │   ├── hero/
│   │       │   │   ├── cosmos-bg.jpg
│   │       │   │   └── einstein-portrait-hero.png
│   │       │   ├── textures/
│   │       │   │   ├── paper-grain.png
│   │       │   │   ├── aged-paper.jpg
│   │       │   │   └── ink-splatter.png
│   │       │   ├── icons/
│   │       │   │   ├── atom-icon.svg
│   │       │   │   ├── telescope-icon.svg
│   │       │   │   └── quill-icon.svg
│   │       │   └── logos/
│   │       │       └── site-logo.svg
│   │       ├── fonts/
│   │       │   └── (webfont files)
│   │       └── audio/
│   │           └── ambient-space.mp3
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── VintageFrame/
│   │   │   │   │   ├── VintageFrame.tsx
│   │   │   │   │   ├── VintageFrame.styles.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── OrnamentalDivider/
│   │   │   │   ├── EquationBackground/
│   │   │   │   │   ├── EquationBackground.tsx
│   │   │   │   │   ├── EquationBackground.styles.ts
│   │   │   │   │   └── equations.ts (equation data)
│   │   │   │   ├── CosmosBackground/
│   │   │   │   │   ├── CosmosBackground.tsx
│   │   │   │   │   ├── StarField.tsx
│   │   │   │   │   └── NebulaEffect.tsx
│   │   │   │   ├── ScrollProgress/
│   │   │   │   ├── LoadingSpinner/
│   │   │   │   ├── ErrorBoundary/
│   │   │   │   └── Seo/
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── Header/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Navigation.tsx
│   │   │   │   │   ├── MobileMenu.tsx
│   │   │   │   │   └── Header.styles.ts
│   │   │   │   ├── Footer/
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── FooterLinks.tsx
│   │   │   │   │   ├── NewsletterSignup.tsx
│   │   │   │   │   └── SocialLinks.tsx
│   │   │   │   ├── PageLayout/
│   │   │   │   ├── PageTransition/
│   │   │   │   └── SectionWrapper/
│   │   │   │
│   │   │   ├── home/
│   │   │   │   ├── HeroSection/
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   ├── AnimatedTitle.tsx
│   │   │   │   │   └── ScrollIndicator.tsx
│   │   │   │   ├── FeaturedQuote/
│   │   │   │   ├── QuickLinks/
│   │   │   │   ├── TheoryPreview/
│   │   │   │   │   ├── TheoryPreview.tsx
│   │   │   │   │   └── TheoryCard.tsx
│   │   │   │   └── CallToAction/
│   │   │   │
│   │   │   ├── biography/
│   │   │   │   ├── BiographyHero/
│   │   │   │   ├── TimelineSection/
│   │   │   │   │   ├── TimelineSection.tsx
│   │   │   │   │   ├── TimelineNode.tsx
│   │   │   │   │   ├── TimelineConnector.tsx
│   │   │   │   │   └── TimelineContent.tsx
│   │   │   │   ├── LifeStages/
│   │   │   │   │   ├── LifeStages.tsx
│   │   │   │   │   └── StageCard.tsx
│   │   │   │   ├── PortraitGallery/
│   │   │   │   └── LegacySection/
│   │   │   │
│   │   │   ├── theories/
│   │   │   │   ├── TheoriesHero/
│   │   │   │   ├── TheoryNavigation/
│   │   │   │   ├── SpecialRelativity/
│   │   │   │   │   ├── SpecialRelativity.tsx
│   │   │   │   │   ├── TimeDilationViz.tsx
│   │   │   │   │   ├── LengthContractionViz.tsx
│   │   │   │   │   └── Emc2Calculator.tsx
│   │   │   │   ├── GeneralRelativity/
│   │   │   │   │   ├── GeneralRelativity.tsx
│   │   │   │   │   ├── SpacetimeCurvature.tsx
│   │   │   │   │   ├── GravityWellViz.tsx
│   │   │   │   │   └── LightBendingViz.tsx
│   │   │   │   ├── PhotoelectricEffect/
│   │   │   │   │   ├── PhotoelectricEffect.tsx
│   │   │   │   │   └── PhotonInteraction.tsx
│   │   │   │   ├── BrownianMotion/
│   │   │   │   └── UnifiedField/
│   │   │   │
│   │   │   ├── quotes/
│   │   │   │   ├── QuotesHero/
│   │   │   │   ├── QuoteGallery/
│   │   │   │   │   ├── QuoteGallery.tsx
│   │   │   │   │   ├── QuoteCard.tsx
│   │   │   │   │   └── QuoteGrid.tsx
│   │   │   │   ├── QuoteCarousel/
│   │   │   │   ├── QuoteFilter/
│   │   │   │   ├── QuoteSearch/
│   │   │   │   └── QuoteSubmission/
│   │   │   │
│   │   │   ├── gallery/
│   │   │   │   ├── GalleryHero/
│   │   │   │   ├── PhotoGrid/
│   │   │   │   ├── LightboxModal/
│   │   │   │   ├── ImageDetail/
│   │   │   │   └── GalleryFilter/
│   │   │   │
│   │   │   ├── resources/
│   │   │   │   ├── ResourcesHero/
│   │   │   │   ├── LessonPlans/
│   │   │   │   ├── Worksheets/
│   │   │   │   ├── VideoLibrary/
│   │   │   │   ├── ReadingList/
│   │   │   │   └── DownloadCenter/
│   │   │   │
│   │   │   └── contact/
│   │   │       ├── ContactForm/
│   │   │       ├── ContactInfo/
│   │   │       └── MapSection/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Biography.tsx
│   │   │   ├── Theories.tsx
│   │   │   ├── Quotes.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Resources.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── NotFound.tsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useScrollPosition.ts
│   │   │   ├── useIntersectionObserver.ts
│   │   │   ├── useParallax.ts
│   │   │   ├── useWindowSize.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   └── useApi.ts
│   │   │
│   │   ├── context/
│   │   │   ├── ThemeContext.tsx
│   │   │   ├── NavigationContext.tsx
│   │   │   └── AudioContext.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── imageService.ts
│   │   │   ├── analytics.ts
│   │   │   └── audioService.ts
│   │   │
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── tailwind.css
│   │   │   ├── variables.css
│   │   │   ├── animations.css
│   │   │   └── utilities.css
│   │   │
│   │   ├── types/
│   │   │   ├── index.ts
│   │   │   ├── api.ts
│   │   │   ├── components.ts
│   │   │   └── models.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── formatters.ts
│   │   │   ├── constants.ts
│   │   │   ├── helpers.ts
│   │   │   └── physics.ts (physics calculations)
│   │   │
│   │   ├── data/
│   │   │   ├── quotes.json
│   │   │   ├── timeline.json
│   │   │   ├── theories.json
│   │   │   └── gallery.json
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   │
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                           # Node.js + Express API
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── biographyController.ts
│   │   │   ├── theoriesController.ts
│   │   │   ├── quotesController.ts
│   │   │   ├── galleryController.ts
│   │   │   ├── resourcesController.ts
│   │   │   ├── contactController.ts
│   │   │   └── healthController.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── index.ts
│   │   │   ├── biography.routes.ts
│   │   │   ├── theories.routes.ts
│   │   │   ├── quotes.routes.ts
│   │   │   ├── gallery.routes.ts
│   │   │   ├── resources.routes.ts
│   │   │   └── contact.routes.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── errorHandler.ts
│   │   │   ├── rateLimiter.ts
│   │   │   ├── logger.ts
│   │   │   ├── validation.ts
│   │   │   ├── cors.ts
│   │   │   └── auth.ts
│   │   │
│   │   ├── services/
│   │   │   ├── database.ts
│   │   │   ├── cache.ts
│   │   │   ├── imageProcessor.ts
│   │   │   ├── emailService.ts
│   │   │   └── searchService.ts
│   │   │
│   │   ├── models/
│   │   │   ├── prisma/
│   │   │   │   ├── schema.prisma
│   │   │   │   └── migrations/
│   │   │   ├── Quote.ts
│   │   │   ├── TimelineEvent.ts
│   │   │   ├── GalleryImage.ts
│   │   │   ├── Resource.ts
│   │   │   └── ContactMessage.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   ├── helpers.ts
│   │   │   └── validators.ts
│   │   │
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── app.ts
│   │   │   ├── cors.ts
│   │   │   └── redis.ts
│   │   │
│   │   ├── types/
│   │   │   ├── express.d.ts
│   │   │   └── index.ts
│   │   │
│   │   └── app.ts
│   │
│   ├── tests/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   │
│   ├── uploads/                       # Gitignored
│   │   ├── images/
│   │   └── documents/
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   │
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
│
├── shared/                            # Shared Code
│   ├── types/
│   │   ├── api.ts
│   │   ├── models.ts
│   │   └── constants.ts
│   ├── validators/
│   │   └── index.ts
│   └── utils/
│       └── formatters.ts
│
├── content/                           # Content Management
│   ├── biography/
│   │   └── sections/
│   ├── theories/
│   │   └── explanations/
│   ├── quotes/
│   │   └── categories/
│   └── resources/
│       ├── lesson-plans/
│       └── worksheets/
│
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── CONTRIBUTING.md
│   ├── STYLEGUIDE.md
│   └── VISUALIZATION_GUIDE.md
│
├── docker/
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   ├── nginx.conf
│   └── docker-compose.yml
│
├── scripts/
│   ├── seed-db.ts
│   ├── optimize-images.ts
│   ├── generate-sitemap.ts
│   └── build.sh
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── cd.yml
│       └── lighthouse.yml
│
├── .gitignore
├── .env.example
├── README.md
├── ARCHITECTURE.md
└── LICENSE
```

---

## Component Architecture

### Application Hierarchy

```
App
├── ErrorBoundary
├── ThemeProvider
│   └── NavigationProvider
│       └── AudioProvider
│           ├── PageTransition
│           │   └── [Route Pages]
│           │       ├── Home
│           │       │   ├── Header
│           │       │   │   ├── Logo
│           │       │   │   └── Navigation
│           │       │   ├── HeroSection
│           │       │   │   ├── CosmosBackground
│           │       │   │   ├── AnimatedTitle
│           │       │   │   └── ScrollIndicator
│           │       │   ├── FeaturedQuote
│           │       │   ├── QuickLinks
│           │       │   ├── TheoryPreview
│           │       │   │   └── TheoryCard[]
│           │       │   ├── CallToAction
│           │       │   └── Footer
│           │       │
│           │       ├── Biography
│           │       │   ├── Header
│           │       │   ├── BiographyHero
│           │       │   ├── TimelineSection
│           │       │   │   ├── TimelineNode[]
│           │       │   │   └── TimelineConnector[]
│           │       │   ├── LifeStages
│           │       │   │   └── StageCard[]
│           │       │   ├── PortraitGallery
│           │       │   ├── LegacySection
│           │       │   └── Footer
│           │       │
│           │       ├── Theories
│           │       │   ├── Header
│           │       │   ├── TheoriesHero
│           │       │   ├── TheoryNavigation
│           │       │   ├── SpecialRelativity
│           │       │   │   ├── TimeDilationViz (Three.js)
│           │       │   │   ├── LengthContractionViz (D3)
│           │       │   │   └── Emc2Calculator
│           │       │   ├── GeneralRelativity
│           │       │   │   ├── SpacetimeCurvature (Three.js)
│           │       │   │   ├── GravityWellViz (Three.js)
│           │       │   │   └── LightBendingViz (Canvas)
│           │       │   ├── PhotoelectricEffect
│           │       │   │   └── PhotonInteraction (Canvas)
│           │       │   ├── BrownianMotion
│           │       │   │   └── ParticleSimulation (Canvas)
│           │       │   └── Footer
│           │       │
│           │       ├── Quotes
│           │       │   ├── Header
│           │       │   ├── QuotesHero
│           │       │   ├── QuoteFilter
│           │       │   ├── QuoteSearch
│           │       │   ├── QuoteGallery
│           │       │   │   ├── QuoteGrid
│           │       │   │   └── QuoteCard[]
│           │       │   ├── QuoteCarousel
│           │       │   └── Footer
│           │       │
│           │       ├── Gallery
│           │       │   ├── Header
│           │       │   ├── GalleryHero
│           │       │   ├── GalleryFilter
│           │       │   ├── PhotoGrid
│           │       │   │   └── VintageFrame[]
│           │       │   ├── LightboxModal
│           │       │   └── Footer
│           │       │
│           │       ├── Resources
│           │       │   ├── Header
│           │       │   ├── ResourcesHero
│           │       │   ├── LessonPlans
│           │       │   ├── Worksheets
│           │       │   ├── VideoLibrary
│           │       │   ├── ReadingList
│           │       │   └── Footer
│           │       │
│           │       └── Contact
│           │           ├── Header
│           │           ├── ContactInfo
│           │           ├── ContactForm
│           │           └── Footer
│           │
│           └── ScrollProgress
```

### Key Component Specifications

#### CosmosBackground

```typescript
interface CosmosBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
  showNebulae?: boolean;
  parallax?: boolean;
}

// Features:
// - Procedural star field generation
// - Animated twinkling effect
// - Optional nebula overlays (Three.js)
// - Parallax scrolling support
// - Performance-optimized with canvas
```

#### TimelineNode

```typescript
interface TimelineNodeProps {
  event: TimelineEvent;
  position: 'left' | 'right';
  isActive: boolean;
  onClick: (id: string) => void;
}

interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  day?: number;
  title: string;
  description: string;
  type: 'personal' | 'scientific' | 'professional' | 'historical';
  location?: string;
  imageUrl?: string;
  sources?: string[];
}

// Features:
// - Animated entrance on scroll
// - Expandable content on click
// - Type-based icon and color coding
// - Responsive positioning
```

#### TimeDilationViz

```typescript
interface TimeDilationVizProps {
  velocity: number; // as fraction of c
  showEquation?: boolean;
}

// Features:
// - Interactive velocity slider (0-0.99c)
// - Real-time clock comparison visualization
// - Twin paradox scenario demonstration
// - Equation display: Δt' = Δt / √(1 - v²/c²)
// - Built with D3.js for precision
```

#### SpacetimeCurvature

```typescript
interface SpacetimeCurvatureProps {
  mass: number;
  rotationSpeed?: number;
  showGrid?: boolean;
  showLightPath?: boolean;
}

// Features:
// - 3D spacetime mesh visualization (Three.js)
// - Interactive mass control
// - Geodesic path tracing
// - Light bending demonstration
// - Schwarzschild radius indicator
```

#### QuoteCard

```typescript
interface QuoteCardProps {
  quote: Quote;
  variant?: 'featured' | 'standard' | 'compact';
  onShare?: (quote: Quote) => void;
  onFavorite?: (id: string) => void;
}

interface Quote {
  id: string;
  text: string;
  source: string;
  year?: number;
  category: QuoteCategory;
  featured: boolean;
}

type QuoteCategory = 
  | 'science'
  | 'philosophy'
  | 'life'
  | 'politics'
  | 'humor'
  | 'education'
  | 'peace';

// Features:
// - Handwritten-style typography
// - Ornamental quotation marks
// - Share to social media
// - Favorite/bookmark functionality
// - Category badges
```

---

## API Design

### Base Configuration

```
Base URL: /api/v1
Content-Type: application/json
Authentication: JWT (admin endpoints only)
Rate Limiting: 100 requests/minute per IP
```

### Endpoints

#### Biography

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/biography` | Get full biography | No |
| GET | `/biography/sections` | Get all sections | No |
| GET | `/biography/sections/:id` | Get section by ID | No |
| GET | `/biography/timeline` | Get timeline events | No |
| GET | `/biography/timeline/:decade` | Filter by decade | No |
| GET | `/biography/portraits` | Get portrait images | No |

**Response Example:**
```json
{
  "success": true,
  "data": {
    "id": "bio-001",
    "title": "Albert Einstein: A Life in Science",
    "sections": [
      {
        "id": "early-years",
        "order": 1,
        "heading": "Early Years (1879-1895)",
        "content": "Albert Einstein was born on March 14, 1879, in Ulm, Kingdom of Württemberg...",
        "imageUrl": "/images/bio/childhood.jpg",
        "imageCaption": "Young Albert, age 3"
      }
    ],
    "timeline": {
      "totalEvents": 87,
      "decades": ["1870s", "1880s", "1890s", "1900s", "1910s", "1920s", "1930s", "1940s", "1950s"]
    }
  },
  "meta": {
    "lastUpdated": "2026-03-01T10:00:00Z",
    "version": "1.0.0"
  }
}
```

#### Theories

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/theories` | Get all theories | No |
| GET | `/theories/:id` | Get theory details | No |
| GET | `/theories/:id/visualizations` | Get viz configurations | No |
| GET | `/theories/:id/equations` | Get related equations | No |
| GET | `/theories/popular` | Get most viewed theories | No |

**Response Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "special-relativity",
      "title": "Special Theory of Relativity",
      "year": 1905,
      "summary": "Revolutionary theory describing the relationship between space and time",
      "keyConcepts": ["Time dilation", "Length contraction", "Mass-energy equivalence"],
      "equations": ["E = mc²", "t' = t/√(1-v²/c²)"],
      "visualizations": ["time-dilation", "length-contraction", "emc2-calculator"],
      "difficulty": "intermediate",
      "readTime": 15
    }
  ]
}
```

#### Quotes

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/quotes` | Get paginated quotes | No |
| GET | `/quotes/random` | Get random quote | No |
| GET | `/quotes/random?count=5` | Get multiple random | No |
| GET | `/quotes/featured` | Get featured quotes | No |
| GET | `/quotes/:id` | Get specific quote | No |
| GET | `/quotes/categories` | Get all categories | No |
| GET | `/quotes?category=:cat` | Filter by category | No |
| GET | `/quotes?search=:query` | Search quotes | No |
| POST | `/quotes/submit` | Submit new quote | No* |
| PUT | `/quotes/:id` | Update quote | Admin |
| DELETE | `/quotes/:id` | Delete quote | Admin |

*Requires moderation

**Query Parameters:**
```
?page=1&limit=20&category=science&search=imagination&sort=year&order=desc
```

**Response Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "q-042",
      "text": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      "source": "Interview with George Sylvester Viereck",
      "publication": "The Saturday Evening Post",
      "date": "1929-10-26",
      "year": 1929,
      "category": "philosophy",
      "tags": ["imagination", "knowledge", "creativity"],
      "verified": true,
      "featured": true,
      "favorites": 1247
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 312,
    "totalPages": 16,
    "hasNext": true,
    "hasPrev": false
  }
}
```

#### Gallery

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/gallery` | Get paginated images | No |
| GET | `/gallery/featured` | Get featured images | No |
| GET | `/gallery/:id` | Get image details | No |
| GET | `/gallery/categories` | Get categories | No |
| GET | `/gallery?category=:cat` | Filter by category | No |
| GET | `/gallery/random?count=10` | Get random images | No |
| POST | `/gallery/upload` | Upload image | Admin |
| PUT | `/gallery/:id` | Update metadata | Admin |
| DELETE | `/gallery/:id` | Delete image | Admin |

**Categories:**
- `portraits` - Photos of Einstein
- `documents` - Manuscripts, letters, papers
- `locations` - Places he lived and worked
- `memorabilia` - Objects, awards, possessions
- `illustrations` - Diagrams, artwork, visualizations
- `family` - Family photos
- `colleagues` - Photos with other scientists

**Response Example:**
```json
{
  "success": true,
  "data": {
    "id": "img-001",
    "title": "Einstein at Princeton Institute for Advanced Study",
    "description": "Portrait taken during his tenure at Princeton",
    "category": "portraits",
    "year": 1947,
    "photographer": "Philippe Halsman",
    "location": "Princeton, New Jersey",
    "credit": "Library of Congress",
    "license": "Public Domain",
    "urls": {
      "thumbnail": "/images/gallery/thumb/img-001.webp",
      "small": "/images/gallery/sm/img-001.webp",
      "medium": "/images/gallery/md/img-001.webp",
      "large": "/images/gallery/lg/img-001.webp",
      "original": "/images/gallery/orig/img-001.jpg"
    },
    "dimensions": {
      "width": 2400,
      "height": 3000,
      "aspectRatio": "4:5"
    },
    "metadata": {
      "camera": "Unknown",
      "film": "Black and white",
      "digitized": "2015-06-15"
    }
  }
}
```

#### Resources

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/resources` | Get all resources | No |
| GET | `/resources/lesson-plans` | Get lesson plans | No |
| GET | `/resources/worksheets` | Get worksheets | No |
| GET | `/resources/videos` | Get video library | No |
| GET | `/resources/reading-list` | Get reading list | No |
| GET | `/resources/:id` | Get resource details | No |
| GET | `/resources/:id/download` | Download resource | No |
| POST | `/resources/submit` | Submit resource | No* |

*Requires review

**Response Example:**
```json
{
  "success": true,
  "data": {
    "id": "res-001",
    "title": "Special Relativity for High School Students",
    "type": "lesson-plan",
    "gradeLevel": "9-12",
    "duration": "90 minutes",
    "description": "Complete lesson plan introducing special relativity concepts",
    "objectives": [
      "Understand the concept of reference frames",
      "Explain time dilation with examples",
      "Calculate simple relativistic effects"
    ],
    "materials": ["Projector", "Worksheet handouts", "Calculator"],
    "downloads": {
      "lessonPlan": "/resources/downloads/res-001/lesson.pdf",
      "worksheet": "/resources/downloads/res-001/worksheet.pdf",
      "slides": "/resources/downloads/res-001/slides.pptx"
    },
    "standards": ["NGSS-HS-PS4", "Common Core Math"],
    "author": "Dr. Sarah Chen",
    "reviewedBy": "Physics Education Review Board",
    "downloads": 2847,
    "rating": 4.8
  }
}
```

#### Contact

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/contact/message` | Send contact message | No |
| POST | `/contact/newsletter` | Subscribe to newsletter | No |
| POST | `/contact/feedback` | Submit feedback | No |

**Request Body (message):**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "subject": "string (required)",
  "message": "string (required)",
  "category": "general|educational|technical|other"
}
```

#### Health & System

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/health/db` | Database health |
| GET | `/health/cache` | Cache status |
| GET | `/status` | System status |
| GET | `/metrics` | Usage metrics (admin) |
| GET | `/version` | API version info |

**Health Response:**
```json
{
  "success": true,
  "status": "healthy",
  "timestamp": "2026-03-09T10:00:00Z",
  "services": {
    "database": { "status": "up", "latency": "12ms" },
    "cache": { "status": "up", "latency": "2ms" },
    "storage": { "status": "up", "used": "45%" }
  },
  "uptime": "15d 7h 32m"
}
```

---

## Database Schema

### Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Quote {
  id          String   @id @default(uuid())
  text        String   @db.Text
  source      String?
  publication String?
  date        DateTime?
  year        Int?
  category    QuoteCategory
  tags        String[]
  verified    Boolean  @default(true)
  featured    Boolean  @default(false)
  favorites   Int      @default(0)
  views       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([category])
  @@index([year])
  @@index([featured])
}

enum QuoteCategory {
  SCIENCE
  PHILOSOPHY
  LIFE
  POLITICS
  HUMOR
  EDUCATION
  PEACE
}

model TimelineEvent {
  id          String   @id @default(uuid())
  year        Int
  month       Int?
  day         Int?
  title       String
  description String   @db.Text
  type        EventType
  location    String?
  imageUrl    String?
  imageCaption String?
  sources     String[]
  order       Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([year])
  @@index([type])
  @@index([order])
}

enum EventType {
  PERSONAL
  SCIENTIFIC
  PROFESSIONAL
  HISTORICAL
}

model GalleryImage {
  id          String   @id @default(uuid())
  title       String
  description String?  @db.Text
  category    ImageCategory
  year        Int?
  photographer String?
  location    String?
  credit      String?
  license     String?
  filename    String
  dimensions  Json
  metadata    Json?
  featured    Boolean  @default(false)
  views       Int      @default(0)
  downloads   Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([category])
  @@index([featured])
  @@index([year])
}

enum ImageCategory {
  PORTRAITS
  DOCUMENTS
  LOCATIONS
  MEMORABILIA
  ILLUSTRATIONS
  FAMILY
  COLLEAGUES
}

model Resource {
  id          String   @id @default(uuid())
  title       String
  type        ResourceType
  gradeLevel  String?
  duration    String?
  description String   @db.Text
  objectives  String[]
  materials   String[]
  standards   String[]
  author      String?
  reviewedBy  String?
  downloads   Int      @default(0)
  rating      Float    @default(0)
  ratingCount Int      @default(0)
  fileUrls    Json
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([type])
  @@index([published])
}

enum ResourceType {
  LESSON_PLAN
  WORKSHEET
  VIDEO
  READING
  ACTIVITY
  ASSESSMENT
}

model ContactMessage {
  id        String   @id @default(uuid())
  name      String
  email     String
  subject   String
  message   String   @db.Text
  category  String
  status    MessageStatus @default(PENDING)
  response  String?  @db.Text
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([status])
  @@index([createdAt])
}

enum MessageStatus {
  PENDING
  READ
  REPLIED
  ARCHIVED
}

model NewsletterSubscriber {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  subscribedAt DateTime @default(now())
  unsubscribedAt DateTime?
  active    Boolean  @default(true)
  
  @@index([active])
}

model Analytics {
  id        String   @id @default(uuid())
  page      String
  views     Int      @default(1)
  date      DateTime @default(now())
  
  @@index([page])
  @@index([date])
}
```

---

## Interactive Visualizations

### Physics Visualization System

#### Architecture

```
visualization-engine/
├── core/
│   ├── VisualizationBase.ts    # Base class for all visualizations
│   ├── SceneManager.ts         # Three.js scene management
│   ├── AnimationLoop.ts        # RequestAnimationFrame handling
│   └── InteractionHandler.ts   # Mouse/touch events
│
├── visualizations/
│   ├── time-dilation/
│   │   ├── TimeDilationViz.tsx
│   │   ├── ClockPair.ts        # Two clocks visualization
│   │   ├── VelocitySlider.ts   # Interactive control
│   │   └── EquationDisplay.ts  # LaTeX rendering
│   │
│   ├── spacetime-curvature/
│   │   ├── SpacetimeViz.tsx
│   │   ├── GravityMesh.ts      # 3D grid deformation
│   │   ├── MassController.ts   # Interactive mass
│   │   └── GeodesicTracer.ts   # Path visualization
│   │
│   ├── emc2-calculator/
│   │   ├── Emc2Calculator.tsx
│   │   ├── MassInput.ts        # Mass input component
│   │   ├── EnergyOutput.ts     # Energy calculation display
│   │   └── ComparisonTable.ts  # Real-world comparisons
│   │
│   ├── photoelectric/
│   │   ├── PhotoelectricViz.tsx
│   │   ├── PhotonEmitter.ts    # Light source
│   │   ├── ElectronPool.ts     # Bound electrons
│   │   └── EnergyMeter.ts      # Kinetic energy display
│   │
│   └── brownian-motion/
│       ├── BrownianViz.tsx
│       ├── ParticleField.ts    # Pollen particles
│       ├── MoleculeSimulator.ts # Water molecules
│       └── TrajectoryTracer.ts  # Path tracking
│
└── utils/
    ├── physics.ts              # Physics calculations
    ├── math3d.ts               # 3D math utilities
    └── renderers.ts            # Canvas/WebGL helpers
```

#### Time Dilation Visualization

```typescript
// Core physics calculation
function calculateTimeDilation(
  properTime: number, 
  velocity: number
): { dilatedTime: number; gamma: number } {
  const c = 299792458; // speed of light m/s
  const v = velocity * c;
  const gamma = 1 / Math.sqrt(1 - (v * v) / (c * c));
  const dilatedTime = properTime * gamma;
  
  return { dilatedTime, gamma };
}

// Visualization props
interface TimeDilationVizProps {
  initialVelocity?: number;  // 0 to 0.99
  properTime?: number;       // seconds
  showTwinParadox?: boolean;
}
```

**Features:**
- Interactive velocity slider (0% to 99% speed of light)
- Side-by-side clock comparison
- Real-time gamma factor display
- Twin paradox scenario toggle
- Example scenarios (GPS satellites, particle accelerators)

#### Spacetime Curvature Visualization

```typescript
// Schwarzschild metric visualization
interface SpacetimeGridProps {
  mass: number;            // solar masses
  resolution: number;      // grid density
  showLightCone?: boolean;
  showEventHorizon?: boolean;
}

function calculateCurvature(mass: number, radius: number): number {
  const G = 6.674e-11;     // gravitational constant
  const c = 299792458;     // speed of light
  const rs = (2 * G * mass) / (c * c);  // Schwarzschild radius
  const curvature = rs / radius;
  return Math.min(curvature, 1);  // cap at 1 for visualization
}
```

**Features:**
- 3D deformable spacetime mesh (Three.js)
- Interactive mass control (Earth → Sun → Black Hole)
- Geodesic path tracing for light and matter
- Event horizon visualization
- Gravitational lensing demonstration

#### E=mc² Calculator

```typescript
interface Emc2CalculatorProps {
  defaultUnit?: 'kg' | 'g' | 'amu';
  showComparisons?: boolean;
}

function calculateEnergy(mass: number, unit: MassUnit): {
  joules: number;
  kilotons: number;
  kWh: number;
  comparisons: EnergyComparison[];
} {
  const c = 299792458;
  const massKg = convertToKg(mass, unit);
  const energyJ = massKg * c * c;
  
  return {
    joules: energyJ,
    kilotons: energyJ / 4.184e12,
    kWh: energyJ / 3.6e6,
    comparisons: [
      { label: 'TNT equivalent', value: `${(energyJ / 4.184e12).toFixed(4)} kilotons` },
      { label: 'Household power', value: `${(energyJ / 3.6e6).toFixed(0)} kWh` },
      { label: 'Nuclear bomb', value: `${(energyJ / 8.4e13).toFixed(2)} Hiroshima bombs` }
    ]
  };
}
```

**Features:**
- Mass input with unit conversion
- Real-time energy calculation
- Real-world comparisons (TNT, power plants, nuclear weapons)
- Historical context (Hiroshima, Tsar Bomba)
- Educational annotations

---

## Performance Strategy

### Frontend Optimization

#### Bundle Analysis Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| Initial JS | < 200KB | Code splitting, tree shaking |
| Initial CSS | < 50KB | Critical CSS, PurgeCSS |
| LCP | < 2.5s | Image optimization, preload |
| FID | < 100ms | Web Workers for heavy calc |
| CLS | < 0.1 | Reserved space, font loading |

#### Code Splitting Strategy

```typescript
// Route-based lazy loading
const Theories = lazy(() => import('./pages/Theories'));
const Biography = lazy(() => import('./pages/Biography'));

// Component-level for heavy visualizations
const SpacetimeCurvature = lazy(() => 
  import('./components/theories/GeneralRelativity/SpacetimeCurvature')
);

// Prefetch on hover
<Link 
  to="/theories" 
  onMouseEnter={() => prefetch('/theories')}
>
  Explore Theories
</Link>
```

#### Image Optimization

```typescript
// Responsive images with WebP
<picture>
  <source 
    srcSet="/images/hero/large.webp"
    media="(min-width: 1024px)"
    type="image/webp"
  />
  <source 
    srcSet="/images/hero/medium.webp"
    media="(min-width: 768px)"
    type="image/webp"
  />
  <img 
    src="/images/hero/small.jpg"
    alt="Einstein portrait"
    loading="lazy"
    decoding="async"
  />
</picture>
```

**Image Processing Pipeline:**
1. Upload original to backend
2. Sharp processes multiple sizes (thumb, sm, md, lg, orig)
3. WebP conversion with JPEG fallback
4. CDN distribution
5. Frontend uses responsive srcset

#### Caching Strategy

```typescript
// React Query configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // 5 minutes
      cacheTime: 30 * 60 * 1000,     // 30 minutes
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

// Service Worker for offline support
// Workbox configuration
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
workbox.routing.registerRoute(
  /\/api\/v1\/.*/,
  new NetworkFirstStrategy({
    cacheName: 'api-cache',
    expiration: {
      maxEntries: 100,
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    },
  })
);
```

### Backend Optimization

#### Database Query Optimization

```typescript
// Indexed queries
const quotes = await prisma.quote.findMany({
  where: {
    category: 'SCIENCE',
    featured: true,
  },
  orderBy: { year: 'desc' },
  take: 20,
  skip: (page - 1) * limit,
});

// N+1 prevention with include
const timelineEvents = await prisma.timelineEvent.findMany({
  include: {
    relatedImages: true,
  },
  orderBy: { year: 'asc' },
});
```

#### Redis Caching

```typescript
// Cache configuration
const cacheConfig = {
  quotes: { ttl: 3600 },      // 1 hour
  timeline: { ttl: 86400 },   // 24 hours
  gallery: { ttl: 3600 },     // 1 hour
  theories: { ttl: 7200 },    // 2 hours
};

// Cache middleware
async function cacheResponse(
  key: string, 
  ttl: number, 
  fn: () => Promise<any>
) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  
  const result = await fn();
  await redis.setex(key, ttl, JSON.stringify(result));
  return result;
}
```

#### Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,      // 1 minute
  max: 100,                  // 100 requests per minute
  message: {
    success: false,
    error: 'Too many requests, please try again later'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter limits for write operations
const writeLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,  // 10 write requests per minute
});
```

---

## Security

### Frontend Security

```typescript
// Content Security Policy
const cspConfig = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
    styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    imgSrc: ["'self'", 'data:', 'https:'],
    connectSrc: ["'self'", 'https://api.einstein-tribute.com'],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
  },
};

// Input sanitization
import DOMPurify from 'dompurify';

const sanitizedContent = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'blockquote'],
  ALLOWED_ATTR: []
});
```

### Backend Security

```typescript
// Helmet configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      // ... csp config
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
}));

// Input validation with Zod
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
});

// SQL injection prevention (Prisma handles this)
// XSS prevention (output encoding)
// CSRF protection for forms
```

### Authentication (Admin Only)

```typescript
// JWT configuration
const jwtConfig = {
  secret: process.env.JWT_SECRET!,
  expiresIn: '1h',
  refreshExpiresIn: '7d',
};

// Protected routes
router.post(
  '/gallery/upload',
  authenticate,
  authorize(['admin']),
  upload.single('image'),
  galleryController.uploadImage
);
```

---

## Deployment

### Docker Configuration

#### Frontend Dockerfile

```dockerfile
# docker/Dockerfile.frontend
FROM node:20-alpine AS builder

WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Backend Dockerfile

```dockerfile
# docker/Dockerfile.backend
FROM node:20-alpine

WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --only=production

COPY backend/ ./
RUN npx prisma generate

EXPOSE 3000
CMD ["node", "dist/app.js"]
```

#### Docker Compose

```yaml
# docker/docker-compose.yml
version: '3.8'

services:
  frontend:
    build:
      context: ..
      dockerfile: docker/Dockerfile.frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - einstein-network

  backend:
    build:
      context: ..
      dockerfile: docker/Dockerfile.backend
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/einstein
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    networks:
      - einstein-network

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=einstein
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - einstein-network

  redis:
    image: redis:7-alpine
    volumes:
      - redis-data:/data
    networks:
      - einstein-network

volumes:
  postgres-data:
  redis-data:

networks:
  einstein-network:
    driver: bridge
```

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: |
          cd frontend && npm ci
          cd ../backend && npm ci
      
      - name: Run tests
        run: |
          cd backend && npm test
          cd ../frontend && npm test
      
      - name: Build
        run: |
          cd frontend && npm run build
          cd ../backend && npm run build
      
      - name: Lighthouse audit
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000/
            http://localhost:3000/biography
            http://localhost:3000/theories

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to production
        run: |
          # Deployment commands
          echo "Deploying to production..."
```

---

## Testing Strategy

### Frontend Testing

```typescript
// Unit tests with Jest + React Testing Library
import { render, screen } from '@testing-library/react';
import QuoteCard from './QuoteCard';

describe('QuoteCard', () => {
  const mockQuote = {
    id: 'q-001',
    text: 'Test quote',
    source: 'Test source',
    category: 'science',
  };

  it('renders quote text correctly', () => {
    render(<QuoteCard quote={mockQuote} />);
    expect(screen.getByText('Test quote')).toBeInTheDocument();
  });

  it('displays category badge', () => {
    render(<QuoteCard quote={mockQuote} />);
    expect(screen.getByText('Science')).toBeInTheDocument();
  });
});

// Integration tests
describe('Quotes Page', () => {
  it('loads and displays quotes from API', async () => {
    server.use(
      rest.get('/api/v1/quotes', (req, res, ctx) => {
        return res(ctx.json({ data: [mockQuote] }));
      })
    );

    render(<Quotes />);
    
    expect(await screen.findByText('Test quote')).toBeInTheDocument();
  });
});

// E2E tests with Playwright
import { test, expect } from '@playwright/test';

test('user can navigate through theories', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="nav-theories"]');
  await expect(page).toHaveURL('/theories');
  
  await page.click('[data-testid="theory-special-relativity"]');
  await expect(page.locator('h1')).toContainText('Special Relativity');
  
  // Test interactive visualization
  await page.fill('[data-testid="velocity-slider"]', '0.5');
  await expect(page.locator('[data-testid="gamma-factor"]'))
    .toContainText('1.15');
});
```

### Backend Testing

```typescript
// API endpoint tests with Supertest
import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/quotes', () => {
  it('returns paginated quotes', async () => {
    const response = await request(app)
      .get('/api/v1/quotes?page=1&limit=10')
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.pagination).toBeDefined();
  });

  it('filters by category', async () => {
    const response = await request(app)
      .get('/api/v1/quotes?category=science')
      .expect(200);

    response.body.data.forEach((quote: Quote) => {
      expect(quote.category).toBe('science');
    });
  });
});

// Unit tests for services
describe('QuoteService', () => {
  it('calculates quote statistics correctly', () => {
    const quotes = [
      { category: 'science', featured: true },
      { category: 'science', featured: false },
      { category: 'philosophy', featured: true },
    ];

    const stats = quoteService.getStatistics(quotes);
    expect(stats.total).toBe(3);
    expect(stats.byCategory.science).toBe(2);
    expect(stats.featured).toBe(2);
  });
});
```

### Test Coverage Targets

| Area | Target |
|------|--------|
| Components | 80% |
| Utilities | 90% |
| API Routes | 85% |
| Services | 85% |
| Overall | 80% |

---

## Appendix

### Environment Variables

#### Frontend (.env)

```env
VITE_API_URL=https://api.einstein-tribute.com
VITE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_SENTRY_DSN=https://xxx@oxxx.ingest.sentry.io/xxx
VITE_ENABLE_AUDIO=false
```

#### Backend (.env)

```env
# Server
NODE_ENV=production
PORT=3000
HOST=0.0.0.0

# Database
DATABASE_URL=postgresql://user:password@host:5432/einstein

# Redis
REDIS_URL=redis://localhost:6379

# Security
JWT_SECRET=your-super-secret-key-min-32-chars
BCRYPT_ROUNDS=12

# Storage
UPLOAD_DIR=/app/uploads
MAX_UPLOAD_SIZE=10485760

# Email (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@einstein-tribute.com
SMTP_PASS=your-app-password

# CORS
ALLOWED_ORIGINS=https://einstein-tribute.com,https://www.einstein-tribute.com

# Logging
LOG_LEVEL=info
LOG_FILE=/var/log/einstein-tribute/app.log
```

### Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | Full |
| Firefox | 88+ | Full |
| Safari | 14+ | Full |
| Edge | 90+ | Full |
| Opera | 76+ | Full |

**Note:** Three.js visualizations require WebGL 2.0 support.

### Performance Budget

| Resource | Budget |
|----------|--------|
| HTML | 50KB |
| JavaScript | 200KB (initial), 500KB (total) |
| CSS | 50KB |
| Images (LCP) | 200KB |
| Fonts | 100KB |
| Total Page Weight | 1.5MB (max) |
| Time to Interactive | < 3.5s |

---

*Document Version: 1.0.0*  
*Last Updated: 2026-03-09*  
*Author: Project Manager, AI Software House*
