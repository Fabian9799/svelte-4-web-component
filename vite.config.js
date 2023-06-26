import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ["src/lib/Counter.svelte"],
      formats: ["es"]
    },
  },
  plugins: [svelte({ compilerOptions: { customElement: process.env.NODE_ENV === 'production' } })],
})