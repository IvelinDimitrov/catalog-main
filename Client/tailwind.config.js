/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
  },
  screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
  },
    colors:{
      'navi':'#F4F3E8',
      'green-tx':'#24582A',
      'background-color':"#D4E9CF",
      'testing':'#a4d298',
      'black-tx':'#000000',

      
    },
    extend: { maxHeight: {
      '128': '32rem',
    }},
  },
  plugins: [],
}