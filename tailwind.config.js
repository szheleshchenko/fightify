/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        md: '2rem',
        DEFAULT: '1rem'
      },
      screens: {
        lg: '1320px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Anton', 'sans-serif']
      },
    }
  },
  plugins: [],
}
