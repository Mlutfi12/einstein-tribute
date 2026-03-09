# Einstein Tribute - Frontend

A vintage academic-themed React application celebrating the life and legacy of Albert Einstein.

## 🎨 Design Features

- **Vintage Academic Aesthetic**: Sepia tones, parchment textures, and classic typography
- **Equation Motifs**: Subtle background patterns featuring Einstein's famous equations
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Floating equations, fade-in effects, and smooth scrolling

## 🏗️ Tech Stack

- **React 18.3.1** - UI framework
- **Vite 6.0.5** - Build tool and dev server
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **Google Fonts** - Playfair Display, Cormorant Garamond, Dancing Script

## 📁 Project Structure

```
frontend/
├── public/
│   └── atom.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── App.jsx       # Main application component
│   │   ├── Navigation.jsx # Fixed navigation bar
│   │   ├── Home.jsx      # Hero section
│   │   ├── Biography.jsx # Life story section
│   │   ├── Quotes.jsx    # Famous quotes carousel
│   │   ├── Timeline.jsx  # Life events timeline
│   │   ├── Gallery.jsx   # Image gallery
│   │   └── Footer.jsx    # Site footer
│   ├── index.css         # Custom styles & Tailwind imports
│   └── main.jsx          # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Development

```bash
cd frontend
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Sections

1. **Home** - Hero section with animated equations and call-to-action
2. **Biography** - Life story with key achievements
3. **Quotes** - Interactive carousel of famous Einstein quotes
4. **Timeline** - Chronological journey through Einstein's life
5. **Gallery** - Visual legacy with scientific contributions

## 🎨 Color Palette

- `parchment`: #f4e4c1 - Main background
- `parchment-dark`: #e8d5a7 - Card backgrounds
- `sepia`: #704214 - Primary text
- `sepia-light`: #8b6f47 - Secondary text
- `ink`: #2c1810 - Dark text
- `gold-accent`: #b8860b - Accent color

## ✨ Custom Components

- `.vintage-card` - Card with parchment texture and sepia borders
- `.section-title` - Styled section headers
- `.equation-bg` - Background with floating equations
- `.timeline-line` - Vertical timeline connector
- `.ornament` - Decorative elements

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

Built with ❤️ for the greatest physicist of the 20th century
