import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: "3000-minhtri06ltr-web30-ux3bldiba3n.ws-us34.gitpod.io/:3000",
      port: 3000,
      protocol: "wss",
    },
  },
});
