import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { getThemeVariables } from 'ant-design-vue/dist/theme';

import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       // modifyVars: {
  //       //   'primary-color': '#1DA57A',
  //       // },
  //       modifyVars: {
  //         ...getThemeVariables({
  //           dark: true, // dynamic
  //           'primary-color': '#1DA57A',
  //         }),
  //       },
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1DA57A',
        },
      },
    },
  },
});
