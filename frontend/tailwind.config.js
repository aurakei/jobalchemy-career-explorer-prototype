// frontend/tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Bring back default fonts, spacing scale, etc.
    ...defaultTheme,

    extend: {
      colors: {
        // Re‑add the built‑in palette (white, gray, ... )
        ...colors,

        // Your custom palette
        brand: {
          light: "#E8F6F3",
          DEFAULT: "#007C91",
          dark: "#004D61",
        },
        accent: "#9C27B0",
      },
      fontFamily: {
        // Make sure font‑sans exists
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
