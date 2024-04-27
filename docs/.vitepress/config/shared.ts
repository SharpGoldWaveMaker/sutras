import { defineConfig } from 'vitepress'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import svg from 'vite-svg-loader'

import { pluginMkit, pluginVite, defaultDeviceList } from '@sgwm-sutras/plugin'

export const shared = defineConfig({
  base: '/sutras.docs/',
  title: 'Sutras',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  markdown: {
    config: (md) => {
      md.use(pluginMkit)
    },
  },
  vite: {
    plugins: [
      VueJsx({
        mergeProps: false,
        enableObjectSlots: false,
      }),
      pluginVite({
        demoDirname: 'demos',
        demo: {
          deviceList: defaultDeviceList
        }
      }),
      svg(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
    ],
  },
  sitemap: {
    hostname: 'https://sharpgoldwavemaker.github.io/sutras.docs/',
    transformItems(items) {
      return items.filter(item => !item.url.includes('migration'))
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'Sutras | 快速构建以demo为中心的技术文档' }],
    ['meta', { property: 'og:site_name', content: 'Sutras' }],
    ['meta', { property: 'og:image', content: 'https://sharpgoldwavemaker.github.io/sutras.docs/logo-with-shadow.png' }],
    ['meta', { property: 'og:url', content: 'https://sharpgoldwavemaker.github.io/sutras.docs/' }],
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SharpGoldWaveMaker/sutras' },
    ],
  },
})
