/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
          colors: {
            'blue': '#006fbb',
            'blue-light': '#0095ff',
            'blue-pale': 'rgba(113, 125, 146, 0.2)',
            'yellow': '#ffd700',
            'yellow-dark': '#e6c300',
            'black-300': '#333333'
          },
          fontFamily: {
            'mulish': ['Mulish', 'sans-serif']
          }
        }
      }
    corePlugins: {
      preflight: false, // Disable Tailwind's base/reset styles
      container: false, // Disable container utility
      // Add other plugins as needed, e.g.:
      // display: false,
      // margin: false,
    },
    plugins: [],
  }