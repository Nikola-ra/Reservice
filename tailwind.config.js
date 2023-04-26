/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,php,svg}"],
  theme: {
    extend: {
      colors: {
        'icons': '#4B6FF0',
        'violetto': '#9790F0',
        'darkblue': '#012E5A',
        'indaco': '#628EE0',
        'darkazzurro': '#60B5F7',
        'azzurro': '#5CCCED'
      },
      screens: {
        'fold': { 'raw': '(max-height: 300px)' },
        'xs': '360px'
      },
      backgroundImage: {
        'gradient-sx' : 'linear-gradient(0deg, #cfd9df 0%, #e1e5e8 100%)',
        'gradient-dx' : 'linear-gradient(130deg, #628EE0 0%, #5CCCED 100%)'
      },
      transitionTimingFunction: {
        'cubic': 'cubic-bezier(0.25,0.60,0.35,1)'
      }
  },
  plugins: [],
}
}