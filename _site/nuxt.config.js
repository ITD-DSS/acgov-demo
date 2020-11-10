export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,
  static: {
    prefix: false,
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    //   title: 'Early Care & Education Planning Council - Alameda County',
    meta: [
      { charset: 'utf-8' },
      // <meta http-equiv="X-UA-Compatible" content="IE=edge">
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      // },
    ],
    bodyAttrs: {
      class: ['container', 'font-sans', 'text-body'],
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '@/static/ece/css/main.css',
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/sanity',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  sanity: {
    minimal: true,
    // projectId: 'ehhijqba',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  generate: {
    dir: 'ece-test',
  },
  // buildDir: 'ece-test',
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // publicPath: '/ece-test',
  },
}
