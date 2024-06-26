// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // $production: {
  //    routeRules: {
  //      '/': { prerender: true }
  //    }
  // },
  $development: {
    devtools: { enabled: true },
  },

  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '',
      
    }
  },
  modules: ["@nuxtjs/i18n"],
  components: [
    {
      global: true,
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  i18n: {
    strategy: 'no_prefix',
    lazy: true,
    compilation: {
      strictMessage: false,
    },
    defaultLocale: 'en',
    langDir: './locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl.json'
      },
      {
        code: 'ua',
        iso: 'uk-UA',
        file: 'ua.json'
      }
    ]
  },
  
  
});