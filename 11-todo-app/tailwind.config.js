/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "2px 2px 1rem 1rem rgba(0, 0, 0, 0.07)",
      },
      backgroundImage: {
        "desktop-light": "url('./assets/bg-desktop-light.jpg')",
        "desktop-dark": "url('./assets/bg-desktop-dark.jpg')",
        "mobile-light": "url('./assets/bg-mobile-light.jpg')",
        "mobile-dark": "url('./assets/bg-mobile-dark.jpg')",
      },
      colors: {
        primary: {
          blue: "hsl(220, 98%, 61%)",
          from: "hsl(192, 100%, 67%)",
          to: "hsl(280, 87%, 65%)",
        },
        light: {
          blue: {
            veryLightGrayish: "hsl(236, 33%, 92%)",
            lightGrayish: "hsl(233, 11%, 84%)",
            darkGrayish: "hsl(236, 9%, 61%)",
            veryDarkGrayish: "hsl(235, 19%, 35%)",
          },
          gray: {
            DEFAULT: "hsl(0, 0%, 98%)",
          },
        },
        dark: {
          blue: {
            veryDark: "hsl(235, 21%, 11%)",
            veryDarkDesaturated: "hsl(235, 24%, 19%)",
            lightGrayish1: "hsl(234, 39%, 85%)",
            lightGrayish2: "hsl(236, 33%, 92%)",
            darkGrayish: "hsl(234, 11%, 52%)",
            veryDarkGrayish1: "hsl(233, 14%, 35%)",
            veryDarkGrayish2: "hsl(237, 14%, 26%)",
          },
        },
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      flexBasis: {
        fit: "fit-content",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last-of-type", "&:not(:last-of-type)");
    }),
  ],
};
