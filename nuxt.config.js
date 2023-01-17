export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],

    script: [{ src: "https://apps.elfsight.com/p/platform.js", defer: true }],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://use.typekit.net/msq0hqi.css",
      },
    ],
  },
  env: {
    CRYSTALLIZE_TENANT_IDENTIFIER: process.env.CRYSTALLIZE_TENANT_IDENTIFIER,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_TO: process.env.EMAIL_TO,
    HOST: process.env.HOST,
  },
  target: "server",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [`~/assets/main.scss`],
  server: {
    host: "0",
  },
  layoutTransition: {
    name: "layout",
    mode: "out-in",
  },
  pageTransition: {
    name: "page",
    mode: "out-in",
    beforeEnter(el) {
      console.log("Before enter...");
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/gtm"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  /*
   ** Server middleware
   */
  serverMiddleware: [
    { path: "/api", handler: "~/api/message.js" },
    { path: "/api", handler: "~/api/message-attach.js" },
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/gtm",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  gtm: {
    id: "GTM-WVSFDMX",
    enabled: true,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
