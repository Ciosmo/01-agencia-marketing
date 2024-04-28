/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wine-btn": "#8E0004",
        "yellowish-hover": "#E0B864",
      }
    },
  },
  plugins: [],
}