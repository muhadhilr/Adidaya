/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'green': '#96A50C',
      'green-ph': '#ADABC3',
      'green-bg': '#EFF1F1',
      'white': '#ffffff',
      'orange': '#D47823'
    },
    fontSize: {
      'h1': '56px',
      'h2': '40px',
      'h3': '32px',
      'h4': '20px',
      'sh': '30px',
      'p1': '18px',
      'p2': '16px',
      'p3': '12px',
      'p4': '10px'
    },
    fontFamily: {
      'bold': ['Bold', 'sans-serif'],
      'extraBold': ['ExtraBold', 'sans-serif'],
      'medium': ['Medium', 'sans-serif'],
      'regular': ['Regular', 'sans-serif']
    }
  },
  plugins: [],
};
