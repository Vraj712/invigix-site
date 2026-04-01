/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        // Your custom Coolors palette
        primary: "#28536b",   // Dark Slate Blue
        secondary: "#c2948a", // Dusty Rose
        accent: "#7ea8be",    // Light Blue
        surface: "#f6f0ed",   // Warm Off-white background
        muted: "#bbb193",     // Khaki / Muted Gold
        dark: "#173140",      // A darker version of primary for heavy text
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #28536b, #7ea8be)',
      }
    },
  },
  plugins: [],
}