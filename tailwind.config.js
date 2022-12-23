module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'grey': {
        100: '#f7f7f7',
        200: '#ced4da',
        300: '#6c757d',
        400: '#212529'
      },
      'blue': {
        100: '#cee7f8',
        200: '#104c75',
        300: '#0e4163',
        400: '#0d3d5e',
        500: '#04131d'
      },
      'dirty-blue': '#88a6ba'
    },
    fontFamily: {
      'body-sans-serif': [
        'system-ui',
        '-apple-system',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '"Noto Sans"',
        '"Liberation Sans"',
        'Arial,sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      'bootstrap': ['bootstrap-icons']
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    container: {
      center: true,
      'padding': '.75rem'
    },
    extend: {
      aria: {
        currPage: 'current="page'
      }
    }
  },
  plugins: [],
}
