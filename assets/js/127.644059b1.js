(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{486:function(t,a,s){"use strict";s.r(a);var e=s(47),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"集合框架的线程安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集合框架的线程安全问题"}},[t._v("#")]),t._v(" 集合框架的线程安全问题")]),t._v(" "),s("blockquote",[s("p",[t._v("很多复杂/混乱的问题从历史的角度来看会非常的清晰。")])]),t._v(" "),s("p",[t._v("集合的线程安全问题指的是如果两个线程同时操作同一个集合对象出现 ConcurrentModificationException 异常的情况。")]),t._v(" "),s("h2",{attrs:{id:"jdk-1-0-时代的集合类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-0-时代的集合类"}},[t._v("#")]),t._v(" JDK 1.0 时代的集合类")]),t._v(" "),s("p",[t._v("JDK 1.0 时代『一步到位】地将各种集合都是现成了线程安全版。")]),t._v(" "),s("p",[t._v("例如，这个时代出现的 Vector"),s("small",[t._v("（List 接口的实现）")]),t._v("、Hashtable（Map 接口的实现）都是线程安全的。")]),t._v(" "),s("p",[t._v("这里需要注意的是 Set 接口（及其实现类）在早期（1.0、1.1）版本中并没有，它们是从 1.2 版本开始才出现的。所以，不存在所谓的早期的线程安全的 Set 接口实现类。")]),t._v(" "),s("p",[t._v("严格来说，1.0"),s("small",[t._v("（及 1.1）")]),t._v("时代的集合框架这是一个半成品，JDK 1.2 后来对这部分内容进行了完善和修正。")]),t._v(" "),s("h2",{attrs:{id:"jdk-1-2-时代的集合类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-2-时代的集合类"}},[t._v("#")]),t._v(" JDK 1.2 时代的集合类")]),t._v(" "),s("p",[t._v("线程安全的代价就是降低了性能。『线程安全】和『高性能】没有哪个是标准答案，它们应该是两种套餐，选哪个决定权应该在使用者的手里。")]),t._v(" "),s("p",[t._v("所以，1.0 时代只提供『线程安全】这一种选项这种行为，在 1.2 时代进行了『修正】。在 JDK 1.2 中为 List 和 Set 提供了非线程安全的实现。")]),t._v(" "),s("p",[t._v("简单来说，1.0 的 List 和 Map 接口的实现类都是线程安全的；1.2 的 List 和 Map 接口的实现类都是非线程安全的。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("ul",[s("li",[t._v("1.1 版本的升级改动没有涉及集合框架这一部分，因此 1.1 版本没有新增任何新的接口及 List & Map 的实现类。")]),t._v(" "),s("li",[t._v("Set 接口及其实现类是 1.2 中才出现的。常见的实现类 HashSet 和 TreeSet 都是非线程安全的。")])])]),t._v(" "),s("h2",{attrs:{id:"混用-1-0-和-1-2-时代的集合类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混用-1-0-和-1-2-时代的集合类"}},[t._v("#")]),t._v(" 混用 1.0 和 1.2 时代的集合类")]),t._v(" "),s("p",[t._v("这是标准的错误做法！")]),t._v(" "),s("p",[t._v("很多面试题喜欢问这样的问题：Hashtable 和 HashMap 的区别是什么？Vector 和 ArrayList 的区别是什么?")]),t._v(" "),s("p",[t._v("这些问题的答案的关键点就是前者是线程安全的，而后者是线程不安全的。（其它区别都是次要区别）。")]),t._v(" "),s("p",[t._v("久而久之，这就带来了一个概念上的混淆，没有深究的人就会误认为，看重线程安全，就用 1.0 中的那套实现类；看重效率，就用 1.2 中的那套非线程安全的实现类。")]),t._v(" "),s("p",[t._v("JDK 1.2 的『卖点】就是重新设计并实现了集合框架部分。1.0 版本中的实现，例如 Vector 和 Hashtable 虽然没有直截了当的被标注为废弃 @Deprecated，但是其注释中都明确写明了各自的替代品。官方的态度实际上很明显，不要再使用它们了！（当然，1.0 时代的那套接口还是要继续使用的）。")]),t._v(" "),s("h2",{attrs:{id:"jdk-1-2-中的线程安全实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-2-中的线程安全实现"}},[t._v("#")]),t._v(" JDK 1.2 中的线程安全实现")]),t._v(" "),s("p",[t._v("JDK 1.2 中提供的集合工具类 Collections ，有如下的一批方法：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("synchronizedCollection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("synchronizedList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("synchronizedSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("synchronizedMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这些方法接受非线程安全的 List、Set、Map 对象，返回与之对应的线程安全版的 List、Set、Map 对象。为了避免命名带来的记忆负担，官方还很贴心地将这些线程安全版地实现类写成了内部类的形式，你只需要以面向接口编程的思想去使用它们就行，而不必在意它们的名字叫什么"),s("small",[t._v("（当然，看源码还是能看到的）")]),t._v("。")]),t._v(" "),s("p",[t._v("这才是 JDK 1.2 之后获得线程安全的 List、Set 和 Map 的标准方式。")]),t._v(" "),s("h2",{attrs:{id:"jdk-1-2-的未尽工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-2-的未尽工作"}},[t._v("#")]),t._v(" JDK 1.2 的未尽工作")]),t._v(" "),s("p",[t._v("JDK 1.2 在 JDK 1.0 / 1.1 的基础上完善/更新了 Collection 和 Map 体系下的接口和实现类。但是它的工作并未完全结束。体现在两个方面：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("JDK 1.2 的集合体系主要体现在 Collection（List、Set）和 Map 的功能，但是对于数据结构领域中的其它结构，它的功能并不丰富。例如常见的队列（Queue）结构。")])]),t._v(" "),s("li",[s("p",[t._v("为了解决集合的线程安全问题，JDK 1.2 的方案简单粗暴：提供的同步集合类，不允许同时存在多个线程操作同一个集合对象。而有些场景下需要在多线程同时访问同一个线程对象时还要保证线程安全性（这个要求就很高了）。")])])]),t._v(" "),s("p",[t._v("在 JDK 1.2 之后的 JDK 版本中陆陆续续还有对集合框架体系的内容进行修补完善，直到 JDK 1.5 中提出了 J.U.C，它里面包含了提供并发能力的集合实现类，至此 JDK 中的集合框架算是基本完善成型，再有的工作就是零零碎碎的小修补、小完善了。")]),t._v(" "),s("p",[t._v("不过，不像 JDK 1.2 这样对集合框架整体进行更新，后续版本中对于集合框架的修补完善不再是版本更新的核心功能，因此这些修改并非各个版本升级时的宣传重点，直到 JDK 1.5 的 J.U.C 中又作为 feature 宣传了一下。")]),t._v(" "),s("h2",{attrs:{id:"queue-和-stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queue-和-stack"}},[t._v("#")]),t._v(" Queue 和 Stack")]),t._v(" "),s("p",[t._v("在数据结构领域通常会把 Queue 和 Stack 放在一起说，因为它们两个都是 List 的特殊形式。但是，在 Java 的集合框架体系中它俩的命运却非常不同：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Stack 是类，继承自 Vector 类，是 List/Collection 接口的间接实现类，它是 JDK 1.0 出现的最早的一批成员。")])]),t._v(" "),s("li",[s("p",[t._v("Queue 是接口，直接继承自 Collection 接口，在 JDK 1.5 才出现!")])])]),t._v(" "),s("p",[t._v("Queue 有一个子接口 Deque（JKD 1.6 出现），代表的是数据库领域中的『双端队列】结构。")]),t._v(" "),s("p",[t._v("Deque 的接口的常用实现类有两个：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ArrayDeque，底层使用数组实现 Deque 接口要求的方法；")])]),t._v(" "),s("li",[s("p",[t._v("LinkedList，底层使用链表实现 Deque 接口要求的方法。")])])]),t._v(" "),s("p",[t._v("它们都是非线程安全的。")]),t._v(" "),s("p",[t._v("由于队列和栈都是特殊的链表，它们只会在链表的两端（甚至一端）进行操作，而不会操作链表的中间部位，因此链表的优点被放大，缺点被缩小，链表实现比数组实现要更常见。")]),t._v(" "),s("p",[t._v("这里有两个小问题：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("JDK 1.0 中的 Stack 不建议使用后，后面并没有提供直接的替代品。个人猜测官方的意思是让程序员自己使用控制对双端队列来实现栈的功能。")])]),t._v(" "),s("li",[s("p",[t._v("Collections 工具类中并没有直接的 "),s("code",[t._v(".synchronizedDeque()")]),t._v(" 方法，这就导致没有直接的便捷的方式获得线程安全版的队列和栈对象。")])])]),t._v(" "),s("p",[t._v("因此对栈和队列的使用还是要比 List、Set 和 Map 要麻烦一点。不过，不排除后续的 JDK 升级中会完善改进这两个问题。")])])}),[],!1,null,null,null);a.default=n.exports}}]);