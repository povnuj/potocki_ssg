// https://nuxt.com/docs/api/configuration/nuxt-config

import { vueI18nConfigs } from "#build/i18n.options.mjs";
import i18nConfig from "./locales/i18n.config";

export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },
  },
  runtimeConfig: {
    public: {
        VUE_APP_API: process.env.VUE_APP_API,
    },
  },

  ssr: true,
  pages: true,
  app: {
   // baseURL: '/',
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/cdfc9e48fb.js',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
          crossorigin: 'anonymous'
        },
      ],
    }
  },
 /* routeRules:{
    '/': { redirect: '/ua' },
  },*/
  modules: ["@nuxtjs/i18n", "vue3-carousel-nuxt"],
  components: [
    {
      global: true,
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
 
  i18n: {
    strategy: 'prefix',
    lazy: true,
    customRoutes: 'config', 
    // pages: {
    //   index:{
    //     ua: '/ua', 
    //     en: '/en', 
    //     pl: '/pl' 
    //   },
    //   events: {
    //     ua: '/ua/events', 
    //     en: '/en/events', 
    //     pl: '/pl/events' 
    //   },
    //   'events/:id': {
    //     ua: '/ua/events/:id', 
    //     en: '/en/events/:id', 
    //     pl: '/pl/events/:id' 
    //   }
    // },
    

    compilation: {
      strictMessage: false,
    },
    defaultLocale: 'ua',
    //vueI18n: 'i18n.config',
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