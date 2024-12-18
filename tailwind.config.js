/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131232",
        secondary: "#EBEBEB",
        default: "#262626",
        gray: "#666782",
      },
    },
  },
  plugins: [],
};
