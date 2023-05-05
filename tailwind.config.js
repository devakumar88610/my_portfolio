/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        primary100: '#6d28d9',
        primary200: '#5b21b6',
        primary300: '#4c1d95',
        primary400: '#3a1672',
        primary500: '#240e47',
        primarydark: '#16092c',
        secondary: '#ffb200',
        primarylight: "#F4F7FE",

      },

      shadow: {
        500: "rgba(112, 144, 176, 0.08)",
      },
    },

  },
  plugins: [],
}