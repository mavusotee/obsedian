import { Host_Grotesk } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Host_Grotesk: ["Host Grotesk", "sans-serif"], 
      space_grotesk: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
