/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : {
          "600" : "#483A46",
          "500" : "#8E576F",
          "200" : "#B3738F",
          "100" : "#D9D9D9",
          "50" : "#F2F1F6"
        },
        sky : {
          "100" : "#A3D3EE"
        },
      }
    },
    screens: {
      'sm': '640px',
      'md': '820px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
