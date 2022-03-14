import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: "https://krypt-web.netlify.app/",
      port: 3000,
      protocol: "wss",
    },
  },
});
