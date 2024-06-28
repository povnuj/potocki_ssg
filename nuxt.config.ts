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
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  },
  // alias:{
  //   // "~": "/",
  //   // "@": "~/",
  //   "~~": "/<rootDir>",
  //   "@@": "/<rootDir>",
  //   "@assets": "./assets",
  //   "public": "/<srcDir>/public"
  // },
  ssr: true,
  app: {
    //baseURL: ,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '',
      
    }
  },
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
    customRoutes: 'config', // disable custom route with page components
    pages: {
      events: {
        ua: '/ua/events', // -> accessible at /about-us (no prefix since it's the default locale)
        en: '/en/events', // -> accessible at /fr/a-propos
        pl: '/pl/events' // -> accessible at /es/sobre
      },
      event: {
        ua: '/ua/event', // -> accessible at /about-us (no prefix since it's the default locale)
        en: '/en/event', // -> accessible at /fr/a-propos
        pl: '/pl/event' // -> accessible at /es/sobre
      }
    },
    

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