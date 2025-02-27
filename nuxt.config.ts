import theme from "./config/theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/tailwind.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@primevue/nuxt-module",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  colorMode: {
    preference: "light",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },
  primevue: {
    options: {
      theme: {
        preset: theme,
        options: {
          darkModeSelector: ".dark-mode",
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      pokemonApiUrl:
        process.env.NUX_PUBLIC_POKEMON_API_URL ??
        "https://pokeapi.co/api/v2/pokemon",
    },
  },
  fonts: {
    google: {
      families: {
        Lato: [400, 500, 600, 700, 800, 900],
      },
    },
  },
});
