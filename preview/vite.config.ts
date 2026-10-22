import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const root = path.resolve(__dirname, "..");
export default defineConfig({
  root: __dirname,
  base: "./",
  plugins: [react()],
  css: { postcss: { plugins: [require("tailwindcss")({ config: path.join(root, "tailwind.config.ts") }), require("autoprefixer")] } },
  resolve: {
    alias: [
      { find: /^next\/link$/, replacement: path.join(__dirname, "shims/link.tsx") },
      { find: /^next\/navigation$/, replacement: path.join(__dirname, "shims/navigation.ts") },
      { find: /^next\/dynamic$/, replacement: path.join(__dirname, "shims/dynamic.tsx") },
      { find: /^@\//, replacement: root + "/" },
    ],
  },
  build: { outDir: path.join(root, "preview-dist"), emptyOutDir: true, assetsInlineLimit: 0, cssCodeSplit: false,
    rollupOptions: { output: { inlineDynamicImports: true } } },
});
