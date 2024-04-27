import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '快速构建以Demo为中心的Vitepress文档',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 锐金澜创软件服务中心`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '指南',
      link: '/guide/what-is-sutras',
      activeMatch: '/guide/'
    },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: '更新日志',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: '参与贡献',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 Sutras', link: 'what-is-sutras' }, // 把亮点都说一遍，以及导航
        { text: '快速开始', link: 'getting-started' }, // 最基本的例子介绍功能
        { text: '案例', link: 'examples' }, // 更多案例，链接
        { text: '路径', link: 'path' }, // 介绍路径的概念
        { text: '部署', link: 'deploy' } // 如何部署
      ]
    },
    {
      text: '展示区',
      collapsed: false,
      items: [
        { text: '展示区介绍', link: 'preview/index'},
        { text: '界面模式', link: 'preview/view' },
        { text: '终端模式', link: 'preview/terminal' },
        { text: 'REPL', link: 'preview/repl' },
        { text: '服务端渲染（SSR）', link: 'preview/ssr'},
        { text: '设备尺寸', link: 'preview/device'},
        { text: '风格样式', link: 'preview/style'},
        { text: '运行时错误', link: 'preview/error'}
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: '如何写作', link: 'writing/index' },
        { text: '设置项', link: 'writing/docs' },
        { text: '代码块', link: 'writing/code'},
        { text: '模块化', link: 'writing/include'}
      ]
    },
    {
      text: '插件配置',
      collapsed: false,
      items: [
        { text: '配置项', link: 'config/index' },
      ]
    },
    {
      text: '深入了解',
      collapsed: false,
      items: [
        { text: '何时启用沙箱模式', link: 'advance/when-sandbox-enable'},
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}