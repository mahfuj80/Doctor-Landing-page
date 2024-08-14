// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/main.css"],
  app: {
    head: {
      link: [],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: "light",
  },

  googleFonts: {
    families: {
      Lato: true,
    },
    display: "swap", // Optional: This is a good practice to improve performance
  },
});
