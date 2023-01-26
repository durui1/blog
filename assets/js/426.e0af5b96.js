(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{794:function(a,s,t){"use strict";t.r(s);var n=t(47),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"yarn-的安装和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-的安装和使用"}},[a._v("#")]),a._v(" Yarn 的安装和使用")]),a._v(" "),t("h2",{attrs:{id:"yarn-的下载和安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-的下载和安装"}},[a._v("#")]),a._v(" yarn 的下载和安装")]),a._v(" "),t("p",[a._v("yarn 是 npm 的竞品，它们俩之间的关系就如同 maven 和 gradle 一样。")]),a._v(" "),t("p",[a._v("抛开具体细节和更多特性不谈，yarn 至少在下载包的速度上面，要比 npm 强很多。")]),a._v(" "),t("p",[a._v("不过，有意思的是，yarn 要通过 npm 来安装"),t("small",[a._v("（也不知道 yarn 和 npm 谁更尴尬）")]),a._v("，就如同我们要通过 IE 浏览器来下载 google chrome 浏览器来代替 IE 浏览器一样。")]),a._v(" "),t("p",[a._v("通过 npm 安装 yarn：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n")])])]),t("p",[a._v("安装完毕后，可直接执行 "),t("strong",[a._v("yarn -v")]),a._v(" 命令查看 yarn 的版本，以验证是否安装成功。")]),a._v(" "),t("p",[a._v("需要注意的是，在通过 npm 安装了 yarn 之后：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("你的 yarn 是安装在了 npm 的全局仓库中。")]),a._v(" "),t("p",[a._v("你的 "),t("strong",[a._v("C:\\Users<用户名>\\AppData\\Roaming\\npm\\node_modules")]),a._v(" 下面就『多』出来一个 yarn 文件夹。")])]),a._v(" "),t("li",[t("p",[a._v("站在“上帝视角”，你的电脑上现在有两个包管理工具，它俩都能为你所用。")]),a._v(" "),t("p",[a._v("你要注意你当前用的是谁，你想用谁。")])]),a._v(" "),t("li",[t("p",[a._v("npm 和 yarn 两个包管理工具，它俩有各自自己的本地全局仓库。")]),a._v(" "),t("p",[a._v("npm 的本地全局仓库在 "),t("strong",[a._v("%homepath%\\AppData\\Roaming\\npm\\node_modules")])]),a._v(" "),t("p",[a._v("yarn 的本地仓库在 "),t("strong",[a._v("%homepath%\\AppData\\Local\\Yarn\\Data\\global\\node_modules")])])])]),a._v(" "),t("h2",{attrs:{id:"yarn-的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-的配置"}},[a._v("#")]),a._v(" yarn 的配置")]),a._v(" "),t("p",[a._v("和 npm 一样，yarn 在下载包时也是要连接到网络上的中央仓库，而官方的中央仓库国内的下载速度感人，我需要将配置改为连接淘宝的仓库。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("查看 yarn 的中央仓库网址：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config get registry\n")])])])]),a._v(" "),t("li",[t("p",[a._v("修改 yarn 的中央仓库网址：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" registry http://registry.npm.taobao.org/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看 yarn 全局安装的命令的源码路径和二进制执行文件路径：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global bin\n")])])]),t("p",[a._v("注意，和 npm 一样，这两个路径和局部安装无关。")])])]),a._v(" "),t("p",[a._v("这里，对于你电脑上同时存在的 yarn 和 npm，它们在现在包的时候，它们是从同一个中央仓库下载，下载下来的包自然就是一摸一样的，无任何差别。")]),a._v(" "),t("h2",{attrs:{id:"命令总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令总结"}},[a._v("#")]),a._v(" 命令总结")]),a._v(" "),t("dl",[t("dt",[a._v("npm install -g yarn")]),a._v(" "),t("dd",[a._v("通过 npm 安装它的竞争对手 yarn 。这个包（yarn）被安装在了 npm 的本地全局仓库。")]),a._v(" "),t("dt",[a._v("yarn -v")]),a._v(" "),t("dd",[a._v("查看包管理器 yarn 的版本信息")]),a._v(" "),t("dt",[a._v("yarn config get registry")]),a._v(" "),t("dd",[a._v("查看包管理器 yarn 的网络仓库网址。")]),a._v(" "),t("dt",[a._v("yarn config set registry http://registry.npm.taobao.org/")]),a._v(" "),t("dd",[a._v("将包管理器 yarn 的网络仓库网址指定为淘宝镜像。")]),a._v(" "),t("dt",[a._v("yarn global add xxx")]),a._v(" "),t("dd",[a._v("通过 yarn 全局安装 xxx 包。这个包被安装在了 yarn 的本地全局仓库。")]),a._v(" "),t("dt",[a._v("yarn global remove xxx/")]),a._v(" "),t("dd",[a._v("通过 yarn 卸载全局安装的 xxx 包。在 yarn 的本地全局仓库的 xxx 包会被移除。")]),a._v(" "),t("dt",[a._v("yarn add xxx")]),a._v(" "),t("dd",[a._v("通过 yarn 局部安装 xxx 包。")]),a._v(" "),t("dt",[a._v("yarn remove xxx")]),a._v(" "),t("dd",[a._v("通过 yarn 局部卸载 xxx 包。")])]),a._v(" "),t("h2",{attrs:{id:"安装、卸载、配环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装、卸载、配环境"}},[a._v("#")]),a._v(" 安装、卸载、配环境")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("yarn 安装 @vue/cli")]),a._v(" "),t("p",[a._v("我们使用过 npm 安装 @vue/cli（安装路径在 %homepath%\\AppData\\Roaming\\npm\\node_modules），自然，我们也可以使用 yarn 全局安装 @vue/cli ：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" @vue/cli\n")])])]),t("p",[a._v("@vue/cli 被安装在了 yarn 的本地全局仓库中：")]),a._v(" "),t("p",[t("strong",[a._v("%homepath%\\AppData\\Local\\Yarn\\Data\\global\\node_modules")]),a._v(" 。")])]),a._v(" "),t("li",[t("p",[a._v("卸载 npm 的 @vue/cli")])])]),a._v(" "),t("p",[a._v("注意，此时你的电脑上实际上是有 2 个 @vue/cli ：")]),a._v(" "),t("ul",[t("li",[a._v("npm 的本地全局仓库中有一个（以前装的）；")]),a._v(" "),t("li",[a._v("yarn 的本地全局仓库中也有一个（刚刚装的）。")])]),a._v(" "),t("p",[a._v("虽然可以，但是为了避免不必要的混淆和麻烦，我们可以『"),t("strong",[a._v("将 npm 安装的 @vue/cli 卸载掉")]),a._v("』：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" uninstall -g @vue/cli\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[a._v("配置 yarn 环境变量")]),a._v(" "),t("p",[a._v("不过，有可能你的电脑发现不了 yarn 安装的 @vue/cli，你可以通过以下命令验证：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("vue --version\n")])])]),t("p",[a._v("如果没有出现版本信息（命令行输出 vue 命令未找到），那么就说明你的电脑没发现 yarn 安装的 @vue/cli 。")]),a._v(" "),t("p",[a._v("这是因为 PATH 环境变量没有配置，导致系统/命令行找不到 @vue/cli 的 "),t("code",[a._v("vue")]),a._v(" 命令在哪里。")]),a._v(" "),t("p",[a._v("你可以通过上面的 "),t("code",[a._v("yarn global bin")]),a._v(" 到一个路径，它是 yarn 全局安装的软件的可以执行程序位置，形如:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("C:\\Users\\<用户名>\\AppData\\Local\\Yarn\\bin\n")])])]),t("p",[a._v("将它追加到你的环境变量 PATH 中去。"),t("small",[a._v("配置完后，稳妥起见，重启电脑。")])])])]),a._v(" "),t("h2",{attrs:{id:"vue-cli-创建的项目使用-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-创建的项目使用-yarn"}},[a._v("#")]),a._v(" vue-cli 创建的项目使用 Yarn")]),a._v(" "),t("p",[a._v("虽然现在你的 @vue/cli 是通过 yarn 安装的"),t("small",[a._v("（npm 安装的那个已经被你卸载了）")]),a._v("，但是 @vue/cli 『"),t("strong",[a._v("默认使用 NPM 作为包管理器")]),a._v("』。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("如何知道我的 vue-cli 是使用 NPM 作为包管理器的？")]),a._v(" "),t("p",[a._v("当你使用 "),t("strong",[a._v("vue create xxx")]),a._v(" 创建 vue 项目结束后看到如下信息，那么毫无疑问 vue-cli 使用的就是 NPM：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("successfully created project xxx.\nGet started with the following commands:\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" temp-vue-cli"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("br"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run serve 看这里，看这里，看这里\n")])])])]),a._v(" "),t("p",[a._v("如果有需要，你可以通过设置，去提前『"),t("strong",[a._v("告知")]),a._v("』@vue/cli 创建的 vue 项目使用 Yarn 作为包管理器。")]),a._v(" "),t("p",[a._v("无论是通过 npm 还是通过 Yarn 全局安装 @vue/cli，@vue/cli 会在你的用户的『"),t("strong",[a._v("家目录")]),a._v("』下创建一个名为 "),t("code",[a._v(".vuerc")]),a._v(" 的文件"),t("small",[a._v("（一开始可能没有，在你第一次执行 vue create 命令后就会被 @vue/cli 创建）")]),a._v("。在 Windows 环境中，这个文件在 "),t("strong",[a._v("C:\\Users\\<用户名>")]),a._v(" 目录下，即，"),t("code",[a._v("%homepath%")]),a._v(" 目录。")]),a._v(" "),t("p",[a._v("用编辑器打开这个文件，你会发现其内容是一个 JSON 格式数据：")]),a._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"useTaobaoRegistry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"packageManager"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"npm"')]),a._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 看这里，看这里，看这里。")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"latestVersion"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4.4.6"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lastChecked"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1596095820450")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("很显然 "),t("strong",[a._v("packageManager")]),a._v(" 项就是用来设置 @vue/cli 的包管理器的，将它从 npm 改为 "),t("strong",[a._v("yarn")]),a._v(" 。")]),a._v(" "),t("blockquote",[t("p",[a._v("另外，这个配置文件中还有一项 useTaobaoRegistry ，表示的是『"),t("strong",[a._v("是否使用淘宝镜像源")]),a._v("』，你也可以将这一项改为 "),t("strong",[a._v("true")]),a._v(" 启用淘宝镜像源，以加快包的下载速度。")])]),a._v(" "),t("p",[a._v("修改完成后，使用 "),t("strong",[a._v("vue create xxx")]),a._v(" 创建 vue 项目，创建过程结束后，你看到的将是：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("successfully created project xxx.\nGet started with the following commands:\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" temp-vue-cli\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" serve\n")])])]),t("p",[t("strong",[a._v("注意")]),a._v("，这里的设置对命令行有效，而对 IDEA『"),t("strong",[a._v("无影响")]),a._v("』 ，因为在 IDEA 里通过 @vue/cli 创建 vue 项目，它们读取的配置文件是 IDEA 自己的配置文件，并不是这里的这个配置文件，是另外单独的配置。")]),a._v(" "),t("h2",{attrs:{id:"idea-中配置使用-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idea-中配置使用-yarn"}},[a._v("#")]),a._v(" IDEA 中配置使用 yarn")]),a._v(" "),t("p",[a._v("要在 IDEA 使用 yarn 作为包管理器，有 1 处配置需要改动：全局 settings 。")]),a._v(" "),t("p",[a._v("全局 settings 中去修改 IDEA 默认使用的包管理器，从 npm 改为 yarn 。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/windows/img/yarn-idea-1.png",alt:"yarn-idea-1"}})]),a._v(" "),t("p",[a._v("这里要指向 yarn 的路径。注意，yarn 是通过 npm 安装的，所以这里的 yarn 的路径是 npm 的本地全局仓库下的 yarn 文件夹。即")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("%homepath%\\AppData\\Roaming\\npm\\node_modules\\yarn\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);