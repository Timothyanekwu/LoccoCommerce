/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          "0%, 100%": { backgroundColor: "#E9E9E9" },
          "50%": { backgroundColor: "#F5F5F5" },
        },
      },
      animation: {
        colorChange: "colorChange 2s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Hide scrollbar for Chrome, Safari, and Opera
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        // Hide scrollbar for IE, Edge, and Firefox
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        // Custom scrollbar styles
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "4px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#C9C9C9" /* Change color */,
          borderRadius: "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#999999" /* Hover color */,
        },
      });
    },
  ],
};
