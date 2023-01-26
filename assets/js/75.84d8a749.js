(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{441:function(t,s,e){"use strict";e.r(s);var n=e(47),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"分支-合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支-合并分支"}},[t._v("#")]),t._v(" 分支：合并分支")]),t._v(" "),e("p",[t._v("分支是 Git 的『拳头』特性，使用 "),e("strong",[t._v("git merge")]),t._v(" 命令进行分支合并是 Git 中最重要也是最常见的操作之一。")]),t._v(" "),e("blockquote",[e("p",[t._v("相较于 Git，在 Subversion 中创建分支的代价比较大，会占用更多的空间，且创建、删除过程时间比较长。")])]),t._v(" "),e("p",[t._v("在大多数情况下，项目的分支都会被合并到主要分支。合并项目分支需要使用 "),e("strong",[t._v("git merge")]),t._v(" 命令：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("另一个分支名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[e("strong",[t._v("该命令会把『另一个分支』合并到当前分支，合并后的 Commit 属于当前分支。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/git/img/git_merge_1.png",alt:"git_merge_1"}})]),t._v(" "),e("blockquote",[e("p",[t._v("如果合并后想反悔，那么可以执行之前所学的 "),e("code",[t._v("git reset --soft HEAD~1")]),t._v("，回到提交前夜，然后放弃提交。")])]),t._v(" "),e("p",[t._v("分支合并后，在当前分支上会产生一个新的 Commit 节点，也就是新的 HEAD 。这个节点与其他节点不同的是，它有两个父节点，分别表示为："),e("code",[t._v("HEAD^1")]),e("small",[t._v("（父节点）")]),t._v(" 和 "),e("code",[t._v("HEAD^2")]),e("small",[t._v("（母节点）")]),t._v(" 。")]),t._v(" "),e("p",[t._v("Git 的设计目标之一就是为了能够让开发者之间的分布式协作变得尽可能容易一些。因此从很大程度上来说，merge 命令能自动对分支进行合并，完全不需要用户交互。")]),t._v(" "),e("p",[t._v("不过，有时候文件的冲突无法被 Git 自动化解决：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("编辑冲突：两个开发者对『"),e("strong",[t._v("同一行")]),t._v("』代码做了不同修改的时候。")])]),t._v(" "),e("li",[e("p",[t._v("内容冲突：两个开发者对同一份代码的『"),e("strong",[t._v("不同部分")]),t._v("』作出各自修改的时候。")])])]),t._v(" "),e("blockquote",[e("p",[t._v("当 Git 遇到了自身无法解决的冲突时，就会显示以下错误信息。")]),t._v(" "),e("p",[t._v("$ git merge a-branch\nAuto-merging foo.txt\nCONFLICT (content): Merge conflict in foo.txt\nAutomatic merge failed; fix conflicts and then commit the result.")])]),t._v(" "),e("p",[t._v("此时，如果执行 "),e("strong",[t._v("git status")]),t._v(" 命令，会看到 git 提醒你，它无法完成自动合并，需要你手动进行编辑，并且要求你在编辑之后，执行 "),e("strong",[t._v("git commit")]),t._v(" 。")]),t._v(" "),e("p",[t._v("如果配置了 "),e("strong",[t._v("git mergetool")]),t._v(" 那么，在 Git 告知你合并冲突后，通过 "),e("strong",[t._v("git mergetool")]),t._v(" 命令启动 Merge Tool，来进行图形化界面的操作。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\nOn branch master\nYou have unmerged paths.\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fix conflicts and run "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nUnmerged paths:\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to mark resolution"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \nboth modified:   foo.txt\n \nno changes added to commit "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v(" and/or "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git commit -a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("冲突标志通常会描述两组修改。首先这些被修改的行在当前分支（HEAD）中的内容。接下来又列出了他们在另外一个分支的内容，例如：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("第一次修改\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n第二次修改\n=======\n在a-branch上进行的修改\n>>>>>>> a-branch\n")])])]),e("p",[t._v("手动解决完冲突以后，运行 "),e("strong",[t._v("git add")]),t._v(" 命令把相关文件添加到暂存区。继续执行 "),e("strong",[t._v("git merge --continue")]),t._v(" 命令编辑新生成的提交的 log 信息。然后 merge 完成。")]),t._v(" "),e("p",[t._v("在合并过程中，一个分支是另一个分支的祖先是很常见的，在这种情况下，Git 就只需要将分支指针前移即可，无需去创建合并提交。这被称为快速合并："),e("strong",[t._v("--no-ff")]),t._v(" 。")])])}),[],!1,null,null,null);s.default=a.exports}}]);