export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '50px',
    },
    colors: {
      'blue': '#0965fb',
      'blue-light': '#5E9EFF',
      'gray-dark': '#273444',
      'black': '#000000',
      'white': '#ffffff',
      'red': '#d63031',
      'white-light': '#f3f3f3',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',

    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    extend: {
      keyframes: {
        showFull: {
          '0%': { height: '0%' },
          '100%': { height: '15rem' },
        }
      },
      animation: {
        'show-menu': 'showFull .3s linear',
      }
    },
  },
  plugins: [],
}