/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'purple': '#5D5A88',
      'purple-ph': '#ADABC3',
      'purple-bg': '#F2F1FA',
      'white': '#ffffff'
    },
    fontSize: {
      'h1': '56px'
    },
    backgroundImage: {
      'login-register': "url('./assets/images/loginRegister.jpg')",
    }
  },
  plugins: [],
};
