// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', 'nuxt-cloudflare-analytics'],
  colorMode: {
    preference: 'light'
  },
  cloudflareAnalytics: {
    token: ''
  },
})
