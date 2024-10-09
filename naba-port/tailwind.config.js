/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "20px 20px #e0e0e0",
        about: "-20px 20px #e0e0e0",
        about1: "-200px 0px 80px #e0e0e0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-200%)" },
          "75%": { transform: "translateX(-300%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        move: "move 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
