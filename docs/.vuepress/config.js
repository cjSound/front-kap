/*
 * @Author: 曹捷
 * @Date: 2020-02-26 11:45:28
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-06-07 09:58:47
 * @Description: 配置中心
 */
const { path } = require('@vuepress/utils')
const { searchPlugin } = require('@vuepress/plugin-search')

function resolve (dir) {
  return path.join(__dirname, '../../' + dir)
}
const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true
  }
}
const tags = []
module.exports = {
  // bundler: '@vuepress/webpack',
  bundler: "@vuepress/bundler-vite",
  // vuePluginOptions: [vue(
  //   {
  //     template: {
  //       ssr: false,
  //       compilerOptions: {
  //         directiveTransforms: {
  //           'loading': ssrTransformCustomDir
  //         }
  //       }
  //     }
  //   }
  // )],
  lang: 'zh-CN',
  base: '/kap/',
  host: '0.0.0.0',
  title: '前端基础知识',
  description: '整理归类前端各项资料',
  port: 6002,
  open: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    },
  },

  themeConfig: {
    logo: '/img/logo.png',
    navbar: [{
      text: '首页',
      link: '/'
    }, {
      text: '基础',
      children: [
        '/base/get-started.md',
        '/base/optimize.md',
        '/base/css.md',
        '/base/js.md',
      ]
    },
    {
      text: '笔记',
      children: [
        '/note/app.md',
        '/note/attention.md',
        '/note/appbug.md'
      ]
    },
    {
      text: 'GitHub',
      link: 'https://github.com/cjSound/front-kap.git'
    },
    ],
    sidebar: {
      '/base/': [
        {
          text: '基础',
          isGroup: true,
          children: [
            '/base/get-started.md',
            '/base/optimize.md',
            '/base/css.md',
            '/base/js.md',
          ]
        }
      ],
      '/note/': [
        {
          text: '笔记',
          isGroup: true,
          children: [
            '/note/app.md',
            '/note/attention.md',
            '/note/appbug.md'
          ]
        }
      ],
    }

  },
  plugins: [
    searchPlugin({
      hotKeys: ['ctrl', 'k'],
      maxSuggestions: 10,
      getExtraFields: (page) => {
        return page.frontmatter.tags ?? []
      },

      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/zh-CN/': {
          placeholder: '搜索',
        },
      },
    }),
    [
      require('vuepress-plugin-demo-container-vue3'),
      {
        componentsDir: path.resolve(__dirname, './../examples')
      }
    ],

  ],
  alias: {
    '~': path.join(__dirname, './../../node_modules')
  },
  markdown: {
    lineNumbers: true
  },
  less: { //配置 less 根目录
    includePaths: [path.join(__dirname, '../../style')]
  }
}