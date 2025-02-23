import axios, { type AxiosInstance } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const apiClient: AxiosInstance = axios.create({
    baseURL: config.public.pokemonApiUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  nuxtApp.provide("axios", apiClient);
});
