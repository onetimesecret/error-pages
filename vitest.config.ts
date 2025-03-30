import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// Since viteConfig is now a function that takes a ConfigEnv parameter, we need to call it
const resolvedViteConfig = typeof viteConfig === 'function'
  ? viteConfig({ mode: 'test', command: 'build' })
  : viteConfig;

export default mergeConfig(
  resolvedViteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
);
