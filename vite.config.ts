import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { createHtmlPlugin } from 'vite-plugin-html';

const errorPages = ['404', '500']; // Add more error codes as needed

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/main.ts',
          filename: 'index.html',
          template: 'index.html',
        },
        {
          entry: 'src/main.ts',
          filename: 'maintenance.html',
          template: 'index.html',
        },
        ...errorPages.map(errorCode => ({
          entry: 'src/main.ts',
          filename: `${errorCode}.html`,
          template: 'index.html',
        })),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5177,
    host: true, // This is equivalent to the --host option
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
    },
  },
});
