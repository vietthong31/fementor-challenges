/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,css}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
        green: 'hsl(159, 69%, 38%)',
        red: 'hsl(14, 86%, 42%)',
      },
    },
  },
  plugins: [],
};
