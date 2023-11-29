/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "real-screen": "calc(var(--vh) * 100)",
      },
      fontSize: {
        "3xs": ["10px", "10px"],
        "2xs": ["8px", "12px"],
      },
      fontFamily: {
        SCoreDream4: ["SCoreDream4"],
        GodoMaumR: ["godoMaum"],
        JustBreathe: ["JustBreathe"],
        JejuGamgyul: ["JejuGamgyul"],
        ICEJaram: ["iceJaram-Rg"],
        NanumJungHagSaeng: ["NanumJungHagSaeng"],
        GrandpaSharing: ["Grandpa_sharing"],
        Dokrip: ["Dokrip"],
        Daughter: ["Daughter_handwriting"],
        BKK: ["BookkMyungjo-Bd"],
        NPS: ["NPSfontBold"],
        GangWonModu: ["GangwonEdu_OTFBoldA"],
      },
      backgroundImage: {
        sea: "url('../assets/images/background/sea.jpeg')",
        paper: "url('../assets/images/background/KingLearBGTemp.jpeg')",
      },
    },
    minHeight: {
      "real-screen": "calc(var(--vh) * 100)",
    },
  },
  plugins: [],
};
