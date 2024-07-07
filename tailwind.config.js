/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saira': ['Saira', 'sans-serif'],
      },
      rotate: {
        '360': '360deg',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #d90a2c 1.05%, #730000 100%)',
      },
    },
  },
  plugins: [],
}

