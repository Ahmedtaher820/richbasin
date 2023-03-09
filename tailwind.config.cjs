const tailwindcss = require('tailwindcss');

const primary = {
  DEFAULT: '#07395e',
  50: '#91B0D1',
  100:"#07395e6b",
  200:"#f3f6ff"
}
const secondary = {
  DEFAULT: '#e6c10f',
}
module.exports = {
  // content: [
  //   './index.html',
  //   './src/**/*.{vue,js,ts,jsx,tsx}',  
  //   './node_modules/vue-tailwind-datepicker/**/*.js',
  // ],
  theme: {
    extend: {
      colors: {
        primary,
      },
    },
  },
  content: ['./public/**/*.html', './src/**/*.vue', './src/main.js'],

  plugins: [
    tailwindcss,
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

}