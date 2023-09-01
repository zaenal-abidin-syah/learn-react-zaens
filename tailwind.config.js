/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./learn-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00df9a",
        // primary: "#8b5cf6",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
}

