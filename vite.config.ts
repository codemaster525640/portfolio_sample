import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    // IMPORTANT:
    // Replace portfolio_sample with your GitHub repository name
    base: "/portfolio_sample/",

    plugins: [react(), tailwindcss()],

    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env": {},
    },

    optimizeDeps: {
      exclude: ["crypto"],
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});
