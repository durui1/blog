(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{531:function(s,a,t){"use strict";t.r(a);var e=t(47),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟机中的泛型类型信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机中的泛型类型信息"}},[s._v("#")]),s._v(" 虚拟机中的泛型类型信息")]),s._v(" "),t("p",[t("strong",[s._v("Type")]),s._v(" 是 Java 语言中所有类型的公共父接口。"),t("small",[s._v("这就是最官方的解释。")])]),s._v(" "),t("p",[s._v("Class 就是 Type 的一个直接实现类。Type 和 Class，以及 Type 的其它子接口（和实现类）组成了 Java 的类型体系。")]),s._v(" "),t("h2",{attrs:{id:"_1-type-体系的历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-type-体系的历史"}},[s._v("#")]),s._v(" 1. Type 体系的历史")]),s._v(" "),t("blockquote",[t("p",[s._v("实际上，是先后 Class，而后有 Type 。也就是说，一开始并没有 Java 类型 "),t("strong",[s._v("体系")]),s._v(" 这样的概念。")]),s._v(" "),t("p",[s._v("是因为引入了泛型概念之后，为了将泛型概念引入 Java，并作出向后兼容，从而为 Class 『"),t("strong",[s._v("补")]),s._v("』 了一个 Type 祖先和其它“兄弟”， 从而完善了整个体系。")])]),s._v(" "),t("p",[s._v("在早期的 Java "),t("small",[s._v("（5.0 之前）")]),s._v("中所有的类型都有一个 Class 对象，包括基本类型和自定义类型：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Student")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Teacher")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),t("p",[s._v("Class 对象中包含了当前类型的定义信息，它是 Java 反射的基础。通过一个类型的 Class 对象，你可以查询得到这个类型有哪些域，哪些方法，哪些构造函数等信息。")]),s._v(" "),t("p",[s._v("但是，在 JDK 5.0 引入泛型概念之后，Java 官方发现，新引入的泛型相关的一些类型，它们"),t("strong",[s._v("不适用")]),s._v("上面我们所说的【"),t("strong",[s._v("所有的类型都有一个 Class 对象")]),s._v("】这句话。")]),s._v(" "),t("p",[s._v("这些泛型相关的类型的"),t("strong",[s._v("那个对象")]),s._v(" ，不能归类于是 Class 对象这个概念之下。它们的"),t("strong",[s._v("那个对象")]),s._v("既和 Class 对象有相似的地方，又和 Class 对象有所区别。")]),s._v(" "),t("p",[s._v("对此，Java 官方抽取了它们和 Class 的相同点，提炼出 Type 概念，并补全了其它的类型：")]),s._v(" "),t("ul",[t("li",[s._v("ParameterizedType")]),s._v(" "),t("li",[s._v("TypeVariable")]),s._v(" "),t("li",[s._v("WildcardType")]),s._v(" "),t("li",[s._v("GenericArrayType")])]),s._v(" "),t("p",[s._v("Type 和它的子接口、实现类（Class、ParameterizedType、TypeVariable、WildcardType、GenericArrayType）共同组成了 Java 的类型体系。")]),s._v(" "),t("h2",{attrs:{id:"_2-各种-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-各种-type"}},[s._v("#")]),s._v(" 2. 各种 Type")]),s._v(" "),t("p",[s._v("以 HashMap 的类的定义为例：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashMap")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("在这里出现了两种 Class 之外的 Type：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("<K, V>")]),s._v(" 中的起到占位符作用的 K 和 V 的类型就是 "),t("strong",[s._v("TypeVariable")]),s._v(" ；")]),s._v(" "),t("li",[t("strong",[s._v("HashMap<K, V>")]),s._v(" 这个整体的类型就是 "),t("strong",[s._v("ParameterizedType")]),s._v(" 。")])]),s._v(" "),t("p",[s._v("我们再以一个自定义的泛型类为例：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringLinkedList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("这里的私有属性 "),t("em",[s._v("array")]),s._v(" 的类型 "),t("strong",[s._v("T[]")]),s._v(" 的类型就是 "),t("strong",[s._v("GenericArrayType")]),s._v(" 。")]),s._v(" "),t("p",[t("strong",[s._v("WildcardType")]),s._v(" 类型其实大家很早就见到过："),t("strong",[t("code",[s._v("Class<?>")])]),s._v(" 中的这个 "),t("strong",[t("code",[s._v("?")])]),s._v(" 的类型就是 "),t("strong",[s._v("WildcardType")]),s._v(" 。")]),s._v(" "),t("p",[s._v("当然，更复杂一点的泛型通配符可能会是这样："),t("strong",[t("code",[s._v("<? extends Number, ? extends Runnable>")])]),s._v(" 。")]),s._v(" "),t("h2",{attrs:{id:"_3-反射和type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-反射和type"}},[s._v("#")]),s._v(" 3. 反射和Type")]),s._v(" "),t("h3",{attrs:{id:"工具方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具方法"}},[s._v("#")]),s._v(" 工具方法")]),s._v(" "),t("p",[s._v("为了更翻遍地检测 Type 的具体类型，我们可以准备一个如下的简单的方法：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTypeName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Type")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Class"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// just like String")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TypeVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TypeVariable"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// just like T")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ParameterizedType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ParameterizedType"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// just like List<String>";')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenericArrayType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GenericArrayType"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// just like T[]";')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"something wrong"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 理论上不该如此")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"泛型方法和-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型方法和-type"}},[s._v("#")]),s._v(" 泛型方法和 Type")]),s._v(" "),t("h4",{attrs:{id:"getparametertypes-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getparametertypes-方法"}},[s._v("#")]),s._v(" getParameterTypes 方法")]),s._v(" "),t("p",[s._v("Method 的 "),t("strong",[s._v("getParameterTypes")]),s._v(" 方法用以获得方法参数的类型的类型。由于这是一个 1.5 的“老”方法，所以当它遇到泛型时，会执行泛型擦除。")]),s._v(" "),t("p",[s._v("假定有如下方法：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("demo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),s._v(" arg0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" arg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" arg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("Method 的 "),t("strong",[s._v("getParameterTypes")]),s._v(" 方法的返回值是一个 Class 的数组，数组的三个成员分别是：")]),s._v(" "),t("ul",[t("li",[s._v("第一个参数类型 Object， 类型为 Class；")]),s._v(" "),t("li",[s._v("第二个参数类型 Object[]， 类型为 Class;")]),s._v(" "),t("li",[s._v("第三个参数类型 String，类型为 Class。")])]),s._v(" "),t("p",[s._v("在这里，泛型 T 被擦除为 Object，泛型数组 T[] 被擦除为 Object[] 。")]),s._v(" "),t("h4",{attrs:{id:"getgenericparametertypes-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getgenericparametertypes-方法"}},[s._v("#")]),s._v(" getGenericParameterTypes 方法")]),s._v(" "),t("p",[s._v("Method 的 "),t("strong",[s._v("getGenericParameterTypes")]),s._v(" 方法的作用和上面的 "),t("em",[s._v("getParameterTypes")]),s._v(" 方法类似，不过由于它是一个“新”方法，因此，它的返回结果中会保留泛型信息。")]),s._v(" "),t("p",[s._v("还是同样的上述方法：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("demo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),s._v(" arg0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" arg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" arg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("strong",[s._v("getGenericParameterTypes")]),s._v(" 方法的返回值是 Type 的数组"),t("small",[s._v("（而不是 Class 数组）")]),s._v("。")]),s._v(" "),t("p",[s._v("它的三个元素的分别是")]),s._v(" "),t("ul",[t("li",[s._v("第一个参数类型 "),t("strong",[s._v("T")]),s._v(" ，类型为 "),t("strong",[s._v("TypeVariable")]),s._v(" ；")]),s._v(" "),t("li",[s._v("第二个参数类型 "),t("strong",[s._v("T[]")]),s._v("， 类型为 "),t("strong",[s._v("GenericArrayType")]),s._v(" ；")]),s._v(" "),t("li",[s._v("第三个参数类型 "),t("strong",[s._v("String")]),s._v("， 类型为 "),t("strong",[s._v("Class")]),s._v(" 。")])]),s._v(" "),t("h4",{attrs:{id:"getreturntype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getreturntype"}},[s._v("#")]),s._v(" getReturnType")]),s._v(" "),t("p",[s._v("Method 的 "),t("strong",[s._v("getReturnType")]),s._v(" 方法用以获取方法的返回值类型。如果涉及到泛型返回值，它会对泛型进行擦除。")]),s._v(" "),t("p",[s._v("假设有如下方法：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("demo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("strong",[s._v("getReturnType")]),s._v(" 方法返回的是返回值类型，也就是 Object 的类型：Class 。")]),s._v(" "),t("p",[s._v("在这里，泛型参数 T 被擦除为 Object 。")]),s._v(" "),t("h4",{attrs:{id:"getgenericreturntype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getgenericreturntype"}},[s._v("#")]),s._v(" getGenericReturnType")]),s._v(" "),t("p",[s._v("对于同样的方法，Method 的 "),t("strong",[s._v("getGenericReturnType")]),s._v(" 方法能识别出返回值类型的泛型信息。")]),s._v(" "),t("p",[s._v("它的返回是 T，其类型为 TypeVariable 。")]),s._v(" "),t("h3",{attrs:{id:"泛型类和-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型类和-type"}},[s._v("#")]),s._v(" 泛型类和 Type")]),s._v(" "),t("p",[s._v("假定我们有一个自定义的泛型类：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringLinkedList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h4",{attrs:{id:"gettypeparameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gettypeparameters"}},[s._v("#")]),s._v(" getTypeParameters")]),s._v(" "),t("p",[s._v("Class 的 getTypeParameters 可以返回泛型类的泛型参数。")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringLinkedList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTypeParameters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// T")]),s._v("\n")])])]),t("h4",{attrs:{id:"getsuperclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getsuperclass"}},[s._v("#")]),s._v(" getSuperclass")]),s._v(" "),t("p",[s._v("Class 的 getTypeParameters 可以返回泛型类的父类。这里会有泛型擦除。")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringLinkedList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSuperclass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// LinkedList")]),s._v("\n")])])]),t("h4",{attrs:{id:"getgenericsuperclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getgenericsuperclass"}},[s._v("#")]),s._v(" getGenericSuperclass")]),s._v(" "),t("p",[s._v("Class 的 getGenericSuperclass 功能同 getSuperclass，不过它会保留父类的泛型信息。")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringLinkedList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getGenericSuperclass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// LinkedList<String>")]),s._v("\n")])])]),t("h4",{attrs:{id:"parameterizedtype-的-getactualtypearguments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameterizedtype-的-getactualtypearguments"}},[s._v("#")]),s._v(" ParameterizedType 的 getActualTypeArguments")]),s._v(" "),t("p",[s._v("Class 的 getGenericSuperclass 方法返回的是泛型父类，它的类型是 Type 。")]),s._v(" "),t("p",[s._v("实际上通过 instanceof 运算符，我们可以判断出泛型父类的实际信息是 ParameterizedType 类型。")]),s._v(" "),t("p",[s._v("而 ParameterizedType 类型有一个 getActualTypeArguments 方法，它能返回泛型父类的所使用的泛型参数。")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ParameterizedType")]),s._v(" superclass "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ParameterizedType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringLinkedList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getGenericSuperclass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Type")]),s._v(" cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" superclass"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getActualTypeArguments")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个例子中只有一个：String")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);