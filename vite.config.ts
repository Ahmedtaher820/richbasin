import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'

import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from "node:url";
  import vue from "@vitejs/plugin-vue";
  // new stuff
  import { resolve, dirname } from 'node:path';
  // https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({ registerType: 'autoUpdate' }),
    Pages({
      onRoutesGenerated: routes => (generateSitemap({ routes })),
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/stores',
      ],
      vueTemplate: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  publicDir:'',
})
