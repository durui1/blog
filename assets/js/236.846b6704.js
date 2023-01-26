(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{603:function(e,t,v){"use strict";v.r(t);var _=v(47),s=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"redis-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-简介"}},[e._v("#")]),e._v(" Redis 简介")]),e._v(" "),v("p",[e._v("Redis 是目前使用最广泛的缓存中间件，相比 Memcached，Redis 支持更多的数据结构和更丰富的数据操作，而且 Redis 还有着丰富而成熟的集群方案和使用场景。")]),e._v(" "),v("p",[e._v("Redis 是一个速度非常快的非关系数据库（Non-Relational Database），它可以存储键（Key）与 5 种不同类型的值（Value）之间的映射（Mapping），可以将存储在内存的键值对数据持久化到硬盘，可以使用复制特性来扩展读性能，还可以使用客户端分片来扩展写性能。")]),e._v(" "),v("p",[e._v("为了满足高性能，Redis 采用内存（in-memory）数据集，根据使用场景，可以采用两种不同方式来实现数据持久化：")]),e._v(" "),v("ol",[v("li",[e._v("每隔一段时间转存储数据集到磁盘。")]),e._v(" "),v("li",[e._v("追加每条命令到日志中。")])]),e._v(" "),v("p",[e._v("持久化也可以被禁用，如果你只是需要一个功能丰富的内存缓存。")]),e._v(" "),v("h2",{attrs:{id:"数据模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[e._v("#")]),e._v(" 数据模型")]),e._v(" "),v("p",[e._v("Redis 数据模型不仅仅与关系数据库管理系统（RDBMS）不同，也不同于任何简单的 NoSQL 键-值数据存储系统。")]),e._v(" "),v("p",[e._v("Redis 数据类型类似于编程语言的基础数据类型，因此开发人员感觉很自然，每个数据类型都支持适『用于其类型的操作』，以最大限度发挥每种数据类型的特性。")]),e._v(" "),v("p",[e._v("受支持的数据类型包括：")]),e._v(" "),v("ul",[v("li",[e._v("string（字符串）")]),e._v(" "),v("li",[e._v("hash（哈希）")]),e._v(" "),v("li",[e._v("list（列表）")]),e._v(" "),v("li",[e._v("set（集合）")]),e._v(" "),v("li",[e._v("zset（sorted set：有序集合）")])]),e._v(" "),v("h2",{attrs:{id:"关键优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关键优势"}},[e._v("#")]),e._v(" 关键优势")]),e._v(" "),v("p",[e._v("Redis 的优势包括它的速度、对富数据类型的支持、操作的原子性，以及通用性：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("性能极高，它每秒可执行约 10,000 个 SET 以及约 100,000 个 GET 操作；")])]),e._v(" "),v("li",[v("p",[e._v("丰富的数据类型，Redis 对大多数开发人员已知的多数数据类型提供了原生支持，这使得各种问题得以轻松解决；")])]),e._v(" "),v("li",[v("p",[e._v("原子性，因为所有 Redis 操作都是原子性的，所以多个客户端会并发地访问一个  Redis 服务器器，获取相同的更新值；")])]),e._v(" "),v("li",[v("p",[e._v("丰富的特性，Redis 是一个多效用工具，有非常多的应用场景，包括缓存、消息队列（Redis 原生支持发布/订阅）、短期应用程序数据据（比如 Web 会话）等。")])])]),e._v(" "),v("h2",{attrs:{id:"redis-的『快』的原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-的『快』的原因"}},[e._v("#")]),e._v(" Redis 的『快』的原因：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("是对内存的较为简单的数据进行读写操作。")])]),e._v(" "),v("li",[v("p",[e._v("Redis 是 C 语言实现的，它的底层实现原理是基于 IO 多路复用技术。这个实现方案本身就是先进/高级/高效的。")])]),e._v(" "),v("li",[v("p",[e._v("Redis 的工作是基于单线程的，从而节省了多线程形式下线程切换的开销。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("一次只运行一条命令，每条命令天生就是一个独立的事务。")])]),e._v(" "),v("li",[v("p",[e._v("拒绝使用长/慢命令，Redis 对外提供的每条命令都很高效快速。")])]),e._v(" "),v("li",[v("p",[e._v("其实并不是单线程。"),v("small",[e._v("有些操作使用独立线程，其它的线程是去干其它的事情，和执行命令的工作线程无关")])])])])])]),e._v(" "),v("p",[v("small",[e._v("最后的事实也证明了 Redis 的作者的最初分析思路的正确性：Redis 的单机性能的瓶颈是网络速度和网卡性能，而非 CPU 。")])]),e._v(" "),v("h2",{attrs:{id:"redis-的通用命令简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-的通用命令简介"}},[e._v("#")]),e._v(" Redis 的通用命令简介")]),e._v(" "),v("p",[e._v("Redis 的常用的基础命令有：")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[e._v("命令")]),e._v(" "),v("th",{staticStyle:{"text-align":"left"}},[e._v("说明")])])]),e._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("ping")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[e._v("PING 命令来测试客户端与 Redis 的连接是否正常。"),v("br"),e._v("连接正常时会收到回复 PONG")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("set / get")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[e._v("使用 set 和 get 可以向 redis 设置数据、获取数据。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("del")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[e._v("删除指定 key 的内容。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[e._v("Keys  *")]),e._v(" "),v("td",{staticStyle:{"text-align":"left"}},[e._v("查看当前库中所有的 key 值")])])])]),e._v(" "),v("p",[e._v("一个 Redis 实例可以包括多个数据库。不过，一个 redis 实例最多可提供 16 个数据库，而且固定了以下标从 0 到 15 作为数据库名。客户端默认连接第 0 号数据库。")]),e._v(" "),v("p",[e._v("可以通过 "),v("em",[v("strong",[e._v("select")])]),e._v(" 命令来当前数据库：")]),e._v(" "),v("blockquote",[v("p",[e._v("select N")])]),e._v(" "),v("p",[e._v("如果选择一个不存在数据库则会报错。")]),e._v(" "),v("h2",{attrs:{id:"redis-单机多实例-了解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-单机多实例-了解"}},[e._v("#")]),e._v(" Redis 单机多实例（了解）")]),e._v(" "),v("p",[e._v("如果需要启动两个 Redis 实例，你可以这么干：")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("在 Redis 解压目录下创建两个文件夹，例如："),v("em",[e._v("6379")]),e._v(" 和 "),v("em",[e._v("16379")]),e._v(" 。"),v("small",[e._v("以各自所占端口号命名。")])])]),e._v(" "),v("li",[v("p",[e._v("将 "),v("em",[e._v("redis.windows.conf")]),e._v(" 文件复制进这两个文件夹，并将 "),v("em",[e._v("16379")]),e._v(" 中的配置文件中的 "),v("em",[v("strong",[v("code",[e._v("port 6379")])])]),e._v(" 改为 "),v("em",[v("strong",[v("code",[e._v("port 16379")])])]),e._v(" 。")])]),e._v(" "),v("li",[v("p",[e._v("在这两个文件夹中，分别启动两个命令行，执行 "),v("em",[v("code",[e._v("../redis-server.exe redis.windows.conf")])]),e._v(" 命令。")])]),e._v(" "),v("li",[v("p",[e._v("未来，在使用 "),v("em",[v("code",[e._v("redis-cli.exe")])]),e._v(" 连接 Redis 服务端的时候，就需要明确指定连接端口号。")])])]),e._v(" "),v("h2",{attrs:{id:"持久化-了解、自学"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持久化-了解、自学"}},[e._v("#")]),e._v(" 持久化（了解、自学）")]),e._v(" "),v("p",[e._v("Redis 的高性能是由于其将所有数据都存储在了内存中，为了使 Redis 在重启之后仍能保证数据不丢失，需要将数据从内存中同步到硬盘中，这一过程就是持久化。")]),e._v(" "),v("p",[e._v("Redis支持两种方式的持久化，一种是 RDB 方式，一种是 AOF 方式。")]),e._v(" "),v("h3",{attrs:{id:"rdb-方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb-方式"}},[e._v("#")]),e._v(" RDB 方式")]),e._v(" "),v("p",[e._v("RDB 方式是 Redis 的默认持久化方式。")]),e._v(" "),v("p",[e._v("它是通过快照"),v("small",[e._v("（snapshotting）")]),e._v("完成的，当符合一定条件时 Redis 会自动将内存中的数据进行快照并持久化到硬盘。简单来说，就是直接将内存中的数据直接保存到硬盘上。")]),e._v(" "),v("p",[e._v("在 "),v("strong",[e._v("redis.windows.conf")]),e._v(" 配置文件中默认有此下配置：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("save 900 1\nsave 300 10\nsave 60 10000\n")])])]),v("p",[e._v("save 开头的一行就是持久化配置，可以配置多个条件"),v("small",[e._v("（每行配置一个条件）")]),e._v("，每个条件之间是『或』的关系，"),v("code",[e._v("save 900 1")]),e._v(" 表示 900 秒钟"),v("small",[e._v("（15 分钟）")]),e._v("内至少 1 个键被更改则进行快照，"),v("code",[e._v("save 300 10")]),e._v(" 表示 300 秒（5 分钟）内至少 10 个键被更改则进行快照。")]),e._v(" "),v("p",[e._v("Redis 启动后会读取 RDB 快照文件，将数据从硬盘载入到内存。根据数据量大小与结构和服务器性能不同，这个时间也不同。通常将记录一千万个字符串类型键、大小为 1GB 的快照文件载入到内存中需要花费 20～30 秒钟。")]),e._v(" "),v("p",[e._v("但是 RDB 方式实现持久化有个问题啊：一旦 Redis 异常"),v("small",[e._v("（突然）")]),e._v("退出，就会丢失最后一次快照以后更改的所有数据。因此在使用 RDB 方式时，需要根据实际情况，调整配置中的参数，以便将数据的遗失控制在可接受范围内。")]),e._v(" "),v("h3",{attrs:{id:"aof-方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof-方式"}},[e._v("#")]),e._v(" AOF 方式")]),e._v(" "),v("p",[e._v("默认情况下 Redis 没有开启 AOF（append only file）方式的持久化，可以通过配置文件中的 "),v("strong",[e._v("appendonly")]),e._v(" 参数开启：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("appendonly yes\n")])])]),v("p",[e._v("开启 AOF 持久化后每执行一条会更改 Redis 中的数据的命令，Redis 就会将该命令写入硬盘中的 AOF 文件。AOF 文件的保存位置和 RDB 文件的位置相同，都是通过 "),v("strong",[e._v("dir")]),e._v(" 参数设置的，默认的文件名是 "),v("strong",[e._v("appendonly.aof")]),e._v("，可以通过 "),v("strong",[e._v("appendfilename")]),e._v(" 参数修改："),v("strong",[e._v("appendfilename appendonly.aof")])])])}),[],!1,null,null,null);t.default=s.exports}}]);