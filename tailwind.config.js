/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh",
      },
      fontSize: {
        "2xs": ["8px", "12px"],
      },
      fontFamily: {
        UhBeeSeHyunBold: ["UhBeeSeHyunBold"],
        SCoreDream4: ["SCoreDream4"],
        GodoMaumR: ["GodoMaumR"],
      },
    },
  },
  plugins: [],
};
