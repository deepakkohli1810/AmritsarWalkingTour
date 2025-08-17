import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: "/AmritsarWalkingTour", // your repo name for GitHub Pages
  server: {
    host: true, // exposes to local network
    port: 5173, // optional, default is 5173
  },
});
