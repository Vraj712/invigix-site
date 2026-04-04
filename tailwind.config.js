/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // (Your existing colors... surface, primary, etc.)
      animation: {
        'wave': 'wave linear infinite',
        // --- ADD THESE NEW ANIMATIONS ---
        'underline-draw': 'underline-draw 1.5s ease-out forwards', // Drawing effect
        'floating-reverse': 'floating-reverse 4s ease-in-out infinite', // reverse float for nodes
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // seamless loop needs -50%
        },
        // --- ADD THESE NEW KEYFRAMES ---
        'underline-draw': {
          '0%': { 'stroke-dashoffset': '1000' }, // path length (needs to be high) is offset 100% (invisible)
          '100%': { 'stroke-dashoffset': '0' }, // drawn 100% (fully visible)
        },
        'floating-reverse': {
          '0%, 100%': { transform: 'translateY(-10px) rotate(-1deg)' },
          '50%': { transform: 'translateY(10px) rotate(1deg)' },
        }
      },
    },
  },
  plugins: [],
}