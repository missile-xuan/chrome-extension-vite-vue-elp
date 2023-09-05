import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        // manualChunks (id) {
        //   if (id.includes('components')) { // 把 components 文件里面的文件都打包到 components.js 中
        //     return 'components'
        //   }
        // },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        // entryFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/main.js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        // assetFileNames: 'assets/[name].[hash].[ext]'
        assetFileNames: '[ext]/[name].[ext]'
      }
    }
  }
})
