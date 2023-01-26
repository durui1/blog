(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{630:function(t,a,e){"use strict";e.r(a);var s=e(47),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spring-data-jpa-的基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-data-jpa-的基本使用"}},[t._v("#")]),t._v(" Spring Data JPA 的基本使用")]),t._v(" "),e("h2",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),e("h3",{attrs:{id:"jpa-由来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jpa-由来"}},[t._v("#")]),t._v(" JPA 由来")]),t._v(" "),e("blockquote",[e("p",[t._v("从理论上来说，Mybatis 和 Hibernate 并非同一类框架：Mybatis 是半自动 ORM 框架，而 Hibernate 是全自动的。")])]),t._v(" "),e("p",[t._v("而从全自动 ORM 框架的角度来将，Hibernate 也非唯一的一个，跟它同类的竞争对手还有：TopLink、JDO 等"),e("small",[t._v("（虽然市场占有率十分低）")]),t._v(" 。")]),t._v(" "),e("p",[t._v("不同的全自动 ORM 框架"),e("small",[t._v("（这里并不包括 Mybatis）")]),t._v("之间，功能是是相似的，但是 API 接口的区别十分大。不便于项目在底层技术实现之间迁移。")]),t._v(" "),e("p",[t._v("JPA（Java Persistence API）是 Sun 官方提出的 Java 持久化 "),e("strong",[t._v("规范")]),t._v("。它的出现主要是为了简化现有的持久化开发工作和整合 ORM 技术，提供统一的 API 接口，结束现在 Hibernate、TopLink、JDO 等 ORM 框架各自为营的局面。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("JPA 只是一套规范，不是一套产品。JPA 和 Hibernate、TopLink、JDO 之间的关系，就像 slf4j 和 log4j2、logback 之间的关系一样。")])]),t._v(" "),e("h3",{attrs:{id:"spring-data-jpa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-data-jpa"}},[t._v("#")]),t._v(" Spring Data JPA")]),t._v(" "),e("p",[t._v("一个项目直接"),e("small",[t._v("（或间接）")]),t._v("使用 Hibernate 有三种方式：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("直接使用 Hibernate。")])]),t._v(" "),e("li",[e("p",[t._v("直接使用 JPA，间接使用 Hibernate；")])]),t._v(" "),e("li",[e("p",[t._v("通过 "),e("strong",[t._v("spring-data-jpa")]),t._v("，将 JPA（和 Hibernate）整合进 Spring 项目，以一种特定的方式"),e("small",[t._v("（sprig data）")]),t._v("使用 JPA，从而间接使用 Hibernate 。")])])]),t._v(" "),e("p",[t._v("Spring Data JPA 是 Spring 基于 ORM 框架、JPA 规范的基础上封装的一套 JPA 应用框架。如果说，JPA 简化了 Hibernate 的使用，那么 spring-data-jpa 则是在这个基础上再一次简化了 hibernate，提高了开发效率。"),e("small",[t._v("Spring Data JPA 让我们摆脱了 DAO 层的操作，基本上所有 CRUD 都可以依赖于它实现。")])]),t._v(" "),e("p",[t._v("Spring Data JPA 其实就是要求在 Spirng Data 的体系下使用 JPA。"),e("small",[t._v("Spring Data JPA 只是 Spring Data 体系中的一员。")])]),t._v(" "),e("h2",{attrs:{id:"快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),e("h3",{attrs:{id:"添加依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[t._v("#")]),t._v(" 添加依赖")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-data-jpa"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql-connector-java"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"添加配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加配置文件"}},[t._v("#")]),t._v(" 添加配置文件")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.driver-class-name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("com.mysql.cj.jdbc.Driver")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://127.0.0.1:3306/scott\\\n    ?useUnicode=true\\\n    &characterEncoding=utf-8\\\n    &useSSL=true\\\n    &serverTimezone=UTC")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("root")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.jpa.show-sql")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.jpa.properties.hibernate.dialect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("org.hibernate.dialect.MySQL5Dialect")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.jpa.properties.hibernate.format_sql")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.jpa.properties.hibernate.hbm2ddl.auto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("update")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("logging.level.root")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("INFO")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("logging.level.xxx.yyy.zzz")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("DEBUG")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("logging.pattern.console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("${CONSOLE_LOG_PATTERN:\\\n  %clr(${LOG_LEVEL_PATTERN:%5p}) \\\n  %clr(|){faint} \\\n  %clr(%-40.40logger{39}){cyan} \\\n  %clr(:){faint} %m%n\\\n  ${LOG_EXCEPTION_CONVERSION_WORD:%wEx}}")]),t._v("\n")])])]),e("p",[e("strong",[e("code",[t._v("hibernate.hbm2ddl.auto")])]),t._v(" 参数的作用主要用于：自动创建、更新、验证数据库表结构，有四个值。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("create")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("每次启动项目都会删除上一次创建的 Table，再根据配置重新创建 Table 。"),e("small",[t._v("这种方式会导致数据库表数据丢失。")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("create-drop")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("本质上和 "),e("code",[t._v("create")]),t._v(" 一样，只不过是本次项目结束时就删除 Table 。"),e("small",[t._v("不用等到下次启动时再删除。")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[e("code",[t._v("update")])])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("small",[t._v("最常用。")]),t._v("会以 Model 类的配置为依据，在没有表时建表，在表中没有某列时，新增列。每次启动时都是如此。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("validate")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("每次加载 Hibernate 时，会以 Model 类的配置来验证数据库中的表结构，两者必须严格一直"),e("small",[t._v("（char 和 varchar 都算不一致）")]),t._v("。这个过程中不会创建、更新新表。如果不一致会报错。")])])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[e("code",[t._v("update")])]),t._v(" 对数据库表结构的『更新』仅限于：")]),t._v(" "),e("ul",[e("li",[t._v("根据 Model 创建一个原本不存在的 Table；")]),t._v(" "),e("li",[t._v("为已存在的 Table『新增』列。")])]),t._v(" "),e("p",[t._v("不包括")]),t._v(" "),e("ul",[e("li",[t._v("修改已有列的数据类型；")]),t._v(" "),e("li",[t._v("新增或修改已有列的约束条件；")]),t._v(" "),e("li",[t._v("删除 Table 的某列。")])])]),t._v(" "),e("h3",{attrs:{id:"开启-jpa-框架功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-jpa-框架功能"}},[t._v("#")]),t._v(" 开启 JPA 框架功能")]),t._v(" "),e("p",[t._v("在某个配置类（或入口类）上加上 "),e("em",[e("strong",[e("code",[t._v('@EnableJpaRepositories(basePackages = "xxx.yyy.zzz.dao")')])])]),t._v(" 注解。")]),t._v(" "),e("blockquote",[e("p",[t._v("经测试，这一步并非必须。不加时 Spring Boot 也会自动启动 JPA 框架功能。而且，默认会扫描入口类平级及下级包，看哪个类『脑袋』上有 "),e("em",[e("strong",[e("code",[t._v("@Repository")])])]),t._v(" 注解。")])]),t._v(" "),e("h3",{attrs:{id:"实体类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实体类"}},[t._v("#")]),t._v(" 实体类")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * DBMS   - catalog  - schema   - table\n * Mysql  - <no>     - database - table\n * Oracle - database - <no>     - table\n */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Table")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"表名"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"数据库名"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Department")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strategy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GenerationType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IDENTITY"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Column")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullable "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unique "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Column")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullable "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getter / settet ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[e("p",[t._v("由于默认配置的存在，上述示例省略了默写配置"),e("small",[t._v("（后续会讲解）")]),t._v("。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('@Entity(name="EntityName")')]),t._v(" "),e("strong",[t._v("必须")])]),t._v(" "),e("p",[t._v("用来标注一个数据库对应的实体，数据库中创建的表名默认和类名一致。其中，name 为可选，对应数据库中一个表，使用此注解标记 JavaBean 是一个 JPA 实体。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('@Table(name="", catalog="", schema="")')]),t._v(" "),e("em",[t._v("可选")])]),t._v(" "),e("p",[t._v("用来标注一个数据库对应的实体，数据库中创建的表名默认和类名一致。通常和 "),e("code",[t._v("@Entity")]),t._v(" 配合使用，只能标注在实体的 class 定义处，表示实体对应的数据库表的信息。")]),t._v(" "),e("p",[t._v("在数据库理论领域中，DBMS - Catalog - Schema - Table 是四级概念，但不是所有的数据库系统都支持这四级。MySql 就不支持其中的 catalog ，而 schema 就是 mysql 中的 database 。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("@Id")]),t._v(" "),e("strong",[t._v("必须")])]),t._v(" "),e("p",[e("code",[t._v("@Id")]),t._v(" 定义了映射到数据库表的主键的属性，一个实体只能有一个属性被映射为主键。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('@GeneratedValue(strategy=GenerationType, generator="")')]),t._v(" "),e("em",[t._v("可选")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("strategy")]),t._v("：表示主键生成策略,有 "),e("code",[t._v("AUTO")]),t._v("、"),e("code",[t._v("INDENTITY")]),t._v("、"),e("code",[t._v("SEQUENCE")]),t._v(" 和 "),e("code",[t._v("TABLE")]),t._v(" 4 种。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("generator")]),t._v("：表示主键生成器的名称。")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v('@Column(name="user_code", nullable=false, length=32)')]),t._v(" "),e("em",[t._v("可选")])]),t._v(" "),e("p",[e("code",[t._v("@Column")]),t._v(" 描述了数据库表中该字段的详细定义，这对于根据 JPA 注解生成数据库表结构的工具。")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("name")]),t._v("：表示数据库表中该字段的名称，默认情形属性名称一致;")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("nullable")]),t._v("：表示该字段是否允许为 null，默认为 true;")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("unique")]),t._v("：表示该字段是否是唯一标识，默认为 false;")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("length")]),t._v("：表示该字段的大小，仅对 String 类型的字段有效。")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("@Transient")]),t._v(" "),e("em",[t._v("可选")])]),t._v(" "),e("p",[e("code",[t._v("@Transient")]),t._v(" 表示该属性并非一个到数据库表的字段的映射，ORM 框架将忽略该属性。")])])]),t._v(" "),e("blockquote",[e("p",[t._v("另外，"),e("em",[t._v("@Enumerated")]),t._v(" 和 "),e("em",[t._v("@Enumerated")]),t._v(" 注解在某些场景下可能也会用到。")])]),t._v(" "),e("p",[t._v("这些标注于属性上的注解，也可以标注在属性的 get 方法上。注意，不是/不用标注在 set 方法上。")]),t._v(" "),e("h2",{attrs:{id:"uuid-和-assigned-主键策略-了解、自学"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uuid-和-assigned-主键策略-了解、自学"}},[t._v("#")]),t._v(" UUID 和 ASSIGNED 主键策略（了解、自学）")]),t._v(" "),e("p",[t._v("通常 JPA『背后』是 Hibernate，而 Hibernate 除了和上述的一样的 "),e("strong",[e("code",[t._v("identity")])]),t._v("、"),e("strong",[e("code",[t._v("sequence")])]),t._v(" 主键生成策略之外，还有 "),e("strong",[e("code",[t._v("uuid")])]),t._v(" 和 "),e("strong",[e("code",[t._v("assigend")])]),t._v(" 两种主键生成策略。")]),t._v(" "),e("p",[t._v("在 JPA 中使用 Hibernate 的 "),e("strong",[e("code",[t._v("uuid")])]),t._v(" 和 "),e("strong",[e("code",[t._v("assigend")])]),t._v(" 策略，需要【多】使用一个注解：***"),e("code",[t._v("@GenericGenerator")]),t._v("*** 。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v('strategy = "uuid"：')]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("generator "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GenericGenerator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strategy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uuid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v('strategy = "assigend"：')]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("generator "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GenericGenerator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyy"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strategy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assigned"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"repository-构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repository-构建"}},[t._v("#")]),t._v(" Repository 构建")]),t._v(" "),e("blockquote",[e("p",[t._v("提前声明一点，如果要在 JUnit 中测试 Repository，记得使用 "),e("strong",[e("code",[t._v("@Transactionl")])]),t._v(" 注解。否则会报错：no session 。")])]),t._v(" "),e("p",[t._v("自定义的 "),e("em",[e("strong",[e("code",[t._v("Repository")])])]),t._v(" 只要继承 "),e("em",[e("strong",[e("code",[t._v("JpaRepository")])])]),t._v(" 即可，就会帮我们自动生成很多内置方法。这是 spring-data-jpa 为我们带来的便利！")]),t._v(" "),e("p",[t._v("父接口 JpaRepository 要求传入两个泛型参数：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("第一个泛型参数是自定义的 Repository 所操作的 "),e("em",[e("code",[t._v("@Entity")])]),t._v(" ；")])]),t._v(" "),e("li",[e("p",[t._v("第二个泛型参数是 Entity 的 "),e("em",[e("code",[t._v("@Id")])]),t._v(" 属性类型。")])])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserRepository")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JpaRepository")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://hemiao3000.gitee.io/java-note-img/images/spring-boot/img/spring-boot-data-jpa-JpaRepository.png",alt:"JpaRepository"}})]),t._v(" "),e("p",[e("em",[e("strong",[e("code",[t._v("JpaRepository")])])]),t._v(" 继承 PagingAndSortingRepository 和 QueryByExampleExecutor。PagingAndSortingRepository 又继承了 CrudRepository 。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("祖先")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("CrudRepository")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("内置了我们最常用的增、删、改、查的方法。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("PagingAndSortingRepository")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在 CrudRepository 基础上负责排序和分⻚")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("QueryByExampleExecutor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("提供了很多示例的查询方法。")])])])]),t._v(" "),e("p",[t._v("因此使用 JPA 操作数据库时，只需要构建的 Repository 继承了 ***"),e("code",[t._v("JpaRepository")]),t._v("***，就会拥有了很多常用的数据库操作方法。常用的方法有：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("增/改")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("repository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("添加和修改功能都是使用 "),e("em",[e("code",[t._v(".save()")])]),t._v(" 方法。")]),t._v(" "),e("p",[t._v("有一点需要注意的是，对于修改而言，要先执行查询，再对查询到的 Entity 进行修改，而后再调用 "),e("em",[e("code",[t._v(".save()")])]),t._v(" 方法。")])]),t._v(" "),e("li",[e("p",[t._v("删")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("repository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrepository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("删除常见两种：先执行查询，再对查询到的 Entity 调用 "),e("em",[e("code",[t._v(".delete")])]),t._v(" 方法进行删除；另一种是直接提供 Entity 的 ID 进行删除。")])]),t._v(" "),e("li",[e("p",[t._v("查")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("repository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOne")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrepository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrepository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("em",[e("code",[t._v(".getOne()")])]),t._v(" 和 "),e("em",[e("code",[t._v("findById()")])]),t._v(" 都是根据 ID 进行查询。区别在于：查不到时，"),e("em",[e("code",[t._v(".getOne()")])]),t._v(" 抛出 "),e("em",[e("strong",[e("code",[t._v("EntityNotFoundException")])])]),t._v(" 异常，而 "),e("em",[e("code",[t._v(".findById()")])]),t._v(" 查不查得到都是返回 "),e("em",[e("strong",[e("code",[t._v("Optional<>")])])]),t._v(" 。")]),t._v(" "),e("p",[t._v("补充一点，在 Repository 的继承体系中 QueryByExampleExecutor 提供了通过 Example 对象进行条件查询。不过，它用起来还是相对比较繁琐，因此，通常使用的是其它方案来实现各种条件查询。这也是 spring-data-jpa 对 JPA 的改进之处。")])])]),t._v(" "),e("h2",{attrs:{id:"自定义简单的条件查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义简单的条件查询"}},[t._v("#")]),t._v(" 自定义简单的条件查询")]),t._v(" "),e("p",[t._v("spring-data-jap 还有一个功能非常实用：可以根据方法名自动生产 SQL。比如 "),e("em",[e("code",[t._v(".findByUserName()")])]),t._v(" 会自动生产一个以 "),e("code",[t._v("userName")]),t._v(" 为参数的查询方法。只需要在我们自定义的 Repository 中创建好方法，使用的时候直接将接口注入到类中调用即可。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("根据用户名查询用户：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByUserName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("也可以加一些关键字 And、or：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByUserNameOrEmail")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username， "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("修改、删除、统计也是类似语法：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteByUserName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("countByUserName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("基本上 SQL 体系中的关键词都可以使用，如 LIKE 、IgnoreCase、OrderBy：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByEmailLike")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByUserNameIgnoreCase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByUserNameOrderByEmailDesc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),e("p",[t._v("可以根据查询的条件不断地添加和拼接，Spring Boot 都可以正确解析和执行，其他使用示例例可以参考下表。")]),t._v(" "),e("p",[e("strong",[t._v("具体的关键字，使用方法和生产成 SQL 如下表所示")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Keyword")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Sample")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("JPQL snippet")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("And")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByLastnameAndFirstname")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.lastname = ?1 and x.firstname  = ?2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Or")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByLastnameOrFirstname")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.lastname = ?1 or x.firstname = ?2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Is, Equals")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameIs, "),e("br"),t._v("findByFirstnameEquals")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.firstname = ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Between")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByStartDateBetween")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.startDate between ?1 and ?2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("LessThan")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeLessThan")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age < ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("LessThanEqual")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeLessThanEqual")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age <= ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GreaterThan")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeGreaterThan")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age > ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("GreaterThanEqual")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeGreaterThanEqual")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age >= ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("After")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByStartDateAfter")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.startDate > ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Before")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByStartDateBefore")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.startDate < ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("IsNull")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeIsNull")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age is null")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("IsNotNull, NotNull")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAge(Is)NotNull")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age not null")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Like")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameLike")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.firstname like ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NotLike")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameNotLike")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.firstname not like ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("StartingWith")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameStartingWith")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.firstname like ?1 (parameter bound with appended %)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EndingWith")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameEndingWith")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.firstname like ?1 (parameter bound with prepended %)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Containing")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameContaining")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.firstname like ?1 (parameter bound wrapped in %)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("OrderBy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeOrderByLastnameDesc")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age = ?1 order by x.lastname desc")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Not")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByLastnameNot")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.lastname <> ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("In")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeIn(Collection ages)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age in ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NotIn")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByAgeNotIn(Collection age)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.age not in ?1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("TRUE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByActiveTrue()")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.active = true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("FALSE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByActiveFalse()")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where x.active = false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("IgnoreCase")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("findByFirstnameIgnoreCase")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("… where UPPER(x.firstame) = UPPER(?1)")])])])]),t._v(" "),e("p",[t._v("『The End』")])])}),[],!1,null,null,null);a.default=n.exports}}]);