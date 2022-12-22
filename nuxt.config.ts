// https://nuxt.com/docs/api/configuration/nuxt-config

const IS_PROD = process.env.NODE_ENV === 'production'
const IS_DEV = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Home',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: '家园网' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  build: {
    transpile: IS_PROD ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer'] : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include: IS_DEV ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : []
    }
  }
})
