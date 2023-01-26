(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{691:function(t,a,s){"use strict";s.r(a);var e=s(47),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"国际化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#国际化"}},[t._v("#")]),t._v(" 国际化")]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("p",[s("strong",[t._v("国际化")]),t._v(" 是开发支持多语言和数据格式的应用程序的技术，无需重新编写编程逻辑。国际化单词 internationlization 常缩写为 "),s("code",[t._v("i18n")]),t._v(" 。")]),t._v(" "),s("p",[s("strong",[t._v("本地化")]),t._v(" 这是将国际化应用程序改成支持特定 "),s("strong",[t._v("语言区域")]),t._v(" （locale）的技术。语言区域是指一个特定的地理、政治或文化区域。会影响到文字、时间日期格式等的形式。")]),t._v(" "),s("p",[t._v("在 Java 中，"),s("code",[t._v("java.util.Locale")]),t._v(" 类表示一个语言区域。一个 Locale 对象主要包含 2 个主要概念："),s("code",[t._v("language")]),t._v("（语言） 和 "),s("code",[t._v("country")]),t._v("（国家）。为此 "),s("strong",[t._v("国家化标准组织")]),t._v(" 专门制定了 "),s("code",[t._v("ISO 639")]),t._v(" 标准（用于标识语言）和 "),s("code",[t._v("ISO 3166")]),t._v("标准（用于标识国家）。")]),t._v(" "),s("p",[t._v("SpringMVC 的国际化问题，就是回答两个问题：")]),t._v(" "),s("ul",[s("li",[t._v("提供资源文件在哪里？（"),s("small",[t._v("以及如何加载？")]),t._v("）")]),t._v(" "),s("li",[t._v("如何获得 Locale 对象？（"),s("small",[t._v("以决定使用哪个资源文件")]),t._v("）")])]),t._v(" "),s("ol",[s("li",[t._v("如何加载某个地方的资源文件，常见有两种途径。")]),t._v(" "),s("li",[t._v("如何获得 Locale 对象，有三种途径。")])]),t._v(" "),s("p",[t._v("使用国际化功能，再次强调，不要直接访问 JSP 页面，而是通过 Controller “转到” JSP 页面，因为 JSP 页面的显示，需要 Spring MVC 做一些准备工作，一旦“绕过”Controller，导致“准备工作”不充分会造成 JSP 页面无法正常显示。")]),t._v(" "),s("h2",{attrs:{id:"指明-并加载-资源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指明-并加载-资源文件"}},[t._v("#")]),t._v(" 指明（并加载）资源文件")]),t._v(" "),s("p",[t._v("资源文件有固定的命名规则：有一个任意的基准名，后面再接下划线、语言码，还可以选择加一条下划线和国家码。如：")]),t._v(" "),s("ul",[s("li",[t._v("messages_zh_CN.properties")]),t._v(" "),s("li",[t._v("messages_en_US.properties")]),t._v(" "),s("li",[t._v("messages_de_DE.properties")])]),t._v(" "),s("p",[t._v("这里 "),s("strong",[t._v("基准名")]),t._v(" 是代表这一系列文件的标志，后续所使用的“文件名”或“文件路径名”的概念，通常都只算到 基准名 部分位置。")]),t._v(" "),s("p",[t._v("在 Spring MVC 中，通过配置 "),s("code",[t._v("ReloadableResourceBundleMessageSource")]),t._v(" 类，或 "),s("code",[t._v("ResourceBundleMessageSource")]),t._v(" 类来查找/加载上述资源文件。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("messageSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n        org.springframework.context.support .ReloadableResourceBundleMessageSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("basenames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n       \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   \t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("classpath:message"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 需要使用 classpath 关键字 --\x3e")]),t._v("\n   \t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("messageSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n        org.springframework.context.support.ResourceBundleMessageSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("basenames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   \t        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("message"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 不需要使用 classpath 关键字 --\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("以上两个类二选一，让 Spring 容器去创建其中一个的单例对象即可。对它们两个的配置，就相当于实现了国际化的第一步："),s("em",[t._v("告诉 Spring MVC 资源文件在哪")]),t._v(" 。")]),t._v(" "),s("h2",{attrs:{id:"获得-locale-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获得-locale-对象"}},[t._v("#")]),t._v(" 获得 Locale 对象")]),t._v(" "),s("p",[t._v("在第一步工作告知 Spring MVC 资源文件在什么地方后，Spring MVC 需要考虑的就是如果获取 Locale 对象，以决定使用“一堆”资源文件中的哪一个。")]),t._v(" "),s("p",[t._v("Spring MVC 有三种方式获得 Locale 对象：")]),t._v(" "),s("ul",[s("li",[t._v("AcceptHeaderLocaleResolver，从 Http 请求头中获取")]),t._v(" "),s("li",[t._v("SessionLocaleResolver，从 Session 对象中获取")]),t._v(" "),s("li",[t._v("CookieLocaleResolver，从 Cookie 对象中获取")])]),t._v(" "),s("p",[s("code",[t._v("注意")]),t._v("，以上三种途径是互斥的，期望采用那种途径，就让 Spring 去创建/维护这个类的一个单例对象。且名字必须为 "),s("code",[t._v("localeResolver")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"acceptheaderlocaleresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acceptheaderlocaleresolver"}},[t._v("#")]),t._v(" AcceptHeaderLocaleResolver")]),t._v(" "),s("p",[t._v("AcceptHeaderLocaleResolver 是 Spring MVC 默认的区域解析器，它会在 HTTP 请求的 accept-language 头部查找 Locale 信息，并以此决定使用哪个资源文件。")]),t._v(" "),s("p",[t._v("这个头部是由用户的web浏览器根据底层操作系统的区域设置进行设定。")]),t._v(" "),s("h3",{attrs:{id:"sessionlocaleresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessionlocaleresolver"}},[t._v("#")]),t._v(" SessionLocaleResolver")]),t._v(" "),s("p",[t._v("AcceptHeaderLocaleResolver 它会从当前请求的 Session 中查找Locale信息，如果 Session 中没有，那么它会根据 accept-language 头部信息确定区域信息。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("localeResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframewrok.web.servlet\n    .i18n.SessionLocaleResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("defaultLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"cookielocaleresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookielocaleresolver"}},[t._v("#")]),t._v(" CookieLocaleResolver")]),t._v(" "),s("p",[t._v("CookieLocaleResolver 它会从请求的 cookie 中查找 Locale 信息，如果 cookie 中没有，那么它会根据 accept-language 头部信息确定区域信息。")]),t._v(" "),s("p",[t._v("这个区域解析器所采用的 Cookie 可以通过 cookieName 和 cookieMaxAge 属性进行定制。cookieMaxAge 属性表示这个 Cookie 应该持续多少秒，-1表示这个 Cookie 在浏览器关闭之后就失效。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("localeResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.web.servlet.i18n.CookieLocaleResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cookieName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("language"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cookieMaxAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("defaultLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"修改-locale-信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-locale-信息"}},[t._v("#")]),t._v(" 修改 Locale 信息")]),t._v(" "),s("h3",{attrs:{id:"非常规办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非常规办法"}},[t._v("#")]),t._v(" 非常规办法")]),t._v(" "),s("p",[t._v("如果使用的是 "),s("code",[t._v("AcceptHeaderLocaleResolver")]),t._v("，那么需要修改用户的浏览器设置，以实现locale信息的修改。")]),t._v(" "),s("p",[t._v("如果使用的是 "),s("code",[t._v("SessionLocaleResolver")]),t._v(" 或 "),s("code",[t._v("CookieLocaleResolver")]),t._v("，可以在代码中通过显示调用 "),s("code",[t._v("LocaleResolver.setLocale()")]),t._v(" 来修改客户端的 locale 信息，并且该信息会存储于 Session，或 Cookie 中。但这不是首选方案。")]),t._v(" "),s("h3",{attrs:{id:"常规办法-localechangeinterceptor-拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常规办法-localechangeinterceptor-拦截器"}},[t._v("#")]),t._v(" 常规办法： LocaleChangeInterceptor 拦截器")]),t._v(" "),s("p",[t._v("Spring MVC 提供了 "),s("code",[t._v("LocaleChangeInterceptor")]),t._v(" 拦截器，该拦截器会发现当前 HTTP 请求中出现的 "),s("strong",[t._v("特殊参数")]),t._v(" 。如果这种参数出现在当前请求中，拦截器就会根据参数值来改变用户的区域。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("localeChangeInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.web.servlet.i18n.LocaleChangeInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("paramName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://localhost:8080/court/welcome.do?lang=en_US\nhttp://localhost:8080/court/welcome.do?lang=zh_CN\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);