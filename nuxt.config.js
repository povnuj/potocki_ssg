import { EN, UA, PL } from "./locales/i18n.js";
export default {
  //server:{host:'0'},
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: "universal", 
  head: {
    title: "Webmil",
    htmlAttrs: {
      lang: "ua",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "We offer services for established businesses and startups, such as digital solutions for iOS, Android, and the web. Contact us: info@webmil.eu" },
      { name: "format-detection", content: "telephone=no" },
    ],
   
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/Mixitup.client.js", mode: "client", ssr: false },
    { src: "~/plugins/swiper", mode: "client", ssr: false },
    { src: "~/plugins/vue-paystack", ssr: false },
    { src: "~/plugins/bootstrap", ssr: false},
   
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxt/image",
    "@nuxtjs/i18n",
    ],
     i18n:{
      /* detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "i18n_redirected",
        //redirectOn: "root", // recommended
      }, */
      locales: ["en", "ua", "pl"],
      strategy: 'prefix',
      seo: false,
      defaultLocale: "ua",
      vueI18n: {
        fallbackLocale: "ua",
        messages: {
          en: EN,
          ua: UA,
          pl: PL,
        },
      },
    },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: process.env.BASE_URL || 'http://localhost:8080', 
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000', 
    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    crawler: false,
    fallback: '404.html',
  },
};
