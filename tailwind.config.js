module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        providedDesktop: '1440px',
      },
      colors: {
        providedOrange: 'hsl(25, 97%, 53%)',
        lightGrey: 'hsl(217, 12%, 63%)',
        mediumGrey: 'hsl(216, 12%, 54%)',
        darkBlue: 'hsl(213, 19%, 18%)',
        veryDarkBlue: 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        opReg: ['Overpass'],
      },
    },
  },
  plugins: [],
};
