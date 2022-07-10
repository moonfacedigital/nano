import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  return {
    plugins: [
      svelte({
        emitCss: false,
      }),
      cssInjectedByJsPlugin(),
    ],
    build: {
      lib: {
        entry: './src/index.js',
        name: 'quickExit',
        formats: ['iife'],
        fileName: (format, name) => `main.${format}.js`,
      },
      minify: isProduction,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  }
})
