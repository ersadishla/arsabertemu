/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'mx2xl': {'max': '1535px'},  
        'mxxl': {'max': '1279px'},  
        'mxlg': {'max': '1023px'},  
        'mxmd': {'max': '767px'},  
        'mxsm': {'max': '639px'},
      },
      fontFamily: {
        routtage: ["Routtage", "normal"],
        rubik: ["Rubik", "sans-serif"],
        playfair: ["Playfair", "normal"],
      },
    },
  },
  plugins: [require("daisyui")],
}
