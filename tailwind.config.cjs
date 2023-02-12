/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(100, 29%, 50%)',
        'light-grayish-cyan-bg': 'hsl(180, 52%, 96%)',
        'light-grayish-cyan-tbls': 'hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
      },
    },
  },
  plugins: [],
};
