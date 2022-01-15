(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{504:function(t,e,_){"use strict";_.r(e);var a=_(10),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"数据库索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库索引"}},[t._v("#")]),t._v(" 数据库索引")]),t._v(" "),_("h3",{attrs:{id:"位图索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#位图索引"}},[t._v("#")]),t._v(" 位图索引")]),t._v(" "),_("p",[t._v("部分内容来源："),_("a",{attrs:{href:"https://blog.csdn.net/hellojoy/article/details/81740997",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击这里"),_("OutboundLink")],1)]),t._v(" "),_("blockquote",[_("p",[t._v("不使用索引时，数据库只能一行行扫描所有记录，然后判断该记录是否满足查询条件")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("位图索引适合只有几个固定值的列，如性别、婚姻状况、行政区等等，而身份证号这种类型不适合用位图索引。")])]),t._v(" "),_("li",[_("p",[t._v("位图索引适合静态数据，而不适合索引频繁更新的列。")])]),t._v(" "),_("li",[_("p",[t._v("位图索引不存储rowid值（数据实际物理地址），也不存储键值。")])]),t._v(" "),_("li",[_("p",[t._v("在表中放置单独的位图索引是没有意义的，只有多个列建立位图索引，系统才能有效的利用位图索引提高查询速度。")])]),t._v(" "),_("li",[_("p",[t._v("位图索引不适合"),_("code",[t._v("OLTP")]),t._v("（联机事务处理）适合"),_("code",[t._v("OLAP")]),t._v("(联机分析处理)")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("  create bitmap index emp_job_bitmap_idx on 表(列);\t\n")])])])])]),t._v(" "),_("p",[_("strong",[t._v("流程：")])]),t._v(" "),_("ol",[_("li",[t._v("性别只有男女两个值，最多再加个未知，数值种类较少，因此用位图索引较为合适。")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("rowId")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("...")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("男")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("...")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("女")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("...")])])])]),t._v(" "),_("p",[t._v("位图索引形成两个向量，男向量为111101...，向量的每一位表示该行是否是男，如果是则位1，否为0，同理，女向量位001011...")]),t._v(" "),_("ol",[_("li",[t._v("婚姻情况也是类似")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("rowId")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("...")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("已婚")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("...")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("未婚")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("...")])])])]),t._v(" "),_("p",[t._v("位图索引形成两个向量，已婚向量为"),_("code",[t._v("111101...")]),t._v("，未婚向量位"),_("code",[t._v("001011...")])]),t._v(" "),_("p",[t._v("此时如果有个查询，查询 "),_("code",[t._v("性别=男 and 婚姻=未婚")]),t._v(" ，就会将男向量与未婚向量想与，得到相与结果为1的就是要查询的结果。")]),t._v(" "),_("blockquote",[_("p",[t._v("不适合 "),_("code",[t._v("OLTP")]),t._v(" 的原因:"),_("br"),t._v("\n位图索引, 由于用位图反映数据, 不同会话更新相同键值的同一位图段, insert、update、delete相互操作都会发锁定，导致阻塞，未完成前无法进行下一步操作。")])]),t._v(" "),_("h3",{attrs:{id:"mysql存储引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql存储引擎"}},[t._v("#")]),t._v(" Mysql存储引擎")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("MyISAM引擎")])])]),t._v(" "),_("p",[t._v("MyISAM存储引擎不支持行级锁，只有表级锁；"),_("br"),t._v("\n不支持事务，也不支持外键，主要面向OLAP应用，是MySQL数据库5.5.8之前版本默认的存储引擎。"),_("br"),t._v("\nMyISAM适用于不需要关心事务，读多写少的场景。"),_("br"),t._v("\n每张MyISAM表在磁盘上会创建三个文件："),_("code",[t._v(".frm")]),t._v("，"),_("code",[t._v(". MYD")]),t._v("和"),_("code",[t._v(". MYI")]),t._v("，其中"),_("code",[t._v(".frm")]),t._v("文件为表结构，每个存储引擎都会有这个文件，是用来存储表结构的，"),_("br"),t._v(" "),_("code",[t._v(". MYD")]),t._v("文件用来存储数据，"),_("code",[t._v(". MYI")]),t._v("用来存储索引，也就是说MyISAM的数据和索引是分开存储的，这一点和InnoDB不一样。"),_("br"),t._v("\n在MySQL5.0之前，MyISAM默认支持的表只有4GB，如果要修改默认表大小的话，需要修改参数MAX_ROWS和AVG_ROW_LENGTH的大小，不过这一点在MySQL5.0之后得到了改善，默认大小为256TB，这个大小在绝大部分应用应该都是可以满足要求的。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("InnoDB引擎")])])]),t._v(" "),_("p",[t._v("InnoDB存储引擎支持事务，主要是为了面向在线事务处理(OLTP)的应用而生，支持行锁和外键，"),_("br"),t._v("\n其通过使用多版本并发控制(MVCC)来提升高并发性能，实现了SQL标准的4种隔离级别。"),_("br"),t._v("\n从MySQL数据库5.5.8版本开始，为MySQL默认存储引擎。\n每张 InnoDB表在磁盘上会创建两个文件："),_("code",[t._v(".frm")]),t._v(" 和"),_("code",[t._v(".ibd")]),t._v("，"),_("br"),t._v("\n其中"),_("code",[t._v(".frm")]),t._v("文件和MyISAM引擎一样，用来存储表结构的，\n"),_("code",[t._v(".ibd")]),t._v("文件存储的是索引和数据，InnoDB中索引和数据放在同一个文件中。")]),t._v(" "),_("h3",{attrs:{id:"mysql的最左匹配原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql的最左匹配原则"}},[t._v("#")]),t._v(" Mysql的最左匹配原则")]),t._v(" "),_("h4",{attrs:{id:"like和-的最左匹配方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#like和-的最左匹配方式"}},[t._v("#")]),t._v(" like和_的最左匹配方式")]),t._v(" "),_("p",[t._v("比如我们在表user中的列name中创建了索引，然后执行查询语句：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("select * from user where name like '%张三';\nselect * from user where name like '_张三';\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("这两种因为不是从开头开始匹配的，等于跳过了索引的开头部分，根据索引的最左匹配原则，这种情况就不会使用索引。")]),t._v(" "),_("h4",{attrs:{id:"联合索引的最左匹配方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#联合索引的最左匹配方式"}},[t._v("#")]),t._v(" 联合索引的最左匹配方式")]),t._v(" "),_("p",[t._v("比如我们在表user中的列name和age中创建了联合索引index(name, age)，然后执行查询语句：")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("select * from user where name='张三';\nselect * from user where age=12;\nselect * from user where name='张三' and age=12;\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("p",[t._v("上面的索引中1和3是可以用到索引的，联合索引可以只使用一列，和第二句，因为跳过了name直接搜索age，违反了最左匹配原则，所以一般不支持索引。")]),t._v(" "),_("h4",{attrs:{id:"其他无法使用索引场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他无法使用索引场景"}},[t._v("#")]),t._v(" 其他无法使用索引场景")]),t._v(" "),_("ul",[_("li",[t._v("在索引列上使用函数（replace\\substr\\concat\\sum count avg等），使用表达式或者计算(+、-、*、/)")]),t._v(" "),_("li",[t._v("字符串不加引号，会出现隐式转换，相当于使用函数to_char()")]),t._v(" "),_("li",[t._v("使用!，<>，not like，not in等反向查询")])]),t._v(" "),_("blockquote",[_("p",[t._v("这些规则其实也仅仅只是在一般情况下，然后到底用不用索引，最终还是要优化器决定，MySQL优化器是基于开销来决定是否使用索引而不是基于规则来决定是否使用索引。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);