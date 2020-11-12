module.exports = {
  theme: {
    extend: {
      boxShadow: {
        banner: '0px 2px 15px rgba(1,1,1,1)',
      },
      width: {
        logo: '300px',
      },
      fontFamily: {
        acgov: ['Lucida Sans Unicode', 'Lucida Grande', 'sans-serif'],
      },
      fontSize: {
        body: '14px',
        banner: '25px',
        icon: '6rem',
      },
      backgroundOpacity: {
        90: '0.9',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
