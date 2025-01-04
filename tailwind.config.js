/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        servImg: "url('./assets/img/Vector 15.png')",
      },
      backgroundColor: {
        bodyColor: "#1A1819",
      },
    },
  },
  plugins: [],
};
