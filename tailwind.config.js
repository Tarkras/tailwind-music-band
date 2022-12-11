module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'black': '#000', // checkbox border (with opacity) and hamburger button border (with opacity)
      'white': '#fff',
      'grey': '#6c757d',
      'grey-light': '#f7f7f7', // Body and checkbox
      'blue': {
        100: '#cee7f8', // Secondary
        200: '#104c75', // Primary, button no hover, border cards, border footer, navbar active, menu hamburguesa
        300: '#0e4163', // Button hover bg
        400: '#0d3d5e', // Button border
        500: '#04131d' // Link hover
      }
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
      ]
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
    }
  },
  plugins: [],
}
