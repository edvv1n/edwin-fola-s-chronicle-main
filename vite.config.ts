import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    build: {
      target: "es2022", 
    },
    ssr: {
      target: "node22", // Since you've set your engine to Node 22
    }
  },
});