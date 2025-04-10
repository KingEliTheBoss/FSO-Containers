import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true
    },
    allowedHosts: true
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./testSetup.js"
  }
})
