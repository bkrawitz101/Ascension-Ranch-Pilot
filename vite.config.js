import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Ascension-Ranch-Pilot/',
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: [
      'src/**/*.jsx',
      'src/**/*.js',
    ],
  },
})