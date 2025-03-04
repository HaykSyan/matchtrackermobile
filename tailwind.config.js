/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './ui/components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary-green': '#43AD28',
        'primary-red': '#EB0237',
        'primary-orange': '#EB6402',
        'primary-red-medium': '#A01131',
        'primary-red-dark': '#701328',
        page: '#090909',
        'base-black': '#0F1318',
        'medium-black': '#0B0E12',
        'light-black': '#101318',
      },
      backgroundImage: {
        'light-black-gradient': 'linear-gradient(180deg, #0A0E12, #0F1318)',
      },
    },
  },
  plugins: [],
};
