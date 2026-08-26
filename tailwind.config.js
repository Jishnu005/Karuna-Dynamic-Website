/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF5EA",
        "ivory-deep": "#F3E9D6",
        teal: "#164E4A",
        "teal-deep": "#0E3634",
        rose: "#C1577A",
        "rose-soft": "#EFD4DD",
        brass: "#B08D57",
        navy: "#1E2A38",
        ink: "#2A2521",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      boxShadow: {
        soft: "0 20px 50px -25px rgba(20,30,30,.35)",
      },
    },
  },
  plugins: [],
};
