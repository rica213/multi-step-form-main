/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-mobile': "url('../assets/images/bg-sidebar-mobile.svg')",
      }
  }
  },
  plugins: [],
}
