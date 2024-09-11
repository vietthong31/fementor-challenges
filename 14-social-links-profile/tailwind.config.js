/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)',
        },
        green: {
          DEFAULT: 'hsl(75, 94%, 57%)',
        },
      },
    },
  },
  plugins: [],
};
