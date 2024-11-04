import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.riv'],
  build: {
    // Reduce el tamaño de fragmentos grandes, lo cual puede ayudar
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      maxParallelFileOps: 2, // Disminuye la concurrencia en el build
    },
  },
})
