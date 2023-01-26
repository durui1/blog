(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{443:function(e,a,t){"use strict";t.r(a);var s=t(47),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"分支-高级操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支-高级操作"}},[e._v("#")]),e._v(" 分支：高级操作")]),e._v(" "),t("h2",{attrs:{id:"merge-和-rebase-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-和-rebase-的区别"}},[e._v("#")]),e._v(" merge 和 rebase 的区别")]),e._v(" "),t("p",[e._v("假设我们有两个分支"),t("small",[e._v("（master 和 feature）")]),e._v("。feature 是基于 master 的 C1 节点建立的分支，然后开发人员分别在两个分支各自开发：")]),e._v(" "),t("blockquote",[t("p",[e._v("这里的箭头方向表示的是依赖关系，即，指向的是上一个版本。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git-rebase-1.png",alt:"git-rebase-1"}})]),e._v(" "),t("h3",{attrs:{id:"merge-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge-命令"}},[e._v("#")]),e._v(" merge 命令")]),e._v(" "),t("p",[e._v("现在我们想要把 feature 分支开发的内容合并到 master，使用 merge 命令：")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge feature\n")])])]),t("blockquote",[t("p",[e._v("merge 命令的使用是【站在 master 分支】的角度上来看，将 feature 分支的内容【纳入】到 master 分支。master 分支会演进出一个新的版本。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git-rebase-2.png",alt:"git-rebase-2"}})]),e._v(" "),t("p",[e._v("从整体来看，merge 命令执行之后，会在之前的相关的 3 个版本节点之外生成一个新的节点 "),t("sub",[e._v("这个新节点将会是 master 线路上的最新的“终点”")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"rebase-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase-命令"}},[e._v("#")]),e._v(" rebase 命令")]),e._v(" "),t("p",[e._v("对于同样的初始情况，如果我们使用 rebase 命令会有什么不同。")]),e._v(" "),t("p",[e._v("rebase 命令有两种使用方式：")]),e._v(" "),t("h3",{attrs:{id:"rebase-命令的第一种用法-标准-错误-用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase-命令的第一种用法-标准-错误-用法"}},[e._v("#")]),e._v(" rebase 命令的第一种用法"),t("sub",[e._v("（标准“错误”用法）")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase feature\n")])])]),t("p",[t("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git-rebase-3.png",alt:"git-rebase-3"}})]),e._v(" "),t("p",[e._v("Git 把 "),t("code",[e._v("C2")]),e._v(" 备份成 "),t("code",[e._v("C2'")]),e._v("，删除 "),t("code",[e._v("C2")]),e._v("，然后把 "),t("code",[e._v("C2'")]),e._v(" 追加到 "),t("code",[e._v("C3")]),e._v(" 后面，把 master 指向 "),t("code",[e._v("C2'")]),e._v(" 。")]),e._v(" "),t("p",[e._v("我们之所以说这种用法是“"),t("strong",[e._v("错误")]),e._v("”的用法是因为：")]),e._v(" "),t("p",[e._v("C2 版本节点作为 master 分支上的节点，其中包含了你的“同事”先于你提交的代码，一旦 rebase 之后，在时间线上却出现了你的代码会“早于”你同事的代码的情况。这在你最终将本地仓库 push 到远程仓库时，会引起麻烦。"),t("sub",[e._v("虽然我们有办法解决掉这个麻烦，但终归是要额外地多付出时间精力。而且，越多的人这样时候，你的“额外付出”会成倍地增加。")])]),e._v(" "),t("p",[e._v("这种 rebase 用法只在一种情况下可用：整个项目只有你一个人开发，即，你没有同事。那么，这个时间线的混乱问题虽然看起来有问题，但是不会影响到你的项目的推进。")]),e._v(" "),t("h3",{attrs:{id:"rebase-命令的第二种用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase-命令的第二种用法"}},[e._v("#")]),e._v(" rebase 命令的第二种用法")]),e._v(" "),t("p",[e._v("rebase 命令的第二种用法实际上就是第一种用法的改进版，以避免出现时间线混乱问题。这种用法需要和 merge 结合使用。")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout feature\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase master\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge feature\n")])])]),t("p",[e._v("第一步操作 rebase 之后的效果图如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git-rebase-4.png",alt:"git-rebase-4"}})]),e._v(" "),t("p",[e._v("第二步操作 merge 之后的效果图如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git-rebase-5.png",alt:"git-rebase-5"}})]),e._v(" "),t("p",[e._v("这种 rebase 的用法中，合并之后的时间线里逻辑就是正确的。")]),e._v(" "),t("blockquote",[t("p",[e._v("feature rebase on master，master merge feature")])]),e._v(" "),t("h3",{attrs:{id:"带-rebase-参数同步分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#带-rebase-参数同步分支"}},[e._v("#")]),e._v(" 带 rebase 参数同步分支")]),e._v(" "),t("p",[e._v("当多个人同时在同一个分支上开发时，为了保证这个分支有一个清晰的时间线，我们在使用 git pull 命令时要带上 rebase 参数："),t("code",[e._v("git pull --rebase")]),e._v(" 。")]),e._v(" "),t("blockquote",[t("p",[e._v("具体细节此处不展开，因为工作中会尽量避免多个人在同一个分支上工作。")])]),e._v(" "),t("h2",{attrs:{id:"合并提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并提交"}},[e._v("#")]),e._v(" 合并提交")]),e._v(" "),t("p",[e._v("有时你以为你的有一次提交完成了所有工作，但是最后的结果却是你随后陆陆续续还要再补充几次提交才算是完成了原计划的一项任务。")]),e._v(" "),t("p",[e._v("这种情况下，你在 Git 的提交记录中将留下多个历史版本。而实际上，这多个版本并无存在的必要，逻辑上，只需要有一个就行了。")]),e._v(" "),t("p",[e._v("理想情况下，你可以用 "),t("strong",[t("code",[e._v("rebase")])]),e._v(" 命令把多个 Commit 压缩成一个。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git rebase -i HEAD~<N>\n")])])]),t("p",[e._v("例如，如果你想要压缩最后两个 Commit：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git rebase -i HEAD~3\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),t("p",[e._v("这里有 "),t("code",[e._v("[HEAD, HEAD~3)")]),e._v(" 左开右闭的含义，因此，合并最后 "),t("code",[e._v("2")]),e._v(" 个 Commit，出现的数字是 "),t("code",[e._v("3")]),e._v(" 而不是 "),t("code",[e._v("2")]),e._v(" 。")])]),e._v(" "),t("p",[e._v("当你执行完这个命令后，合并工作并没完，你看到的是一个交互式"),t("small",[e._v("（interactive ）")]),e._v("界面，例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('pick 16a9a47 update3 \npick a7186d8 update2\npick 7b16b28 update1\n\n Rebase a9269a3..7b16b28 onto a9269a3 (3 commands)\n\n Commands:\n p, pick = use commit\n r, reword = use commit, but edit the commit message\n e, edit = use commit, but stop for amending\n s, squash = use commit, but meld into previous commit\n f, fixup = like "squash", but discard this commit\'s log message\n x, exec = run command (the rest of the line) using shell\n d, drop = remove commit\n\n...\n')])])]),t("p",[e._v("在这里，Git 需要我们手动对这 3 个 Commit 进行设置。我们需要关注的状态是 "),t("code",[e._v("Squash")]),e._v(" 和 "),t("code",[e._v("Reword")]),e._v(" 。我们要将这 3 个 Commit 调整成如下状态：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("squash 16a9a47 update3 \nsquash a7186d8 update2\nreword 7b16b28 update1\n")])])]),t("p",[e._v("这样，最近的 2 次 Commit（HEAD、HEAD~1）将合并到 HEAD~2 中，并且它们两个的 message 将会被合并到 HEAD~2 的 message 中。")]),e._v(" "),t("p",[e._v("『完』")])])}),[],!1,null,null,null);a.default=r.exports}}]);