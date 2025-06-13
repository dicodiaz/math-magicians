/* eslint-disable import/no-extraneous-dependencies */
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mathMagicians',
      filename: 'remoteEntry.js',
      exposes: {
        './Calculator': './src/components/Calculator',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  server: {
    cors: {
      origin: '*',
      methods: ['GET', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
