module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100': '450px',
      }
    },
    screens: {
      'ms': '320px',
      'mm': '375px',
      'ml': '425px',
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px',
    },
  },
  plugins: [],
}
