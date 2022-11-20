/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 4s linear infinite',
      }
    },
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
