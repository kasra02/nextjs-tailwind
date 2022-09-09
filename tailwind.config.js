/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        'design2-dark-cyan': "#3C8067",
        'design2-cream': "#F2EAE2",
        'design2-very-dark-blue': "#1C232B",
        'design2-Dark-grayish-blue': "#6B7189",
      },
      fontFamily: {
        fraunces: ["Fraunces", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
