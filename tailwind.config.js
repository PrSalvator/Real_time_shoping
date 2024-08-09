/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('@/assets/images/main.jpg')",
      },
      fontSize: {
        button: "28px",
        h1: "32px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        yellow: "#FFF61E",
        "light-yellow": "#FFF85B",
        "dark-gray": "#373636",
        gray: "#6E6A6A",
      },
    },
  },
  plugins: [],
};
