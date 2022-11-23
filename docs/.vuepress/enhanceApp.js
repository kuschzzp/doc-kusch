/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

// export default ({
//   Vue, // the version of Vue being used in the VuePress app
//   options, // the options for the root Vue instance
//   router, // the router instance for the app
//   siteData // site metadata
// }) => {
//   // ...apply enhancements for the site.
// }


// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
 Vue,
 options,
 router
}) => {
    console.log(Vue, '123');
 Vue.use(Element)
}
