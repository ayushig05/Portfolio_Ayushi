/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
        greatVibes: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};
