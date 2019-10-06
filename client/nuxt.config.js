require('dotenv').config()
const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

module.exports = {
  mode: 'spa', // Comment this for SSR

  srcDir: __dirname,

  env: {
    apiUrl: process.env.API_URL || process.env.APP_URL + '/api',
    appName: process.env.APP_NAME || 'Laravel Nuxt',
    appLocale: process.env.APP_LOCALE || 'en',
    githubAuth: !!process.env.GITHUB_CLIENT_ID,
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY || '',
    PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER || '',
  },

  axios: {
    baseURL: process.env.apiUrl
  },

  proxy: {
    '/api/': {
      target: process.env.APP_URL,
      pathRewrite: {
        '^/api/': ''
      }
    }
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  loading: { color: '#06E254', height: '5px' },

  router: {
    middleware: ['locale', 'check-auth'],
  },

  css: [
    { src: '~assets/sass/app.scss', lang: 'scss' }
  ],

  plugins: [
    '~components/global',
    '~plugins/i18n',
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/fontawesome',
    '~plugins/vuetify',
    '~plugins/notification',
    '~plugins/laravel-echo',
    '~plugins/nuxt-client-init', // Comment this for SSR
  ],

  modules: [
    // '@nuxtjs/router',
    '@nuxtjs/axios'
  ],

  build: {
    extractCSS: true
  },

  hooks: {
    generate: {
      done (builder) {
        // Copy dist files to public/_nuxt
        if (builder.nuxt.options.dev === false && builder.nuxt.options.mode === 'spa') {
          const publicDir = join(builder.nuxt.options.rootDir, 'public', '_nuxt')
          removeSync(publicDir)
          copySync(join(builder.nuxt.options.generate.dir, '_nuxt'), publicDir)
          copySync(join(builder.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
        }
      }
    }
  }
}