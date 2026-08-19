/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0057D9',
          600: '#0049b8',
          700: '#003a94',
          800: '#002c70',
          900: '#001d4a',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffe7cc',
          200: '#ffcf99',
          300: '#ffb766',
          400: '#ff9f33',
          500: '#FF6B00',
          600: '#d95b00',
          700: '#b34a00',
          800: '#8c3a00',
          900: '#662900',
        },
        dark: '#1F2937',
        gold: '#D4AF37',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 87, 217, 0.15)',
        premium: '0 20px 60px rgba(0, 0, 0, 0.15)',
        glow: '0 0 30px rgba(0, 87, 217, 0.4)',
        'glow-accent': '0 0 30px rgba(255, 107, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0057D9 0%, #003a94 50%, #001d4a 100%)',
      },
    },
  },
  plugins: [],
};
