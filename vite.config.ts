import { defineConfig } from "vite";

export default defineConfig({
  base: "/lit.dev/",
  plugins: [],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "esnext",
    outDir: "dist",
  },
});
