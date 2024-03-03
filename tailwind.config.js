// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealOrangeBlue: "#233b66",
        darkOrange: "#C4421A",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
