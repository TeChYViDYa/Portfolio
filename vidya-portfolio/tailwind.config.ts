import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        background: '#FAFAFA',
        primary: '#111111',
        secondary: '#666666',
        border: '#E5E5E5',
        accent: {
          DEFAULT: '#2D6A4F',
          light: '#D8F3DC',
          mid: '#52B788',
        },
      },
      fontSize: {
        'hero-desktop': ['76px', { lineHeight: '1.0', letterSpacing: '-3px' }],
        'hero-tablet': ['52px', { lineHeight: '1.05', letterSpacing: '-2px' }],
        'hero-mobile': ['42px', { lineHeight: '1.1', letterSpacing: '-1.5px' }],
        'section-desktop': ['48px', { lineHeight: '1.1', letterSpacing: '-2px' }],
        'section-mobile': ['34px', { lineHeight: '1.15', letterSpacing: '-1px' }],
      },
      maxWidth: {
        content: '1200px',
        reading: '700px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
