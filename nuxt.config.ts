// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    '~/assets/css/oscarstyle.css',
  ],
  nitro: {
    preset: 'firebase'
  },
  ssr: false,
  target: 'static',
  generate: {
    routes: [
      '/',
      '/links',
      '/funfacts',
      '/resume'
    ]
  }
  
})
