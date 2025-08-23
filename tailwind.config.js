// tailwind.config.js
module.exports = {
  darkMode: 'class',  // <-- THIS LINE IS CRITICAL
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
