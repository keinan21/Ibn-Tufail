import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
 build: {
    minify: false,
    cssCodeSplit: true,
    modulePreload: false,
  },
 base: '/ibn-tufail/'
})
