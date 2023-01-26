(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{541:function(s,t,a){"use strict";a.r(t);var e=a(47),o=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos-8-上-gogs-的搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-8-上-gogs-的搭建"}},[s._v("#")]),s._v(" CentOS-8 上 Gogs 的搭建")]),s._v(" "),a("p",[s._v("Gogs"),a("small",[s._v("（"),a("a",{attrs:{href:"https://gogs.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gogs.io/"),a("OutboundLink")],1),s._v("）")]),s._v("一款极易搭建的自助 Git 服务，它")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("易安装。您除了可以根据操作系统平台下载 二进制运行，还可以通过 Docker 或 Vagrant，以及 包管理 安装。")])]),s._v(" "),a("li",[a("p",[s._v("跨平台。任何 Go 语言 支持的平台都可以运行 Gogs，包括 Windows、Mac、Linux 以及 ARM。")])]),s._v(" "),a("li",[a("p",[s._v("轻量级。一个廉价的树莓派的配置足以满足 Gogs 的最低系统硬件要求。有些用户甚至还将 Gogs 运行在 NAS 设备上。")])])]),s._v(" "),a("p",[s._v("预览：[此处缺图若干，看官网]")]),s._v(" "),a("h2",{attrs:{id:"前期准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前期准备工作"}},[s._v("#")]),s._v(" 前期准备工作")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在未来，Gogs 服务会以名为 "),a("code",[s._v("gogs")]),s._v(" 的 Linux 系统账户进行操作。所以，")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("要么，你需要提前在 CentOS 上创建名为 "),a("code",[s._v("gogs")]),s._v(" 的账号；")])]),s._v(" "),a("li",[a("p",[s._v("要么，记得未来在进行初始化配置时，将 Gogs 用来操作的账户指定为一个已存在账户"),a("small",[s._v("（例如 root）")]),s._v("。")])])])]),s._v(" "),a("li",[a("p",[s._v("在未来，我们会配置 Gogs 服务，让它将用户信息等数据存储于 MySQL 中，所以，我们的 CentOS 上需要安装 MySQL 数据库"),a("small",[s._v("（版本 >= 5.7）")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("Gogs 在访问、操作 MySQL 时，默认是以名为 "),a("code",[s._v("gogs")]),s._v(" 的 MySQL 账户连接服务器。所以，")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("要么，你需要提前在 MySQL 中创建名为 "),a("code",[s._v("gogs")]),s._v(" 的 MySQL 账号；")])]),s._v(" "),a("li",[a("p",[s._v("要么，接的未来在进行初始化配置时，将 Gogs 连接 MySQL 的账号指定为一个已存在账号"),a("small",[s._v("（例如，root）")]),s._v("。")])])])]),s._v(" "),a("li",[a("p",[s._v("Gogs 要求你的 MySQL 中有一个名为 "),a("code",[s._v("gogs")]),s._v(" 的 databse，因此，你需要提前在 MySQL 中创建它，并且，考虑到编码问题，Gogs 要求你使用 utf8mb4 编码。Gogs 为此特意提前准备好了 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" gogs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" gogs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8mb4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8mb4_general_ci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("Gogs 要求你的系统上要提前安装好 Git 。")])])]),s._v(" "),a("h2",{attrs:{id:"二进制安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装"}},[s._v("#")]),s._v(" 二进制安装")]),s._v(" "),a("p",[s._v("从 github 上下载安装包："),a("a",{attrs:{href:"https://github.com/gogs/gogs/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/gogs/gogs/releases"),a("OutboundLink")],1),s._v(" 。")]),s._v(" "),a("p",[s._v("当前"),a("small",[s._v("（2021-04-01）")]),s._v("最新版本是 0.12.3 。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("检查前面所说的环境要求是否已满足。"),a("small",[s._v("特别是名为 gogs 的 linux 账号和 gogs 的 mysql 账号，或，你已经准备好偷懒使用 root 。")])])]),s._v(" "),a("li",[a("p",[s._v("解压压缩包。")])]),s._v(" "),a("li",[a("p",[s._v("使用命令 cd 进入到刚刚创建的目录。")])]),s._v(" "),a("li",[a("p",[s._v("执行命令 "),a("code",[s._v("./gogs web")]),s._v(" 。 Gogs 默认会在端口 3000 启动 HTTP 服务，访问 "),a("code",[s._v("/install")]),s._v(" 以进行初始配置。"),a("small",[s._v("例如，"),a("a",{attrs:{href:"http://localhost:3000/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:3000/install"),a("OutboundLink")],1),s._v(" 。 ")])])])]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/gogs-01.png",alt:"gogs-01"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/gogs-02.png",alt:"gogs-02"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/gogs-03.png",alt:"gogs-03"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);