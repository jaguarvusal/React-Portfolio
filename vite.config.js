// filepath: /Users/vusalshah/Desktop/React-Portfolio/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this matches your deployment platform's publish directory
  },
});