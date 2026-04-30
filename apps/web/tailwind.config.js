/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f2f5f9',
          100: '#e1e8f2',
          200: '#c8d5e7',
          300: '#a3bad6',
          400: '#7598c0',
          500: '#5579a8',
          600: '#43618f',
          700: '#384e75',
          800: '#314261',
          900: '#2b3952',
          950: '#1d2536',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
    },
  },
  plugins: [],
}
