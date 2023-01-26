(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{676:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"controller-的编写和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller-的编写和配置"}},[t._v("#")]),t._v(" Controller 的编写和配置")]),t._v(" "),a("p",[a("strong",[t._v("@Controller")]),t._v(" 注解和 "),a("strong",[t._v("@RequestMapping")]),t._v(" 注解是 Spring MVC 最重要的两个注解。")]),t._v(" "),a("p",[t._v("使用基于注解的控制器的优点如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一个 Controller 类可以处理多个动作，而实现了一个 "),a("strong",[t._v("Controller")]),t._v(" 接口的控制器只能处理一个动作。")])]),t._v(" "),a("li",[a("p",[t._v("基于 Controller 注解的控制器的请求映射不需要写在配置文件中。使用 "),a("strong",[t._v("@RequestMapping")]),t._v(" 注解类型，可以对一个方法进行请求处理。")])])]),t._v(" "),a("h2",{attrs:{id:"controller-注解类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller-注解类型"}},[t._v("#")]),t._v(" Controller 注解类型")]),t._v(" "),a("p",[t._v("Spring 使用扫描机制来找到应用程序中所有基于注解的控制器类。为了保证 Spring 能找到你的控制器，必须完成两件事：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringWebConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("自定义一个配置类，实现 "),a("strong",[t._v("WebMvcConfigurer")]),t._v(" 接口；")])]),t._v(" "),a("li",[a("p",[t._v("在配置类上标注，"),a("strong",[t._v("@ComponentScan")]),t._v(" 扫描你的 "),a("strong",[t._v("@Controller")]),t._v(" 所在的包。")])])]),t._v(" "),a("p",[t._v("注意，不要让 Spring 扫描一个太广泛的包，这会包含无意义的行为。")]),t._v(" "),a("h2",{attrs:{id:"requestmapping-注解类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping-注解类型"}},[t._v("#")]),t._v(" @RequestMapping 注解类型")]),t._v(" "),a("p",[a("strong",[t._v("@RequestMapping")]),t._v(" 注解类型的作用如同起名字所暗示：映射一个请求和一个方法。可以使用它注解一个方法或类。")]),t._v(" "),a("p",[t._v("被 "),a("strong",[t._v("@RequestMapping")]),t._v(" 注解的方法将成为一个 "),a("strong",[t._v("请求处理方法")]),t._v(" ，在接收到URL请求时被调用。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" mav "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Spring MVC Framework!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("value")]),t._v(" 属性是 "),a("strong",[t._v("@RequestMapping")]),t._v(" 的默认属性，唯一时可省略属性名。")]),t._v(" "),a("p",[a("strong",[t._v("method")]),t._v(" 属性用来指示该方法仅处理哪些 HTTP 方法。若 "),a("strong",[t._v("method")]),t._v(" 属性只有一个值时，则无须花括号。若没有指定 "),a("strong",[t._v("method")]),t._v(" 属性值，则请求方法可处理任意 HTTP 方法。")]),t._v(" "),a("p",[t._v("此外，如果用 "),a("strong",[t._v("@RequestMapping")]),t._v(" 注解一个控制器类，那么，所有的方法都将映射为『"),a("strong",[t._v("相对于")]),t._v("』类级别的请求。")]),t._v(" "),a("h2",{attrs:{id:"编写请求方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写请求方法"}},[t._v("#")]),t._v(" 编写请求方法")]),t._v(" "),a("p",[t._v("每个请求处理方法的参数和返回值『"),a("strong",[t._v("既灵活又严格")]),t._v("』。")]),t._v(" "),a("p",[t._v("最为常见的参数类型有：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("HttpServletRequest、HttpServletResponse、HttpSession")])]),t._v(" "),a("li",[a("p",[t._v("Map、Model、ModelMap")])]),t._v(" "),a("li",[a("p",[t._v("表单对象（"),a("small",[a("strong",[t._v("次常用")])]),t._v("）")])]),t._v(" "),a("li",[a("p",[t._v("带指定注解的参数（"),a("small",[a("strong",[t._v("最常用")])]),t._v("）")])])]),t._v(" "),a("p",[t._v("最为常见的返回值类型有：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ModelAndView（"),a("small",[a("strong",[t._v("最常用")])]),t._v("）")])]),t._v(" "),a("li",[a("p",[t._v("Model、View")])]),t._v(" "),a("li",[a("p",[t._v("String（"),a("small",[a("strong",[t._v("次常用")])]),t._v("）")])]),t._v(" "),a("li",[a("p",[a("small",[t._v("被当作 View 的模型对象的")]),t._v("任意类型")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("对于初学者而言，如果你觉得『参数类型和返回值类型过于灵活多样，以至于你无法确定你使用哪个种更合适』，那么你就使用  "),a("strong",[t._v("HttpServletRequest")]),t._v("、"),a("strong",[t._v("HttpServletResponse")]),t._v(" 和 "),a("strong",[t._v("ModelAndView")]),t._v(" ，这是 100% 不会有问题的百搭组合。当然，使用过程中代码会略显罗嗦。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"请求参数和路径变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数和路径变量"}},[t._v("#")]),t._v(" 请求参数和路径变量")]),t._v(" "),a("p",[t._v("Spring MVC 提供了一个更简单的方法来获取 Get 请求参数：通过使用 "),a("strong",[t._v("@RequestParam")]),t._v(" 注解。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hehe/{id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printGoodbye")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),t._v(" mav "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mav"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此处需要注意的是，你的拦截规则是拦截所有请求，还是拦截特定后缀"),a("small",[t._v("（无法拦截并触发该方法的执行）")]),t._v("？！")]),t._v(" "),a("p",[t._v("『完』")])])}),[],!1,null,null,null);s.default=e.exports}}]);