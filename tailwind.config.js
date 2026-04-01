/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // This applies the premium Agntix-style font to your whole website
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      // Your custom Invigix brand colors
      colors: {
        primary: "#4F46E5",   // Tailwind's indigo-600
        secondary: "#9333EA", // Tailwind's purple-600
        dark: "#111827",      // Tailwind's gray-900
        light: "#F8F9FA",     // The custom off-white background
      },
      // Custom gradient class for text and backgrounds
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #4F46E5, #9333EA)',
      }
    },
  },
  plugins: [],
}