// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 4321, // O el puerto que estés usando
    host: true,
  },
  vite: {
    server: {
      allowedHosts: ["a31c4ef81ee5.ngrok-free.app"],
    },
  },
});
