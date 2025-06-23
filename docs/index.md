---
home: true
pageClass: vdoing-index-class
# heroImage: /img/avatar.png   这个是页面上的图片，放上就难看了
heroText: 张先生的部落格
tagline: Kusch的小破站，才疏学浅，积跬步可以至千里！
# actionText: 立刻进入 →
# actionLink: /web/

# auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       
# 提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
# bannerBg: /img/bg01.jpg

features: # 可选的
  - title: AI
    details: 主流AI技术，包含RAG、Agent、大模型等内容
    link: /ai/ # 可选
    imgUrl: /img/ai_003.png # 可选
  - title: 部署与运维
    details: 项目部署、Docker等相关文章
    link: /technology/
    imgUrl: /img/publish.png
  - title: 框架
    details: Spring、Mybatis等相关框架技术文章
    link: /framework/
    imgUrl: /img/spring.png

#postList: simple
#simplePostListLength: 15
# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
# hideRightBar: true # 是否隐藏右侧边栏
---



<ClientOnly>
  <IndexBigImg />
</ClientOnly>
