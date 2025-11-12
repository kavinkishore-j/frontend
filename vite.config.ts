import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/restaurent/',   // <-- important for GitHub Pages
  plugins: [react()]
})
