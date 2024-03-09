/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'purple': '#00848C',
      'purple-ph': '#ADABC3',
      'purple-bg': '#F2F1FA',
      'white': '#ffffff'
    },
    fontSize: {
      'h1': '56px',
      'h2': '40px',
      'p1': '18px',
    },
    backgroundImage: {
      'login-register': "url('./assets/images/loginRegister.jpg')",
    }
  },
  plugins: [],
};
