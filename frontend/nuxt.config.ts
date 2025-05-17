// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/icon", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    // 公開變數（客戶端可用）
    public: {
      BACKEND_BASE_URL: process.env.NUXT_PUBLIC_BACKEND_BASE_URL,
      FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL,
    },
  },
  devServer: {
    port: 4000,
  },
});
