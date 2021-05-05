module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'smm' : '300px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
