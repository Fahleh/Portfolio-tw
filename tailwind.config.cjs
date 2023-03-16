/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        primary: '72%'
      }
    },
  },
  darkMode: 'class',
  plugins: [],

}
