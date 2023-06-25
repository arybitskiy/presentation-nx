/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const isBuild = process.env.NX_TASK_TARGET_TARGET === 'prebuild';

const REACT_ROUTER_DOM_BASENAME = isBuild ? '/presentation-nx' : '/';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/presentation',

  ...(isBuild
    ? {
        base: 'https://arybitskiy.github.io/',
      }
    : {}),

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  define: {
    'process.env': { ...process.env, REACT_ROUTER_DOM_BASENAME },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
