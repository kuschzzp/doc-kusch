import LastReadingPopup from './components/LastReadingPopup.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({
                    Vue, // VuePress 正在使用的 Vue 构造函数
                    options, // 附加到根实例的一些选项
                    router, // 当前应用的路由实例
                    siteData, // 站点元数据
                    isServer // 当前应用配置是处于 服务端渲染 或 客户端
                }) => {

    Vue.use(ElementUI)
    let isMounted = false;
    // 最后一次阅读位置跳转
    Vue.component(LastReadingPopup.name, LastReadingPopup);
    Vue.mixin({
        // 有多少个 Vue 组件（md 文档），就执行多少次 mounted()，所以利用 if 判断只允许执行一次
        mounted() {
            if (!isMounted) {
                window.addEventListener('unload', this.saveLastReading);  // 卸载窗口前，将数据存储，方便下次可以直接跳转位置
                isMounted = true;
            }
        },
        methods: {
            saveLastReading() {
                localStorage.setItem('lastReading', JSON.stringify({
                    path: this.$route.path,
                    scrollTop: document.documentElement.scrollTop,
                    timestamp: new Date().getTime(),
                }))
            }
        }
    });
}
