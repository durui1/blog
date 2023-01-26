(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{576:function(s,t,a){"use strict";a.r(t);var n=a(47),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[s._v("#")]),s._v(" 索引")]),s._v(" "),a("h2",{attrs:{id:"索引的概念、优点及缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的概念、优点及缺点"}},[s._v("#")]),s._v(" 索引的概念、优点及缺点")]),s._v(" "),a("ul",[a("li",[s._v("索引是创建在表上的，是对数据库表中 "),a("strong",[s._v("一列或多列")]),s._v(" 的值进行 "),a("strong",[s._v("排序")]),s._v(" 的一种结构。")]),s._v(" "),a("li",[s._v("索引可以提高查询速度。")]),s._v(" "),a("li",[s._v("通过索引，查询数据时不必读完记录的所有信息，而只是查询索引列。")])]),s._v(" "),a("p",[s._v("索引的缺点：")]),s._v(" "),a("ul",[a("li",[s._v("创建和维护索引需要消耗时间，简单来说，就是牺牲增删改的时间，换查询时间。")]),s._v(" "),a("li",[s._v("索引需要占物理空间。")])]),s._v(" "),a("h2",{attrs:{id:"索引的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的分类"}},[s._v("#")]),s._v(" 索引的分类")]),s._v(" "),a("p",[s._v("从 "),a("strong",[s._v("存储类型")]),s._v(" 上分，有两种索引类型：")]),s._v(" "),a("ul",[a("li",[s._v("BTree 索引")]),s._v(" "),a("li",[s._v("Hash 索引")])]),s._v(" "),a("p",[s._v("InnoDB 和 MyISAM 引擎都支持的 BTree 索引。")]),s._v(" "),a("p",[s._v("除了类型分类法，索引还有另外的分类方式，被分为：")]),s._v(" "),a("ul",[a("li",[s._v("普通索引。普通索引没有任何附加条件，可以创建在任何数据类型中。")]),s._v(" "),a("li",[s._v("唯一索引。唯一索引必须建在使用了 UNIQUE 修饰的列上。")]),s._v(" "),a("li",[s._v("全文索引。全文索引必须建在使用了 FULLTEXT 修饰的列上，而且该列的数据类型必须是 CAHR、VARCHAR 或 TEXT 类型。另外，MyISAM 支持全文索引，但 InnoDB 不支持。")]),s._v(" "),a("li",[s._v("空间索引。这种索引只能建立在空间数据类型的列上，且仅 MyISAM 引擎支持。极为罕见。")])]),s._v(" "),a("p",[s._v("索引可以建立在某个列上，这样的索引无论是上述何种类型，都称为"),a("strong",[s._v("单列索引")]),s._v("。相对应的，如果是在表的多个列上创建一个索引，这种索引被称为"),a("strong",[s._v("多列索引")]),s._v("，但是只有查询条件中使用了这些列的第一个时，索引才会被使用。")]),s._v(" "),a("h2",{attrs:{id:"索引的设计原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的设计原则"}},[s._v("#")]),s._v(" 索引的设计原则：")]),s._v(" "),a("ul",[a("li",[a("small",[s._v("如果有唯一性的列，必建唯一索引。")])]),s._v(" "),a("li",[a("small",[s._v("为常作为查询条件的字段建立索引。")])]),s._v(" "),a("li",[a("small",[s._v("为经常需要排序，分组和联合操作的字段建立索引。")])]),s._v(" "),a("li",[a("small",[s._v("限制索引数量。")])]),s._v(" "),a("li",[a("small",[s._v("即使删除不再使用，或很少使用的索引。")])]),s._v(" "),a("li",[a("small",[s._v("数据量小的表没有必要建立索引。")])])]),s._v(" "),a("h2",{attrs:{id:"索引的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的创建"}},[s._v("#")]),s._v(" 索引的创建")]),s._v(" "),a("p",[s._v("在建表时，对某列使用过 "),a("strong",[s._v("主键")]),s._v("、"),a("strong",[s._v("外键")]),s._v(" 或 "),a("strong",[s._v("唯一")]),s._v(" 约束，MySQL 会默认在这些列上创建索引。")]),s._v(" "),a("p",[s._v("创建索引语句，在表声明的尾部。所用关键字可以是 INDEX，也可以是 KEY 。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("普通索引")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("索引名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("列名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("唯一索引：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("索引名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("（列名）\n")])])])]),s._v(" "),a("li",[a("p",[s._v("全文索引：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("FULLTEXT INDEX [索引名]（列名）\n")])])])]),s._v(" "),a("li",[a("p",[s._v("以上创建的都是单列索引，如果要创建多列索引则：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("INDEX [索引名]（列名1, 列名2, ...)\n")])])])])]),s._v(" "),a("p",[s._v("如果在建表语句之外，通过『修改』命令可以添加/删除索引。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("表名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("索引名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("列名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("列名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("表名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("索引名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" 索引名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("列"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" 索引名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);