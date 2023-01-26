(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{535:function(t,a,s){"use strict";s.r(a);var e=s(47),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-的安装"}},[t._v("#")]),t._v(" Ubuntu 的安装")]),t._v(" "),s("h2",{attrs:{id:"安装过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[t._v("#")]),t._v(" 安装过程")]),t._v(" "),s("h3",{attrs:{id:"欢迎界面界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#欢迎界面界面"}},[t._v("#")]),t._v(" 欢迎界面界面")]),t._v(" "),s("p",[t._v("选择右侧按钮，进入 Ubuntu 系统的安装环节。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-01.png",alt:"ubuntu-01"}})]),t._v(" "),s("h3",{attrs:{id:"选择键盘布局界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择键盘布局界面"}},[t._v("#")]),t._v(" 选择键盘布局界面")]),t._v(" "),s("p",[t._v("使用默认值。我们的键盘的布局都是『美式布局』。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-02.png",alt:"ubuntu-02"}})]),t._v(" "),s("h3",{attrs:{id:"默认安装的软件和升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认安装的软件和升级"}},[t._v("#")]),t._v(" 默认安装的软件和升级")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-03.png",alt:"ubuntu-03"}})]),t._v(" "),s("p",[t._v("这个界面中有 1 对 radio 和 2 个 checkbox 进行选择。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("1")]),t._v(" 和 "),s("strong",[t._v("2")]),t._v(" 是互斥的。表示安装过程中，是否要安装某些办公软件等非系统级的应用。")]),t._v(" "),s("p",[t._v("这里，我们选择 "),s("strong",[t._v("2")]),t._v("，最小化安装。最小化安装只会安装必要的工具软件和浏览器。")]),t._v(" "),s("p",[t._v("至于其它的软件，如有需要，后续可以再安装。因此，就不在系统安装过程中进行安装。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("3")]),t._v(" 表示安装过程中是否要进行升级。")]),t._v(" "),s("p",[t._v("系统盘中的某些软件的版本可能已经落后于当前中央仓库的最新版本。Ubuntu 可以在安装过程中进行联网升级，安装最新版本的软件。")]),t._v(" "),s("p",[t._v("这里，我们取消这项功能。"),s("small",[t._v("（其实，最好是安装过程中断网）。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("4")]),t._v(" 是否安装某些第三方的闭源软件。")]),t._v(" "),s("p",[t._v("这里，我们选择需要。因为这里我们要用到无线网卡驱动。")])])]),t._v(" "),s("h3",{attrs:{id:"分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分区"}},[t._v("#")]),t._v(" 分区")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-04.png",alt:"ubuntu-04"}})]),t._v(" "),s("p",[t._v("如果你的电脑上只有一块硬盘，那么你将在这个界面看到一个 "),s("code",[t._v("sda")]),t._v("，如果你是双硬盘那么你还会看到 "),s("code",[t._v("sdb")]),t._v("。如果有第三块，那自然还有 "),s("code",[t._v("sdc")]),t._v(" 以此类推。")]),t._v(" "),s("p",[t._v("如果你的硬盘"),s("small",[t._v("（"),s("code",[t._v("sda")]),t._v("）")]),t._v("上装过系统，无论是 Windows 还是 Linux，那么你在 "),s("code",[t._v("sda")]),t._v(" 下会看到 sda1、sda2、... 等。具体有多少个，取决于你之前的分区的数量。")]),t._v(" "),s("p",[t._v("你可以点击下方的 "),s("strong",[s("code",[t._v("-")])]),t._v(" 按钮，将这些不要的分区都删除"),s("small",[t._v("（在最终确认前，这里并没有真删除，还有返回余地）")]),t._v("。如果你将你原来的分区都删除干净了，那么就是类似上图形式，出现 "),s("code",[t._v("free space")]),t._v("，空余空间。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你是准备安装双系统，那么肯定就没有必要将 Windows 的各个分区都删光了。")]),t._v(" "),s("p",[t._v("只要为安装 Ubuntu 准备出足够大的 freespace 即可。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-05.png",alt:"ubuntu-05"}})]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("最简单的情况，你为你的 Ubuntu 系统仅需创建 2 个分区："),s("code",[t._v("交换（swap）分区")]),t._v(" + "),s("code",[t._v("一个主分区")]),t._v(" 。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-07.png",alt:"ubuntu-07"}})]),t._v(" "),s("ol",[s("li",[s("p",[t._v("所创建的分区大小。默认值就是整个 free space 。")])]),t._v(" "),s("li",[s("p",[t._v("分区类型，我们这里选择主分区。"),s("small",[t._v("因为，我们计划中也没有其它分区了，用不着『凑四』。")])])]),t._v(" "),s("li",[s("p",[t._v("所创建分区从 free space 的哪头开始算起。默认是从头部开始。因为，我们这就要给分区，从头、从尾算起都是一回事。")])]),t._v(" "),s("li",[s("p",[t._v("分区文件系统类型。默认值，不变。")])]),t._v(" "),s("li",[s("p",[t._v("文件系统挂载点。"),s("small",[t._v("即，指定是哪个目录下的内容放到这个分区下。")])])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("分区创建完毕后，就是如下样子。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-08.png",alt:"ubuntu-08"}})]),t._v(" "),s("p",[t._v("这里注意的是，这里我们在第一个硬盘（"),s("code",[t._v("sda")]),t._v("）"),s("small",[t._v("（的第一个扇区）")]),t._v("安装了 boot loader"),s("small",[t._v("（grub2）")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("毫无疑问，当电脑启动时，BIOS 将加载这里的 bootloader，而后再由这个 bootloader 加载操作系统镜像。")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"创建登录用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建登录用户"}},[t._v("#")]),t._v(" 创建登录用户")]),t._v(" "),s("p",[t._v("输入用户名和密码，并且给你的电脑起个名字。")]),t._v(" "),s("p",[t._v("注意这的电脑名不宜过长，否则在终端显示上会占据太长空间影响感观。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-09.png",alt:"ubuntu-09"}})]),t._v(" "),s("h3",{attrs:{id:"安装中-等待"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装中-等待"}},[t._v("#")]),t._v(" 安装中，等待")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-10.png",alt:"ubuntu-10"}})]),t._v(" "),s("p",[t._v("在安装过程中可能会出现 "),s("code",[t._v("retrieving ...")]),t._v(" 和 "),s("code",[t._v("downloading ...")]),t._v(" 这都是在联网下载某些软件。")]),t._v(" "),s("p",[t._v("由于默认连接的中央仓库的下载速度较慢，因此这里花费时间较常。所以，此时可以点击 "),s("code",[t._v("skip")]),t._v(" 跳过这个环节。等待系统安装成功后，我们进入系统中，更改中央仓库网址之后，再下载。")]),t._v(" "),s("h2",{attrs:{id:"安装后的必要操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装后的必要操作"}},[t._v("#")]),t._v(" 安装后的必要操作")]),t._v(" "),s("h3",{attrs:{id:"修改『更新提示』的频次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改『更新提示』的频次"}},[t._v("#")]),t._v(" 修改『更新提示』的频次")]),t._v(" "),s("p",[t._v("Ubuntu 会自动连接软件源，检查本地安装的软件当前是否有更新的版本。如果有，它会给你提示信息。")]),t._v(" "),s("p",[t._v("不过，它的提示信息出现的过于频繁，如果你不需要这么频繁，或者甚至不需要它监测是否需要更新，你可以进行修改。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-after-install-01.png",alt:"after-install-01"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-after-install-02.png",alt:"after-install-02"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/linux/img/ubuntu-after-install-03.png",alt:"after-install-03"}})]),t._v(" "),s("h3",{attrs:{id:"更改软件源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改软件源"}},[t._v("#")]),t._v(" 更改软件源")]),t._v(" "),s("p",[t._v("Ubuntu 默认连接的软件源的下载速度比较慢。国内的一些大厂提供了国外软件园的国内镜像。我们可以将 Ubuntu 的软件源的网址改成这些国内的镜像。")]),t._v(" "),s("p",[t._v("Ubuntu 的软件源的地址的相关配置在 "),s("code",[t._v("/etc/apt/sources.list")]),t._v(" 。")]),t._v(" "),s("p",[t._v("如果你对 vi 命令不熟悉，你可以使用 gedit 编辑它。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gedit /etc/apt/sources.list\n")])])]),s("p",[t._v("用下面的内容覆盖掉这个文件的原始内容：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("deb http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse\n")])])]),s("p",[t._v("修改完毕后，你可执行 "),s("code",[t._v("sudo apt update")]),t._v(" 命令，你会看到，Ubuntu 会去你所执行的软件源下载『"),s("strong",[t._v("软件清单")]),t._v("』。"),s("small",[t._v("这样后续你就可以『离线查询』，查看软件园中有哪些软件及其版本。")])]),t._v(" "),s("p",[t._v("你可以执行下述命令安装 "),s("code",[t._v("net-tools")]),t._v(" 软件包测试以下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" net-tools\n")])])]),s("p",[t._v("net-tools 安装后的『效果』是你可使用 "),s("code",[t._v("ifconfig")]),t._v(" 命令。")]),t._v(" "),s("blockquote",[s("p",[t._v("另外，"),s("code",[t._v("openssh-server")]),t._v(" 可以装上，后续要使用。")])]),t._v(" "),s("h2",{attrs:{id:"中文输入法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中文输入法"}},[t._v("#")]),t._v(" 中文输入法")]),t._v(" "),s("p",[s("code",[t._v("settings")]),t._v(" -> "),s("code",[t._v("Region & Language")]),t._v(" -> "),s("code",[t._v("Manage Installed Languages")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ibus ibus-pinyin\n")])])]),s("p",[t._v("『The End』")])])}),[],!1,null,null,null);a.default=v.exports}}]);