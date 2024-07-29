// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
  // Add your UnoCSS configuration here
  theme: {
    colors: {
      brand: {
        500: '#1DA1F2',
        600: '#1A91DA',
      },
    },
  },
  shortcuts: {
    'btn': 'px-4 py-1 rounded inline-block bg-brand-500 text-white cursor-pointer hover:bg-brand-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
  },
  rules: [
    // Add custom rules here
  ],
});
