import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  root: "src",
  build: {
    outDir: path.resolve(__dirname, "dist/iframe"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/iframe-entry.html"),
    },
  },
});
