import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — Logic Unit brand
        stone: {
          warm: '#F7F5F0',
          surface: '#FDFCF9',
          border: '#E8E4DC',
          muted: '#A8A49E',
        },
        ink: {
          primary: '#141412',
          secondary: '#6B6860',
          dark: '#1A1A18',
          panel: '#222220',
          divider: '#2E2E2C',
        },
        amber: {
          brand: '#B8860B',
          hover: '#8B6508',
          light: '#FAC75520',
        },
        sage: '#5C6B5A',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: [
          'Helvetica Neue',
          'Arial',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '1.5', letterSpacing: '0.1em' }],
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['13px', { lineHeight: '1.6' }],
        'base': ['15px', { lineHeight: '1.7' }],
        'md': ['16px', { lineHeight: '1.7' }],
        'lg': ['17px', { lineHeight: '1.75' }],
        'xl': ['20px', { lineHeight: '1.5' }],
        '2xl': ['22px', { lineHeight: '1.4' }],
        '3xl': ['28px', { lineHeight: '1.2' }],
        '4xl': ['38px', { lineHeight: '1.15' }],
        '5xl': ['42px', { lineHeight: '1.1' }],
        '6xl': ['52px', { lineHeight: '1.08' }],
      },
      maxWidth: {
        content: '1140px',
        prose: '680px',
        copy: '580px',
      },
      spacing: {
        section: '100px',
        'section-sm': '72px',
      },
      borderWidth: {
        DEFAULT: '0.5px',
        '0.5': '0.5px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
