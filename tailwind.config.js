/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'linear-gradient(90deg, rgba(15,23,42,1) 0%, rgba(22,32,50,1) 56%, rgba(30,41,59,1) 100%)',
        'hover-gradient': 'linear-gradient(90deg, rgba(30,41,59,1) 10%, rgba(71,85,105,1) 100%)',
      },
    },
  },
  plugins: [],
}
