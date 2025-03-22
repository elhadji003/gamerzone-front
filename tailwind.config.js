/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      darkMode: "class",
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #f472b6, 0 0 10px #f472b6" },
          "50%": { boxShadow: "0 0 10px #f472b6, 0 0 10px #f472b6" },
        },
      },
      colors: {
        "neon-green": "#39FF14",
        "neon-purple": "#9D00FF",
        "neon-red": "#FF3131",
      },
      dropShadow: {
        neon: "0 0 6px #ec4899",
        neonGreen: "0 0 6px #39FF14", // 👈 Ajout ici
        neonWhite: "0 0 6px rgb(255, 255, 255)", // 👈 Ajout ici
      },
    },
  },
  plugins: [
    // require('flowbite')
  ],
};
