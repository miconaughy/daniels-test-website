/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:     '#1A1A1A',
          charcoal: '#2D2D2D',
          orange:   '#F47A20',
          'orange-hover': '#D96A10',
          gold:     '#F5B731',
          'gold-hover':   '#E0A620',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-oswald)', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #F47A20, #F5B731)',
      },
    },
  },
  plugins: [],
};
