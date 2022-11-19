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
      'black': '#161616',
      'primary': '#552743',
      'secondary': '#6b10d6',
      'warning': '#ea0714',

    }
  },
  plugins: [],
}
