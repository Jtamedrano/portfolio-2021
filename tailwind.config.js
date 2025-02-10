/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#718C65",
          50: "#f4f7f2",
          100: "#e5ebe0",
          200: "#cbd7c3",
          300: "#a5ba9b",
          400: "#718c65",
          500: "#5b7a4f",
          600: "#45603b",
          700: "#364d2f",
          800: "#2d3e27",
          900: "#253321",
          950: "#131c12",
        },
      },
    },
  },
  plugins: [],
};
