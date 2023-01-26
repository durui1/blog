(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{393:function(s,t,a){"use strict";a.r(t);var e=a(47),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-elasticsearch"}},[s._v("#")]),s._v(" Docker ElasticSearch")]),s._v(" "),a("p",[s._v("docker hub 的 "),a("a",{attrs:{href:"https://hub.docker.com/_/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[a("em",[s._v("https://hub.docker.com/_/elasticsearch")]),a("OutboundLink")],1),s._v(" 。")]),s._v(" "),a("p",[s._v("当前"),a("small",[s._v("（2021-04-02）")]),s._v("的 7 版本最新的是 "),a("strong",[s._v("7.12.0")]),s._v(" ，6 版本最新的是 "),a("strong",[s._v("6.8.15")]),s._v("。"),a("small",[s._v("（没有 "),a("strong",[s._v("latest")]),s._v(" 版本）")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("支持 Window 7 操作系统的最后一个 es 版本是 "),a("strong",[s._v("7.10.2")]),s._v("，"),a("small",[s._v("再高你就要换系统了。")]),s._v(" 但是 docker 镜像里只有 "),a("strong",[s._v("7.10.1")]),s._v(" 版本。")])]),s._v(" "),a("h2",{attrs:{id:"_1-安装及测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装及测试"}},[s._v("#")]),s._v(" 1. 安装及测试")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询中央仓库")]),s._v("\ndocker search -f is-official"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true elasticsearch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从中央仓库下载")]),s._v("\ndocker pull elasticsearch:7.10.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或，直接导入已有的镜像文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker load -i elasticsearch-7.10.1.tar")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地镜像")]),s._v("\ndocker images\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会出现类似以下内容：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# REPOSITORY      TAG       IMAGE ID       CREATED        SIZE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# elasticsearch   7.10.1    558380375f1a   8 months ago   774MB")]),s._v("\n")])])]),a("p",[s._v("运行容器：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("删除曾经已有的同名容器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f es-test\n")])])])]),s._v(" "),a("li",[a("p",[s._v("创建并运行 elasticsearch 容器的语法")]),s._v(" "),a("p",[s._v("docker 运行 elasticsearch 时，有可能会报如下错误：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]\n")])])]),a("p",[s._v("解决办法是：在 "),a("code",[s._v("/etc/sysctl.conf")]),s._v(" 文件最后添加一行："),a("code",[s._v("vm.max_map_count=262144")]),s._v(" 后执行命令 "),a("code",[s._v("sysctl -p")]),s._v(" 。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vm.max_map_count=262144"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf\n")])])]),a("p",[s._v("运行 es")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("指定容器名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("指定宿主机端口"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":9200 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("指定宿主机端口"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":9300 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_JAVA_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms256m -Xmx256m"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  elasticsearch:7.10.1\n")])])]),a("p",[a("strong",[s._v('-e "discovery.type=single-node"')]),s._v("：表示单节点运行。")]),s._v(" "),a("p",[a("strong",[s._v('-e ES_JAVA_OPTS="-Xms256m -Xmx256m"')]),s._v("：设置初始内存和最大内存。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --name es-test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_JAVA_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms256m -Xmx256m"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  elasticsearch:7.10.1\n")])])])])]),s._v(" "),a("p",[s._v("验证安装成功")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("通过 "),a("strong",[s._v("docker ps")]),s._v(" 查看容器的运行信息：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])]),a("p",[s._v("会看到类似如下信息：")]),s._v(" "),a("p",[s._v("略")])]),s._v(" "),a("li",[a("p",[s._v("访问网址 "),a("code",[s._v("http://主机IP:9200/")]),s._v("，"),a("small",[s._v("会有一点点延迟，")]),s._v("会看到类似如下内容:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dc1ef18d9e47"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cluster_name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-cluster"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cluster_uuid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"j99YYT-CRISTsoxgXEB6MA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.8.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build_flavor"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build_type"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build_hash"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2f90bbf7b93631e52bafb59b3b049cb44ec25e96"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build_date"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-10-28T20:40:44.881551Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build_snapshot"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lucene_version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"minimum_wire_compatibility_version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.8.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"minimum_index_compatibility_version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.0.0-beta1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tagline"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You Know, for Search"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_2-配置与挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置与挂载"}},[s._v("#")]),s._v(" 2. 配置与挂载")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Docker ES Server 的数据的存储目录是容器内部的 "),a("strong",[s._v("/usr/share/elasticsearch/data")]),s._v(" 。")])]),s._v(" "),a("li",[a("p",[s._v("Docker ES Server 的配置文件是容器内部的 "),a("strong",[s._v("/usr/share/elasticsearch/config/elasticsearch.yml")]),s._v(" 。")]),s._v(" "),a("p",[s._v("该配置文件的内容只有 2 行：")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('cluster.name: "docker-cluster"\nnetwork.host: 0.0.0.0\n')])])])]),s._v(" "),a("li",[a("p",[s._v("示例")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除曾经已有的同名容器")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f es-9200\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建本机挂载目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/docker/9200/data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" ~/docker/9200/config/elasticsearch.yml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并运行容器")]),s._v("\ndocker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --name es-9200 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v ~/docker/9200/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v ~/docker/9200/data:/usr/share/elasticsearch/data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v ~/docker/9200/plugins:/usr/share/elasticsearch/plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_JAVA_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms256m -Xmx256m"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  elasticsearch:7.10.1\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"_3-通过-docker-compose-启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过-docker-compose-启动"}},[s._v("#")]),s._v(" 3. 通过 docker-compose 启动")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("7.10.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" es\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" discovery.type=single"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ES_JAVA_OPTS="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Xms512m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Xmx512m\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ~/docker/es/9200/config/elasticsearch.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/config/elasticsearch.yml\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ~/docker/es/9200/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/data\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ~/docker/es/9200/plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/share/elasticsearch/plugins\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9200:9200"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9300:9300"')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);