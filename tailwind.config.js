/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(198, 62%, 26%)",
        yellow: "hsl(51, 100%, 49%)",
        "green-dark": "hsl(167, 40%, 24%)",
        "green-light": "hsl(167, 34%, 31%)",
        "green-lighter": "hsl(167, 34%, 61%)",
        "navbar-color": "hsl(200, 100%, 62%)",
      },
    },

    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
  },
  plugins: [],
};
