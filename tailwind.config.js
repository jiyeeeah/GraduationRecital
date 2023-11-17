/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["8px", "12px"],
      },
      fontFamily: {
        UhBeeSeHyunBold: ["UhBeeSeHyunBold"],
        SCoreDream4: ["SCoreDream4"],
      },
    },
  },
  plugins: [],
};
