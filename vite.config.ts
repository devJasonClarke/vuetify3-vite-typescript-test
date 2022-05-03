import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "@vuetify/vite-plugin";
import Components from "unplugin-vue-components/vite";
import eslintPlugin from "vite-plugin-eslint";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { VitePWA } from "vite-plugin-pwa";
import ViteFonts from "vite-plugin-fonts";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png"
      ],
      manifest: {
        name: "Template",
        short_name: "Short Template",
        description: "Template",
        theme_color: "#063296",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    Components({
      importPathTransform: (path) =>
        path.startsWith("C:") ? path.replaceAll("\\", "\\\\") : path
    }),
    Pages(),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: "defaultLayout"
    }),
    eslintPlugin(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto"
          }
        ]
      }
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
});
