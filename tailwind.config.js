/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGreen: "#189CA9",
        borderGrey: "#F1F1F1",
        greenBgGrey: "#F6F9FA",
      },
      fontFamily: {
        main: " 'Kumbh Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
