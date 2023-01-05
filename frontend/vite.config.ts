import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "",
  base: "",
  rewriteUrls: 'all',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./public/"),
      "~@": path.resolve(__dirname, "./public/"),
    },
  },
  server: {
    host: true,
    port: 8080,
  },
});
