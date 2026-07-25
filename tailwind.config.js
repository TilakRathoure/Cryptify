/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        cryptify: {
          bg: "#000000",
          accent: "#fde047",
          chart: "#0aabcf",
          muted: "#a3a3a3",
        },
        up: "#22c55e",
        down: "#ef4444",
      },
      boxShadow: {
        card: "0 10px 28px rgba(255, 255, 255, 0.08)",
        glow: "0 0 24px rgba(253, 224, 71, 0.16)",
      },
    },
  },
  plugins: [],
};
