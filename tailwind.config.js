/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#07110f',    // Your deep dark green
        brandCream: '#e1dcd6', // Your cream text
        brandGold: '#d4af37',  // Your gold accents
      },
    },
  },
  plugins: [],
}