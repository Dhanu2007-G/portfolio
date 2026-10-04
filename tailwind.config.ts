import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#040204',
        crimson: {
          DEFAULT: '#ff003c',
          light: '#ff3366',
          dark: '#b3002a',
          glow: 'rgba(255, 0, 60, 0.4)',
        },
        ruby: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        obsidian: {
          DEFAULT: '#050306',
          50: '#140c16',
          100: '#0d070f',
          200: '#0a050b',
        },
        surface: '#0d060c',
        'surface-2': '#140a12',
        'surface-3': '#1c0e1a',
        border: '#2f1220',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'laser-scan': 'laserScan 3.5s linear infinite',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(3px, 1px)' },
          '80%': { transform: 'translate(1px, -2px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(255, 0, 60, 0.25)' },
          '50%': { boxShadow: '0 0 50px rgba(255, 0, 60, 0.6), 0 0 90px rgba(255, 0, 60, 0.2)' },
        },
        laserScan: {
          '0%': { top: '0%', opacity: '0.8' },
          '50%': { top: '100%', opacity: '1' },
          '100%': { top: '0%', opacity: '0.8' },
        },
        radar: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid-red': `linear-gradient(rgba(255, 0, 60, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 60, 0.05) 1px, transparent 1px)`,
        'carbon-mesh': `radial-gradient(circle at 50% 50%, rgba(255, 0, 60, 0.08) 0%, transparent 60%)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'crimson-glow': '0 0 25px rgba(255, 0, 60, 0.35), 0 0 50px rgba(255, 0, 60, 0.15)',
        'crimson-glow-lg': '0 0 45px rgba(255, 0, 60, 0.6), 0 0 90px rgba(255, 0, 60, 0.25)',
        'crimson-inner': 'inset 0 0 20px rgba(255, 0, 60, 0.2)',
        'card-red': '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 0, 60, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
