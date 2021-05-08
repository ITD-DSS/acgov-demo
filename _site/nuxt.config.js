import dotenv from 'dotenv'
// import find from 'find-up'
// export const findEnv = () => find.sync(process.env.ENV_FILE || '.env')

dotenv.config()

const sanityBaseConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  // TODO: WORK WITH PROD AND DEVELOPEMENT DATASETS : MAYBE MOVE TO ENV VARIABLE
  dataset:
    process.env.NODE_ENV !== 'production' ? 'development' : 'development',
}

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,
  // static: {
  //   prefix: false,
  // },
  privateRuntimeConfig: {
    sanity: {
      token: process.env.SANITY_NUXT_TOKEN,
    },
    // SanityPreviewToken: process.env.SANITY_NUXT_TOKEN,
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
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
      class: ['container', 'font-acgov', 'text-body'],
    },
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '@/static/ece/css/main.css',
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/preview.client.js',
    // '@/plugins/sanity.server.js',
    '@/plugins/sanity-image-builder.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    { path: '~/node_modules/vuetensils/src/components', global: true },
    { path: '~/components', global: true },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity/module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  sanity: {
    ...sanityBaseConfig,
    useCdn: true,
    withCredentials: true,
    additionalClients: {
      previewClient: {
        ...sanityBaseConfig,
        useCdn: false,
        withCredentials: true,
      },
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  generate: {
    fallback: true,
  },
  // buildDir: 'ece-test',
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // publicPath: '/ece-test',
  },
}
