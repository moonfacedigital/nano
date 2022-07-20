import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import sveltePreprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  return {
    plugins: [
      svelte({
        emitCss: false,
        preprocess: sveltePreprocess({
          sourceMap: !isProduction,
          postcss: {
            plugins: [postcssImport, postcssNested, tailwindcss, autoprefixer],
          },
        }),
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
