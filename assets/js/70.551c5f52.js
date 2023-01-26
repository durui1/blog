(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{438:function(t,v,_){"use strict";_.r(v);var a=_(47),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),_("h2",{attrs:{id:"创建本地仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建本地仓库"}},[t._v("#")]),t._v(" 创建本地仓库")]),t._v(" "),_("p",[t._v("Git 可以管理任何一个文件夹"),_("small",[t._v("（及其中内容）")]),t._v("，只要在该文件夹中执行 "),_("strong",[t._v("git init")]),t._v("，就可以让 Git 完成管理前的准备工作。")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[t._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),_("p",[t._v("Git 会在它管理的文件夹下创建名为 "),_("strong",[t._v(".git")]),t._v(" 的子文件夹，这个文件夹也就是逻辑上的『"),_("strong",[t._v("本地仓库")]),t._v("』。它里面会存放被 Git 所管理的文件的相关信息"),_("small",[t._v("（例如，历史版本）")]),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("你不要自己去操作 "),_("strong",[t._v(".git")]),t._v(" 目录。这个目录下的内容是 git 来使用和操作的。")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("操作 Git 的基本流程是：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("流程")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("操作")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("先修改文件")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("然后执行 "),_("strong",[t._v("git add")]),t._v(" 命令。"),_("br"),_("strong",[t._v("git add")]),t._v(" 命令会把文件内容加入 Git 系统的『"),_("strong",[t._v("暂存区")]),t._v("』"),_("small",[t._v("（Index）")]),t._v("。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("接着就可以执行 "),_("strong",[t._v("git commit")]),t._v(" 命令，将文件的内容存入『"),_("strong",[t._v("本地仓库")]),t._v("』"),_("small",[t._v("（.git）")]),t._v("。"),_("br"),t._v("于是文档库中就多出来一份文件的新版本。")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git_2.png",alt:"图片"}})]),t._v(" "),_("blockquote",[_("p",[t._v("git 的 add 命令，是一个容易引起疑问的命令"),_("small",[t._v("（特别是对于有 subversion 使用经验的用户而言更是如此）")]),t._v("，add 命令的字面含义就是要将某个文件纳入到版本控制之中，但是 git add 的意义并非如此。")]),t._v(" "),_("p",[t._v("git 官方也意识到这个 add 的命名并不是很精准，于是提出了 "),_("strong",[t._v("git stage")]),t._v(" 命令作为 git add 的同义词。因此，为了便于理解，推荐大家使用 "),_("strong",[t._v("git stage")]),t._v(" 来代替 git add 。")])]),t._v(" "),_("h2",{attrs:{id:"git-中文件的受管状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-中文件的受管状态"}},[t._v("#")]),t._v(" Git 中文件的受管状态")]),t._v(" "),_("p",[t._v("Git 会将文件"),_("small",[t._v("（文件夹）")]),t._v("的状态分成以下三类：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("受管状态")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("被追踪的"),_("br"),_("strong",[t._v("tracked")])]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("tracked 状态意味着 Git 正在监控、监管着这个文件。"),_("br"),t._v("你对这个文件的任何改动，都会被 Git 发现。"),_("br"),t._v("Git 会进一步要求你提交你的改动，或撤销你的改动。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("被忽略的"),_("br"),_("strong",[t._v("ignored")])]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("ignored 状态意味着 Git 完全不管这个文件。"),_("br"),t._v("在 Git 看来它就跟不存在一样。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("不被追踪的"),_("br"),_("strong",[t._v("untracked")])]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("untracked 状态是所有文件的初始状态。"),_("br"),t._v("逻辑上，它是 tracked 和 ignored 状态『之前』的一种状态，逻辑上，它是一种临时状态。"),_("br"),_("strong",[t._v("你既没有要求 Git 监管它，又没有要求 Git 忽略它。")]),t._v(" "),_("br"),_("small",[t._v("对于这个文件，Git 也是一脸懵逼不知道接下来该不该监测文件的变动。")])])])])]),t._v(" "),_("p",[t._v("这里有 2 点需要强调的是：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("所有的文件的初始状态都是 "),_("strong",[t._v("untracked")]),t._v(" 。")])]),t._v(" "),_("li",[_("p",[t._v("在正常情况下，"),_("strong",[t._v("文件不应该长期处于 untracked 状态")]),t._v("，应尽快转变为 "),_("strong",[t._v("tracked")]),t._v(" 或 "),_("strong",[t._v("ignored")]),t._v(" 。")])])]),t._v(" "),_("p",[t._v("对于新创建的文件，它们都是处于 "),_("strong",[t._v("untracked")]),t._v(" 状态的，接下来它们应该尽快通过下述 2 种方法之际却换成 "),_("strong",[t._v("ignored")]),t._v(" 状态，或 "),_("strong",[t._v("tracked")]),t._v(" 状态。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("From")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("To")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("untracked")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("ignored")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("必须先在文件夹中创建一个名为 "),_("strong",[t._v(".gitignore")]),t._v(" 的文件"),_("small",[t._v("（必须是这个名字）")]),t._v("，然后把要忽略的文件逐一列在这个文件中"),_("small",[t._v("（一个文件一行，支持通配符）。")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("untracked")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("tracked")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("可以使用 "),_("strong",[t._v("git add")]),t._v(" + "),_("strong",[t._v("git commit")]),t._v(" 命令，将它提交给 Git 监控、管理即可。")])])])]),t._v(" "),_("h2",{attrs:{id:"新增一个文件的历史版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新增一个文件的历史版本"}},[t._v("#")]),t._v(" 新增一个文件的历史版本")]),t._v(" "),_("p",[_("strong",[t._v("git stage")]),_("small",[t._v("（或 "),_("strong",[t._v("git add")]),t._v("）")]),t._v(" + "),_("strong",[t._v("git commit")]),t._v(" 的作用简单来说，就是将一个文件的当前内容提交给 Git ：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("对于 "),_("em",[t._v("untracked")]),t._v(" 状态的文件，提交后会变成 "),_("em",[t._v("tracked")]),t._v(" 状态；")])]),t._v(" "),_("li",[_("p",[t._v("对于 "),_("em",[t._v("tracked")]),t._v(" 状态的文件，其历史版本记录则会演进一步。")])])]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[t._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stage "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readme.txt"')]),t._v("\n$ "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),t._v("\n")])])]),_("p",[t._v("对于一次『提交』而言，"),_("strong",[t._v("提交消息"),_("small",[t._v("（message）")]),t._v("是必须的")]),t._v(" 。否则，Git 会拒绝你的这次提交。")]),t._v(" "),_("blockquote",[_("p",[t._v("一个完整的提交信息包括 header、body、footer 三部分，你至少要保证提供 header 。")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("p",[_("strong",[t._v("git add")]),t._v(" 指令后面也可以指定文件夹的名称，这样该文件夹内的『"),_("strong",[t._v("所有文件")]),t._v("』都会被处理。例如：")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])])])]),t._v(" "),_("p",[t._v("要新增『一次提交』之所以要同时使用 "),_("strong",[t._v("git stage")]),_("small",[t._v("（"),_("strong",[t._v("git add")]),t._v("）")]),t._v(" 和 "),_("strong",[t._v("git commit")]),t._v(" 是因为在将文件当前的内容添加成至本地仓库之前，要 "),_("strong",[t._v("先")]),t._v(" 将其添加至 "),_("strong",[t._v("暂存区")]),t._v(" 。")]),t._v(" "),_("p",[_("code",[t._v("git commit")]),t._v("『"),_("strong",[t._v("只会")]),t._v("』将暂存区的文件的内容提交至本地仓库进行保存。")]),t._v(" "),_("h2",{attrs:{id:"使用-git-的核心思想-一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-的核心思想-一致性"}},[t._v("#")]),t._v(" 使用 Git 的核心思想：一致性")]),t._v(" "),_("p",[t._v("当你改动了工作区"),_("small",[t._v("（硬盘上）")]),t._v("的文件的内容之后，你可以使用 "),_("strong",[t._v("git status")]),t._v(" 命令查看文件的状态。你会看到类似如下信息：")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[t._v("On branch master\nChanges not staged "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commit:\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to update what will be committed"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git checkout -- <file>..."')]),t._v(" to discard changes "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" working directory"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        modified:   新建文本文档.txt\n")])])]),_("p",[t._v("这里除了能看到 Git 监控到的文件的变动 "),_("code",[t._v("modified: 新建文本文档.txt")]),t._v(" 之外，在这条信息的上面，你还能看到 Git 为你给出的 2 条建议：接下来请使用 "),_("strong",[t._v("git add <file>...")]),t._v(" 命令，或使用 "),_("strong",[t._v("git checkout -- <file>...")]),t._v(" 命令。")]),t._v(" "),_("p",[t._v("这两条建议的背后，体现出 Git 的一个核心『关注点』：Git 希望你能保持"),_("strong",[t._v("工作区和本地仓库的一致性")]),t._v(" 。")]),t._v(" "),_("p",[t._v("在初始状况下，工作区和本地仓库的内容是一致的，当你改动工作区的文件后，工作区和本地仓库的内容就不再一致了。")]),t._v(" "),_("p",[t._v("对于此情况，Git 希望你将它们重新『调整』成一致。")]),t._v(" "),_("p",[t._v("至于如何『调整』，有 2 种方案"),_("small",[t._v("（这也就是 Git 对你给出的 2 条二选一的建议）")]),t._v("：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("使用 "),_("code",[t._v("git add <file>...")]),t._v(" 命令（及后续的 "),_("code",[t._v("git commit")]),t._v(" 命令），将你对工作区的改动提交到本地仓库。这样，工作区和本地仓库将会重新一致。"),_("small",[t._v("这也就意味着，本地仓库的版本将向前演进。")])])]),t._v(" "),_("li",[_("p",[t._v("使用 "),_("code",[t._v("git checkout -- <file>...")]),t._v(" 命令用本地仓库"),_("small",[t._v("（的最新、最近版本）")]),t._v("的内容覆盖你的工作区的内容。这样，工作区和本地仓库将会重新一致。"),_("small",[t._v("这也就意味着，你的工作区的内容的变动将会被覆盖、舍弃。")])])])]),t._v(" "),_("p",[t._v("你在使用 Git 对你的文件夹、进行版本控制的整个使用过程中，你的工作区和本地仓库的状态的一致性的变化状态将是如下情况：")]),t._v(" "),_("p",[t._v("一致 > 不一致 > 重新一致 > 不一致 > 重新一致 > ... > 一致")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git_3.png",alt:"git_3"}})]),t._v(" "),_("h2",{attrs:{id:"取出历史版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#取出历史版本"}},[t._v("#")]),t._v(" 取出历史版本")]),t._v(" "),_("p",[t._v("从本地版本库中取出文件只需要一个指令：")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" 版本标识 "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 标签 "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件"),_("span",{pre:!0,attrs:{class:"token operator"}},[_("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(", "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件"),_("span",{pre:!0,attrs:{class:"token operator"}},[_("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(", "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),_("p",[t._v("需要特别提醒的是，磁盘文件夹中的文件会被取出的文件『"),_("strong",[t._v("覆盖")]),t._v("』"),_("small",[t._v("（覆盖、覆盖）")]),t._v("，因此你对该文件作出的修改会丢失。")]),t._v(" "),_("blockquote",[_("p",[t._v("例如，本地版本库中的文件是 80 行的，你本地的文件被你改成 100 行（但未提交），执行 git checkout 之后，你的本地文件会变成 80 行。")])]),t._v(" "),_("h2",{attrs:{id:"从-git-中删除文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从-git-中删除文件"}},[t._v("#")]),t._v(" 从 git 中删除文件")]),t._v(" "),_("p",[_("strong",[t._v("git rm")]),t._v(" 用于删除文件，删除行为分为『弱删除』和『强删除』。")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("git rm --cache")]),t._v(" 是『弱』删除。")]),t._v(" "),_("p",[t._v("它表示让 Git『"),_("strong",[t._v("不再监管")]),t._v("』某文件/文件夹，而该文件/文件夹在磁盘上『"),_("strong",[t._v("仍存在")]),t._v("』。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("git rm")]),t._v(" 是强删除")]),t._v(" "),_("p",[t._v("它表示告知 Git『"),_("strong",[t._v("不再监管")]),t._v("』某文件/文件夹的同时，还从硬盘上『"),_("strong",[t._v("删除")]),t._v("』此文件/文件夹。")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);