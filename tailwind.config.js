/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#112949",
      secondary: "#3CC3F2",
      accent: {
        DEFAULT: "#EA7B2C", // This is the base accent color
        light: "#F0A072", // Light shade of accent
        dark: "#B15821", // Dark shade of accent
        // Add more shades as needed
      },
      shadow: "#ABABAB",
      white: "#FFFFFF",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
