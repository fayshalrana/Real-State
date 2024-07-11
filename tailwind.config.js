/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      colors: {
        primary: "#4a60a1",
        dark: "#1C222B",
        secondary:"#889099"
      },
      padding: {
        22: "100px",
      },
      margin: {
        22: "100px",
      },
      borderRadius: {
        complete: "50%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "3xl": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
