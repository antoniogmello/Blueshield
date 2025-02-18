export default defineNuxtConfig({
  ssr: true, // Habilita SSR
  modules: ["@nuxt/image"],
  image: {
    domains: ["blueshield.pt", "localhost:5173"], // Domínios permitidos
  },
});
