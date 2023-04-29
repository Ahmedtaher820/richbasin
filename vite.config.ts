import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from "node:url";
  import vue from "@vitejs/plugin-vue";
  // new stuff
  import { resolve, dirname } from 'node:path';
  import vueI18n from '@intlify/vite-plugin-vue-i18n';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    vueI18n({
      runtimeOnly: false,
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,
      compositionOnly: true,

      // you need to set i18n resource including paths !
      include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/**'),
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
        'vue-i18n',
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
})
