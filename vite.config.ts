import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // 1. Client-side build target
    build: {
      target: "es2022",
    },
    // 2. SSR-side build target (where your error is happening)
    ssr: {
      target: "node22",
    },
    // 3. The underlying esbuild configuration
    esbuild: {
      target: "es2022",
      include: /\.(ts|tsx|js|jsx)$/,
    },
    // 4. Pre-bundling configuration
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022",
      },
    },
  },
});