(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{590:function(t,s,a){"use strict";a.r(s);var e=a(47),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jwt-json-web-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-json-web-token"}},[t._v("#")]),t._v(" JWT（JSON Web Token）")]),t._v(" "),a("p",[t._v("JWT"),a("small",[t._v("（Json web token）")]),t._v("，是为了在网络应用环境声明而执行的一种基于 JSON 的开放标准。")]),t._v(" "),a("h2",{attrs:{id:"_1-session-的弊病和-jwt-的起源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-session-的弊病和-jwt-的起源"}},[t._v("#")]),t._v(" 1. Session 的弊病和 JWT 的起源")]),t._v(" "),a("p",[t._v("『"),a("strong",[t._v("http 协议本身是无状态的协议")]),t._v("』这是所有问题的起点和关键。在这个前提下，服务器为了弄明白『"),a("strong",[t._v("这次请求和上次请求是不是同一个人/客户端发来的？")]),t._v("』，在第一次发起请求时，服务器"),a("small",[t._v("（Tomcat）")]),t._v("会创建一个 Session 对象，以表示有人/客户端开始了一次会话，并将这个 Session 对象对应的 id"),a("small",[t._v("（SessionID）")]),t._v("返回给客户端浏览器。在后续的请求中，客户端再发出的请求都需要携带这个 SessionID，以表示当前请求和之前的请求是在同一个会话中。")]),t._v(" "),a("p",[t._v("传统的 Seesion 认证存在的问题：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("用户请求规模大之后增加服务器内存开销；")])]),t._v(" "),a("li",[a("p",[t._v("不利于服务端搭建集群。")])])]),t._v(" "),a("p",[t._v("当然，可以有一些其他的方案"),a("small",[t._v("（比如使用 Redis 实现 Session 共享）")]),t._v("来解决上述 Session 的两个问题，但是 JWT 则是完全提供了另一种不同的思路：『"),a("strong",[t._v("服务端不负责存储用户信息")]),t._v("』。")]),t._v(" "),a("p",[t._v("JWT 的认证流程：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("客户端发送用户名和密码至服务端进行认证；")])]),t._v(" "),a("li",[a("p",[t._v("服务端认证通过后，生成一个具有唯一性标识的字符串：Token；")])]),t._v(" "),a("li",[a("p",[t._v("服务端将 Token 发还给客户端，客户端后续的请求都需要带上这个 Token；")])]),t._v(" "),a("li",[a("p",[t._v("服务端再次收到客户端请求时，认证这个 Token 是否是自己"),a("small",[t._v("（服务端）")]),t._v("当初生成且未经篡改过的。如果没毛病，那么就认为该用户曾经通过了登陆认证的，本次请求该干嘛干嘛。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("JWT 和 SessionID 相比表面上看起来好像并没有多大区别，以前服务端回传的是叫 SessionID 的字符串，现在回传的是叫 Token 的字符串，但是它代表着『保存用户信息』这个责任从后端转移到了前端。")]),t._v(" "),a("p",[t._v("另外，相较于 SessionID 这样的纯 ID 字符串，JWT 的 Token 中多多少少还是能携带一些数据的。")])]),t._v(" "),a("h2",{attrs:{id:"_2-jwt-的组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jwt-的组成"}},[t._v("#")]),t._v(" 2. JWT 的组成")]),t._v(" "),a("p",[t._v("一个 JWT 实际上就是一个字符串，它由三部分组成：头部、荷载 与 签名。")]),t._v(" "),a("p",[t._v("这个 JWT 的标准形式为『"),a("strong",[t._v("头部.荷载.签名")]),t._v("』。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b20iLCJleHAiOjE1NjY5MjA4MzIsImlhdCI6MTU2NjkxNzIzMiwianRpIjoiMGM4ODRhNzAtOTdkNy00MTczLTgyYzItMTcyNzA2ZmMyZDU4In0.IKO9rBpLz-u2m2gA1S2gR-8CFn1Z1qs-AZvW55A1SoY\n")])])]),a("p",[t._v("需要说明的有 2 点：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("JWT 的头部和荷载部分的内容是 JSON，在 JWT 中对于 JSON 的属性"),a("small",[t._v("（键值对）")]),t._v("有一个专门的称呼：Claim 。")])]),t._v(" "),a("li",[a("p",[t._v("JWT 是有一套规范的，在规范中定义了一些常见的 Claim 的名称，以方便大家使用。再此之外的 Claim 可以自由命名。")])])]),t._v(" "),a("h3",{attrs:{id:"头部-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头部-header"}},[t._v("#")]),t._v(" 头部（Header）")]),t._v(" "),a("p",[t._v("JWT 都有一个头部，头部用于描述关于该 JWT 的最基本的信息，例如其类型以及签名所用的算法等。这也可以被表示成一个 JSON 对象。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typ"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("type")]),t._v(" 和 "),a("strong",[t._v("alg")]),t._v(" 是放在头部的最常见的 2 个 标准 Claim ，通常它俩的值都是固定的。")]),t._v(" "),a("ul",[a("li",[t._v("type 用来表示当前字符串是什么类型的字符串，毫无疑问，它的值必然就是 "),a("code",[t._v("JWT")]),t._v(" ；")]),t._v(" "),a("li",[t._v("alg 的值表示当前的字符串是使用什么算法加密生成的。通常这个值都是由我们使用的 Java 库来自动填充的"),a("small",[t._v("（取决于你使用的加密算法）")]),t._v("，我们无需专门考虑它的值。")])]),t._v(" "),a("p",[t._v("上述示例表达的含义就是：当前信息是一个 "),a("strong",[t._v("JWT")]),t._v("，且是被 "),a("strong",[t._v("HS256")]),t._v(" 算法加密过的。")]),t._v(" "),a("p",[t._v("当然，一个 JWT 的头部信息真正的样子并不是上面这个样子，未来，它会被加密算法加密。上例中的头部内容未来会变成 "),a("code",[t._v("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9")]),t._v(" 。")]),t._v(" "),a("blockquote",[a("p",[t._v("这个内容其实是被 Base64 编解码算法编码，而不是真正的加密。所以，它可以变反向地解码回来。")])]),t._v(" "),a("p",[t._v("除了头部的标准 Claim"),a("small",[t._v("（不止上述 2 个）")]),t._v("，有需要的话，你还可以向头部添加任意的 Claim"),a("small",[t._v("（它们的名字就是由你自己任意定义了）")]),t._v("，这些 Claim 被称为 private Claims 。")]),t._v(" "),a("p",[t._v("不过，一般情况下，我们不会向头部中添加 private Claims ，即便是要加，也是加到了荷载部分。")]),t._v(" "),a("h3",{attrs:{id:"荷载-payload-部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#荷载-payload-部分"}},[t._v("#")]),t._v(" 荷载（Payload）部分")]),t._v(" "),a("p",[t._v("JWT 的荷载是 JWT 的最重要部分，它就代表着 JWT 的信息内容。JWT 的荷载部分和头部部分一样，其具体内容也是一个 JSON 格式字符串。例如：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iss"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tommy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aud"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jerry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iat"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1627484243323")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zzz"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goodbye"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("和头部一样，荷载部分也有一些标准 Claim ，常见的有：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("claim")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iss")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jwt 签发者")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sub")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jw t所面向的用户")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("aud")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("接收 jwt 的一方")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("exp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jwt 的过期时间，这个过期时间必须要大于签发时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("nbf")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义在什么时间之前，该jwt都是不可用的.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("iat")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jwt 的签发时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("jti")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("jwt 的唯一身份标识")])])])]),t._v(" "),a("p",[t._v("除了标准 Claim 你也可以向荷载部分添加任何你对有用的 Claim 。")]),t._v(" "),a("p",[t._v("和头部一样，上述示例中的荷载内容真正的样子是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("eyJhdWQiOiJqZXJyeSIsImlzcyI6InRvbW15IiwieXl5Ijoid29ybGQiLCJ4eHgiOiJoZWxsbyIsInp6eiI6Imdvb2RieWUiLCJpYXQiOjE2Mjc0ODQyNDN9\n")])])]),a("blockquote",[a("p",[t._v("和头部部分一样，真正的荷载部分也是经过 Base64 算法编码的。所以，它也是可以反向解码回来的。")])]),t._v(" "),a("h3",{attrs:{id:"签名-signature-部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签名-signature-部分"}},[t._v("#")]),t._v(" 签名（Signature）部分")]),t._v(" "),a("p",[t._v("签名部分是用前面的头部和荷载部分的内容生成的。")]),t._v(" "),a("p",[t._v("将上面的两个编码后的字符串都用句号 "),a("code",[t._v(".")]),t._v(" 连接在一起（头部在前，荷载在后），再使用 "),a("strong",[t._v("HS256")]),t._v(" 算法进行加密。")]),t._v(" "),a("p",[t._v("之所以是 "),a("strong",[t._v("HS256")]),t._v(" 算法，是因为要与头部中所生成的加密算法呼应。"),a("small",[t._v("当然，你也可以不使用 "),a("strong",[t._v("HS256")]),t._v(" 算法，那么与之对应的你的头部中的加密算法信息也要作响应的调整。")])]),t._v(" "),a("p",[t._v("在加密过程中，需要提供一个秘钥（secret）， 例如，以 "),a("code",[t._v("secret")]),t._v(" 作为秘钥，上述的头部和荷载部分生成的签名就是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("uaaPNwE6n5aLztIUcjS7-DiPl9en-MKLaW5i2QkP5vY\n")])])]),a("p",[t._v("最终，上例中的整个 JWT 的内容就是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJqZXJyeSIsImlzcyI6InRvbW15IiwieXl5Ijoid29ybGQiLCJ4eHgiOiJoZWxsbyIsInp6eiI6Imdvb2RieWUiLCJpYXQiOjE2Mjc0ODQyNDN9.uaaPNwE6n5aLztIUcjS7-DiPl9en-MKLaW5i2QkP5vY\n")])])]),a("p",[t._v("一旦服务端生成并发回这个 JWT 字符串之后，后续用户的请求就应该带上这个 JWT，以证明自己成功登陆过 ：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://.../xxx.do?jwt-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJqZXJyeSIsImlzcyI6InRvbW15IiwieXl5Ijoid29ybGQiLCJ4eHgiOiJoZWxsbyIsInp6eiI6Imdvb2RieWUiLCJpYXQiOjE2Mjc0ODQyNDN9.uaaPNwE6n5aLztIUcjS7-DiPl9en-MKLaW5i2QkP5vY\n")])])]),a("h2",{attrs:{id:"_3-jwt-的安全性和注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-jwt-的安全性和注意事项"}},[t._v("#")]),t._v(" 3. JWT 的安全性和注意事项")]),t._v(" "),a("p",[t._v("JWT 的签名部分杜绝了 JWT 被篡改的可能。它从两点实现了这个功能：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("被篡改后的荷载部分加上头部后与签名部分对不上（因为签名部分使用之前没改过的内容生成的），这种情况下就是非法的 JWT；")])]),t._v(" "),a("li",[a("p",[t._v("前端不知道后端生成 JWT 时使用的是什么秘钥。理论上而言，无法重新生成新的签名部分。")])])]),t._v(" "),a("p",[t._v("在 JWT 中，『"),a("strong",[t._v("不应该在载荷里面加入任何敏感的数据")]),t._v("』。在上面的例子中，我们传输的是用户的 User ID 。这个值实际上不是什么敏感内容，一般情况下被知道也是安全的。")]),t._v(" "),a("blockquote",[a("p",[t._v("理论上来说，只要使用 HTTP 协议都有可能被人拦截/观测到你在网络上所发送的数据。这种情况下，使用什么方案都防不住信息的泄露。这也是现在越来越鼓励使用 https"),a("small",[t._v("（http+ssl）")]),t._v("的原因。")])]),t._v(" "),a("h2",{attrs:{id:"_4-java-操作-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-java-操作-jwt"}},[t._v("#")]),t._v(" 4. Java 操作 JWT")]),t._v(" "),a("p",[t._v("参见"),a("RouterLink",{attrs:{to:"/utility/3rd/08-nimbus-jose-jwt.html"}},[t._v("《操作 JWT：nimbus-jose-jwt 库》")]),t._v("笔记")],1),t._v(" "),a("h2",{attrs:{id:"_5-jwt-token-使用技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-jwt-token-使用技巧"}},[t._v("#")]),t._v(" 5. JWT Token 使用技巧")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("可以将用户的 Http 请求的 UserAgent 信息也放入 JWT 荷载部分。")]),t._v(" "),a("p",[t._v("这样做的好处是在一定程度上 JWT Token 被盗用。一旦在另一个客户端使用同一个 token 发出 http 请求，http 请求的 UserAgent"),a("small",[t._v("（大概率）")]),t._v("会和前一个客户端不一样。")]),t._v(" "),a("p",[t._v("按照这个思路，客户端的 IP 信息也可以放入 JWT 荷载部分。")])]),t._v(" "),a("li",[a("p",[t._v("服务端不需要考虑客户端将收到的 JWT Token 放哪。")]),t._v(" "),a("p",[t._v("Cookie 还是 local storage、session storage ？这是客户端"),a("small",[t._v("（前端开发工程师、IOS/Andriod 客户端开发工程师）")]),t._v("考虑的事情。")])]),t._v(" "),a("li",[a("p",[t._v("前端向后端传递 JWT token 是，可以放在 http header 里，也可以拼在 url 里，也可以放 cookie 里。")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);