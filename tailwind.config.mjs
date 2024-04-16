/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4F9E2D",
        contrast: "#2A2B2C",
      },
    },
  },
  plugins: [],
};
