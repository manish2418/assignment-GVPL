/** @type {import('tailwindcss').Config} */

const colors = require('./src/core/theme/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors
    },
  },
  plugins: [],
}
