/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,php,svg}"],
  theme: {
    extend: {
      screens: {
        'fold': { 'raw': '(max-height: 300px)' },
        'xs': '360px'
      },
      backgroundImage: {
        'gradient-sx' : 'linear-gradient(to top, #cfd9df 0%, #e1e5e8 100%)',
        'gradient-dx' : 'linear-gradient(130deg, #c471f5 0%, #fa71cd 100%)'
      },
      transitionTimingFunction: {
        'cubic': 'cubic-bezier(0.25,0.60,0.35,1)'
      }
  },
  plugins: [],
}
}