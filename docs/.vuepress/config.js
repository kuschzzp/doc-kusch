module.exports = {
  title: 'kusch的小破站',
  description: 'JUST FOR FUN',
  base: '/doc-kusch/',   // 设置站点根路径
  // port: 8080,
  search: true,  //开启搜索框
  searchMaxSuggestions: 7, //调整默认搜索框显示的搜索结果数量
  dest: './ROOT',  // 设置build后的输出目录
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
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
          { text: '知识', link: '/front/frontbase/frontEnv' },
          { text: '问题记录', link: '/front/frontmiddle/middle1' }
        ]
      },
      {
        text: 'java相关',
        items: [
          { text: 'java基础篇', link: '/java/base/javaReference' },
          { text: 'java设计模式', link: '/java/designpattern/singleton' }
        ]
      },
      {
        text: '后端知识库',
        items: [
          { text: 'SpringBoot相关', link: '/study/springboot/springboot1' },
          { text: 'SpringCloud相关', link: '/study/springcloud/jenkins' },
          { text: 'Linux操作相关', link: '/study/linux/centOS7Network' },
          { text: '软件和环境安装相关', link: '/study/env/mysql57' },
          { text: '数据库相关', link: '/study/database/databaseIndex' },
        ]
      },
      { text: '诗和远方', link: '/others/' },
      { text: '遇见神坑', link: '/bugs/' },
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
      '/bugs/': [
        {
          title: '遇见神坑',
          collapsable: false,
          children: [
            { title: 'Nginx部署Vuepress问题', path: '/bugs/vuepressNginx' },
          ]
        }
      ],
      '/study/springboot/': [
        {
          title: 'SpringBoot相关',
          collapsable: false,
          children: [
            { title: '占位节', path: '/study/springboot/springboot1' },
          ]
        }
      ],
      '/study/springcloud/': [
        {
          title: 'SpringCloud相关',
          collapsable: false,
          children: [
            { title: 'Jenkins', path: '/study/springcloud/jenkins' },
            { title: 'Docker', path: '/study/springcloud/docker' },
            { title: '占位节', path: '/study/springcloud/springcloud3' },
          ]
        }
      ],
      '/study/linux/': [
        {
          title: 'Linux操作相关',
          collapsable: false,
          children: [
            { title: 'centos7 mini网络设置', path: '/study/linux/centOS7Network' },
            { title: 'Nginx安装', path: '/study/linux/centOSNginx' },
            { title: 'Docker安装xxl-job', path: '/study/linux/xxlJobDocker' },
            { title: 'Docker安装redis', path: '/study/linux/redisDocker' },
            { title: 'Shell脚本使用', path: '/study/linux/shellstudy' },
            { title: '占位节', path: '/study/linux/linux3' },
          ]
        }
      ],
      '/study/env/': [
        {
          title: '软件和环境安装相关',
          collapsable: false,
          children: [
            { title: 'Linux下安装Mysql', path: '/study/env/mysql57' },
            { title: '占位节', path: '/study/env/env2' },
            { title: '占位节', path: '/study/env/env3' },
          ]
        }
      ],
      '/study/database/': [
        {
          title: '数据库相关',
          collapsable: false,
          children: [
            { title: '数据库索引', path: '/study/database/databaseIndex' },
            { title: '占位节', path: '/study/database/database2' },
          ]
        }
      ],

      '/front/frontbase/': [
        {
          title: '知识',
          collapsable: false,
          children: [
            { title: '开发环境安装', path: '/front/frontbase/frontEnv' },
            { title: 'vuepress的初步搭建', path: '/front/frontbase/createvuepress' },
          ]
        }
      ],
      '/front/frontmiddle/': [
        {
          title: '问题记录',
          collapsable: false,
          children: [
            { title: '占位节', path: '/front/frontmiddle/middle1' },
          ]
        }
      ],
      '/java/base/': [
        {
          title: 'java基础篇',
          collapsable: false,
          children: [
            { title: 'Java四种引用', path: '/java/base/javaReference' },
            { title: '深拷贝和浅拷贝', path: '/java/base/javaClone' },
            { title: 'Volatile关键字及重排序', path: '/java/base/volatile' },
            { title: '常见运算符', path: '/java/base/operator'},
            { title: '占位节', path:'/java/base/base4'}
          ]
        }
      ],

      '/java/designpattern/': [
        {
          title: 'java设计模式',
          collapsable: false,
          children: [
            { title: '单例模式', path: '/java/designpattern/singleton' }
          ]
        }
      ],



    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3,//左侧导航显示的层级
    lastUpdated: 'Last Update'
  },
  plugins: [
    ['flexsearch'],
    [
      "dynamic-title",
      {
        showIcon: "/images/photo.jpg",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/images/photo.jpg",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    ["vuepress-plugin-boxx"],
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'epsilon2_1',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 10, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: true // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ],
    [
      'meting', {
        // metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          server: "netease",
          type: "playlist",
          mid: "6800773181",
        },          // 不配置该项的话不会出现全局播放器
        aplayer: {
          fixed: true, //是否开启吸底模式
          autoplay: true, //是否开启自动播放
          lrcType: 3,  //设置 lrc 歌词解析模式,0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url
          loop: "all", //设置播放器的初始循环模式
        },
        mobile: {
          cover: true, //是否显示封面图，如果隐藏的话可以防止播放器遮挡移动设备上的文字内容
          lrc: false  //是否显示歌词
        }
      }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }],

  ]
};