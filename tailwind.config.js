/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        routtage: ["Routtage", "normal"],
        rubik: ["Rubik", "sans-serif"],
        playfair: ["Playfair", "normal"],
      },
    },
  },
  plugins: [require("daisyui")],
}