/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screen: {
      sm: "480px",
      bmd: "600px",
      md: "768px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkShade: "#212121",
        lightShade: "#fafafa",
        playground: "#E0E0E0",
        transluscent: "rgba(255,255,255,0.05)",
        opaque: "#B8B8B8",
      },
    },
  },
  plugins: [],
};
