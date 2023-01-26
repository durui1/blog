(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{666:function(a,s,t){"use strict";t.r(s);var n=t(47),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"分页、排序、限制查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分页、排序、限制查询"}},[a._v("#")]),a._v(" 分页、排序、限制查询")]),a._v(" "),t("h3",{attrs:{id:"_1-分页和排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-分页和排序"}},[a._v("#")]),a._v(" 1. 分页和排序")]),a._v(" "),t("p",[a._v("Spring Data JPA 已经帮我们内置了分页功能，在查询的方法中，需要传入参数 Pageable，当查询中有多个参数的时候 Pageable 建议『"),t("strong",[a._v("作为最后一个参数传入")]),a._v("』。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Pageable pageable = PageRequest.of(0, 3);")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Page")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("findByNickNameAndEmail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" nickName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Pageable")]),a._v(" pageable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("具有分页功能的方法会返回一个 "),t("strong",[a._v("Page<T>")]),a._v(" 对象，其中封装了与分页有关的相关信息，及其所获取的数据。")]),a._v(" "),t("p",[a._v("Pageable 是 Spring 封装的分页实现类，使用的时候需要传入页数、每页条数和排序规则，Page 是 Spring 封装的分页对象，封装了总页数、分页数据等。返回对象除使用 Page 外，还可以使用 Slice 作为返回值。")]),a._v(" "),t("p",[a._v("Page 和 Slice 的区别如下:")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Page 接口继承自 Slice 接口，而 Slice 继承自 Iterable 接口。")])]),a._v(" "),t("li",[t("p",[a._v("Page 接口扩展了 Slice 接口，添加了获取总页数和元素总数量的方法，因此，返回 Page 接口时，必须执行两条 SQL，一条复杂查询分页数据，另一条负责统计数据数量。")])]),a._v(" "),t("li",[t("p",[a._v("返回 Slice 结果时，查询的 SQL 只会有查询分页数据这一条，不统计数据数量。")])]),a._v(" "),t("li",[t("p",[a._v("用途不一样：Slice 不需要知道总页数、总数据量，只需要知道是否有下一页、上一页，是否是首页、尾页等，比如前端滑动加载一页可用；而 Page 知道总页数、总数据量，可以用于展示具体的页数信息，比如后台分页查询。")])])]),a._v(" "),t("p",[a._v("实例：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Test")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("testPageQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" page"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Sort")]),a._v(" sort "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Sort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Sort"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DESC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"id"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 排序")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Pageable")]),a._v(" pageable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PageRequest")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" sort"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    userRepository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("findALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("pageable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    userRepository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("findByNickName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"aa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" pageable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[t("p",[a._v("Sort，控制分页数据的排序，可以选择升序和降序。")])]),a._v(" "),t("li",[t("p",[a._v("PageRequest，控制分页的辅助类，可以设置页码、每页的数据条数、排序等。")])])]),a._v(" "),t("h2",{attrs:{id:"_2-限制查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-限制查询"}},[a._v("#")]),a._v(" 2. 限制查询")]),a._v(" "),t("p",[a._v("有时候我们只需要查询前 N 个元素，或者只取前一个实体。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// order by salary")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Employee")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("findFirstByOrderBySalary")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// order by salary desc limit 2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Employee")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("findFirst2ByOrderBySalaryDesc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// where job = ? order by salary desc limit 2 ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Employee")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("findFirst2ByJobEqualsOrderBySalaryDesc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" job"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);