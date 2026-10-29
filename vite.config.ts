import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // must match the GitHub repo name, so GitHub Pages finds the files
  base: '/koach-nashi/',
  plugins: [react(), tailwindcss()],
})
