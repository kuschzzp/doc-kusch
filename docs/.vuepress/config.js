module.exports = {
  title: 'kusch的小破站',
  description: 'JUST FOR FUN',
  base: '/doc-kusch/',   // 设置站点根路径
  // port: 8080,
  search: true,  //开启搜索框
  searchMaxSuggestions: 10, //调整默认搜索框显示的搜索结果数量
  dest: './ROOT',  // 设置build后的输出目录
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '主页', link: '/' },
      {
        text: '前端相关',
        items: [
          { text: '前端基础篇', link: '/front/frontbase/base1' },
          { text: '前端进阶篇', link: '/front/frontmiddle/middle1' }
        ]
      },
      {
        text: '数据结构与算法',
        items: [
          { text: '简单排序与查找', link: '/algorithm/common/common1' },
          { text: '常见数据结构', link: '/algorithm/structure/structure1' }
        ]
      },
      {
        text: 'java相关',
        items: [
          { text: 'java基础篇', link: '/java/base/base1' },
          { text: 'java进阶篇', link: '/java/advance/advance1' },
          { text: 'java冷知识', link: '/java/cold/cold1' }
        ]
      },
      {
        text: '后端知识库',
        items: [
          { text: 'SpringBoot相关', link: '/study/springboot/springboot1' },
          { text: 'SpringCloud相关', link: '/study/springcloud/springcloud1' },
          { text: 'Linux操作相关', link: '/study/linux/linux1' },
          { text: '软件和环境安装相关', link: '/study/env/env1' },
        ]
      },
      { text: '诗和远方', link: '/others/' },
      { text: '其他', link: 'https://www.superkusch.fun' }
    ],
    // 为以下路由添加左侧边栏
    sidebar: {
      '/others/': [
        {
          title: '诗和远方',
          collapsable: false,
          children: [
            { title: '诗和远方01', path: '/others/life01' },
            { title: '诗和远方02', path: '/others/life02' },
            { title: '诗和远方03', path: '/others/life03' },
          ]
        }
      ],

      '/study/springboot/': [
        {
          title: 'SpringBoot相关',
          collapsable: false,
          children: [
            { title: '第一节', path: '/study/springboot/springboot1' },
            { title: '第二节', path: '/study/springboot/springboot2' },
            { title: '第三节', path: '/study/springboot/springboot3' },
          ]
        }
      ],
      '/study/springcloud/': [
        {
          title: 'SpringCloud相关',
          collapsable: false,
          children: [
            { title: '第一节', path: '/study/springcloud/springcloud1' },
            { title: '第二节', path: '/study/springcloud/springcloud2' },
            { title: '第三节', path: '/study/springcloud/springcloud3' },
          ]
        }
      ],
      '/study/linux/': [
        {
          title: 'Linux操作相关',
          collapsable: false,
          children: [
            { title: '第一节', path: '/study/linux/linux1' },
            { title: '第二节', path: '/study/linux/linux2' },
            { title: '第三节', path: '/study/linux/linux3' },
          ]
        }
      ],
      '/study/env/': [
        {
          title: '软件和环境安装相关',
          collapsable: false,
          children: [
            { title: '第一节', path: '/study/env/env1' },
            { title: '第二节', path: '/study/env/env2' },
            { title: '第三节', path: '/study/env/env3' },
          ]
        }
      ],

      '/front/frontbase/': [
        {
          title: '前端基础篇',
          collapsable: false,
          children: [
            { title: '第一节', path: '/front/frontbase/base1' },
            { title: '第二节', path: '/front/frontbase/base2' },
            { title: '第三节', path: '/front/frontbase/base3' },
          ]
        }
      ],
      '/front/frontmiddle/': [
        {
          title: '前端进阶篇',
          collapsable: false,
          children: [
            { title: '第一节', path: '/front/frontmiddle/middle1' },
            { title: '第二节', path: '/front/frontmiddle/middle2' },
            { title: '第三节', path: '/front/frontmiddle/middle3' },
          ]
        }
      ],

      '/algorithm/common/': [
        {
          title: '前端基础篇',
          collapsable: false,
          children: [
            { title: '第一节', path: '/algorithm/common/common1' },
            { title: '第二节', path: '/algorithm/common/common2' },
            { title: '第三节', path: '/algorithm/common/common3' },
          ]
        }
      ],
      '/algorithm/structure/': [
        {
          title: '前端进阶篇',
          collapsable: false,
          children: [
            { title: '第一节', path: '/algorithm/structure/structure1' },
            { title: '第二节', path: '/algorithm/structure/structure2' },
            { title: '第三节', path: '/algorithm/structure/structure3' },
          ]
        }
      ],

      '/java/advance/': [
        {
          title: 'java进阶篇',
          collapsable: false,
          children: [
            { title: '第一节', path: '/java/advance/advance1' },
            { title: '第二节', path: '/java/advance/advance2' },
            { title: '第三节', path: '/java/advance/advance3' },
          ]
        }
      ],
      '/java/base/': [
        {
          title: 'java基础篇',
          collapsable: false,
          children: [
            { title: '第一节', path: '/java/base/base1' },
            { title: '第二节', path: '/java/base/base2' },
            { title: '第三节', path: '/java/base/base3' },
          ]
        }
      ],
      '/java/cold/': [
        {
          title: 'java冷知识',
          collapsable: false,
          children: [
            { title: '第一节', path: '/java/cold/cold1' },
            { title: '第二节', path: '/java/cold/cold2' },
            { title: '第三节', path: '/java/cold/cold3' },
          ]
        }
      ],




    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2,//左侧导航显示的层级
    lastUpdated: 'Last Update'
  },
  plugins: {
    '@vuepress/back-to-top': true
  }
};