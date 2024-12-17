import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Copão',
        short_name: 'Copão',
        description: 'Copão: Sistema para o Copão IFC',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'https://i.ibb.co/9VfWVgh/COPAO-1.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'https://i.ibb.co/9VfWVgh/COPAO-1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        id: 'com.fake-store.app',
        orientation: 'any',
        background_color: '#ffffff',
        start_url: '.',
        launch_handler: {
          client_mode: ['navigate-existing', 'auto'],
        },
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
