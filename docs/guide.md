---
title: 搭建目的
sidebar: auto
sidebarDepth: 2
---

# 搭建目的

::: tip 提示
主要是为了自己时不时心血来潮想写博客。
:::

### 记录一下插件网站
1. https://zpj80231.gitee.io/znote/views/front-end/vuepress-plugin-boxx.html

2. https://github.com/moefyit/vuepress-plugin-meting

3. http://music.xf1433.com/?name=%E5%90%8E%E6%9D%A5&type=netease

4. https://moefyit.github.io/moefy-vuepress/packages/meting.html#options

5. https://zhousiwei.gitee.io/live2d-widget.js/examples/index.html

<marquee>
<Boxx :blockStyle="blockStyle"  />
<Boxx type="warning" :blockStyle="titleStyle" :titleStyle="titleStyle" changeTime="1000" title="我是一个大大的且变化的 title"/>
<Boxx type="danger" :blockStyle="contentStyle" :contentStyle="contentStyle" content="我是一个小小的<br><marquee>content</marquee>"/>
</marquee>

<script>
	export default {
		data() {
			return {
				blockStyle: {'background':'#eee','color':'red'},
                titleStyle: {'margin-right': '10%','font-size':'16px'},
                contentStyle: {'margin-right': '20%','font-size':'10px',
                               "margin-top": "1rem","margin-bottom": "0.4rem"},
			}
		}
	}
</script>

```
<!-- about.md -->

<Meting server="netease"
        type="playlist"
        mid="2539599584"
        :lrc-type="3"/>

<!-- 这样就可以在 about.html 页面单独引入一个播放器咯～ -->

```
