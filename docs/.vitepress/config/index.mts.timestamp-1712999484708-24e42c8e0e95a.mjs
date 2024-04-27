// .vitepress/config/index.mts
import { defineConfig as defineConfig4 } from "file:///Users/skogkatt/Documents/+DSM2/sutras/node_modules/.pnpm/vitepress@1.0.0-rc.45_@algolia+client-search@4.22.1_postcss@8.4.38_search-insights@2.13.0_typescript@5.4.2/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/shared.ts
import { defineConfig as defineConfig3 } from "file:///Users/skogkatt/Documents/+DSM2/sutras/node_modules/.pnpm/vitepress@1.0.0-rc.45_@algolia+client-search@4.22.1_postcss@8.4.38_search-insights@2.13.0_typescript@5.4.2/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/zh.ts
import { createRequire } from "module";
import { defineConfig } from "file:///Users/skogkatt/Documents/+DSM2/sutras/node_modules/.pnpm/vitepress@1.0.0-rc.45_@algolia+client-search@4.22.1_postcss@8.4.38_search-insights@2.13.0_typescript@5.4.2/node_modules/vitepress/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/skogkatt/Documents/+DSM2/sutras/docs/.vitepress/config/zh.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var pkg = require2("vitepress/package.json");
var zh = defineConfig({
  lang: "zh-Hans",
  description: "\u5FEB\u901F\u6784\u5EFA\u4EE5Demo\u4E3A\u4E2D\u5FC3\u7684Vitepress\u6587\u6863",
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
      "/reference/": { base: "/reference/", items: sidebarReference() }
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    footer: {
      message: "\u57FA\u4E8E MIT \u8BB8\u53EF\u53D1\u5E03",
      copyright: `\u7248\u6743\u6240\u6709 \xA9 2024-${(/* @__PURE__ */ new Date()).getFullYear()} \u9510\u91D1\u6F9C\u521B\u8F6F\u4EF6\u670D\u52A1\u4E2D\u5FC3`
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    lastUpdated: {
      text: "\u6700\u540E\u66F4\u65B0\u4E8E",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    langMenuLabel: "\u591A\u8BED\u8A00",
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u83DC\u5355",
    darkModeSwitchLabel: "\u4E3B\u9898",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F"
  }
});
function nav() {
  return [
    {
      text: "\u6307\u5357",
      link: "/guide/what-is-sutras",
      activeMatch: "/guide/"
    },
    {
      text: "\u53C2\u8003",
      link: "/reference/config-plugin",
      activeMatch: "/reference/"
    },
    {
      text: pkg.version,
      items: [
        {
          text: "\u66F4\u65B0\u65E5\u5FD7",
          link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md"
        },
        {
          text: "\u53C2\u4E0E\u8D21\u732E",
          link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md"
        }
      ]
    }
  ];
}
function sidebarGuide() {
  return [
    {
      text: "\u7B80\u4ECB",
      collapsed: false,
      items: [
        { text: "\u4EC0\u4E48\u662F Sutras", link: "what-is-sutras" },
        // 把亮点都说一遍，以及导航
        { text: "\u5FEB\u901F\u5F00\u59CB", link: "getting-started" },
        // 最基本的例子介绍功能
        { text: "\u6848\u4F8B", link: "examples" },
        // 更多案例，链接
        { text: "\u8DEF\u5F84", link: "path" },
        // 介绍路径的概念
        { text: "\u90E8\u7F72", link: "deploy" }
        // 如何部署
      ]
    },
    {
      text: "\u5199\u4F5C",
      collapsed: false,
      items: [
        // { text: '<docs>', link: 'docs' },
        { text: "\u5DE5\u5177\u680F", link: "tool" },
        { text: "Markdown", link: "markdown" },
        { text: "REPL", link: "repl" }
      ]
    },
    {
      text: "\u81EA\u5B9A\u4E49",
      collapsed: false,
      items: [
        // { text: '自定义demo样式', link: 'custom-demo' },
        // { text: '获取demo信息', link: 'use-demo-provider' },
        // { text: 'Repl接入', link: 'use-repl' },
        // { text: 'Code渲染', link: 'code-render' },
      ]
    },
    { text: "\u914D\u7F6E\u548C API \u53C2\u8003", base: "/reference/", link: "config-plugin" },
    { text: "\u81EA\u5B9A\u4E49", base: "/custom/", link: "config-plugin" }
  ];
}
function sidebarReference() {
  return [
    {
      text: "\u53C2\u8003",
      items: [
        { text: "\u63D2\u4EF6\u914D\u7F6E", link: "config-plugin" }
      ]
    }
  ];
}
var search = {
  zh: {
    placeholder: "\u641C\u7D22\u6587\u6863",
    translations: {
      button: {
        buttonText: "\u641C\u7D22\u6587\u6863",
        buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
      },
      modal: {
        searchBox: {
          resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          cancelButtonText: "\u53D6\u6D88",
          cancelButtonAriaLabel: "\u53D6\u6D88"
        },
        startScreen: {
          recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
          noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
          saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
          removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
          favoriteSearchesTitle: "\u6536\u85CF",
          removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
        },
        errorScreen: {
          titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
          helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
        },
        footer: {
          selectText: "\u9009\u62E9",
          navigateText: "\u5207\u6362",
          closeText: "\u5173\u95ED",
          searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
        },
        noResultsScreen: {
          noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
          suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
          reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
          reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
        }
      }
    }
  }
};

// .vitepress/config/pt.ts
import { createRequire as createRequire2 } from "module";
import { defineConfig as defineConfig2 } from "file:///Users/skogkatt/Documents/+DSM2/sutras/node_modules/.pnpm/vitepress@1.0.0-rc.45_@algolia+client-search@4.22.1_postcss@8.4.38_search-insights@2.13.0_typescript@5.4.2/node_modules/vitepress/dist/node/index.js";
var __vite_injected_original_import_meta_url2 = "file:///Users/skogkatt/Documents/+DSM2/sutras/docs/.vitepress/config/pt.ts";
var require3 = createRequire2(__vite_injected_original_import_meta_url2);
var pkg2 = require3("vitepress/package.json");
var zh2 = defineConfig2({
  lang: "zh-Hans",
  description: "\u5FEB\u901F\u6784\u5EFA\u4EE5Demo\u4E3A\u4E2D\u5FC3\u7684Vitepress\u6587\u6863",
  themeConfig: {
    nav: nav2(),
    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide2() },
      "/reference/": { base: "/reference/", items: sidebarReference2() }
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    footer: {
      message: "\u57FA\u4E8E MIT \u8BB8\u53EF\u53D1\u5E03",
      copyright: `\u7248\u6743\u6240\u6709 \xA9 2024-${(/* @__PURE__ */ new Date()).getFullYear()} \u9510\u91D1\u6F9C\u521B\u8F6F\u4EF6\u670D\u52A1\u4E2D\u5FC3`
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    lastUpdated: {
      text: "\u6700\u540E\u66F4\u65B0\u4E8E",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    langMenuLabel: "\u591A\u8BED\u8A00",
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u83DC\u5355",
    darkModeSwitchLabel: "\u4E3B\u9898",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F"
  }
});
function nav2() {
  return [
    {
      text: "\u6307\u5357",
      link: "/guide/what-is-sutras",
      activeMatch: "/guide/"
    },
    {
      text: "\u53C2\u8003",
      link: "/reference/config-plugin",
      activeMatch: "/reference/"
    },
    {
      text: pkg2.version,
      items: [
        {
          text: "\u66F4\u65B0\u65E5\u5FD7",
          link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md"
        },
        {
          text: "\u53C2\u4E0E\u8D21\u732E",
          link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md"
        }
      ]
    }
  ];
}
function sidebarGuide2() {
  return [
    {
      text: "\u7B80\u4ECB",
      collapsed: false,
      items: [
        { text: "\u4EC0\u4E48\u662F Sutras", link: "what-is-sutras" },
        // 把亮点都说一遍，以及导航
        { text: "\u5FEB\u901F\u5F00\u59CB", link: "getting-started" },
        // 最基本的例子介绍功能
        { text: "\u6848\u4F8B", link: "examples" },
        // 更多案例，链接
        { text: "\u5B89\u88C5", link: "setup" },
        // 如何安装
        { text: "\u90E8\u7F72", link: "deploy" }
        // 如何部署
      ]
    },
    {
      text: "\u5199\u4F5C",
      collapsed: false,
      items: [
        // { text: '<docs>', link: 'docs' },
        { text: "\u5DE5\u5177\u680F", link: "tool" },
        { text: "Markdown", link: "markdown" },
        { text: "REPL", link: "repl" }
      ]
    },
    {
      text: "\u81EA\u5B9A\u4E49",
      collapsed: false,
      items: [
        // { text: '自定义demo样式', link: 'custom-demo' },
        // { text: '获取demo信息', link: 'use-demo-provider' },
        { text: "Repl\u63A5\u5165", link: "use-repl" },
        { text: "Code\u6E32\u67D3", link: "code-render" }
      ]
    },
    { text: "\u914D\u7F6E\u548C API \u53C2\u8003", base: "/reference/", link: "config-plugin" }
    // { text: '自定义', base: '/custom/', link: 'config-plugin' }
  ];
}
function sidebarReference2() {
  return [
    {
      text: "\u53C2\u8003",
      items: [
        { text: "\u63D2\u4EF6\u914D\u7F6E", link: "config-plugin" }
      ]
    }
  ];
}
var search2 = {
  zh: {
    placeholder: "\u641C\u7D22\u6587\u6863",
    translations: {
      button: {
        buttonText: "\u641C\u7D22\u6587\u6863",
        buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
      },
      modal: {
        searchBox: {
          resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          cancelButtonText: "\u53D6\u6D88",
          cancelButtonAriaLabel: "\u53D6\u6D88"
        },
        startScreen: {
          recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
          noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
          saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
          removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
          favoriteSearchesTitle: "\u6536\u85CF",
          removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
        },
        errorScreen: {
          titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
          helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
        },
        footer: {
          selectText: "\u9009\u62E9",
          navigateText: "\u5207\u6362",
          closeText: "\u5173\u95ED",
          searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
        },
        noResultsScreen: {
          noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
          suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
          reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
          reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
        }
      }
    }
  }
};

// .vitepress/config/shared.ts
import VueJsx from "file:///Users/skogkatt/Documents/+DSM2/sutras/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.2_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///Users/skogkatt/Documents/+DSM2/sutras/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.13.2_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///Users/skogkatt/Documents/+DSM2/sutras/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.13.2_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import { pluginMkit, pluginVite } from "file:///Users/skogkatt/Documents/+DSM2/sutras/plugin/dist/index.mjs";
var shared = defineConfig3({
  title: "Sutras",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  markdown: {
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        }
      }
    ],
    config: (md) => {
      md.use(pluginMkit);
    }
  },
  vite: {
    plugins: [
      VueJsx({
        mergeProps: false,
        enableObjectSlots: false
      }),
      pluginVite({
        demoDirname: "demos"
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
          })
        ]
      })
    ]
  },
  sitemap: {
    hostname: "https://vitepress.dev",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    }
  },
  /* prettier-ignore */
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:title", content: "VitePress | Vite & Vue Powered Static Site Generator" }],
    ["meta", { property: "og:site_name", content: "VitePress" }],
    ["meta", { property: "og:image", content: "https://vitepress.dev/vitepress-og.jpg" }],
    ["meta", { property: "og:url", content: "https://vitepress.dev/" }],
    ["script", { src: "https://cdn.usefathom.com/script.js", "data-site": "AZBRSFGG", "data-spa": "auto", defer: "" }]
  ],
  themeConfig: {
    logo: { src: "/logo.svg", width: 24, height: 24 },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    search: {
      provider: "algolia",
      options: {
        appId: "8J64VVRP8K",
        apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
        indexName: "sutras",
        locales: { ...search, ...search2 }
      }
    }
  }
});

