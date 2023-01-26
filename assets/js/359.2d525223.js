(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{727:function(t,a,s){"use strict";s.r(a);var n=s(47),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"commons-codec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commons-codec"}},[t._v("#")]),t._v(" Commons Codec")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-codec"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-codec"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.15"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"写在前面的话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在前面的话"}},[t._v("#")]),t._v(" 写在前面的话")]),t._v(" "),s("p",[t._v("commons-codec 的情况与 commons-io 的情况类似，一提到 java 领域的编解码库，第一选择就是它，几乎想不到它有什么竞品与之竞争。")]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("p",[t._v("最常用工具类是 "),s("em",[s("strong",[t._v("DigestUtils")])]),t._v(" 类："),s("em",[t._v("org.apache.commons.codec.digest.DigestUtils")]),t._v(" 类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"right"}},[t._v("方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("md5Hex")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("MD5 加密，返回 32 位")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("sha1Hex")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SHA-1 加密")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("sha256Hex")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SHA-256 加密")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("sha512Hex")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SHA-512 加密")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"right"}},[t._v("md5")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("MD5 加密，返回 16 位")])])])]),t._v(" "),s("h2",{attrs:{id:"加密算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密算法"}},[t._v("#")]),t._v(" 加密算法")]),t._v(" "),s("p",[s("em",[s("strong",[t._v("MD5")])]),t._v(" 是哈希散列算法"),s("small",[t._v("（也称摘要算法）")]),t._v("，对于 MD5 而言，有两个特性是很重要的，")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("明文数据经过散列以后的值是定长的；")])]),t._v(" "),s("li",[s("p",[t._v("是任意一段明文数据，经过散列以后，其结果必须永远是不变的。")])])]),t._v(" "),s("p",[t._v("MD5 曾一度被认为是非常安全的。但是 MD5 也不会完全不重复，从概率来说 16 的 32 次方遍历后至少出现两个相同的 MD5 值。")]),t._v(" "),s("p",[t._v("表面上看这个概率异常的小，但是山东大学王小云教授发现了 MD5 算法的缺陷，可以很快的找到 MD5 的“磕碰”，能让两个文件可以产生相同的“指纹”，让“碰撞”这种小概率事件变成必然事件。")]),t._v(" "),s("p",[s("strong",[t._v("以 Google 公司为例，Google 公司明确指出不建议再使用 MD5 算法，而使用 SHA256 算法替代。")])]),t._v(" "),s("p",[s("em",[s("strong",[t._v("SHA-256")])]),t._v(" 算法单向 Hash 函数是密码学和信息安全领域中的一个非常重要的基本算法，它是把任意长的消息转化为较短的、固定长度的消息摘要的算法。")]),t._v(" "),s("p",[t._v("SHA-256 算法是 SHA 算法族中的一员，由美国国家安全局"),s("small",[t._v("（NSA）")]),t._v("所设计，并由美国国家标准与技术研究院"),s("small",[t._v("（NIST）")]),t._v("发布；是美国的政府标准。")]),t._v(" "),s("p",[t._v("它的前辈还有 "),s("em",[s("strong",[t._v("SHA-1")])]),t._v("。随着密码学"),s("small",[t._v("（破解）")]),t._v("的发展，"),s("strong",[t._v("美国政府计划从 2010 年起不再使用 SHA-1")]),t._v("，全面推广使用 SHA-256 和 SHA-512 等加密算法。")]),t._v(" "),s("p",[t._v("对于任意长度的消息，SHA256 都会产生一个 256bit 长的哈希值，称作消息摘要。")]),t._v(" "),s("p",[t._v("这个摘要相当于是个长度为 32 个字节的数组，通常用一个长度为 64 的十六进制字符串来表示。")]),t._v(" "),s("h2",{attrs:{id:"sha512hex-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sha512hex-方法"}},[t._v("#")]),t._v(" sha512Hex 方法")]),t._v(" "),s("p",[t._v("以 SHA512 加密算法对数据源进行加密，返回加密后的十六进制形式字符串")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha512Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha512Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha512Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),s("h2",{attrs:{id:"sha256hex-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sha256hex-方法"}},[t._v("#")]),t._v(" sha256Hex 方法")]),t._v(" "),s("p",[t._v("以 SHA256 加密算法对数据源进行加密，返回加密后的十六进制形式字符串")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"sha1hex-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sha1hex-方法"}},[t._v("#")]),t._v(" sha1Hex 方法")]),t._v(" "),s("p",[t._v("以 SHA1 加密算法对数据源进行加密，返回加密后的十六进制形式字符串")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha1Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha1Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha1Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"shahex-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shahex-方法"}},[t._v("#")]),t._v(" shaHex 方法")]),t._v(" "),s("p",[t._v("以 SHA1 加密算法对数据源进行加密，返回加密后的十六进制形式字符串")]),t._v(" "),s("p",[t._v("从 1.11 开始被标记为废弃，建议使用 sha1Hex 方法替代。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaHex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaHex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaHex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"md5hex-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#md5hex-方法"}},[t._v("#")]),t._v(" md5Hex 方法")]),t._v(" "),s("p",[t._v("以 "),s("code",[t._v("MD5")]),t._v(" 加密算法对数据源进行加密，返回加密后的十六进制形式字符串")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5Hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  同上，只不过返回的不是十六进制字符串，而是加密后的二进制的字节数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha512")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);