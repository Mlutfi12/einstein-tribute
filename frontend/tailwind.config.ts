import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Parchment Base
        parchment: {
          50: '#FFFBF5',
          100: '#FFF8E7',
          200: '#F5E6D3',
          300: '#E8D4C0',
        },
        // Sepia Tones
        sepia: {
          400: '#D4B896',
          500: '#B8956A',
          600: '#9C7B4F',
          700: '#7A5C36',
          800: '#5C4328',
          900: '#3D2B1F',
        },
        // Ink Colors
        ink: {
          primary: '#2C2416',
          secondary: '#4A3F2A',
          accent: '#8B4513',
        },
        // Cosmos
        cosmos: {
          700: '#21262D',
          800: '#161B22',
          900: '#0D1117',
        },
        // Stars & Nebulae
        star: {
          white: '#F0F6FC',
          gold: '#FFD700',
        },
        nebula: {
          purple: '#6B4C7A',
          blue: '#3B5998',
          pink: '#B84A6B',
        },
        // Semantic
        success: '#4A7C59',
        warning: '#C4A35A',
        error: '#8B3A3A',
        info: '#3B5998',
        goldAccent: '#B8860B',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Garamond', 'serif'],
        body: ['EB Garamond', 'Georgia', 'serif'],
        math: ['Latin Modern Math', 'Cambria Math', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        handwriting: ['Homemade Apple', 'Caveat', 'cursive'],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h1: ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h2: ['2.25rem', { lineHeight: '1.25' }],
        h3: ['1.75rem', { lineHeight: '1.3' }],
        h4: ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        equation: ['1.125rem', { lineHeight: '2.0' }],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      backgroundImage: {
        'parchment-texture': "url('/textures/paper-grain.png')",
        'cosmos-gradient': 'radial-gradient(ellipse at bottom, #21262D 0%, #161B22 40%, #0D1117 100%)',
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'vintage': '0 4px 6px rgba(61, 43, 31, 0.1), inset 0 0 20px rgba(184, 149, 106, 0.1)',
        'vintage-lg': '0 10px 15px rgba(61, 43, 31, 0.15), inset 0 0 30px rgba(184, 149, 106, 0.15)',
      },
      borderRadius: {
        'vintage': '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
