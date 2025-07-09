/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(198, 62%, 26%)',
        yellow: 'hsl(51, 100%, 49%)',
      },
    },

    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      fraunces: ['Fraunces', 'serif']
    }
  },
  plugins: [],
}