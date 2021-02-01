module.exports = {
  target: 'static', // Default, not needed
  telemetry: true, // Default is to ask in CLI, set to false if you want
  components: true, // Default, not needed?
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'Blue Star Online Training',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'green',
    height: '5px',
    continuous: true,
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vuelidate', '~/plugins/quizPlugin'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt/components
    '@nuxt/components',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: true,
    baseURL: process.env.BASE_URL || undefined,
  },
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/options
   */
  auth: {
    scopeKey: 'roles',
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: false },
          logout: false,
          user: { url: '/users/me', method: 'get', propertyName: false },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        //autoFetchUser: true
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
        include: /(content\/quizzes)/,
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
    cache: true,
    hardSource: true,
    parallel: true,
  },
}
