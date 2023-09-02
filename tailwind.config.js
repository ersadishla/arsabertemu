/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        rosarivo: ['Rosarivo', 'normal'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('preline/plugin'),
  ],
}
