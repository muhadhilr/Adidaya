/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'green': '#00848C',
      'green-ph': '#ADABC3',
      'green-bg': '#F2F1FA',
      'white': '#ffffff'
    },
    fontSize: {
      'h1': '56px',
      'h2': '40px',
      'h3': '32px',
      'h4': '20px',
      'p1': '18px',
      'p2': '12px',
      'p3': '10px'
    },
    backgroundImage: {
      'login-register': "url('./assets/images/loginRegister.jpg')",
    }
  },
  plugins: [],
};
