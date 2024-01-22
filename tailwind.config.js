/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "payne-gray": "#57698a",
        "columbia-blue": "#b4c5ce",
        "slate-gray": "#738b9d",
        melon: "#f2bdb3",
        charcoal: "#2a424d",
      },
      fontFamily: {
        metropolis: ["Metropolis", "sans-serif"],
        ptserif: ["PT-Serif", "serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
