export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'ru',
    },
  },
  app: {
    baseURL: '/prod/',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@nuxt/image',
    '@nuxtjs/strapi',
    '@nuxt/content',
    'tailwind-svg-icon',
    '@pinia-plugin-persistedstate/nuxt',
    '@formkit/auto-animate/nuxt',
    'nuxt-schema-org',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
  ],

  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },

  imports: {
    dirs: ['stores'],
  },

  build: {
    transpile: ['vue-toastification'],
  },

  css: ['vue-final-modal/style.css'],

  experimental: {
    componentIslands: true,
  },
  sitemap: {
    xsl: false,
    enable: true,
  },
  devtools: {
    enabled: true,
  },
  ssr: false,
})
