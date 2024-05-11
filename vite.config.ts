import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import.meta.glob( './package.json' )
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vuex'],
      dts: 'types/auto-imports.d.ts',
    }),
  ],
})
