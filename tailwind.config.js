/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#08293D",
        secondary: "#0d9488",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
