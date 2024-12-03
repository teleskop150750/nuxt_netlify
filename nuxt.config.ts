// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  debug: true,
  sourcemap: true,
  vite: {
    build: {
      minify: false,
    },
  },
});
