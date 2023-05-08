const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      black: ["pre-black"],
      bold: ["pre-bold"],
      light: ["pre-light"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#2F2F35",
      white: colors.white,
      pink: {
        300:"#FCEFEF",
        500: "#E05185"
      },
      gray: {
        500:"#878787",
        600:"#6C6C6C",
        200:"#EDEDED"
      },
      red: {
        500: "#EA5748"
      },
      orange: {
        500: "#EA824D"
      },
      amber: colors.amber,
      green: {
        500: "#69CCAB"
      },
      teal: colors.teal,
      blue: colors.blue,
      yellow: {
        500: "#FBB01A"
      },
      indigo: {
        900: "#00256e",
      },
      purple: colors.purple,
    },
    rounded: {
      md: ["5px"],
    },
    plugins: [],
  },
  plugins: [],
}
