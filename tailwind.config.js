/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        icons: "90px 20px",
      },
    },
    fontFamily: {
      h1: ["Lobster"],
    },
  },
  plugins: [],
};
