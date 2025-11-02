/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"National Geographic"', 'Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        ng: {
          black: '#000000',
          dark: '#111111',
          yellow: '#FDB813',
          gray: '#F5F5F5',
          light: '#FFFFFF',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
      },
    },
  },
  plugins: [],
}