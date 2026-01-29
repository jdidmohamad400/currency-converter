import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],

  base: '/currency-converter/',

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: 'dist'
  }
})


