const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录
const utils = require('./utils/index.js');
const filehelper = require('./utils/initPage.js');

module.exports = {
    title: 'Kusch小破站',
    description: 'To be or not to be, that is the question!',
    base: '/doc-kusch/',   // 设置站点根路径
    // port: 8080,
    search: true,  //开启搜索框
    searchMaxSuggestions: 7, //调整默认搜索框显示的搜索结果数量
    dest: './ROOT',  // 设置build后的输出目录
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/images/photo.jpg'}],
        ['link', {rel: 'manifest', href: '/images/photo.jpg'}],
        ['link', {rel: 'apple-touch-icon', href: '/images/photo.jpg'}],
        ['meta', {'http-quiv': 'pragma', cotent: 'no-cache'}],
        ['meta', {'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
        ['meta', {'http-quiv': 'expires', cotent: '0'}],
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
        }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/axios/1.1.3/axios.js' }],
    ],
    serviceWorker: true, // 是否开启 PWA
    markdown: {
        lineNumbers: true // 代码块是否显示行号
    },
    themeConfig: {
        logo: '/images/photo.jpg',
        nav: [ // 导航栏配置
            {text: '主页', link: '/'},
            {
                text: '庞大的Java',
                items: [
                    {text: '夯实基础', link: '/java/base/'},
                    {text: 'JVM', link: '/java/jvm/'},
                    {text: '网络基础知识', link: '/java/internet/'},
                    {text: '设计模式', link: '/java/design/'},
                    {text: 'Spring&SpringBoot', link: '/java/springboot/'},
                    {text: 'SpringCloud', link: '/java/springcloud/'},
                ]
            },
            {
                text: '令人头大的数据库',
                items: [
                    {text: 'MySQL', link: '/database/mysql/'},
                    {text: 'ORACLE', link: '/database/oracle/'},
                    {text: 'Redis', link: '/database/redis/'},
                ]
            },
            {
                text: '玩出花的Linux',
                items: [
                    {text: '常规部署', link: '/linux/normal/'},
                    {text: 'Docker', link: '/linux/docker/'},
                    {text: 'Shell', link: '/linux/shell/'},
                ]
            },
            {
                text: '八股文对线',
                items: [
                    {text: 'Java', link: '/interview/java/'},
                    {text: 'Database', link: '/interview/database/'}
                ]
            },
            {text: '我并不知道这些放哪里', link: '/other/'},
            {text: '更多', link: 'https://gitee.com/kuschzzp/doc-kusch'}
        ],
        // 为以下路由添加左侧边栏
        sidebar: {
            '/java/base/': utils.genSidebar('Java基础知识', filehelper.getFileName(rootpath + "/java/base/", "/java/base/"), true, 3),
            '/java/jvm/': utils.genSidebar('JVM', filehelper.getFileName(rootpath + "/java/jvm/", "/java/jvm/"), true, 3),
            '/java/internet/': utils.genSidebar('网络基础知识', filehelper.getFileName(rootpath + "/java/internet/", "/java/internet/"), true, 3),
            '/java/design/': utils.genSidebar('设计模式', filehelper.getFileName(rootpath + "/java/design/", "/java/design/"), true, 3),
            '/java/springboot/': utils.genSidebar('Spring&SpringBoot', filehelper.getFileName(rootpath + "/java/springboot/", "/java/springboot/"), true, 3),
            '/java/springcloud/': utils.genSidebar('SpringCloud', filehelper.getFileName(rootpath + "/java/springcloud/", "/java/springcloud/"), true, 3),
            '/database/mysql/': utils.genSidebar('MySQL', filehelper.getFileName(rootpath + "/database/mysql/", "/database/mysql/"), true, 3),
            '/database/oracle/': utils.genSidebar('ORACLE', filehelper.getFileName(rootpath + "/database/oracle/", "/database/oracle/"), true, 3),
            '/database/redis/': utils.genSidebar('Redis', filehelper.getFileName(rootpath + "/database/redis/", "/database/redis/"), true, 3),
            '/linux/normal/': utils.genSidebar('常规部署', filehelper.getFileName(rootpath + "/linux/normal/", "/linux/normal/"), true, 3),
            '/linux/docker/': utils.genSidebar('Docker', filehelper.getFileName(rootpath + "/linux/docker/", "/linux/docker/"), true, 3),
            '/linux/shell/': utils.genSidebar('Shell', filehelper.getFileName(rootpath + "/linux/shell/", "/linux/shell/"), true, 3),
            '/interview/java/': utils.genSidebar('Java对线', filehelper.getFileName(rootpath + "/interview/java/", "/interview/java/"), true, 3),
            '/interview/database/': utils.genSidebar('Database对线', filehelper.getFileName(rootpath + "/interview/database/", "/interview/database/"), true, 3),
            '/other/': utils.genSidebar('其他的一些', filehelper.getFileName(rootpath + "/other/", "/other/"), true, 3),
        },
        sidebarDepth: 3,//左侧导航显示的层级
        lastUpdated: '最后更新时间'
    },
    plugins: [
        ['flexsearch'],
        [
            'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
              settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false, // 是否展示为横向样式
              },
            },
          ],
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
                model: 'haru/01',
                display: {
                    position: "right", // 显示位置：left/right(default: 'right')
                    width: 135, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 8, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: true // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.7 // 模型透明度(default: 0.8)
                }
            }
        }
        ],
        [
            'meting', {
            // metingApi: "https://github.com/moefyit/vuepress-plugin-meting",
            meting: {
                server: "netease",
                type: "playlist",
                mid: "6800773181",
            },          // 不配置该项的话不会出现全局播放器
            aplayer: {
                theme: "#b7daff", //主题颜色，不展示图片时能看到
                mini: true,  //是否开启迷你模式
                fixed: true, //是否开启吸底模式
                autoplay: true, //是否开启自动播放
                lrcType: 0,  //设置 lrc 歌词解析模式,0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url
                loop: "all", //设置播放器的初始循环模式
            },
            mobile: {
                cover: false, //是否显示封面图，如果隐藏的话可以防止播放器遮挡移动设备上的文字内容
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