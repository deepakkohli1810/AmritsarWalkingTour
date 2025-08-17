import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      host: true,
      port: 5173,
    },
  };

  if (command === "serve") {
    config.base = "/"; // dev
  } else {
    config.base = "/AmritsarWalkingTour/"; // build
  }

  return config;
});
