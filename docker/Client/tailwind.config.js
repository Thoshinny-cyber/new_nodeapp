/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'buttonblue' : '#015572',
      },
      fontFamily:{
        merriweather : ["Merriweather Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}