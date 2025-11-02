/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fffbeb',
          600: '#d97706',
          700: '#b45309',
          900: '#451a03',
        }
      }
    },
  },
  plugins: [],
}