/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'Roboto', 'Inter', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        blue: 'hsl(209, 23%, 22%)',
        background: {
          light: 'hsl(0, 0%, 98%)',
          dark: 'hsl(207, 26%, 17%)'
        },
        text: {
          light: 'hsl(200, 15%, 8%)',
          dark: 'hsl(0, 0%, 98%)'
        }
      },
      screens: {
        mobile: { max: '420px' },
        md: { min: '421px', max: '811px' }
      }
    }
  },
  darkMode: 'selector',
  plugins: []
}
