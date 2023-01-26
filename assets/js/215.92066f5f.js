(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{581:function(v,_,o){"use strict";o.r(_);var l=o(47),d=Object(l.a)({},(function(){var v=this,_=v.$createElement,o=v._self._c||_;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"undo-log-和-redo-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#undo-log-和-redo-log"}},[v._v("#")]),v._v(" undo-log 和 redo-log")]),v._v(" "),o("p",[v._v("在数据库系统"),o("small",[v._v("（DBMS）")]),v._v("中，磁盘上除了有存放数据的文件之外，还有存放日志的文件。通常"),o("small",[v._v("（从优化的角度）")]),v._v("，数据库的日志信息都是先存储在内存的缓存中，随后再异步地存储到磁盘上。")]),v._v(" "),o("p",[v._v("MySQL 中的日志文件，有 2 种与『事务』有关："),o("strong",[v._v("undo")]),v._v(" 日志和 "),o("strong",[v._v("redo")]),v._v(" 日志。"),o("small",[v._v("也称为，undo-log 和 redo-log 。")])]),v._v(" "),o("h2",{attrs:{id:"undo-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#undo-log"}},[v._v("#")]),v._v(" undo log")]),v._v(" "),o("p",[v._v("在对数据库执行增删改操作前，MySQL 会将变动前的数据"),o("small",[v._v("（即原始数据）")]),v._v("先备份到 undo log，然后再进行数据库。这样，未来在出错需要回滚的时候，就可以利用 undo log 中备份的数据进行数据的回滚。")]),v._v(" "),o("p",[v._v("在 undo log 的参与下，数据库的操作流程如下：")]),v._v(" "),o("ol",[o("li",[v._v("事务开始；")]),v._v(" "),o("li",[v._v("记录 "),o("code",[v._v("A=100")]),v._v(" 到 undo log"),o("small",[v._v("（内存缓存中）")])]),v._v(" "),o("li",[v._v("修改 "),o("code",[v._v("A=200")]),o("small",[v._v("（内存中）")])]),v._v(" "),o("li",[v._v("将 undo log 写入到磁盘")]),v._v(" "),o("li",[v._v("将 "),o("code",[v._v("A=200")]),v._v(" 写入到磁盘")]),v._v(" "),o("li",[v._v("提交事务")])]),v._v(" "),o("p",[o("strong",[v._v("undo log 的存在保证了事务的一致性。")])]),v._v(" "),o("ul",[o("li",[v._v("如果包括 "),o("code",[v._v("4")]),v._v(" 在内的之前的操作执行失败，整个事务算执行失败，并且对 MySQL 的并没有影响，因为截止目前为止的改动都是记录在内存中的，并未影响到磁盘。")]),v._v(" "),o("li",[v._v("如果 "),o("code",[v._v("5")]),v._v(" 或 "),o("code",[v._v("6")]),v._v(" 执行失败，MySQL 会利用 "),o("code",[v._v("4")]),v._v(" 中存盘的 undo log 进行数据恢复。")])]),v._v(" "),o("h2",{attrs:{id:"redo-log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#redo-log"}},[v._v("#")]),v._v(" redo log")]),v._v(" "),o("p",[v._v("redo log 和 undo log 相反，redo log 中记录的是经过你变动之后的数据。")]),v._v(" "),o("p",[v._v("在 redo log 的参与下，数据库的操作流程如下：")]),v._v(" "),o("ol",[o("li",[v._v("事务开始：")]),v._v(" "),o("li",[v._v("记录 "),o("code",[v._v("A=100")]),v._v(" 到 undo log"),o("small",[v._v("（内存缓存中）")])]),v._v(" "),o("li",[v._v("修改 "),o("code",[v._v("A=200")]),o("small",[v._v("（内存中）")])]),v._v(" "),o("li",[v._v("记录 "),o("code",[v._v("A=200")]),v._v(" 到 redo log"),o("small",[v._v("（内存缓存中）")])]),v._v(" "),o("li",[v._v("将 undo log 写入到磁盘")]),v._v(" "),o("li",[v._v("将 redo log 写入到磁盘")]),v._v(" "),o("li",[o("del",[v._v("将 "),o("code",[v._v("A=200")]),v._v(" 写入到磁盘")])]),v._v(" "),o("li",[v._v("提交事务")])]),v._v(" "),o("p",[v._v("虽然逻辑上本应该有 "),o("code",[v._v("6")]),v._v(" 这一步操作，但是从优化的角度考虑，MySQL 把这一步给省略掉了。原因在于：")]),v._v(" "),o("ul",[o("li",[v._v("MySQL 是用异步地方式将内存中的新数据（"),o("code",[v._v("A=200")]),v._v("）存储到磁盘的，因此，A=200 的数据的存盘反而是在 "),o("code",[v._v("7")]),v._v(" 执行之后。")]),v._v(" "),o("li",[v._v("由于 redo log 的存在，实际上，在执行 "),o("code",[v._v("5")]),v._v(" 之后，磁盘上已经持久化了新数据了。所以，未来，MySQL 从磁盘上的 redo log 中取新数据即可。")])])])}),[],!1,null,null,null);_.default=d.exports}}]);