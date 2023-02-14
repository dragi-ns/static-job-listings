/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'dark-cyan': 'hsl(180, 29%, 50%)',
        'light-grayish-cyan-bg': 'hsl(180, 52%, 96%)',
        'light-grayish-cyan-tbls': 'hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
      },
      backgroundImage: {
        'header-desktop': "url('../images/bg-header-desktop.svg')",
        'header-mobile': "url('../images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
