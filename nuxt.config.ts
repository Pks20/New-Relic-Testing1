// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  pages: true,
  modules: ["@nuxt/ui", "nuxt-lodash", "nuxt-swiper","nuxt-swiper"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      newRelicLicenseKey: process.env.NEW_RELIC_LICENSE_KEY,
      newRelicAppId: process.env.NEW_RELIC_APP_ID,
    }
  }
});