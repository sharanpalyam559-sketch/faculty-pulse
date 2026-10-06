/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#173d35",
        mint: "#eaf5ef",
        cream: "#f7f7f2",
        ink: "#17231f",
        muted: "#718079",
        line: "#dce5df",
        gold: "#d7a84c"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23,61,53,.10)",
        card: "0 8px 28px rgba(23,61,53,.08)"
      }
    }
  },
  plugins: []
};