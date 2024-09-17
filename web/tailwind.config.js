/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [],
};
