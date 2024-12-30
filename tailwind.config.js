/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2A9D8F",
        secondary: "#DFAF2B",
        accent: "#E76F51",
      },
    },
  },
  plugins: [],
};
