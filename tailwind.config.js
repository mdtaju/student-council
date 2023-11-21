/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#031F4B",
        lightGray: "#8386A8",
        black: "#212121",
        navyBlue: "#212177",
        white: "#fff",
        danger: "#CF2E2E",
        dark: "#222",
        sidebar: "rgb(226 232 240)",
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
