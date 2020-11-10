module.exports = {
  theme: {
    boxShadow: {
      banner: '0px 2px 15px rgba(1,1,1,1)',
    },
    width: {
      logo: '300px',
    },
    fontSize: {
      banner: '25px',
      body: '14px',
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
