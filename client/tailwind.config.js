/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif']
      },
      colors: {
        main: '#5BE9FD',
        'main-hover': '#6DEDFF',
        'main-active': '#4BDAEE',
        secondary: '#8FB3E8'
      }
    },
  },
  plugins: [],
}

