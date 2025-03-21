/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #f472b6, 0 0 10px #f472b6' },
          '50%': { boxShadow: '0 0 10px #f472b6, 0 0 10px #f472b6' },
        },
      },
    },
  },
  plugins: [
    // require('flowbite')
  ],
}