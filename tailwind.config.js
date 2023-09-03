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
      gridTemplateRows: {
        // Simple 8 row grid
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('preline/plugin'),
  ],
}
