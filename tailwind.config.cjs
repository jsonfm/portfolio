/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'black': '#010101',
      'primary': '#0044FF',
      'secondary': '#6b10d6',
      'warning': '#F05133',

    }
  },
  plugins: [],
}
