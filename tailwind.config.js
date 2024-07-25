/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      backgroundColor: {
        "custom-blue": "#012F47",
      },
      borderRadius: {
        option: "40px",
        button: "20px",
      },
    },
  },
  plugins: [],
};
