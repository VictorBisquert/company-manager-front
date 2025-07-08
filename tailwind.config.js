/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-regular": ["Inter-Regular", "sans-serif"],
        "inter-light": ["Inter-Light", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-semi-bold": ["Inter-SemiBold", "sans-serif"],
        "inter-italic": ["Inter-Italic", "sans-serif"],
        "inter-thin": ["Inter-Thin", "sans-serif"],
      },
      colors: {
        "gray-company": "#D9D9D9",
        "blue-company": "#002264",
        "red-company": "#A50631",

        "gray-1": "#808080",
      },
    },
  },
  plugins: [],
};