// .vitepress/config/index.mts
var config_default = defineConfig4({
  ...shared,
  locales: {
    root: { label: "\u7B80\u4F53\u4E2D\u6587", ...zh }
    // en: { label: 'English', ...en },
    // pt: { label: 'Português', ...pt }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL3NoYXJlZC50cyIsICIudml0ZXByZXNzL2NvbmZpZy96aC50cyIsICIudml0ZXByZXNzL2NvbmZpZy9wdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9za29na2F0dC9Eb2N1bWVudHMvK0RTTTIvc3V0cmFzL2RvY3MvLnZpdGVwcmVzcy9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9za29na2F0dC9Eb2N1bWVudHMvK0RTTTIvc3V0cmFzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9za29na2F0dC9Eb2N1bWVudHMvK0RTTTIvc3V0cmFzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgc2hhcmVkIH0gZnJvbSAnLi9zaGFyZWQnXG5pbXBvcnQgeyBlbiB9IGZyb20gJy4vZW4nXG5pbXBvcnQgeyB6aCB9IGZyb20gJy4vemgnXG5pbXBvcnQgeyBwdCB9IGZyb20gJy4vcHQnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC4uLnNoYXJlZCxcbiAgbG9jYWxlczoge1xuICAgIHJvb3Q6IHsgbGFiZWw6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLCAuLi56aCB9LFxuICAgIC8vIGVuOiB7IGxhYmVsOiAnRW5nbGlzaCcsIC4uLmVuIH0sXG4gICAgLy8gcHQ6IHsgbGFiZWw6ICdQb3J0dWd1XHUwMEVBcycsIC4uLnB0IH1cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Nrb2drYXR0L0RvY3VtZW50cy8rRFNNMi9zdXRyYXMvZG9jcy8udml0ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Nrb2drYXR0L0RvY3VtZW50cy8rRFNNMi9zdXRyYXMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaGFyZWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Nrb2drYXR0L0RvY3VtZW50cy8rRFNNMi9zdXRyYXMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaGFyZWQudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgeyBzZWFyY2ggYXMgemhTZWFyY2ggfSBmcm9tICcuL3poJ1xuaW1wb3J0IHsgc2VhcmNoIGFzIHB0U2VhcmNoIH0gZnJvbSAnLi9wdCdcbmltcG9ydCBWdWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcblxuLy8gaW1wb3J0IHsgcGx1Z2luTWtpdCwgcGx1Z2luVml0ZSB9IGZyb20gJy4uLy4uLy4uL3BsdWdpbi9zcmMvaW5kZXgnXG5pbXBvcnQgeyBwbHVnaW5Na2l0LCBwbHVnaW5WaXRlIH0gZnJvbSAnQHN1dHJhcy9wbHVnaW4nXG5cbmV4cG9ydCBjb25zdCBzaGFyZWQgPSBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ1N1dHJhcycsXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIG1ldGFDaHVuazogdHJ1ZSxcbiAgbWFya2Rvd246IHtcbiAgICBjb2RlVHJhbnNmb3JtZXJzOiBbXG4gICAgICAvLyBXZSB1c2UgYFshIWNvZGVgIGluIGRlbW8gdG8gcHJldmVudCB0cmFuc2Zvcm1hdGlvbiwgaGVyZSB3ZSByZXZlcnQgaXQgYmFjay5cbiAgICAgIHtcbiAgICAgICAgcG9zdHByb2Nlc3MoY29kZSkge1xuICAgICAgICAgIHJldHVybiBjb2RlLnJlcGxhY2UoL1xcW1xcIVxcIWNvZGUvZywgJ1shY29kZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIGNvbmZpZzogKG1kKSA9PiB7XG4gICAgICBtZC51c2UocGx1Z2luTWtpdClcbiAgICB9XG4gIH0sXG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBWdWVKc3goe1xuICAgICAgICBtZXJnZVByb3BzOiBmYWxzZSxcbiAgICAgICAgZW5hYmxlT2JqZWN0U2xvdHM6IGZhbHNlLFxuICAgICAgfSksXG4gICAgICBwbHVnaW5WaXRlKHtcbiAgICAgICAgZGVtb0Rpcm5hbWU6ICdkZW1vcydcbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgIEFudERlc2lnblZ1ZVJlc29sdmVyKHtcbiAgICAgICAgICAgIGltcG9ydFN0eWxlOiBmYWxzZVxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgXVxuICB9LFxuXG4gIHNpdGVtYXA6IHtcbiAgICBob3N0bmFtZTogJ2h0dHBzOi8vdml0ZXByZXNzLmRldicsXG4gICAgdHJhbnNmb3JtSXRlbXMoaXRlbXMpIHtcbiAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLnVybC5pbmNsdWRlcygnbWlncmF0aW9uJykpXG4gICAgfVxuICB9LFxuXG4gIC8qIHByZXR0aWVyLWlnbm9yZSAqL1xuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnLCBocmVmOiAnL2xvZ28uc3ZnJyB9XSxcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjNWY2N2VlJyB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6ICd3ZWJzaXRlJyB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6bG9jYWxlJywgY29udGVudDogJ2VuJyB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiAnVml0ZVByZXNzIHwgVml0ZSAmIFZ1ZSBQb3dlcmVkIFN0YXRpYyBTaXRlIEdlbmVyYXRvcicgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6ICdWaXRlUHJlc3MnIH1dLFxuICAgIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6ICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLW9nLmpwZycgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6ICdodHRwczovL3ZpdGVwcmVzcy5kZXYvJyB9XSxcbiAgICBbJ3NjcmlwdCcsIHsgc3JjOiAnaHR0cHM6Ly9jZG4udXNlZmF0aG9tLmNvbS9zY3JpcHQuanMnLCAnZGF0YS1zaXRlJzogJ0FaQlJTRkdHJywgJ2RhdGEtc3BhJzogJ2F1dG8nLCBkZWZlcjogJycgfV1cbiAgXSxcblxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286IHsgc3JjOiAnL2xvZ28uc3ZnJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0IH0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MnIH1cbiAgICBdLFxuXG4gICAgc2VhcmNoOiB7XG4gICAgICBwcm92aWRlcjogJ2FsZ29saWEnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhcHBJZDogJzhKNjRWVlJQOEsnLFxuICAgICAgICBhcGlLZXk6ICdhMThlMmY0Y2M1NjY1ZjY2MDJjNTYzMWZkODY4YWRmZCcsXG4gICAgICAgIGluZGV4TmFtZTogJ3N1dHJhcycsXG4gICAgICAgIGxvY2FsZXM6IHsgLi4uemhTZWFyY2gsIC4uLnB0U2VhcmNoIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2tvZ2thdHQvRG9jdW1lbnRzLytEU00yL3N1dHJhcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2tvZ2thdHQvRG9jdW1lbnRzLytEU00yL3N1dHJhcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3poLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9za29na2F0dC9Eb2N1bWVudHMvK0RTTTIvc3V0cmFzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvemgudHNcIjtpbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbW9kdWxlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKVxuY29uc3QgcGtnID0gcmVxdWlyZSgndml0ZXByZXNzL3BhY2thZ2UuanNvbicpXG5cbmV4cG9ydCBjb25zdCB6aCA9IGRlZmluZUNvbmZpZyh7XG4gIGxhbmc6ICd6aC1IYW5zJyxcbiAgZGVzY3JpcHRpb246ICdcdTVGRUJcdTkwMUZcdTY3ODRcdTVFRkFcdTRFRTVEZW1vXHU0RTNBXHU0RTJEXHU1RkMzXHU3Njg0Vml0ZXByZXNzXHU2NTg3XHU2ODYzJyxcblxuICB0aGVtZUNvbmZpZzoge1xuICAgIG5hdjogbmF2KCksXG5cbiAgICBzaWRlYmFyOiB7XG4gICAgICAnL2d1aWRlLyc6IHsgYmFzZTogJy9ndWlkZS8nLCBpdGVtczogc2lkZWJhckd1aWRlKCkgfSxcbiAgICAgICcvcmVmZXJlbmNlLyc6IHsgYmFzZTogJy9yZWZlcmVuY2UvJywgaXRlbXM6IHNpZGViYXJSZWZlcmVuY2UoKSB9XG4gICAgfSxcblxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzcy9lZGl0L21haW4vZG9jcy86cGF0aCcsXG4gICAgICB0ZXh0OiAnXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcdTk3NjInXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogJ1x1NTdGQVx1NEU4RSBNSVQgXHU4QkI4XHU1M0VGXHU1M0QxXHU1RTAzJyxcbiAgICAgIGNvcHlyaWdodDogYFx1NzI0OFx1Njc0M1x1NjI0MFx1NjcwOSBcdTAwQTkgMjAyNC0ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gXHU5NTEwXHU5MUQxXHU2RjlDXHU1MjFCXHU4RjZGXHU0RUY2XHU2NzBEXHU1MkExXHU0RTJEXHU1RkMzYFxuICAgIH0sXG5cbiAgICBkb2NGb290ZXI6IHtcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1OTg3NSdcbiAgICB9LFxuXG4gICAgb3V0bGluZToge1xuICAgICAgbGFiZWw6ICdcdTk4NzVcdTk3NjJcdTVCRkNcdTgyMkEnXG4gICAgfSxcblxuICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICB0ZXh0OiAnXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU0RThFJyxcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLFxuICAgICAgICB0aW1lU3R5bGU6ICdtZWRpdW0nXG4gICAgICB9XG4gICAgfSxcblxuICAgIGxhbmdNZW51TGFiZWw6ICdcdTU5MUFcdThCRURcdThBMDAnLFxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLFxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTgzRENcdTUzNTUnLFxuICAgIGRhcmtNb2RlU3dpdGNoTGFiZWw6ICdcdTRFM0JcdTk4OTgnLFxuICAgIGxpZ2h0TW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU1MjMwXHU2RDQ1XHU4MjcyXHU2QTIxXHU1RjBGJyxcbiAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU1MjMwXHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGJ1xuICB9XG59KVxuXG5mdW5jdGlvbiBuYXYoKTogRGVmYXVsdFRoZW1lLk5hdkl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXG4gICAgICBsaW5rOiAnL2d1aWRlL3doYXQtaXMtc3V0cmFzJyxcbiAgICAgIGFjdGl2ZU1hdGNoOiAnL2d1aWRlLydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTUzQzJcdTgwMDMnLFxuICAgICAgbGluazogJy9yZWZlcmVuY2UvY29uZmlnLXBsdWdpbicsXG4gICAgICBhY3RpdmVNYXRjaDogJy9yZWZlcmVuY2UvJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogcGtnLnZlcnNpb24sXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENycsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MvYmxvYi9tYWluL0NIQU5HRUxPRy5tZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTUzQzJcdTRFMEVcdThEMjFcdTczMkUnLFxuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzL2Jsb2IvbWFpbi8uZ2l0aHViL2NvbnRyaWJ1dGluZy5tZCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyR3VpZGUoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHRleHQ6ICdcdTdCODBcdTRFQ0InLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NEVDMFx1NEU0OFx1NjYyRiBTdXRyYXMnLCBsaW5rOiAnd2hhdC1pcy1zdXRyYXMnIH0sIC8vIFx1NjI4QVx1NEVBRVx1NzBCOVx1OTBGRFx1OEJGNFx1NEUwMFx1OTA0RFx1RkYwQ1x1NEVFNVx1NTNDQVx1NUJGQ1x1ODIyQVxuICAgICAgICB7IHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InLCBsaW5rOiAnZ2V0dGluZy1zdGFydGVkJyB9LCAvLyBcdTY3MDBcdTU3RkFcdTY3MkNcdTc2ODRcdTRGOEJcdTVCNTBcdTRFQ0JcdTdFQ0RcdTUyOUZcdTgwRkRcbiAgICAgICAgeyB0ZXh0OiAnXHU2ODQ4XHU0RjhCJywgbGluazogJ2V4YW1wbGVzJyB9LCAvLyBcdTY2RjRcdTU5MUFcdTY4NDhcdTRGOEJcdUZGMENcdTk0RkVcdTYzQTVcbiAgICAgICAgeyB0ZXh0OiAnXHU4REVGXHU1Rjg0JywgbGluazogJ3BhdGgnIH0sIC8vIFx1NEVDQlx1N0VDRFx1OERFRlx1NUY4NFx1NzY4NFx1Njk4Mlx1NUZGNVxuICAgICAgICB7IHRleHQ6ICdcdTkwRThcdTdGNzInLCBsaW5rOiAnZGVwbG95JyB9IC8vIFx1NTk4Mlx1NEY1NVx1OTBFOFx1N0Y3MlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NTE5OVx1NEY1QycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8geyB0ZXh0OiAnPGRvY3M+JywgbGluazogJ2RvY3MnIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NURFNVx1NTE3N1x1NjgwRicsIGxpbms6ICd0b29sJyB9LFxuICAgICAgICB7IHRleHQ6ICdNYXJrZG93bicsIGxpbms6ICdtYXJrZG93bicgfSxcbiAgICAgICAgeyB0ZXh0OiAnUkVQTCcsIGxpbms6ICdyZXBsJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1ODFFQVx1NUI5QVx1NEU0OScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8geyB0ZXh0OiAnXHU4MUVBXHU1QjlBXHU0RTQ5ZGVtb1x1NjgzN1x1NUYwRicsIGxpbms6ICdjdXN0b20tZGVtbycgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnXHU4M0I3XHU1M0Q2ZGVtb1x1NEZFMVx1NjA2RicsIGxpbms6ICd1c2UtZGVtby1wcm92aWRlcicgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnUmVwbFx1NjNBNVx1NTE2NScsIGxpbms6ICd1c2UtcmVwbCcgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnQ29kZVx1NkUzMlx1NjdEMycsIGxpbms6ICdjb2RlLXJlbmRlcicgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHsgdGV4dDogJ1x1OTE0RFx1N0Y2RVx1NTQ4QyBBUEkgXHU1M0MyXHU4MDAzJywgYmFzZTogJy9yZWZlcmVuY2UvJywgbGluazogJ2NvbmZpZy1wbHVnaW4nIH0sXG4gICAgeyB0ZXh0OiAnXHU4MUVBXHU1QjlBXHU0RTQ5JywgYmFzZTogJy9jdXN0b20vJywgbGluazogJ2NvbmZpZy1wbHVnaW4nIH1cbiAgXVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyUmVmZXJlbmNlKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1M0MyXHU4MDAzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NjNEMlx1NEVGNlx1OTE0RFx1N0Y2RScsIGxpbms6ICdjb25maWctcGx1Z2luJyB9LFxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyRXhhbXBsZXMoKXtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiAnU2luZ2xlUmVwb1x1Njg0OFx1NEY4QicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTcyRUNcdTdBQ0JcdTc2ODRkZW1vcycsIGxpbms6ICdzaW5nbGUtcmVwby9idXR0b24nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NUQ0Q1x1NTE2NVx1NzY4NGRlbW9zJywgbGluazogJ3NpbmdsZS1yZXBvLW5lc3QvYnV0dG9uJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTW9ub3JlcG9cdTY4NDhcdTRGOEInLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU3MkVDXHU3QUNCXHU3Njg0ZGVtb3MnLCBsaW5rOiAnbW9ub3JlcG8vYnV0dG9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTVENENcdTUxNjVcdTc2ODRkZW1vcycsIGxpbms6ICdtb25vcmVwby1uZXN0L2J1dHRvbicgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoOiBEZWZhdWx0VGhlbWUuQWxnb2xpYVNlYXJjaE9wdGlvbnNbJ2xvY2FsZXMnXSA9IHtcbiAgemg6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBidXR0b246IHtcbiAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MydcbiAgICAgIH0sXG4gICAgICBtb2RhbDoge1xuICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ1x1NTNENlx1NkQ4OCcsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnXHU1M0Q2XHU2RDg4J1xuICAgICAgICB9LFxuICAgICAgICBzdGFydFNjcmVlbjoge1xuICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6ICdcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxuICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgICBzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRGRERcdTVCNThcdTgxRjNcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxuICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXHU0RTJEXHU3OUZCXHU5NjY0JyxcbiAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdcdTY1MzZcdTg1Q0YnLFxuICAgICAgICAgIHJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY1MzZcdTg1Q0ZcdTRFMkRcdTc5RkJcdTk2NjQnXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICAgICAgdGl0bGVUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICBoZWxwVGV4dDogJ1x1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNSdcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgc2VsZWN0VGV4dDogJ1x1OTAwOVx1NjJFOScsXG4gICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJyxcbiAgICAgICAgICBjbG9zZVRleHQ6ICdcdTUxNzNcdTk1RUQnLFxuICAgICAgICAgIHNlYXJjaEJ5VGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjNEMFx1NEY5Qlx1ODAwNSdcbiAgICAgICAgfSxcbiAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXG4gICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiAnXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyJyxcbiAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c1RleHQ6ICdcdTRGNjBcdThCQTRcdTRFM0FcdThCRTVcdTY3RTVcdThCRTJcdTVFOTRcdThCRTVcdTY3MDlcdTdFRDNcdTY3OUNcdUZGMUYnLFxuICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQ6ICdcdTcwQjlcdTUxRkJcdTUzQ0RcdTk5ODgnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9za29na2F0dC9Eb2N1bWVudHMvK0RTTTIvc3V0cmFzL2RvY3MvLnZpdGVwcmVzcy9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9za29na2F0dC9Eb2N1bWVudHMvK0RTTTIvc3V0cmFzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvcHQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Nrb2drYXR0L0RvY3VtZW50cy8rRFNNMi9zdXRyYXMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9wdC50c1wiO2ltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tICdtb2R1bGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5jb25zdCByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpXG5jb25zdCBwa2cgPSByZXF1aXJlKCd2aXRlcHJlc3MvcGFja2FnZS5qc29uJylcblxuZXhwb3J0IGNvbnN0IHpoID0gZGVmaW5lQ29uZmlnKHtcbiAgbGFuZzogJ3poLUhhbnMnLFxuICBkZXNjcmlwdGlvbjogJ1x1NUZFQlx1OTAxRlx1Njc4NFx1NUVGQVx1NEVFNURlbW9cdTRFM0FcdTRFMkRcdTVGQzNcdTc2ODRWaXRlcHJlc3NcdTY1ODdcdTY4NjMnLFxuXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbmF2OiBuYXYoKSxcblxuICAgIHNpZGViYXI6IHtcbiAgICAgICcvZ3VpZGUvJzogeyBiYXNlOiAnL2d1aWRlLycsIGl0ZW1zOiBzaWRlYmFyR3VpZGUoKSB9LFxuICAgICAgJy9yZWZlcmVuY2UvJzogeyBiYXNlOiAnL3JlZmVyZW5jZS8nLCBpdGVtczogc2lkZWJhclJlZmVyZW5jZSgpIH1cbiAgICB9LFxuXG4gICAgZWRpdExpbms6IHtcbiAgICAgIHBhdHRlcm46ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVx1OTc2MidcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnXHU1N0ZBXHU0RThFIE1JVCBcdThCQjhcdTUzRUZcdTUzRDFcdTVFMDMnLFxuICAgICAgY29weXJpZ2h0OiBgXHU3MjQ4XHU2NzQzXHU2MjQwXHU2NzA5IFx1MDBBOSAyMDI0LSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBcdTk1MTBcdTkxRDFcdTZGOUNcdTUyMUJcdThGNkZcdTRFRjZcdTY3MERcdTUyQTFcdTRFMkRcdTVGQzNgXG4gICAgfSxcblxuICAgIGRvY0Zvb3Rlcjoge1xuICAgICAgcHJldjogJ1x1NEUwQVx1NEUwMFx1OTg3NScsXG4gICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU5ODc1J1xuICAgIH0sXG5cbiAgICBvdXRsaW5lOiB7XG4gICAgICBsYWJlbDogJ1x1OTg3NVx1OTc2Mlx1NUJGQ1x1ODIyQSdcbiAgICB9LFxuXG4gICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgIHRleHQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTRFOEUnLFxuICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICBkYXRlU3R5bGU6ICdzaG9ydCcsXG4gICAgICAgIHRpbWVTdHlsZTogJ21lZGl1bSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbGFuZ01lbnVMYWJlbDogJ1x1NTkxQVx1OEJFRFx1OEEwMCcsXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogJ1x1NTZERVx1NTIzMFx1OTg3Nlx1OTBFOCcsXG4gICAgc2lkZWJhck1lbnVMYWJlbDogJ1x1ODNEQ1x1NTM1NScsXG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NEUzQlx1OTg5OCcsXG4gICAgbGlnaHRNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTUyMzBcdTZENDVcdTgyNzJcdTZBMjFcdTVGMEYnLFxuICAgIGRhcmtNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTUyMzBcdTZERjFcdTgyNzJcdTZBMjFcdTVGMEYnXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIG5hdigpOiBEZWZhdWx0VGhlbWUuTmF2SXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2MzA3XHU1MzU3JyxcbiAgICAgIGxpbms6ICcvZ3VpZGUvd2hhdC1pcy1zdXRyYXMnLFxuICAgICAgYWN0aXZlTWF0Y2g6ICcvZ3VpZGUvJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NTNDMlx1ODAwMycsXG4gICAgICBsaW5rOiAnL3JlZmVyZW5jZS9jb25maWctcGx1Z2luJyxcbiAgICAgIGFjdGl2ZU1hdGNoOiAnL3JlZmVyZW5jZS8nXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBwa2cudmVyc2lvbixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU2NUU1XHU1RkQ3JyxcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3ZpdGVwcmVzcy9ibG9iL21haW4vQ0hBTkdFTE9HLm1kJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NTNDMlx1NEUwRVx1OEQyMVx1NzMyRScsXG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MvYmxvYi9tYWluLy5naXRodWIvY29udHJpYnV0aW5nLm1kJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmZ1bmN0aW9uIHNpZGViYXJHdWlkZSgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdGV4dDogJ1x1N0I4MFx1NEVDQicsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU0RUMwXHU0RTQ4XHU2NjJGIFN1dHJhcycsIGxpbms6ICd3aGF0LWlzLXN1dHJhcycgfSwgLy8gXHU2MjhBXHU0RUFFXHU3MEI5XHU5MEZEXHU4QkY0XHU0RTAwXHU5MDREXHVGRjBDXHU0RUU1XHU1M0NBXHU1QkZDXHU4MjJBXG4gICAgICAgIHsgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsIGxpbms6ICdnZXR0aW5nLXN0YXJ0ZWQnIH0sIC8vIFx1NjcwMFx1NTdGQVx1NjcyQ1x1NzY4NFx1NEY4Qlx1NUI1MFx1NEVDQlx1N0VDRFx1NTI5Rlx1ODBGRFxuICAgICAgICB7IHRleHQ6ICdcdTY4NDhcdTRGOEInLCBsaW5rOiAnZXhhbXBsZXMnIH0sIC8vIFx1NjZGNFx1NTkxQVx1Njg0OFx1NEY4Qlx1RkYwQ1x1OTRGRVx1NjNBNVxuICAgICAgICB7IHRleHQ6ICdcdTVCODlcdTg4QzUnLCBsaW5rOiAnc2V0dXAnIH0sIC8vIFx1NTk4Mlx1NEY1NVx1NUI4OVx1ODhDNVxuICAgICAgICB7IHRleHQ6ICdcdTkwRThcdTdGNzInLCBsaW5rOiAnZGVwbG95JyB9IC8vIFx1NTk4Mlx1NEY1NVx1OTBFOFx1N0Y3MlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NTE5OVx1NEY1QycsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8geyB0ZXh0OiAnPGRvY3M+JywgbGluazogJ2RvY3MnIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NURFNVx1NTE3N1x1NjgwRicsIGxpbms6ICd0b29sJyB9LFxuICAgICAgICB7IHRleHQ6ICdNYXJrZG93bicsIGxpbms6ICdtYXJrZG93bicgfSxcbiAgICAgICAgeyB0ZXh0OiAnUkVQTCcsIGxpbms6ICdyZXBsJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1ODFFQVx1NUI5QVx1NEU0OScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLy8geyB0ZXh0OiAnXHU4MUVBXHU1QjlBXHU0RTQ5ZGVtb1x1NjgzN1x1NUYwRicsIGxpbms6ICdjdXN0b20tZGVtbycgfSxcbiAgICAgICAgLy8geyB0ZXh0OiAnXHU4M0I3XHU1M0Q2ZGVtb1x1NEZFMVx1NjA2RicsIGxpbms6ICd1c2UtZGVtby1wcm92aWRlcicgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmVwbFx1NjNBNVx1NTE2NScsIGxpbms6ICd1c2UtcmVwbCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ29kZVx1NkUzMlx1NjdEMycsIGxpbms6ICdjb2RlLXJlbmRlcicgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHsgdGV4dDogJ1x1OTE0RFx1N0Y2RVx1NTQ4QyBBUEkgXHU1M0MyXHU4MDAzJywgYmFzZTogJy9yZWZlcmVuY2UvJywgbGluazogJ2NvbmZpZy1wbHVnaW4nIH0sXG4gICAgLy8geyB0ZXh0OiAnXHU4MUVBXHU1QjlBXHU0RTQ5JywgYmFzZTogJy9jdXN0b20vJywgbGluazogJ2NvbmZpZy1wbHVnaW4nIH1cbiAgXVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyUmVmZXJlbmNlKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1M0MyXHU4MDAzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1x1NjNEMlx1NEVGNlx1OTE0RFx1N0Y2RScsIGxpbms6ICdjb25maWctcGx1Z2luJyB9LFxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyRXhhbXBsZXMoKXtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiAnU2luZ2xlUmVwb1x1Njg0OFx1NEY4QicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdcdTcyRUNcdTdBQ0JcdTc2ODRkZW1vcycsIGxpbms6ICdzaW5nbGUtcmVwby9idXR0b24nIH0sXG4gICAgICAgIHsgdGV4dDogJ1x1NUQ0Q1x1NTE2NVx1NzY4NGRlbW9zJywgbGluazogJ3NpbmdsZS1yZXBvLW5lc3QvYnV0dG9uJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTW9ub3JlcG9cdTY4NDhcdTRGOEInLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnXHU3MkVDXHU3QUNCXHU3Njg0ZGVtb3MnLCBsaW5rOiAnbW9ub3JlcG8vYnV0dG9uJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTVENENcdTUxNjVcdTc2ODRkZW1vcycsIGxpbms6ICdtb25vcmVwby1uZXN0L2J1dHRvbicgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoOiBEZWZhdWx0VGhlbWUuQWxnb2xpYVNlYXJjaE9wdGlvbnNbJ2xvY2FsZXMnXSA9IHtcbiAgemg6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBidXR0b246IHtcbiAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MydcbiAgICAgIH0sXG4gICAgICBtb2RhbDoge1xuICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcbiAgICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ1x1NTNENlx1NkQ4OCcsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnXHU1M0Q2XHU2RDg4J1xuICAgICAgICB9LFxuICAgICAgICBzdGFydFNjcmVlbjoge1xuICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6ICdcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxuICAgICAgICAgIG5vUmVjZW50U2VhcmNoZXNUZXh0OiAnXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyJyxcbiAgICAgICAgICBzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRGRERcdTVCNThcdTgxRjNcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjInLFxuICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiAnXHU0RUNFXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXHU0RTJEXHU3OUZCXHU5NjY0JyxcbiAgICAgICAgICBmYXZvcml0ZVNlYXJjaGVzVGl0bGU6ICdcdTY1MzZcdTg1Q0YnLFxuICAgICAgICAgIHJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY1MzZcdTg1Q0ZcdTRFMkRcdTc5RkJcdTk2NjQnXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yU2NyZWVuOiB7XG4gICAgICAgICAgdGl0bGVUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDJyxcbiAgICAgICAgICBoZWxwVGV4dDogJ1x1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNSdcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgc2VsZWN0VGV4dDogJ1x1OTAwOVx1NjJFOScsXG4gICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJyxcbiAgICAgICAgICBjbG9zZVRleHQ6ICdcdTUxNzNcdTk1RUQnLFxuICAgICAgICAgIHNlYXJjaEJ5VGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjNEMFx1NEY5Qlx1ODAwNSdcbiAgICAgICAgfSxcbiAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXG4gICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiAnXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyJyxcbiAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c1RleHQ6ICdcdTRGNjBcdThCQTRcdTRFM0FcdThCRTVcdTY3RTVcdThCRTJcdTVFOTRcdThCRTVcdTY3MDlcdTdFRDNcdTY3OUNcdUZGMUYnLFxuICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQ6ICdcdTcwQjlcdTUxRkJcdTUzQ0RcdTk5ODgnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQStWLFNBQVMsZ0JBQUFBLHFCQUFvQjs7O0FDQTdCLFNBQVMsZ0JBQUFDLHFCQUFvQjs7O0FDQXJDLFNBQVMscUJBQXFCO0FBQ3JYLFNBQVMsb0JBQXVDO0FBRHlLLElBQU0sMkNBQTJDO0FBRzFRLElBQU1DLFdBQVUsY0FBYyx3Q0FBZTtBQUM3QyxJQUFNLE1BQU1BLFNBQVEsd0JBQXdCO0FBRXJDLElBQU0sS0FBSyxhQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBRWIsYUFBYTtBQUFBLElBQ1gsS0FBSyxJQUFJO0FBQUEsSUFFVCxTQUFTO0FBQUEsTUFDUCxXQUFXLEVBQUUsTUFBTSxXQUFXLE9BQU8sYUFBYSxFQUFFO0FBQUEsTUFDcEQsZUFBZSxFQUFFLE1BQU0sZUFBZSxPQUFPLGlCQUFpQixFQUFFO0FBQUEsSUFDbEU7QUFBQSxJQUVBLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXLHVDQUFlLG9CQUFJLEtBQUssR0FBRSxZQUFZLENBQUM7QUFBQSxJQUNwRDtBQUFBLElBRUEsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFD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QUEsSUFDL0Q7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGlCQUFpQixNQUFNLFlBQVksQ0FBQztBQUFBLElBQ2xFLENBQUMsUUFBUSxFQUFFLE1BQU0sZUFBZSxTQUFTLFVBQVUsQ0FBQztBQUFBLElBQ3BELENBQUMsUUFBUSxFQUFFLFVBQVUsV0FBVyxTQUFTLFVBQVUsQ0FBQztBQUFBLElBQ3BELENBQUMsUUFBUSxFQUFFLFVBQVUsYUFBYSxTQUFTLEtBQUssQ0FBQztBQUFBLElBQ2pELENBQUMsUUFBUSxFQUFFLFVBQVUsWUFBWSxTQUFTLHVEQUF1RCxDQUFDO0FBQUEsSUFDbEcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxnQkFBZ0IsU0FBUyxZQUFZLENBQUM7QUFBQSxJQUMzRCxDQUFDLFFBQVEsRUFBRSxVQUFVLFlBQVksU0FBUyx5Q0FBeUMsQ0FBQztBQUFBLElBQ3BGLENBQUMsUUFBUSxFQUFFLFVBQVUsVUFBVSxTQUFTLHlCQUF5QixDQUFDO0FBQUEsSUFDbEUsQ0FBQyxVQUFVLEVBQUUsS0FBSyx1Q0FBdUMsYUFBYSxZQUFZLFlBQVksUUFBUSxPQUFPLEdBQUcsQ0FBQztBQUFBLEVBQ25IO0FBQUEsRUFFQSxhQUFhO0FBQUEsSUFDWCxNQUFNLEVBQUUsS0FBSyxhQUFhLE9BQU8sSUFBSSxRQUFRLEdBQUc7QUFBQSxJQUVoRCxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLElBQy9EO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixXQUFXO0FBQUEsUUFDWCxTQUFTLEVBQUUsR0FBRyxRQUFVLEdBQUdDLFFBQVM7QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7O0FEOUVELElBQU8saUJBQVFDLGNBQWE7QUFBQSxFQUMxQixHQUFHO0FBQUEsRUFDSCxTQUFTO0FBQUEsSUFDUCxNQUFNLEVBQUUsT0FBTyw0QkFBUSxHQUFHLEdBQUc7QUFBQTtBQUFBO0FBQUEsRUFHL0I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgInJlcXVpcmUiLCAiY3JlYXRlUmVxdWlyZSIsICJkZWZpbmVDb25maWciLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCIsICJyZXF1aXJlIiwgImNyZWF0ZVJlcXVpcmUiLCAicGtnIiwgInpoIiwgImRlZmluZUNvbmZpZyIsICJuYXYiLCAic2lkZWJhckd1aWRlIiwgInNpZGViYXJSZWZlcmVuY2UiLCAic2VhcmNoIiwgImRlZmluZUNvbmZpZyIsICJzZWFyY2giLCAiZGVmaW5lQ29uZmlnIl0KfQo=
