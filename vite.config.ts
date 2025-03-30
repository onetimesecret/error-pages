import { URL, fileURLToPath } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { createHtmlPlugin } from 'vite-plugin-html';

const errorPages = ['404', '500']; // Add more error codes as needed

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Always use root base path '/' by default instead of a subdirectory
    base: env.VITE_BASE_URL || '/',
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
          maintenance: fileURLToPath(new URL('./index.html', import.meta.url)),
          // Add error pages to rollupOptions input
          ...Object.fromEntries(
            errorPages.map(errorCode => [
              errorCode,
              fileURLToPath(new URL('./index.html', import.meta.url)),
            ]),
          ),
        },
      },
    },
  };
});
