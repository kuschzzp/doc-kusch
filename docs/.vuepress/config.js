module.exports = {
  title: 'kusch的小破站',
  description: 'JUST FOR FUN',
  base: '/',   // 设置站点根路径
  port: 8086,
  search: true,  //开启搜索框
  searchMaxSuggestions: 10, //调整默认搜索框显示的搜索结果数量
  dest: './ROOT',  // 设置输出目录
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
      { text: '前端相关', link: '/accumulate/' },
      { text: '算法相关', link: '/algorithm/' },
      {
        text: 'java相关',
        items: [
          { text: 'java基础', link: '/java/java-base/' },
          { text: 'java之IO流', link: '/java/java-io/' }
        ]
      },
      {
        text: '学习',
        items: [
          { text: '英语', link: '/study/english/english01' },
          { text: '数学', link: '/study/math/math01' },
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
      '/study/english/': [
        {
          title: '英语',
          collapsable: false,
          children: [
            { title: '第一节', path: '/study/english/english01' },
            { title: '第二节', path: '/study/english/english02' },
            { title: '第三节', path: '/study/english/english03' },
          ]
        }
      ], '/study/math/': [
        {
          title: '数学',
          collapsable: false,
          children: [
            { title: '第一节', path: '/study/math/math01' },
            { title: '第二节', path: '/study/math/math02' },
            { title: '第三节', path: '/study/math/math03' },
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