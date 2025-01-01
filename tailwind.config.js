/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#718C65",
          100: "#F5FAF2",
          200: "#E1EBDD",
          300: "#D1E0CA",
          400: "#9EB893",
          500: "#718C65",
          600: "#516947",
          700: "#3D5432",
          800: "#273B1E",
          900: "#16290E",
        },
      },
    },
  },
  plugins: [],
};
