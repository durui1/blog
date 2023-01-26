(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{784:function(t,s,a){"use strict";a.r(s);var n=a(47),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-vue-router-实现客户端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-router-实现客户端路由"}},[t._v("#")]),t._v(" 使用 vue-router 实现客户端路由")]),t._v(" "),a("p",[t._v("路由就是根据一个路径"),a("small",[t._v("（如，"),a("code",[t._v("/student/9527")]),t._v("）")]),t._v("来确定应该在页面上显示什么内容的行为。")]),t._v(" "),a("p",[a("strong",[t._v("vue-router")]),t._v(" 作为 Vue 的一个库，旨在让我们能够在客户端，而非服务端来处理一个应用的路由。")]),t._v(" "),a("h2",{attrs:{id:"场景模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景模拟"}},[t._v("#")]),t._v(" 场景模拟")]),t._v(" "),a("p",[t._v("现在我们来实现这样一个功能：")]),t._v(" "),a("p",[t._v("一个页面，包含登录和注册，点击不同按钮，实现登录和注册页切换：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/router-6.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"编写父组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写父组件"}},[t._v("#")]),t._v(" 编写父组件")]),t._v(" "),a("blockquote",[a("p",[t._v("如果一切从简，接下来你可以不创建 "),a("code",[t._v("src")]),t._v(" 文件夹，将 "),a("code",[t._v(".js")]),t._v(" 文件和 "),a("code",[t._v("index.html")]),t._v(" 文件放在同一级目录也可以。")])]),t._v(" "),a("p",[t._v("为了让接下来的功能比较清晰，我们先新建一个文件夹："),a("code",[t._v("src")]),t._v("，然后新建一个 HTML 文件，作为入口："),a("code",[t._v("index.html")]),t._v(" 。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/router-1.png",alt:"1530148321175"}})]),t._v(" "),a("p",[t._v("然后编写页面的基本结构：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("登录"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("注册"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        登录页/注册页\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("样式：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/router-2.png",alt:"1530149363817"}})]),t._v(" "),a("h3",{attrs:{id:"编写登录及注册组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写登录及注册组件"}},[t._v("#")]),t._v(" 编写登录及注册组件")]),t._v(" "),a("p",[t._v("接下来我们来实现登录组件，以前我们都是写在一个文件中，但是为了复用性，开发中都会把组件放入独立的 JS 文件中，我们新建一个 user 目录以及 login.js 及 register.js：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/router-3.png",alt:"1530156389366"}})]),t._v(" "),a("p",[t._v("编写组件，这里我们只写模板，不写功能。")]),t._v(" "),a("p",[t._v("login.js 内容如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loginForm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\\\n    <div>\\\n        <h2>登录页</h2> \\\n        用户名：<input type="text"><br/>\\\n        密码：<input type="password"><br/>\\\n    </div>\\\n    \'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("register.js 内容：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" registerForm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\\\n    <div>\\\n      <h2>注册页</h2> \\\n      用&ensp;户&ensp;名：<input type="text"><br/>\\\n      密&emsp;&emsp;码：<input type="password"><br/>\\\n      确认密码：<input type="password"><br/>\\\n    </div>\\\n    \'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"在父组件中引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在父组件中引用"}},[t._v("#")]),t._v(" 在父组件中引用")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("登录"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("注册"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--<loginForm></loginForm>--\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n            疑问：为什么不采用上面的写法？\n            由于 html 是大小写不敏感的，如果采用上面的写法，则被认为是<loginform></loginform>\n            所以，如果是驼峰形式的组件，需要把驼峰转化为“-”的形式\n         --\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("login-form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("login-form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("register-form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("register-form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user/login.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user/register.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loginForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            registerForm\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/router-4.png",alt:"1530157389501"}})]),t._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("我们期待的是，当点击登录或注册按钮，分别显示登录页或注册页，而不是一起显示。")]),t._v(" "),a("p",[t._v("但是，如何才能动态加载组件，实现组件切换呢？")]),t._v(" "),a("p",[t._v("虽然使用原生的 html5 和 js 也能实现，但是官方推荐我们使用 vue-router 模块。")]),t._v(" "),a("h2",{attrs:{id:"vue-router-的简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-的简单使用"}},[t._v("#")]),t._v(" vue-router 的简单使用")]),t._v(" "),a("p",[t._v("使用 vue-router 和 vue 可以非常方便的实现复杂单页应用的动态路由功能。")]),t._v(" "),a("p",[t._v("官网："),a("a",{attrs:{href:"https://router.vuejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://router.vuejs.org/zh-cn/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("cdn 网址：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("vue-router 基本使用步骤如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("引入相关的库文件")])]),t._v(" "),a("li",[a("p",[t._v("添加路由链接")])]),t._v(" "),a("li",[a("p",[t._v("添加路由填充位")])]),t._v(" "),a("li",[a("p",[t._v("定义路由组件")])]),t._v(" "),a("li",[a("p",[t._v("配置路由规则并创建路由实例")])]),t._v(" "),a("li",[a("p",[t._v("把路由挂载到 Vue 根实例中")])])]),t._v(" "),a("p",[t._v("其中，在之前的内容中，我们已经完成了第 "),a("code",[t._v("4")]),t._v(" 步。")]),t._v(" "),a("h3",{attrs:{id:"step-1-引入相关的库文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-引入相关的库文件"}},[t._v("#")]),t._v(" step 1: 引入相关的库文件")]),t._v(" "),a("p",[t._v("在 index.html 中以直接引入的方式使用")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v(":: tip\n"),a("small",[t._v("（未来）")]),t._v("在 vue-cli 中安装使用：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 @vue/cli 安装（建议）")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("vue "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" router\n")])])])]),t._v(" "),a("li",[a("p",[t._v("使用 npm/yarn 安装（不建议）：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-router --save\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vue-router --save\n")])])])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h3",{attrs:{id:"step-2-添加路由链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-添加路由链接"}},[t._v("#")]),t._v(" step 2: 添加路由链接")]),t._v(" "),a("p",[t._v("在页面上使用 "),a("strong",[t._v("<router-link>")]),t._v(" 元素。")]),t._v(" "),a("p",[t._v("router-link 是 vue 中提供的用于改变 URI 的标签，它默认会被渲染为 <a> 标签。")]),t._v(" "),a("p",[t._v("页面跳转控制：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- router-link 来指定跳转的路径--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("登录"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("注册"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("<router-link> 默认会被渲染为 <a> 标签，而它的 "),a("strong",[t._v("to")]),t._v(" 属性显然就是被渲染为 <a> 标签的 "),a("strong",[t._v("href")]),t._v(" 属性。")]),t._v(" "),a("p",[a("strong",[t._v("to")]),t._v(" 属性的属性值"),a("small",[t._v("（例如，这里的 "),a("code",[t._v("/login")]),t._v(" 和 "),a("code",[t._v("/register")]),t._v("）")]),t._v("会被渲染为以 # 开头的 hash 地址。也就是说")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当点击 "),a("strong",[t._v("登录")]),t._v(" 时，浏览器的 URI 会变为 "),a("code",[t._v("/#/login")])])]),t._v(" "),a("li",[a("p",[t._v("当点击 "),a("strong",[t._v("注册")]),t._v(" 时，浏览器的 URI 会变为 "),a("code",[t._v("/#/register")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("当浏览器的 URI 发生变化，变为 "),a("code",[t._v("/#/login")]),t._v(" 或 "),a("code",[t._v("/#/register")]),t._v(" 之后，会发生什么事情，会跳转显示什么样的页面，那就是『另一件事情』了，与 router-link 无关了。")])]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("<router-view>")]),t._v(" 来指定一个锚点，当路由的路径匹配时，vue-router 会自动把对应组件放到锚点位置进行渲染")])]),t._v(" "),a("h3",{attrs:{id:"step-3-添加路由填充位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-添加路由填充位"}},[t._v("#")]),t._v(" step 3: 添加路由填充位")]),t._v(" "),a("p",[t._v("在页面上添加 "),a("strong",[t._v("<router-view></router-view>")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--vue-router 的锚点--\x3e")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("在 vue 所实现的单页应用（SPA）中，"),a("strong",[t._v("页面是一个公共资源")]),t._v("，在单页应用中并没有太多的"),a("small",[t._v("（甚至完全没有）")]),t._v("页面跳转。")]),t._v(" "),a("p",[t._v("你所看到的“所谓的”页面的跳转实际上是大家轮流在使用同一个页面。“你方唱罢，我登场。”")]),t._v(" "),a("p",[a("strong",[t._v("<router-view>")]),t._v(" 元素就是负责在页面上标注出一个公共区域，未来，大家轮流使用这个位置，展示各自的内容。")]),t._v(" "),a("h3",{attrs:{id:"step-4-定义路由组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-定义路由组件"}},[t._v("#")]),t._v(" step 4: 定义路由组件")]),t._v(" "),a("p",[t._v("之前的准备工作中，已经完成了这一项工作。")]),t._v(" "),a("p",[t._v("定义了 LoginForm 和 RegisterForm 两个组件，并在 vue 中进行了注册：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用 loginForm 和 registerForm 组件")]),t._v("\n        loginForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        registerForm\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"step-5-配置路由规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5-配置路由规则"}},[t._v("#")]),t._v(" step 5: 配置路由规则")]),t._v(" "),a("p",[t._v("我们之前做了 3 件事情：")]),t._v(" "),a("ul",[a("li",[t._v("通过使用 "),a("strong",[t._v("<router-link>")]),t._v(" 来引起 URI 的变化")]),t._v(" "),a("li",[t._v("通过使用 "),a("strong",[t._v("<router-view>")]),t._v(" 在页面上划出一个“公共区域”")]),t._v(" "),a("li",[t._v("定义了多个组件")])]),t._v(" "),a("p",[t._v("现在，我们需要将这三件事情关联起来：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("当 URI 是 xxx 时，在“公共区域”显示组件 A；当 URI 是 yyy 是，在“公共区域”显示组件 B；...\n")])])]),a("p",[t._v("为了实现这个目标，我们需要『"),a("strong",[t._v("配置路由规则")]),t._v("』。")]),t._v(" "),a("p",[t._v("新建 "),a("strong",[t._v("vue-router")]),t._v(" 对象，通过它的 routes 属性来指定路由规则：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 VueRouter 对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编写路由规则")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" loginForm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/register"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" registerForm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上述配置十分容易理解：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当 URI 是 "),a("code",[t._v("/login")]),t._v(" 事，在公共区域 <router-view> 处，展现 loginForm 组件；")])]),t._v(" "),a("li",[a("p",[t._v("当 URI 是 "),a("code",[t._v("/register")]),t._v(" 时，在公共区域 <router-view> 处，展现 registerForm 组件。")])])]),t._v(" "),a("p",[t._v("在 vue-router 的 "),a("strong",[t._v("routers")]),t._v(" 属性的配置中， "),a("strong",[t._v("path")]),t._v(" 配置的是路由的路径；"),a("strong",[t._v("component")]),t._v(" 配置的是组件名称。")]),t._v(" "),a("h3",{attrs:{id:"step-6-把路由挂载到-vue-根实例中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-6-把路由挂载到-vue-根实例中"}},[t._v("#")]),t._v(" step 6: 把路由挂载到 Vue 根实例中")]),t._v(" "),a("p",[t._v("通过 vue-router 对象定义出路由规则"),a("small",[t._v("（将上述的三件事关联在一起）")]),t._v("之后，我们需要将 vueRouter 对象"),a("small",[t._v("（即路由规则）")]),t._v(" 告知 Vue 。")]),t._v(" "),a("p",[t._v("现在在创建 vue 对象时，我们要『多』传入一个 vue-router 对象了：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    router "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用上面定义的 router 对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/vue/img/router-6.gif",alt:""}})]),t._v(" "),a("p",[t._v("更多的关于 vue-router 的进阶功能，我们在 vue-cli 中再一一展示。")])])}),[],!1,null,null,null);s.default=r.exports}}]);