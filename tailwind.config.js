/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gri: "#E4E2D6",
        portocaliu: "#D35400",
        "albastru-inchis": "#162A2C",
      },
      height: {
        "screen-minusHeader": "calc(100vh - 56px)",
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(180deg, rgba(211, 84, 0, 0.63) 0%, rgba(170, 75, 9, 0.71) 2.60%, rgba(135, 67, 18, 0.79) 7.81%, rgba(81, 55, 30, 0.90) 13.54%, rgba(52, 49, 37, 0.90) 18.75%, rgba(22, 42, 44, 0.90) 23.44%)",
      },
    },
  },
  plugins: [],
};
