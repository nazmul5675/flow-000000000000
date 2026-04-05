/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f7f4", // warm off-white
        foreground: "#1a1a1a", // near-black
        accent: "#000000",
        muted: "#71717a",
        border: "rgba(0,0,0,0.1)",
        card: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Funnel Display", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
}
