export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',


  // <link type="text/css" rel="stylesheet" href="/ece/main.css" />
	// <script src="/acgov.js" type="text/javascript"></script>
	// <script src="/ece/main.js" type="text/javascript"></script>
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Early Care & Education Planning Council - Alameda County',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alameda County General Services Agency Childcare Home Page' },
      { name: 'keywords', content: 'Alameda County Early Care & Education Planning Council, Council, Planning, Childhood, Early Childhood,  Needs, School, Schools, Proposition 10, Subsidized, Kids, Children, Commission, Community, Child, Child Care, Partnership, Ala-ASCC, Alameda Access to Subsidized Child Care, LINCC, Local Investment in Child Care, UASCC, Universal Access to Subsidized Child Care' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/static/css/main.css'
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
    projectId: 'ehhijqba'
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
