/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#d40d9a',
        'secondary': 'rgb(146, 212, 59)',
      },
      backgroundColor: {
        'primary': '#d40d9a',
        'secondary': 'rgb(146, 212, 59)',
      },
    },
  },
  plugins: [],
}

