/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        key: "0px 6px 0px 0px rgba(0,0,0,1)",
        board: "0px 12px 0px 2px rgba(0,0,0,1)",
        target: "0px 6px 0px 0px rgba(245,158,11)",
      },
      textColor: {
        app: "#242424",
      },
    },
  },
  plugins: [],
};
