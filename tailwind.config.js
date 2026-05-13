/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B',
        ember: '#e14700',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(225, 71, 0, 0.35)',
        softGlow: '0 0 22px rgba(225, 71, 0, 0.22)',
      },
    },
  },
  plugins: [],
};
