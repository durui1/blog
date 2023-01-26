(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{485:function(t,s,a){"use strict";a.r(s);var n=a(47),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"异常的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常的作用"}},[t._v("#")]),t._v(" 异常的作用")]),t._v(" "),a("h2",{attrs:{id:"方法作者面对的一个问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法作者面对的一个问题"}},[t._v("#")]),t._v(" 方法作者面对的一个问题")]),t._v(" "),a("p",[t._v("虽然我们面前的代码都是我们一个人编写的，但是我们需要清楚的是，在编码过程中涉及到两个角色：『"),a("strong",[t._v("类、方法的作者")]),t._v("』和『"),a("strong",[t._v("类、方法的使用者")]),t._v("』。")]),t._v(" "),a("p",[t._v("只不过，"),a("strong",[t._v("我们一个人同时扮演了这两个角色")]),t._v("。"),a("small",[t._v("认识清这一点很重要。")])]),t._v(" "),a("p",[t._v("方法的使用者调用某个方法，逻辑上，相当于方法的使用者『要求』方法的作者去执行某个操作，造成某种效果或得到某些数据。但是方法的作者去执行这项任务时有可能执行成功，也有可能执行失败。例如：")]),t._v(" "),a("blockquote",[a("p",[t._v("你调用一个 DAO 方法去删除数据库中的某条数据，但是在执行期间，数据库所在的服务器可能断电，也可能断网，从而导致客户端"),a("small",[t._v("（你的代码）")]),t._v("和数据库服务器连接断开，那么，这个 DAO 方法的执行当然就不会成功。")])]),t._v(" "),a("p",[t._v("简单来说就是，你去调用一个方法，没有人能保证这个方法的执行一定就会成功的！就算被调方法的代码是 100% 正确的，你调用方法最后的结果也不一定是执行成功。例如上例就是。")]),t._v(" "),a("p",[t._v("那方法的作者如何告知方法的使用者："),a("strong",[t._v("你要我去执行的事情没能成功完成，我执行失败了，并且失败原因是 xxx")]),t._v(" ？")]),t._v(" "),a("h2",{attrs:{id:"没有异常的编程世界是怎么玩的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有异常的编程世界是怎么玩的"}},[t._v("#")]),t._v(" 没有异常的编程世界是怎么玩的")]),t._v(" "),a("p",[t._v("上述问题不单单是 Java 程序员要面对的问题，在 Java 之前，甚至是在 C++ 之前，程序员就要面对并解决这个问题。")]),t._v(" "),a("blockquote",[a("p",[t._v("有没有更偏门的、小众的编程语言早于 C++ 提出异常的概念这？个我没有深入研究，但是在通用语言中，C++ 是第一个提出『异常』语法特性的编程语言。C++ 之前的『著名语言』中，都没有异常的概念。")])]),t._v(" "),a("h3",{attrs:{id:"方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),a("p",[t._v("对于『告知调用者调用方法失败』，最简单最容易想到的办法是返回一个 boolean 值，用 boolean 值的 true 和 false 来表示『调用成功』和『调用失败』：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 1 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 2 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 3 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面的代码很好理解，但是『返回 boolean 值』这种方案很明显地有一个缺陷：可以表示成功和失败，"),a("strong",[t._v("但是无法表示失败的原因")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("doSomething()")]),t._v(" 方法的调用者在获得返回值 false 之后，能得知该方法执行失败，但不知道具体的失败原因。")]),t._v(" "),a("h3",{attrs:{id:"方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),a("p",[t._v("为了解决方案一的缺陷，程序员想出了方案二：返回一个 int 值，0 表示成功，非 0 值表示失败，非 0 值又可称"),a("strong",[t._v("错误码")]),t._v("。")]),t._v(" "),a("p",[t._v("上面的代码就会改造成如下形式：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 1 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 2 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 3 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功")]),t._v("\n")])])]),a("p",[t._v("方法的调用者可以通过 "),a("code",[t._v("doSomething()")]),t._v(" 方法的返回值来得知成功与否，以及失败的原因。")]),t._v(" "),a("p",[t._v("但是方案二仍有两个缺陷：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("返回的错误码是"),a("strong",[t._v("无语义")]),t._v("的。即，错误码只是一个代号，如果没有配套的文档进行说明，方法调用者单凭错误码无法得知错误的原因。")])]),t._v(" "),a("li",[a("p",[t._v("返回 0 或错误码会『占用』返回值类型。如果方法本身在执行正常时需要返回一个字符串，那么这个方法"),a("strong",[t._v("不可能有时返回字符串，有时返回 int")]),t._v("，因为方法返回值类型只能有一个。")])])]),t._v(" "),a("h3",{attrs:{id:"方案三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[t._v("#")]),t._v(" 方案三")]),t._v(" "),a("p",[t._v("方案二的缺陷不是不能解决：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("可以通过枚举来让错误码语义化，解决方案一的第一个缺陷；")])]),t._v(" "),a("li",[a("p",[t._v("可以通过结果参数，或者是联合体/结构体/类来包装返回值，解决方案二的第二个缺陷。")])])]),t._v(" "),a("p",[t._v("但是上述的改进都是程序员层面“强行”想出的解决办法，而并非编程语言本身所提供的“便利”，需要程序员进行“额外”的编码才能达到预期的必要的效果。")]),t._v(" "),a("p",[t._v("在发现『告知方法调用者方法调用失败，并且失败原因是 xxx』是编程必要需求时，开始要求从编程语言本身的语法层面上解决这个需求。")]),t._v(" "),a("h2",{attrs:{id:"从语法层面解决上述问题-异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从语法层面解决上述问题-异常"}},[t._v("#")]),t._v(" 从语法层面解决上述问题：异常")]),t._v(" "),a("p",[t._v("异常概念的提出就是要从编程语言的语法层面上解决『返回错误信息』的问题。")]),t._v(" "),a("p",[t._v("相较于上述的方案三，异常从语法层面上弥补了方案二的缺陷：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过自定义异常来代替错误码，实现错误码所没有的语义话；")])]),t._v(" "),a("li",[a("p",[t._v("异常是从被调方法中抛出，而不是返回，因此异常不会占用方法返回值类型。")])])]),t._v(" "),a("p",[t._v("上述的代码在引入异常概念后将会变成如下形式：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 1 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XxxException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 2 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YyyException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况 3 导致的失败")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZzzException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"该返回啥返回啥"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功")]),t._v("\n")])])]),a("h2",{attrs:{id:"异常堆栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常堆栈"}},[t._v("#")]),t._v(" 异常堆栈")]),t._v(" "),a("p",[t._v("在 Java 中，异常类本身代表着一种错误原因/种类，在异常对象中还包含着整个异常链。")]),t._v(" "),a("p",[t._v("即，a 方法执行不成功是因为其中的代码在调用 b 方法执行失败；而 b 方法执行失败，是因为它在调用 c 方法时 c 方法执行失败；而 c 方法执行失败的原因又是它在执行 d 方法时调用 e 时 e 方法执行失败 ...，直到最终的最底层原因。")])])}),[],!1,null,null,null);s.default=p.exports}}]);