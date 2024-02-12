/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'md': {'max': '890px'},
    },
    extend: {},
  },
  plugins: [],
}
