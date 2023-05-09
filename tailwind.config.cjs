/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#1C2B35",
      },
      width: {
        "width": "1440px",
      },
      boxShadow: {
        '3xl': '-10px 10px rgb(255, 224, 179)',
      }
    },
  },
  plugins: [],
}