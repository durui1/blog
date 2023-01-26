(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{579:function(t,s,a){"use strict";a.r(s);var v=a(47),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),a("h2",{attrs:{id:"事务的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的概念"}},[t._v("#")]),t._v(" 事务的概念")]),t._v(" "),a("p",[a("strong",[t._v("InnoDB")]),t._v(" 支持事务机制，而 MyISAM 不支持，这就是 InnoDB 更常见、更常用的原因。")]),t._v(" "),a("p",[t._v("『事务』（Transaction）是一系列（多条）相关 SQL 语句组成的最小的逻辑工作单元，即，不允许存在一部分执行成功，一部分执行不成功的情况。")]),t._v(" "),a("p",[t._v("最典型的例子是两个银行账户的转账，不允许存在一个账户上已经扣了钱，但另一个账户新增不成功的情况。")]),t._v(" "),a("p",[t._v("MySQL 使用 "),a("strong",[t._v("START TRANSACTION")]),t._v(" 来标识一个事务的开始。")]),t._v(" "),a("h2",{attrs:{id:"事务的提交和回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的提交和回滚"}},[t._v("#")]),t._v(" 事务的提交和回滚")]),t._v(" "),a("p",[t._v("要永久性地记录事务中 SQL 语句的结果，需要执行 "),a("strong",[t._v("COMMIT")]),t._v(" 语句，从而提交事务。")]),t._v(" "),a("p",[t._v("要取消 SQL 语句的结果，需要执行 "),a("strong",[t._v("ROLLBACK")]),t._v(" 语句，从而回滚事务，将所有行重新设置为原始状态。")]),t._v(" "),a("blockquote",[a("p",[t._v("简而言之，COMMIT 就是确认你刚才所执行的 SQL 语句，而 ROLLBACK 就是撤销你刚才所执行的 SQL 语句。")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" dept "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SOFTEWARE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BEI JING'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("START")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" dept "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" loc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SHANG HI'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("需要注意的是：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("事务用来管理 "),a("strong",[t._v("INSERT")]),t._v("、"),a("strong",[t._v("UPDATE")]),t._v(" 和 "),a("strong",[t._v("DELETE")]),t._v(" 语句。")]),t._v(" "),a("li",[t._v("你不能回退 "),a("strong",[t._v("SELECT")]),t._v(" 语句（这样做也没有意义，因为 SELECT 语句未对数据库造成变化）。")]),t._v(" "),a("li",[a("strong",[t._v("CREATE")]),t._v(" 和 "),a("strong",[t._v("DROP")]),t._v(" 操作即便是回退，也不会被撤销。")])])]),t._v(" "),a("h2",{attrs:{id:"事务的开始与结束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的开始与结束"}},[t._v("#")]),t._v(" 事务的开始与结束")]),t._v(" "),a("p",[t._v("事务既有起点，也有终点。一个事务以 "),a("code",[t._v("START TRANSACTION;")]),t._v(" 开始，以 "),a("code",[t._v("COMMIT;")]),t._v(" 或 "),a("code",[t._v("ROLLBACK;")]),t._v(" 结束。")]),t._v(" "),a("p",[t._v("默认 MySQL 启用了自动提交机制，即 MySQL 会『帮』你在每一条单独的 SQL 语句前后加上 "),a("code",[t._v("START TRANSACTION;")]),t._v(" 和 "),a("code",[t._v("COMMIT;")]),t._v(" 。")]),t._v(" "),a("p",[t._v("自动提交的优缺点十分分明，有点在于"),a("em",[t._v("无需你人为说明事务的开始和结束")]),t._v("，但你"),a("em",[t._v("无法将两条（或多条）SQL语句放入同一个事务中")]),t._v(" 。")]),t._v(" "),a("p",[t._v("取消 MySQL 的的自动提交功能使用命令："),a("code",[t._v("SET autocommit = off;")]),t._v(" 或者是  "),a("code",[t._v("SET autocommit = 0;")])]),t._v(" "),a("p",[t._v("另外，如果在事务正在执行过程中（即事务还未提交），因为外界客观因素导致事务的结束（如断电、硬盘损坏等），事务会自动回滚。")]),t._v(" "),a("h2",{attrs:{id:"事务的-acid-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的-acid-特性"}},[t._v("#")]),t._v(" 事务的 ACID 特性")]),t._v(" "),a("p",[t._v("数据库理论对事务采用了更严格的定义，说明事务有 4 个基本特性，称为 ACID 特性。")]),t._v(" "),a("ul",[a("li",[t._v("原子性（Atomic）：事务是原子的，事务中所包含的 SQL 语句都是一个不可分割的工作单元。")]),t._v(" "),a("li",[t._v("一致性（Consist）：事务必须确保数据库的数据库的状态保持一致，在事务开始时，数据库的状态时一致的；在事务结束时，数据库状态也必须是一致的。")]),t._v(" "),a("li",[t._v("隔离性（Isolated）：多个事务可以独立运行，而不会彼此影响。")]),t._v(" "),a("li",[t._v("持久性（Durable）：一旦事务被提交之后，数据库的变化就会被永久保存下来。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);