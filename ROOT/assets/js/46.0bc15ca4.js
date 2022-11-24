(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{614:function(s,a,e){"use strict";e.r(a);var n=e(9),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"elasticsearch修改mapping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch修改mapping"}},[s._v("#")]),s._v(" ElasticSearch修改Mapping")]),s._v(" "),e("p",[s._v("首先我们要知道的是：")]),s._v(" "),e("ul",[e("li",[s._v("索引mapping一旦建好，就不支持修改了（有几种特例是可以修改的），同时也不支持删除其中字段，除非 reindex")]),s._v(" "),e("li",[s._v("你是可以随意增加字段的")])]),s._v(" "),e("p",[s._v("下面一起看一下重建步骤吧")]),s._v(" "),e("h2",{attrs:{id:"重建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重建"}},[s._v("#")]),s._v(" 重建")]),s._v(" "),e("h3",{attrs:{id:"首先看一下要重建的索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先看一下要重建的索引"}},[s._v("#")]),s._v(" 首先看一下要重建的索引")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 查看所有索引\nGET /_cat/indices?v\n\n# 查看某个索引的详细信息\nGET /gkims_recruitment_index/_mapping\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://cdn.gulei.love/docs/WeChat218286c7d9520d8222e7b26ccc2dd9b0.png",alt:"如图"}})]),s._v(" "),e("h3",{attrs:{id:"建立新的索引和映射"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立新的索引和映射"}},[s._v("#")]),s._v(" 建立新的索引和映射")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 建立新索引\nPUT /gkims_recruitment_index111\n# 为新索引建立新mapping\nPUT /gkims_recruitment_index111/_mapping\n{\n      "properties" : {\n        "age" : {\n          "type" : "long"\n            }\n        }\n        ...............\n        ...............\n        ...............\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"迁移数据到新索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迁移数据到新索引"}},[s._v("#")]),s._v(" 迁移数据到新索引")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 使用reindex api将旧索引数据导入新索引\nPOST _reindex\n{\n  "source": {\n    "index": "gkims_recruitment_index"\n  },\n  "dest": {\n    "index": "gkims_recruitment_index111"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"删除旧索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除旧索引"}},[s._v("#")]),s._v(" 删除旧索引")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 删除旧索引\nDELETE /gkims_recruitment_index\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"索引名称还原"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引名称还原"}},[s._v("#")]),s._v(" 索引名称还原")]),s._v(" "),e("p",[e("strong",[s._v("一般情况下索引名称不是随便能改的， 为了索引名称的还原，我们按照上面新建新索引的步骤再走一遍，建立旧索引，最后删除新索引即可。")])]),s._v(" "),e("blockquote",[e("p",[s._v("还有一种做法就是给新索引取老索引的别名")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('POST /_aliases\n{\n    "actions": [\n        { "add": {\n            "index": "gkims_recruitment_index_111",\n            "alias": "gkims_recruitment_index"\n        }}\n    ]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("blockquote",[e("p",[s._v("特例：\n"),e("a",{attrs:{href:"https://elastic.blog.csdn.net/article/details/121528491?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121528491-blog-85048633.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121528491-blog-85048633.pc_relevant_multi_platform_whitelistv4&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档1"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.17/indices-put-mapping.html#updating-field-mappings",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档2"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://stackoverflow.com/questions/40305880/elastic-search-index-mapping-updation",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档3"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);