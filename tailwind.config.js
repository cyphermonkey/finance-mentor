/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          base: '#060A13',
          card: '#0C1220',
          elevated: '#131D2E',
        },
        border: {
          DEFAULT: '#1E2D45',
          light: '#263650',
        },
        gold: {
          DEFAULT: '#E8A83E',
          bright: '#F5C75A',
          dim: '#A67928',
        },
        finance: {
          blue: '#3D6FE8',
          teal: '#00C4B4',
          red: '#E85D5D',
        },
        text: {
          primary: '#EDF2F7',
          secondary: '#8B99B5',
          muted: '#3D4F6B',
        },
      },
      spacing: {
        sidebar: '220px',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        gold: '0 0 20px rgba(232, 168, 62, 0.15)',
        'gold-lg': '0 0 40px rgba(232, 168, 62, 0.2)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
