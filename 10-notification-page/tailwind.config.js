/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        red: "hsl(1, 90%, 64%)",
        blue: {
          DEFAULT: "hsl(219, 85%, 26%)",
          veryDark: "hsl(224, 21%, 14%)",
        },
        grayishBlue: {
          DEFAULT: "hsl(219, 14%, 63%)",
          1: "hsl(211, 68%, 94%)",
          2: "hsl(205, 33%, 90%)",
          dark: "hsl(219, 12%, 42%)",
          veryLight: "hsl(210, 60%, 98%)",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
