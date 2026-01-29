import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',  // Set the base path for the application
  plugins: [
    react(),
    tailwindcss(),
  ],
})