// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customYellow: '#e2a400',
        customBlack: '#21243d',
      },
      borderColor: {
        customYellow: '#e2a400',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
