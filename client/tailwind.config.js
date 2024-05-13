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
      'blue': '#002D77',
      'green': "#00A607",
      'blue-light': '#5E9EFF',
      'gray-dark': '#273444',
      'black': '#000000',
      'white': '#ffffff',
      'red': '#ff0000',
      'white-light': '#f3f3f3',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-text': '#5A5A5A'

    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
      serif: ['"Merriweather"', 'serif'],
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
      },
      boxShadow: {
        'medium-shadow': "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        'light-shadow': "rgba(149, 157, 165, 0.2) 0px 8px 24px",

      },
      screens: {
        '1374px': '1385px',
        '1110px': '1110px',
      },
    },
  },
  plugins: [],
}