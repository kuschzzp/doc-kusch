/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import {resolve} from 'path'
import {defineConfig4CustomTheme, UserPlugins} from 'vuepress/config'
import {VdoingThemeConfig} from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

const DOMAIN_NAME = 'superkusch.fun' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
    theme: 'vdoing', // 使用npm主题包

    dest: './ROOT',  // 设置build后的输出目录

    // 使用本地主题包 也就是下面的 vdoing 文件夹，如果使用npm主题包，那那个文件夹就是没用的
    // theme: resolve(__dirname, '../../vdoing'),

    locales: {
        '/': {
            lang: 'zh-CN',
            title: "圆润胖先生的学习笔记",
            description: 'Kusch的小破站，时不时写写文章，整点奇怪的东西。',
        }
    },
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'Java',
                link: '/java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
            },
            {
                text: '框架',
                link: '/framework/',
            },
            {
                text: '部署与运维',
                link: '/technology/',
            },
            {
                text: '数据库',
                link: '/database/',
            },
            {
                text: '强大的AI',
                link: '/ai/',
            },
            {
                text: '对线',
                link: '/interview/'
            },
            {
                text: '更多',
                link: '/more/',
                items: [
                    {text: '我的电脑', link: '/pages/words/'},
                    {text: '科学技巧', link: '/pages/science/'},
                    {text: '杂文铺', link: '/pages/d9c430/'},
                    {text: '友情链接', link: '/friends/'},
                ],
            },
            {text: '关于', link: '/about/'},
            {
                text: '收藏',
                link: '/pages/networks/',
            },
            {
                text: '索引',
                link: '/archives/',
                items: [
                    {text: '分类', link: '/categories/'},
                    {text: '标签', link: '/tags/'},
                    {text: '归档', link: '/archives/'},
                ],
            },
            {
                text: '兴趣爱好',
                link: '/pages/196d45/',
                items: [
                    {text: '尼康Z30', link: '/pages/196d45/'},
                ],
            },

        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/avatar.png', // 导航栏logo
        repo: 'kuschzzp/doc-kusch', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
        editLinks: true, // 启用编辑
        editLinkText: '编辑',
        indexImg: {
            navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
            switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
            // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
            bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
            bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
            descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
            desc: ["自然赐给了我们知识的种子，而不是知识的本身。—— 寒涅卡", "辛勤的蜜蜂永没有时间悲哀。—— 布莱克", "任何问题都有解决的办法，无法可想的事是没有的。—— 爱迪生"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
            descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
            descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
            descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
            descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
            bubble: true,    // 是否开启图片的气泡效果，默认为 false
            bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
            bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
        },

        //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

        category: true, // 是否打开分类功能，默认true
        tag: true, // 是否打开标签功能，默认true
        archive: true, // 是否打开归档功能，默认true
        categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

        //好像没有用，但是不写顶部就没有颜色
        // bodyBgImg: 'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)',

        // 图片压缩网址： https://www.img2go.com/zh/compress-image  感觉压缩的贼棒
        // bodyBgImg: '/img/bg01.jpg',
        bodyBgImg: [
            '/img/bg01_sm_sm_sm.jpg',
            '/img/bg02_sm_sm_sm.jpg'
        ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
        bodyBgImgOpacity: 1, // body背景图透明度，选值 0.1~1.0, 默认0.5
        bodyBgImgInterval: 300, // body多张背景图时的切换间隔, 默认15，单位s
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        // updateBar: { // 最近更新栏
        //   showToArticle: true, // 显示到文章页底部，默认true
        //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },
        // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
        // defaultMode: 'auto',

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'Mr.Kusch', // 必需
            link: 'https://github.com/kuschzzp', // 可选的
        },

        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: 'https://img.superkusch.fun/docs/81640256690_.pic.jpg',
            name: 'Mr.Kusch',
            slogan: '入门前把门拆了的程序猿一枚',
        },

        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:superkusch@foxmail.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/kuschzzp',
                },
                {
                    iconClass: 'icon-erji',
                    title: '听音乐',
                    link: 'https://music.163.com/#/playlist?id=755597173',
                },
            ],
        },

        // 页脚信息
        footer: {
            createYear: 2023, // 博客创建年份
            copyrightInfo:
                'Mr.Kusch | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a> | <a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备20030181号-1</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
        },

        // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
        extendFrontmatter: {
            author: {
                name: 'Mr.Kusch',
                link: 'https://github.com/kuschzzp'
            }
        },

        // 自定义hmtl(广告)模块
        htmlModules,

        // 私密文章配置
        privatePage: {
            openPrivate: true, // 开启私密文章验证，默认开启（true），如果不开启（false），则下面配置都失效
            username: "qwer1234", // 管理员用户名
            password: "qwer1234", // 管理员密码
            expire: "1d", // 登录过期时间：1d 代表 1 天，1h 代表 1 小时，仅支持这两个单位，不加单位代表秒。过期后访问私密文章重新输入用户名和密码。默认一天
            loginPath: "/vdoing/login/", // 引用登录组件的 md 文章的 permalink（必须），无默认值
            loginKey: "vdoing_manager", // 存储用户名信息的 key，默认是 vdoing_manager。系统通过该 key 验证是否登录、是否过期
            loginSession: false, // 开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false（不开启）
            firstLogin: 0, // 第一次进入网站需要验证。用于封锁整个网站，默认为 0（不开启），1 和 2 都代表开启，区别：1 代表虽然进入网站成功，但是网站内的私密文章仍需要单独验证，2 代表进入网站成功，网站内的私密文章不需要单独验证，也就是网站内的私密文章和普通文章一样可以访问
            firstLoginKey: "vdoing_first_login", // 存储用户名信息的 key，firstLogin 开启后该配置生效，默认为 vdoing_first_login，系统通过该 key 验证是否登录、是否过期
            // 私密文章多组用户名密码
            // loginInfo: {
            //   "/private/test1/": [
            //     { username: "vdoing", password: "123456" },
            //   ],
            //   "vdoing_first_login" :[  // 对应 firstLoginKey 的值
            //     { username: "vdoing", password: "123456" },
            //   ]
            // }
        },

    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}], //favicons，资源放在public文件夹
        ['link', {rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css'}],
        ['noscript', {}, '<meta http-equiv="refresh" content="0; url=https://emosb.com/"><style>.theme-vdoing-content { display:none }'],
        ['link', {rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3129839_xft6cqs5gc.css'}], // 阿里在线图标
        [
            'meta',
            {
                name: 'keywords',
                content: '后端博客,个人技术博客,后端,后端开发,后端框架,Java后端,后端面试题,技术文档,学习,面试,Java,Spring,SpringBoot,SpringCloud,Jenkins,K8s,git,github,markdown',
            },
        ],
        ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
        ['script', {src: 'https://cdn.bootcdn.net/ajax/libs/axios/1.3.6/axios.min.js'}],//引入axios install的方式有问题，用这种方式吧！！！！
        // [
        //   'script',
        //   {
        //     'data-ad-client': 'ca-pub-7828333725993554',
        //     async: 'async',
        //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        //   },
        // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    ],


    // 插件配置
    plugins: <UserPlugins>[
        [
            "sitemap", // 网站地图
            {
                hostname: WEB_SITE,
            },
        ],

        'vuepress-plugin-baidu-autopush', // 百度自动推送

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode,
            },
        ],

        // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
        // 'fulltext-search',

        // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
        [
            'thirdparty-search',
            {
                thirdparty: [
                    // {
                    //     title: '在MDN中搜索',
                    //     frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                    //     behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
                    // },
                    {
                        title: '在Runoob中搜索',
                        frontUrl: 'https://www.runoob.com/?s=',
                    },
                    // {
                    //     title: '在Vue API中搜索',
                    //     frontUrl: 'https://cn.vuejs.org/v2/api/#',
                    // },
                    {
                        title: '在Bing中搜索',
                        frontUrl: 'https://cn.bing.com/search?q=',
                    },
                    // {
                    //     title: '通过百度搜索本站的',
                    //     frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
                    // },
                ],
            }
        ],

        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],

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
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],
        [
            'vuepress-plugin-comment', // 评论
            {
                choosen: 'gitalk',
                options: {
                    clientID: '8ac910a7839482975f38',
                    clientSecret: '805861d59df052b96e68e18235769ecc5c07be02',
                    repo: 'doc-kusch', // GitHub 仓库
                    owner: 'kuschzzp', // GitHub仓库所有者
                    admin: ['kuschzzp'], // 对仓库有写权限的人
                    // distractionFreeMode: true,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                    title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                    labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                    body:
                        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            },
        ],
        [
            'dynamic-title',
            {
                showIcon: '/favicon.ico',
                showText: '(/≧▽≦/)咦！来啦～',
                hideIcon: '/failure.ico',
                hideText: '(●—●)喔哟，别走嘛！',
                recoverTime: 2000,
            },
        ],
        [
            'cursor-effects'
        ],
        [
            'reading-progress'
        ],
        [
            {
                name: 'custom-plugins',
                // 去除的 LastReadingPopup：回到上次阅读位置, "GlobalTip"：全局的时间提示
                globalUIComponents: ["BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
            }
        ],
    ],

    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.ts',
        '.vuepress/config/htmlModules.ts',
    ]
})
