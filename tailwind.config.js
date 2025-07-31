/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#0066CC',
        'secondary': '#FFD700',
        'accent': '#004499',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
};