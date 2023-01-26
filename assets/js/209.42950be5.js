(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{573:function(s,t,a){"use strict";a.r(t);var n=a(47),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"插入、更新和删除数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入、更新和删除数据"}},[s._v("#")]),s._v(" 插入、更新和删除数据")]),s._v(" "),a("p",[s._v("增删改操作属于 DML 和 DQL 两大类语句中的 DML 。")]),s._v(" "),a("p",[s._v("DML 语句用于操纵数据库表和视图的数据。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("small",[s._v("通过执行 "),a("strong",[s._v("INSERT")]),s._v(" 语句可以给表增加数据；")])]),s._v(" "),a("li",[a("small",[s._v("通过执行 "),a("strong",[s._v("UPDATE")]),s._v(" 语句可以更新表的数据；")])]),s._v(" "),a("li",[a("small",[s._v("通过执行 "),a("strong",[s._v("DELETE")]),s._v(" 语句可以删除表的数据。")])])])]),s._v(" "),a("h2",{attrs:{id:"使用-insert-语句插入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-insert-语句插入数据"}},[s._v("#")]),s._v(" 使用 INSERT 语句插入数据")]),s._v(" "),a("p",[a("code",[s._v("INSERT")]),s._v(" 语句语法的一般形式为：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 字段名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 字段名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[a("strong",[s._v("INSERT INTO")]),s._v(": 关键字，用以指明要插入的表，以及表中的列。")]),s._v(" "),a("li",[a("strong",[s._v("VALUE")]),s._v(": 关键字，指明要插入对应列中的值。")])]),s._v(" "),a("p",[s._v("注意，字段名和值的顺序和数量应该是一一对应的。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Maliy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ANALYS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果写的是 "),a("strong",[s._v("全字段名，且顺序与字段定义顺序一致")]),s._v("，那么所有的字段名可以省略不写。即，")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mgr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hiredate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" comm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JASH'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ANALYS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7902")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1989-06-05'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("可以简写为：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" emp \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JASH'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ANALYS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7902")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1989-06-05'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"使用-update-语句更新表数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-update-语句更新表数据"}},[s._v("#")]),s._v(" 使用 UPDATE 语句更新表数据")]),s._v(" "),a("p",[s._v("SQL 使用 "),a("strong",[s._v("UPDATE")]),s._v(" 语句对数据表中符合更新条件的记录进行更新。其一般如法如下:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" 表名\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 条件表达式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("凡是符合 "),a("strong",[s._v("WHERE")]),s._v(" 子句判断标准的行都会被更新。")]),s._v(" "),a("p",[s._v("如果没有 "),a("strong",[s._v("WEHERE")]),s._v(" 子句，即没有指定更新条件，那么表中所有行信息都会被更新！")]),s._v(" "),a("p",[s._v("为雇员 JASH 加薪 10%")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JASH'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("为所有雇员加薪 10%")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"使用-delete-语句删除表数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-delete-语句删除表数据"}},[s._v("#")]),s._v(" 使用 DELETE 语句删除表数据")]),s._v(" "),a("p",[s._v("SQL 语言使用 "),a("strong",[s._v("DELETE")]),s._v(" 语句删除表中的记录。语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 条件表达式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("表中凡是符合 "),a("strong",[s._v("WHERE")]),s._v(" 子句判断标准的行都将被删除。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'JASH'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("DELETE 语句可以没有 "),a("strong",[s._v("WHERE")]),s._v(" 子句，那么这将删空整张表（注意，清空表不等于删除表）。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);