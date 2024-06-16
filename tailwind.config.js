/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FAFAFA",
          foreground: "#FFFFFF",
          textBlue: "#0095F6",
          black: "#000000",
          white: "#FFFFFF",
          red: "#FF0034",
          text: "#000000",
          icon: "#424242",
          border: "#D9D9D9",
        },
        dark: {
          text: "#F3F5F7",
          background: "#0A0A0A",
          icon: "#CCCCCC",
          foreground: "#181818",
          white: "#FFFFFF",
          black: "#000000",
          textBlue: "#0095F6",
          red: "#FF0034",
          border: "#383939",
        },
      },
    },
  },
  plugins: [],
};
