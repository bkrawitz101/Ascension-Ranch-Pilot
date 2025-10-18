import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/<repository-name>/', // IMPORTANT: Replace <repository-name> with your repository name
  plugins: [react()],
})