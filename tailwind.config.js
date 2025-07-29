/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#010312",
        thunder: "#E8FFFF",
      },
    },
  },
  plugins: [],
};
