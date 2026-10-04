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
        background: '#050a0f',
        cyan: {
          DEFAULT: '#00f5ff',
          dark: '#00c4cc',
          glow: '#00f5ff33',
        },
        electric: '#0066ff',
        'electric-glow': '#0066ff33',
        surface: '#0a1628',
        'surface-2': '#0f1f35',
        border: '#1a3a5c',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #00f5ff33' },
          '50%': { boxShadow: '0 0 40px #00f5ff66, 0 0 80px #00f5ff22' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': `linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px #00f5ff33, 0 0 40px #00f5ff11',
        'cyan-glow-lg': '0 0 30px #00f5ff55, 0 0 60px #00f5ff22',
        'electric-glow': '0 0 20px #0066ff33, 0 0 40px #0066ff11',
        'card': '0 4px 24px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

export default config
