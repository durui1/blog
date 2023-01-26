(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{532:function(v,_,a){"use strict";a.r(_);var t=a(47),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"java-的垃圾回收机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-的垃圾回收机制"}},[v._v("#")]),v._v(" Java 的垃圾回收机制")]),v._v(" "),a("p",[v._v("Java 不是唯一具有垃圾回收机制的语言，甚至都不是最早具有垃圾回收机制的语言。在 1960 年第一个使用垃圾回收机制的语言 Lisp 诞生之初，其作者 John MacCarthy 就提出垃圾收集器需要完成三件事情：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("哪些内存需要回收？")])]),v._v(" "),a("li",[a("p",[v._v("什么时候回收？")])]),v._v(" "),a("li",[a("p",[v._v("如何回收？")])])]),v._v(" "),a("h2",{attrs:{id:"_1-哪些内存需要回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-哪些内存需要回收"}},[v._v("#")]),v._v(" 1. 哪些内存需要回收？")]),v._v(" "),a("p",[v._v("从逻辑上，这个问题很好回答：一个对象没人用了，自然就需要被回收。但是这个回答基本上是一句废话，因为这个问题就演变成：")]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[v._v("如何判断要给对象没人用了？\n")])])]),a("h3",{attrs:{id:"方案一-引用计数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一-引用计数"}},[v._v("#")]),v._v(" 方案一：引用计数")]),v._v(" "),a("p",[v._v("第一种方案是引入『"),a("strong",[v._v("引用计数")]),v._v("』"),a("small",[v._v("Reference Counting")]),v._v(" 。引用计数方案的规则很简单、直观：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("在对象中添加一个引用计数器，每当有一个地方引用它时，计数器值就加一；")])]),v._v(" "),a("li",[a("p",[v._v("当引用失效时，计数器值就减一；")])]),v._v(" "),a("li",[a("p",[v._v("任何时刻计数器为零的对象就是不可能再被使用的。")])])]),v._v(" "),a("p",[v._v("客观地说，引用计数算法虽然占用了一些额外的内存空间来进行计数，但它的原理简单，判定效率也很高，在大多数情况下它都是一个不错的算法。")]),v._v(" "),a("p",[v._v("但是『"),a("strong",[v._v("主流的 Java 虚拟机里面都没有选用引用计数算法来管理内存，因为引用计数方案需要考虑很多例外情况")]),v._v("』，必须要配合大量额外处理才能保证正确地工作。例如：循环引用问题。")]),v._v(" "),a("blockquote",[a("p",[v._v("C++ 和 Objective-C 提出『"),a("strong",[v._v("弱引用")]),v._v("』的概念，就是为了以解决循环引用问题，但是这需要程序员能『"),a("strong",[v._v("正确地使用弱引用")]),v._v("』。")])]),v._v(" "),a("h3",{attrs:{id:"方案二-可达性分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二-可达性分析"}},[v._v("#")]),v._v(" 方案二：可达性分析")]),v._v(" "),a("p",[v._v("主流的具有垃圾回收机制的编程语言"),a("small",[v._v("（Java、C#、甚至古老的第一个具有垃圾回收机制编程语言的 List）")]),v._v("都是使用可达性分析来判断对象是否已死。")]),v._v(" "),a("p",[v._v("这个算法的基本思路就是通过一系列称为 "),a("em",[a("strong",[v._v("GC Roots")])]),v._v(" 的根对象作为起始节点集，从这些节点开始，根据引用关系向下搜索，搜索过程所走过的路径称为『"),a("strong",[v._v("引用链")]),v._v("』"),a("small",[v._v("（Reference Chain）")]),v._v("，如果某个对象到 "),a("em",[a("strong",[v._v("GC Roots")])]),v._v(" 间没有任何引用链相连，或者用图论的话来说就是从 "),a("em",[a("strong",[v._v("GC Roots")])]),v._v(" 到这个对象不可达时，则证明此对象是不可能再被使用的。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-1.jpg",alt:"gc-1"}})]),v._v(" "),a("p",[v._v("上图中的 "),a("em",[v._v("object 5")]),v._v("、"),a("em",[v._v("object 6")]),v._v("、"),a("em",[v._v("object 7")]),v._v(" 就是三个不可达的对象。特别是 "),a("em",[a("strong",[v._v("obejct 6")])]),v._v(" 和 "),a("em",[a("strong",[v._v("object 7")])]),v._v("，从引用计数的角度看，它们的引用计数非零，但是显而易见，如图所示它们的引用计数逻辑上是无效的。")]),v._v(" "),a("p",[v._v("在 Java 技术体系里面，固定可作为 "),a("em",[a("strong",[v._v("GC Roots")])]),v._v(" 的对象包括以下几种：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("在虚拟机栈"),a("small",[v._v("（栈帧中的本地变量表）")]),v._v("中引用的对象，譬如各个线程被调用的方法堆栈中使用到的参数、局部变量、临时变量等。")])]),v._v(" "),a("li",[a("p",[v._v("在方法区中类静态属性引用的对象，譬如 Java 类的引用类型静态变量。")])]),v._v(" "),a("li",[a("p",[v._v("在方法区中常量引用的对象，譬如字符串常量池"),a("small",[v._v("（String Table）")]),v._v("里的引用。")])]),v._v(" "),a("li",[a("p",[v._v("在本地方法栈中 JNI"),a("small",[v._v("（即通常所说的 Native 方法）")]),v._v("引用的对象。")])]),v._v(" "),a("li",[a("p",[v._v("Java 虚拟机内部的引用，如基本数据类型对应的 Class 对象，一些常驻的异常对象"),a("small",[v._v("（比如 NullPointExcepiton、OutOfMemoryError）")]),v._v("等，还有系统类加载器。")])]),v._v(" "),a("li",[a("p",[v._v("所有被同步锁"),a("small",[v._v("（synchronized 关键字）")]),v._v("持有的对象。")])]),v._v(" "),a("li",[a("p",[v._v("反映 Java 虚拟机内部情况的 JMXBean、JVMTI 中注册的回调、本地代码缓存等。")])])]),v._v(" "),a("h3",{attrs:{id:"并发的可达性分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发的可达性分析"}},[v._v("#")]),v._v(" 并发的可达性分析")]),v._v(" "),a("p",[v._v("为了降低 JVM 的垃圾回收器的造成的停顿，JVM 的在分析堆中对象的可达性时，是并发执行的。即，在这个环节，"),a("strong",[v._v("用户线程是没有冻结的")]),v._v("。")]),v._v(" "),a("p",[v._v("降低停顿所带来的副作用就是在这个分析过程中，一个对象的可达性会发生变化，从而造成一种『"),a("strong",[v._v("对象丢失")]),v._v("』的特殊情况。")]),v._v(" "),a("p",[v._v("为了能解释清楚这个问题，我们引入『"),a("strong",[v._v("三色标记")]),v._v("』"),a("small",[v._v("（Tri-color Marking）")]),v._v("作为工具来辅助推导，把遍历对象图过程中遇到的对象，按照『是否访问过』这个条件标记成以下三种颜色：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("白色：表示对象尚未被垃圾收集器访问过。显然在可达性分析刚刚开始的阶段，所有的对象都是白色的，若在分析结束的阶段，仍然是白色的对象，即代表不可达。")])]),v._v(" "),a("li",[a("p",[v._v("黑色：表示对象已经被垃圾收集器访问过，且这个对象的所有引用都已经扫描过。黑色的对象代表已经扫描过，它是安全存活的，如果有其他对象引用指向了『"),a("strong",[v._v("黑色对象，无须重新扫描一遍")]),v._v("』。黑色对象不可能直接"),a("small",[v._v("（不经过灰色对象）")]),v._v("指向某个白色对象。")])]),v._v(" "),a("li",[a("p",[v._v("灰色：表示对象已经被垃圾收集器访问过，但这个对象上至少存在一个引用还没有被扫描过。")])])]),v._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),a("p",[v._v("上面的粗体字，这是造成问题的原因。")])]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-2.jpg",alt:"gc-2"}})]),v._v(" "),a("p",[v._v("以上图为例。初始状态，只有 "),a("em",[a("strong",[v._v("GC Roots")])]),v._v(" 是黑色"),a("small",[v._v("（方形图标）")]),v._v("。图中的箭头的方向就是引用的方向，注意，引用是有向的。对象只有被黑色对象引用才能存活。否则，如果没有黑色对象引用它，无论它再引用其它对象都会消亡。")]),v._v(" "),a("p",[v._v("扫描过程中，以灰色为波峰的波纹从黑色往白推进。灰色对象是黑白对象的分界线。")]),v._v(" "),a("blockquote",[a("p",[v._v("就像钱塘江大潮，潮头一线是灰色，潮头背后都是黑色，潮头前面都是白色。随着潮头的推进，越来越多的白色，变成灰色，再进一步变成黑色。潮头所过之处，皆黑。")])]),v._v(" "),a("p",[v._v("最终，这幅图将变成如下形式：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-3.jpg",alt:""}})]),v._v(" "),a("p",[v._v("最终剩下的 3 个白色对象即为『"),a("strong",[v._v("不可达")]),v._v("』对象，将被垃圾回收器回收。")]),v._v(" "),a("p",[v._v("这就是对象可达性分析的过程，其实整个理论还是很直观，但是极端情况下会出现『"),a("strong",[v._v("对象消失")]),v._v("』问题。")]),v._v(" "),a("p",[v._v("Wilson 于 1994 年在理论上证明了，当且仅当以下两个条件同时满足时，会产生『对象消失』的问题，即原来本应该是黑色的对象被误标注为白色：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("赋值器插入了一条"),a("small",[v._v("（或多条）")]),v._v("从黑色对象到白色对象的新引用；")])]),v._v(" "),a("li",[a("p",[v._v("赋值器删除了全部从灰色对象到该白色对象的直接或间接引用。")])])]),v._v(" "),a("p",[v._v("如下图所示例：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-4.jpg",alt:"gc-4.jpg"}})]),v._v(" "),a("p",[v._v("当垃圾回收器扫描过第一个对象"),a("small",[v._v("（黑色对象）")]),v._v("，将其涂黑之后，如果此时用户线程重新运行，并断开第二个的对象"),a("small",[v._v("（灰色对象）")]),v._v("于第三个对象"),a("small",[v._v("（白色对象）")]),v._v("之间原本的引用"),a("small",[v._v("（虚线）")]),v._v("，反而让第一个对象"),a("small",[v._v("（黑色对象）")]),v._v("于第三个对象"),a("small",[v._v("（白色对象）")]),v._v("之间建立起联系"),a("small",[v._v("（灰色实线）")]),v._v("。")]),v._v(" "),a("p",[v._v("由于第一个对象已经被垃圾回收器扫描过，不会再次扫描，所以，垃圾回收器发现不了第三个对象"),a("small",[v._v("（白色对象）")]),v._v("与第一个对象"),a("small",[v._v("（黑色对象）")]),v._v("之间现在建立起了引用关系。而在接下来的扫描中，垃圾回收器又无法通过第二个对象"),a("small",[v._v("（灰色对象）")]),v._v("『走到』第三个对象"),a("small",[v._v("（白色对象）")]),v._v("，因此，第三个对象就是不可达的，不会被涂黑，接下来将会被垃圾回收器回收，从而造成一个正在被使用的对象却『没了』的情况。")]),v._v(" "),a("blockquote",[a("p",[v._v("造成整个问题的根本原因在于『"),a("strong",[v._v("并发")]),v._v("』，垃圾回收器在判断对象可达性的过程中，用户线程启动，继续运行，并修改了引用关系。")])]),v._v(" "),a("p",[v._v("因此，解决并发扫描时的对象消失问题，只需破坏这两个条件的任意一个即可。由此分别产生了两种解决方案：『"),a("strong",[v._v("增量更新")]),v._v("』"),a("small",[v._v("（Incremental Update）")]),v._v("和『"),a("strong",[v._v("原始快照")]),v._v("』"),a("small",[v._v("（Snapshot At The Beginning，SATB）")]),v._v("。")]),v._v(" "),a("p",[v._v("无论是『增量更新』还是『原始快照』都将可达性扫描分成了 2 次，并在『"),a("strong",[v._v("第二次扫描")]),v._v("』中去修正可能在第一次扫描中因为并发的用户线程运行所造成的引用关系的变动。")]),v._v(" "),a("ul",[a("li",[a("p",[a("strong",[v._v("增量更新")])]),v._v(" "),a("p",[v._v("这个方案的思路是去破坏的是造成对象消失的第一个条件："),a("em",[v._v("赋值器插入了一条"),a("small",[v._v("（或多条）")]),v._v("从黑色对象到白色对象的新引用")]),v._v(" 。")]),v._v(" "),a("p",[v._v("当黑色对象插入新的指向白色对象的引用关系时，就将这个新插入的引用记录下来，等并发扫描结束之后，再将这些记录过的引用关系中的黑色对象为根，重新扫描一次。")]),v._v(" "),a("p",[v._v("新增更新的特点是：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("灰色对象的引用关系是在『用户线程运行期间』解除的。")])]),v._v(" "),a("li",[a("p",[v._v("白色对象是『重新扫描』时才被涂黑的。")])])]),v._v(" "),a("p",[a("strong",[v._v("CMS 垃圾回收器采用的就是这个方案")]),v._v("。")])]),v._v(" "),a("li",[a("p",[a("strong",[v._v("原始快照")])]),v._v(" "),a("p",[v._v("这个方案的思路是去破坏的是造成对象消失的第二个条件："),a("em",[v._v("赋值器删除了全部从灰色对象到该白色对象的直接或间接引用")]),v._v(" 。")]),v._v(" "),a("p",[v._v("当灰色对象要删除指向白色对象的引用关系时，进行逻辑上的删除：并未真实删除引用关系，但所引用对象并不会变黑。")]),v._v(" "),a("p",[v._v("在并发扫描结束之后，再将这些记录过的引用关系中的灰色对象为根，重新扫描一次，在这次扫描中去解除引用关系。")]),v._v(" "),a("p",[v._v("原始快照的特点是：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("白色对象是在『用户线程运行期间』建立引用关系时被涂黑的。")])]),v._v(" "),a("li",[a("p",[v._v("灰色对象的引用关系是在『重新扫描』时才解除的。"),a("small",[v._v("在『用户线程运行期间』这个引用关系并未真正解除。")])])])]),v._v(" "),a("p",[a("strong",[v._v("G1 垃圾回收器采用的就是这个方案。")])])])]),v._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("没有被使用的对象，将会被垃圾回收器回收；")])]),v._v(" "),a("li",[a("p",[v._v("Java 的垃圾回收器是通过『"),a("strong",[v._v("可达性分析")]),v._v("』来判断一个对象是否仍在被使用，是否需要被回收内存；")])]),v._v(" "),a("li",[a("p",[v._v("为了减少垃圾回收器工作时所造成的停顿的时长"),a("small",[v._v("（此时，用户线程是冻结的）")]),v._v("，JVM 采用的是『"),a("strong",[v._v("并发的的可达性分析")]),v._v("』。即，在可达性的分析过程中，垃圾回收器线程会暂停，用户线程恢复执行；")])]),v._v(" "),a("li",[a("p",[v._v("并发的可达性分析会造成『"),a("strong",[v._v("对象消失")]),v._v("』现象；")])]),v._v(" "),a("li",[a("p",[v._v("解决对象消息现象的方案有两种，JDK 1.5 开始的默认垃圾回收器 CMS 和 JDK 9 开始的默认垃圾回收器 G1 采用了不同的方案。")])])]),v._v(" "),a("h2",{attrs:{id:"_2-什么时候回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么时候回收"}},[v._v("#")]),v._v(" 2. 什么时候回收？")]),v._v(" "),a("blockquote",[a("p",[v._v("简而言之，垃圾回收器独立地运行在一个优先级很低的线程中。当该线程被唤醒时，垃圾回收器会对堆内存进行扫描，判断其中的对象的可达性，对于不可达的、已死的对象回收其所占内存空间。")])]),v._v(" "),a("h3",{attrs:{id:"full-gc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-gc"}},[v._v("#")]),v._v(" Full GC")]),v._v(" "),a("p",[v._v("理论上，在通过『"),a("strong",[v._v("可达性分析")]),v._v("』判断出哪些对象可回收之后，垃圾回收器便可以周期性扫描、分析堆空间中的对象，销毁已死对象。")]),v._v(" "),a("p",[v._v("对堆空间的所有对象进行扫描、分析、销毁的垃圾回收行为，被称为『"),a("strong",[v._v("全扫描")]),v._v("』，基于这种行为的垃圾回收器，就被称为 Full GC 。")]),v._v(" "),a("p",[v._v("毫无疑问，全扫描的代价是很大的。垃圾回收器的每轮的回收中都对每一个对象进行可达性分析，那么 JVM 的停顿时间会变得很长。")]),v._v(" "),a("blockquote",[a("p",[v._v("你想想国家为什么不频繁地进行全国人口普查，而隔三岔五的普查仅仅只是抽样普查？难道全面普查不香？")])]),v._v(" "),a("p",[v._v("有没有可能在每一次的回收过程中，只取分析部分对象的可达性，而对于之前已经判断的可达的对象网开一面，不再分析、回收它们？")]),v._v(" "),a("p",[v._v("很显然，肯定是可以的。方案就是『"),a("strong",[v._v("分代收集")]),v._v("』理论。")]),v._v(" "),a("h3",{attrs:{id:"分代收集理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分代收集理论"}},[v._v("#")]),v._v(" 分代收集理论")]),v._v(" "),a("p",[v._v("『"),a("strong",[v._v("分代收集理论")]),v._v("』很符合普通人印象中的 28 原则。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("大多数对象的存活期不会很长，朝生夕灭。")]),v._v(" "),a("p",[v._v("在一两轮的垃圾回收周期中，经垃圾回收器判断发现其不可达、已死，就会被垃圾回收器销毁。")])]),v._v(" "),a("li",[a("p",[v._v("而小部分对象会熬过多次垃圾回收周期。")]),v._v(" "),a("p",[v._v("熬过越多次垃圾收集过程的对象就越难以消亡，在可预见的未来它大概率仍会被用到。")])])]),v._v(" "),a("p",[v._v("IBM 公司曾有一项专门研究，对对象的生存时长作过统计：98% 的对象熬不过第一轮收集。这就意味着，98% 的对象都是新生代对象。")]),v._v(" "),a("blockquote",[a("p",[v._v("这里有一点需要特别说明，占据总量 98% 的对象不一定会占据内存总量的 98% ！因为这些对象都会在短时间内被删除，回收内存。因此，只需要远小于 98% 的内存，就能存放 98% 的内存。")]),v._v(" "),a("p",[v._v("你想想，这和公交车能装远大于它最大承载人数是不是一个道理，因为乘客会频繁地下车，让出空间。")])]),v._v(" "),a("p",[v._v("基于分代收集理论，如果我们将难以消亡的对象集中存放，那么 JVM 只需要用很低的频率来扫描、回收这个区域中的对象。")]),v._v(" "),a("p",[v._v("在商用 Java 虚拟机里，设计者一般至少会把 Java 堆空间划分为『"),a("strong",[v._v("新生代")]),v._v("』"),a("small",[v._v("（Young Generation）")]),v._v("和『"),a("strong",[v._v("老年代")]),v._v("』"),a("small",[v._v("（Old Generation）")]),v._v("两个区域。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("一个对象被新创建出来时，自然是在堆空间的新生代区域中为其分配内存空间。")])]),v._v(" "),a("li",[a("p",[v._v("当垃圾回收器跟踪发现这个对象熬过多轮"),a("small",[v._v("（默认是 15 轮）")]),v._v("回收周期，变将其移入到老年代区域。")])]),v._v(" "),a("li",[a("p",[v._v("垃圾回收器绝大多数情况下只分析新生代中的对象的可达性，少数情况下区分析老年代中的对象的可达性。")])])]),v._v(" "),a("blockquote",[a("p",[v._v("举一个简单的例子，假设新生代和老年代内存分配五五开，那么垃圾回收器在绝大多数时间内只需要扫描 50% 的堆内存。极少数时间内才进行 Full GC，扫描 100% 的堆内存 。")])]),v._v(" "),a("h3",{attrs:{id:"跨代引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨代引用"}},[v._v("#")]),v._v(" 跨代引用")]),v._v(" "),a("p",[v._v("跨代引用顾名思义，有引用关系的对象分属新生代和老年代。而跨代引用不做处理的话会带来麻烦。")]),v._v(" "),a("p",[v._v("细分就是两种情况：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("一个新生代对象，引用了一个老年代对象。")]),v._v(" "),a("p",[v._v("如果新生代对象所引用的那个老年代对象，只被这个新生代对象所引用，而没有被任何其它老生代的对象引用。那么，如果不作处理，当垃圾回收器『"),a("strong",[v._v("分析老生代区的对象的可达性")]),v._v("』时，会因为没有老年代对象引用它，而将该对象标注为不可达，并在未来将其删除。")])]),v._v(" "),a("li",[a("p",[v._v("一个老年代对象，引用了一个新生代对象。")]),v._v(" "),a("p",[v._v("如果一个老年代对象所引用的新生代对象，只被这个老年代对象所引用，而没有被其它任何新生代的对象引用。那么，如果不作处理，当垃圾回收器『"),a("strong",[v._v("分析新生代区的对象的可达性")]),v._v("』时，会因为没有新生代对象引用它，而将该对象标注为不可达，并在未来将其删除。")])])]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-5.jpg",alt:"gc-5"}})]),v._v(" "),a("p",[v._v("很显然，出现了跨代引用的情况时，不做处理的话，显然是不行的。")]),v._v(" "),a("p",[v._v("但是，在回收新生代区的内存时，为了避免跨代引用引起的误删，而去扫描整个老年代对象；在回收老年代区的内存时，为了避免跨代引用引起的误删，而去扫描整个新生代对象，这种解决办法显然时不可取的。意味着本质上就是 Full GC，完全违背了分代理论。")]),v._v(" "),a("p",[v._v("考虑到跨代引用只是极少数的情况，Java 虚拟机提出了 "),a("strong",[v._v("记忆集")]),v._v("（Remember Set），就是将跨代引用的对象记录下来。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("如果一个新生代对象被一个老生代对象引用，那么就将这个老生代对象记录在记忆集中；")])]),v._v(" "),a("li",[a("p",[v._v("如果一个老生代对象被一个新生代对象引用，那么就将这个新生代对象记录在记忆集中。")])])]),v._v(" "),a("p",[v._v("当删除一个新生代对象时，因为存在跨代引用的可能，因此，需要去记忆集中查询有没有老生代对象引用它，如果有，则保留这个新生代对象，不删除它。同理，删除一个老生代对象时，也是相应的处理方式。")]),v._v(" "),a("blockquote",[a("p",[v._v("实际上具体的实现细节会更精细精妙一些，不过大逻辑就是如此。")])]),v._v(" "),a("p",[v._v("跨代引用现象最终会有两种结局：")]),v._v(" "),a("ul",[a("li",[v._v("随着跨代引用老年代对象的新生代对象的删除，这个被引用的老年代对象未来也终将被删除；随着跨代引用新生代的老生代对象的删除，这个被引用的新生代对象未来也终将被删除。")]),v._v(" "),a("li",[v._v("另一种可能是，新生代对象熬过足够多轮（默认 15 轮）回收周期，变成老生代对象，这样跨代引用的问题自然也就不存在了。")])]),v._v(" "),a("h3",{attrs:{id:"按分代收集理论为-gc-分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按分代收集理论为-gc-分类"}},[v._v("#")]),v._v(" 按分代收集理论为 GC 分类")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("新生代收集期：只扫描、收集 Java 堆中的新生代内存区中的对象。")])]),v._v(" "),a("li",[a("p",[v._v("老年代收集期：只扫描、收集 Java 堆中根的老年代内存区中的对象。目前只有 CMS"),a("small",[v._v("（1.5 开始的 JVM 默认垃圾收集器）")]),v._v("有这种收集期。")])]),v._v(" "),a("li",[a("p",[v._v("混合收集期：扫描、收集 Java 堆中的新生代内存其和『"),a("strong",[v._v("部分")]),v._v("』老年代内存区中的对象。目前只有 G1"),a("small",[v._v("（1.9 开始的 JVM 默认垃圾收集器）")]),v._v("有这种收集器。")])]),v._v(" "),a("li",[a("p",[v._v("整堆收集：也就是 Full GC，扫描、收集整个 Java 堆中的对象。")])])]),v._v(" "),a("p",[v._v("简单而言，大多数垃圾回收周期是进行新生代收集；少数回收周期是进行老年代收集/混合收集；只有极少数周期是进行整堆收集。")]),v._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("对象的生存时长有长有短，将所有对象一视同仁，在每次垃圾回收周期，都进行『"),a("strong",[v._v("全堆")]),v._v("』扫描、分析是可行的，但并非最佳方案；")])]),v._v(" "),a("li",[a("p",[v._v("垃圾回收器根据对象的生存时长的不同，提出『"),a("strong",[v._v("分代理论")]),v._v("』。按对象以生存时长的不同，分别存放于堆内存的『"),a("strong",[v._v("新生代")]),v._v("』内存区和『"),a("strong",[v._v("老年代")]),v._v("』内存区；")])]),v._v(" "),a("li",[a("p",[v._v("分代存储情况下，有一个『"),a("strong",[v._v("跨代引用")]),v._v("』问题。垃圾回收器采用了『"),a("strong",[v._v("记忆集")]),v._v("』解决这个问题；")])]),v._v(" "),a("li",[a("p",[v._v("默认情况下，撑过『"),a("strong",[v._v("15 轮")]),v._v("』垃圾回收周期的对象，将会从新生代内存区移入老年代内存；")])]),v._v(" "),a("li",[a("p",[v._v("垃圾回收器回以极低的频率扫描老年代内存；以更低的频率进行全堆扫描。所以，"),a("strong",[v._v("大多数情况下，所谓的垃圾回收实际上只是在回收堆内存中的新生代内存")]),v._v("；")])]),v._v(" "),a("li",[a("p",[v._v("CMS 和 G1 的收集行为有所不同。")])])]),v._v(" "),a("h2",{attrs:{id:"_3-如何回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何回收"}},[v._v("#")]),v._v(" 3. 如何回收？")]),v._v(" "),a("p",[v._v("垃圾收集器线程被唤醒干活时，并不是简单地『判断对象的可达性，对于不可达的已死的对象回收其内存空间』。在回收内存过程中，实际上它是要通过 『"),a("strong",[v._v("垃圾回收算法")]),v._v("』分若干步操作才能实现回收内存。")]),v._v(" "),a("h3",{attrs:{id:"标记-清除算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法"}},[v._v("#")]),v._v(" 标记-清除算法")]),v._v(" "),a("p",[v._v("最早出现也是最基础的垃圾收集算法是『"),a("strong",[v._v("标记-清除")]),v._v("』"),a("small",[v._v("（Mark-Sweep）")]),v._v("算法，在 1960 年由 Lisp 之父 John McCarthy 所提出。")]),v._v(" "),a("p",[v._v("顾名思义，标记-清除算法分两个阶段：『"),a("strong",[v._v("标记")]),v._v("』阶段和『"),a("strong",[v._v("清除")]),v._v("』阶段：首先标记处已死状态的对象。在标记完成之后，统一回收掉所有被标记的对象。")]),v._v(" "),a("blockquote",[a("p",[v._v("也可以反过来，标记出存活的对象，统一回收所有未标记对象。")])]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-6.jpg",alt:"gc-6"}})]),v._v(" "),a("p",[v._v("标记过程就是『"),a("strong",[v._v("对象是否属于垃圾")]),v._v("』的判定过程，至于判定的标准就是我们前面所说的『"),a("strong",[v._v("是否可达")]),v._v("』。")]),v._v(" "),a("p",[v._v("商用 JVM 实际上并不会使用 Mark-Sweep 算法，因为它的缺点很明显：")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("执行效率不稳定。标记和清除过程的时长会随着堆中对象的增多而变长。")])]),v._v(" "),a("li",[a("p",[v._v("标记、清除之后会产生大量不连续的内存碎片。")])])]),v._v(" "),a("p",[v._v("从 JDK 1.5 开始的默认垃圾收集器 CMS 就是基于标记-清除算法的，不过它并非原始的标记-清除算法，它是 Concurrent Mark-Sweep"),a("small",[v._v("（并发式标记清除）")]),v._v("算法。")]),v._v(" "),a("h3",{attrs:{id:"标记-复制算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记-复制算法"}},[v._v("#")]),v._v(" 标记-复制算法")]),v._v(" "),a("p",[v._v("1969 年 Fenichel 提出了一种称为『"),a("strong",[v._v("半区复制")]),v._v("』"),a("small",[v._v("（Semispace Copying）")]),v._v("的垃圾收集算法，是基于『"),a("strong",[v._v("空间换时间的")]),v._v("』策略对 Mark-Sweep 算法的改进，将第二阶段的交换操作替换为复制操作。")]),v._v(" "),a("p",[v._v("Fenichel 的设计思路是将内存分为大小相等的两块，每次只使用其中的一块。即，每次只是用堆空间的一半。在标记完对象后，Mark-Copy 算法是将存活的对象复制到另一半内存上，然后直接整体清空正在使用的这一半内存。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-7.jpg",alt:"gc-7"}})]),v._v(" "),a("p",[v._v("Mark-Copy 算法比 MS 算法效率更高的原因在于，虽然表面上看起来 Mark-Copy 算法要消耗时间进行对象的拷贝，但是实际上只有很少一部分对象需要拷贝"),a("small",[v._v("（以之前提过的 IBM 的研究的数据来看那就是 2% 的对象）")]),v._v("，因此多出来的时间开销并没有想象中那么大。而对整块内存的整体回收，比零碎地回收 98% 的对象的空间又要快很多"),a("small",[v._v("（你想，格式化一个盘是不是比挨个删除文件要快）")]),v._v("。因此，总体上来看，时间反而有节余。")]),v._v(" "),a("p",[v._v("在 Mark-Copy 算法中，当前被使用的那一半内存，叫做 "),a("em",[a("strong",[v._v("Eden")])]),v._v(" 空间；准备留着用于复制的内存，叫做 "),a("em",[a("strong",[v._v("Survivor")])]),v._v(" 空间。在分配内存-内存回收的周期性循环中，"),a("em",[v._v("Eden")]),v._v(" 空间和 "),a("em",[v._v("Survivor")]),v._v(" 空间的身份会不停地互相切换。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("当 "),a("em",[v._v("Eden")]),v._v(" 空间的可访问对象被复制到 "),a("em",[v._v("Survivor")]),v._v(" 空间后，"),a("em",[v._v("Eden")]),v._v(" 空间被整体清空，在下一个周期中，它将变为 "),a("em",[v._v("Survivor")]),v._v(" 空间。")])]),v._v(" "),a("li",[a("p",[v._v("当 "),a("em",[v._v("Survivor")]),v._v(" 空间被拷贝内存后，在下个周期中，它将变为 "),a("em",[v._v("Eden")]),v._v(" 区，新创建的内存的所需内存，就在这里面分配。")])]),v._v(" "),a("li",[a("p",[v._v("一个对象这么来回复制足够多次"),a("small",[v._v("（15 次）")]),v._v("就意味着它将变为老年代对象。")])])]),v._v(" "),a("p",[v._v("很显然，Mark-Copy 算法的缺点显而易见："),a("strong",[v._v("每次只能使用一半的内存空间")]),v._v(" 。")]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("在 1989 年，Andrew Appel 针对 Mark-Copy 算法做出了优化，目的是减少所浪费的内存空间：")]),v._v(" "),a("p",[v._v("1. 把新生代分为一块较大的 "),a("em",[v._v("Eden")]),v._v(" 空间和两块较小的 "),a("em",[v._v("Survivor")]),v._v(" 空间，大小比例是 "),a("em",[a("strong",[v._v("8 : 1 : 1")])]),v._v(" 。")]),v._v(" "),a("p",[v._v("2. 每次分配内存只使用 "),a("em",[v._v("Eden")]),v._v(" 和其中一块 "),a("em",[v._v("Survivor")]),v._v(" 。")]),v._v(" "),a("p",[v._v("3. 在标记阶段，判断 "),a("em",[v._v("Eden")]),v._v(" 和当前正在使用的 "),a("em",[v._v("Survivor")]),v._v(" 中的存活对象，拷贝到另一块 "),a("em",[v._v("Survivor")]),v._v(" 中。然后直接清除 "),a("em",[v._v("Eden")]),v._v(" 和当前的 "),a("em",[v._v("Survivor")]),v._v(" 。")]),v._v(" "),a("p",[v._v("4. 熬过若干次"),a("small",[v._v("（15 次）")]),v._v("垃圾回收周期的 Survivor 中的对象，就被移入老年代区。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-8.jpg",alt:"gc-8"}})]),v._v(" "),a("p",[v._v("在 "),a("em",[a("strong",[v._v("8 : 1 : 1")])]),v._v(" 的比例下，Appel 式的 Mark-Copy 算法只浪费 10% 的内存，比原始的 Mark-Copy 算法要节俭得多。")]),v._v(" "),a("h3",{attrs:{id:"标记-整理算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理算法"}},[v._v("#")]),v._v(" 标记-整理算法")]),v._v(" "),a("p",[v._v("标记-整理（Mark-Compack）算法其实不算是一个通用的垃圾回收算法，它是对一个特殊情况的特殊处理方案："),a("em",[v._v("老年代对象极少（比 2% 都要低很多很多）近乎没有时怎么办？")])]),v._v(" "),a("p",[v._v("针对老年代对象的存亡特征，1974 年 Edward Lueders 提出了另外一种有针对性的『"),a("strong",[v._v("标记-整理")]),v._v("』"),a("small",[v._v("（Mark-Compact）")]),v._v("算法，其中的标记过程仍然与『标记-清除』算法一样，但后续步骤不是直接对可回收对象进行清理，而是让所有存活的对象都向内存空间一端移动，然后直接清理掉边界以外的内存。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/jvm/img/gc-9.jpg",alt:"gc-9"}})]),v._v(" "),a("p",[v._v("标记整理算法的存在价值在于：")]),v._v(" "),a("blockquote",[a("p",[v._v("移动对象，会增加内存回收的时长，但是连续的内存空间会减少内存分配的时长。由于内存分配操作的频次要远高于垃圾回收，因此，"),a("small",[v._v("（在需要移动移动的对象很少的情况下）")]),v._v("时间开销上的『赚的』和『亏的』以抵消，发现还是有的赚。")])]),v._v(" "),a("p",[v._v("JVM 虚拟机里面的可选垃圾回收器：Parallel Scavenge 就是基于标记-整理算法的。另外，基于标记-清除算法的 CMS 在临空间碎片过多时会『临时性』地采用的就是这种处理办法来回收内存。")]),v._v(" "),a("h3",{attrs:{id:"总结-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("标记-清除"),a("small",[v._v("（MS）")]),v._v("算法时最早出现的通用垃圾回收算法。")])]),v._v(" "),a("li",[a("p",[v._v("标记-复制"),a("small",[v._v("（MC）")]),v._v("算法以空间换时间的策略来避免出现标记-清除算法的内存碎片过多的缺点。")])]),v._v(" "),a("li",[a("p",[v._v("Appel 式标记-复制算法实对原始标记-复制算法的改进，一定程度上减小了标记清除算法耗内存的缺点。")])]),v._v(" "),a("li",[a("p",[v._v("标记-整理算法是一种特殊的垃圾回收算法，它在老年代对象极少时有使用价值。")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);