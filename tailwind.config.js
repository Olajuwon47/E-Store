/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Covers all JS/TS files in src (no need for redundant entries)
    "!./node_modules/**" // Explicitly excludes node_modules
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
