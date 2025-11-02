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
        // NG-inspired: тёмный, жёлтый акцент, синий
        ngDark: {
          900: '#111827',  // Тёмно-серый фон
          800: '#1F2937',
        },
        ngYellow: {
          400: '#FDB927',  // Жёлтый акцент
          500: '#F59E0B',
        },
        ngBlue: {
          500: '#0077B6',  // Синий для ссылок
        },
      },
    },
  },
  plugins: [],
}