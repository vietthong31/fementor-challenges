/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: 'hsl(61, 70%, 52%)',
        },
        red: {
          DEFAULT: 'hsl(4, 69%, 50%)',
        },
        slate: {
          100: 'hsl(202, 86%, 94%)',
          300: 'hsl(203, 41%, 72%)',
          500: 'hsl(200, 26%, 54%)',
          700: 'hsl(200, 24%, 40%)',
          900: 'hsl(202, 55%, 16%)',
        },
      },
    },
  },
  plugins: [],
};
