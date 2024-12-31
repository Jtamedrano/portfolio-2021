/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#80422A",
          100: "#80422A",
          200: "#80422A",
          300: "#80422A",
          400: "#802A2A",
          500: "#80422A",
          600: "#80342A",
          700: "#802A2A",
          800: "#802A42",
          900: "#802A80",
        },
        secondary: "#4A802A",
        tertiary: "#2A3380",
      },
    },
  },
  plugins: [],
};
