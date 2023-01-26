(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{431:function(t,s,a){"use strict";a.r(s);var n=a(47),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose-yml-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-模板"}},[t._v("#")]),t._v(" docker-compose.yml 模板")]),t._v(" "),a("h2",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" mysql")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("docker 命令版")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name mysql-3306 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /etc/localtime:/etc/localtime:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/docker/mysql/3306/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/docker/mysql/3306/conf.d:/etc/mysql/conf.d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/docker/mysql/3306/mysql.conf.d:/etc/mysql/mysql.conf.d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(":3306 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    mysql:8.0.16\n")])])])]),t._v(" "),a("li",[a("p",[t._v("docker-compose 版")]),t._v(" "),a("p",[t._v("启动命令：docker-compose up -d mysql-3306")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mysql-3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8.0.16\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认值，可以缺省。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mem_limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 512m "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 限定 docker 容器内存大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MYSQL_ROOT_PASSWORD=123456\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置时区")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/mysql/3306/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据目录")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/mysql/3306/conf.d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/mysql/conf.d "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件目录，一般动它")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/mysql/3306/mysql.conf.d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/mysql/mysql.conf.d "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件目录，一般不动它")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# network_mode: "host" 无需端口映射')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 3306"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("mysql.cnf")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[mysqld]\nserver-id = 1 \ncharacter-set-server = utf8mb4\nskip-host-cache\nskip-name-resolve\n\n[mysqldump]\nquick\nquote-names\nmax_allowed_packet\t= 16M\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" redis")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("docker 命令版")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name redis-6379 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /etc/localtime:/etc/localtime:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/docker/redis/6379/data:/data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/docker/redis/6379/redis.conf:/usr/local/etc/redis/redis.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(":6379 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    redis:5.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    redis-server /usr/local/etc/redis/redis.conf --appendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动命令")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mem_limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 512m\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置时区")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/redis/6379/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据目录")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/redis/6379/redis.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/local/etc/redis/redis.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 6379"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server /usr/local/etc/redis/redis.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("appendonly yes "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动命令")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("redis.conf")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('bind 127.0.0.1\nprotected-mode yes\nport 6379\ntcp-backlog 511\ntimeout 0\ntcp-keepalive 300\ndaemonize no\nsupervised no\npidfile /var/run/redis_6379.pid\nloglevel notice\nlogfile ""\ndatabases 16\nalways-show-logo yes\nsave 900 1\nsave 300 10\nsave 60 10000\nstop-writes-on-bgsave-error yes\nrdbcompression yes\nrdbchecksum yes\ndbfilename dump.rdb\ndir ./\nreplica-serve-stale-data yes\nreplica-read-only yes\nrepl-diskless-sync no\nrepl-diskless-sync-delay 5\nrepl-disable-tcp-nodelay no\nreplica-priority 100\nlazyfree-lazy-eviction no\nlazyfree-lazy-expire no\nlazyfree-lazy-server-del no\nreplica-lazy-flush no\nappendonly no\nappendfilename "appendonly.aof"\nappendfsync everysec\nno-appendfsync-on-rewrite no\nauto-aof-rewrite-percentage 100\nauto-aof-rewrite-min-size 64mb\naof-load-truncated yes\naof-use-rdb-preamble yes\nlua-time-limit 5000\nslowlog-log-slower-than 10000\nslowlog-max-len 128\nlatency-monitor-threshold 0\nnotify-keyspace-events ""\nhash-max-ziplist-entries 512\nhash-max-ziplist-value 64\nlist-max-ziplist-size -2\nlist-compress-depth 0\nset-max-intset-entries 512\nzset-max-ziplist-entries 128\nzset-max-ziplist-value 64\nhll-sparse-max-bytes 3000\nstream-node-max-bytes 4096\nstream-node-max-entries 100\nactiverehashing yes\nclient-output-buffer-limit normal 0 0 0\nclient-output-buffer-limit replica 256mb 64mb 60\nclient-output-buffer-limit pubsub 32mb 8mb 60\nhz 10\ndynamic-hz yes\naof-rewrite-incremental-fsync yes\nrdb-save-incremental-fsync yes\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" nginx")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("虽然 dockerhub 上的官方文档说 nginx 启动后是在容器内的 "),a("code",[t._v("/usr/share/nginx/html")]),t._v(" 目录下加载 .html 等静态资源，但是实际上不同的版本会有一些不同，有的版本是到容器内的 "),a("code",[t._v("/etc/nginx/html")]),t._v(" 下找。")]),t._v(" "),a("p",[t._v("所以，当你映射了数据卷但又没找到 .html 时，留意一下 error.log ，看看错误信息中显示的是到哪里『找』文件。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("docker 命令版")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name nginx-80\n    -v /etc/localtime:/etc/localtime:ro \n    -v ~/docker/nginx/80/html:/usr/share/nginx/html \n    -v ~/docker/nginx/80/logs:/var/log/nginx \n    -v ~/docker/nginx/80/nginx.conf:/etc/nginx/nginx.conf \n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80\n    nginx:stable\n")])])])]),t._v(" "),a("li",[a("p",[t._v("docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("stable\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mem_limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 512m\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置时区")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/nginx/80/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/nginx/html "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据目录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/nginx/80/logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/log/nginx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志目录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/nginx/80/nginx.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("80:80")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("nginx.conf")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('user  nginx;\nworker_processes  auto;\n\nerror_log  /var/log/nginx/error.log notice;\npid        /var/run/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                    \'$status $body_bytes_sent "$http_referer" \'\n                    \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    include /etc/nginx/conf.d/*.conf;\n    server {\n        listen       80;\n        server_name  192.172.0.206;\n\n        location = / {\n            root   html;\n            index  index.html;\n        }\n\n        location .*\\.js$ {\n            root    html/js;\n            expires      30d;\n        }\n\n        location .*\\.ico$ {\n            root    html/png;\n            expires      30d;\n        }\n\n\n        # location /api/ {\n        #     proxy_pass http://192.172.0.206:8080/;\n        # }\n    }\n}\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("docker 命令版")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并运行容器")]),t._v("\ndocker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name rabbitmq-5672 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --hostname rabbitmq-5672 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /etc/localtime:/etc/localtime:ro \n    -v ~/docker/rabbitmq/5672/data:/var/lib/rabbitmq/mnesia/rabbit@rabbitmq-5672 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v(":5672 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15672")]),t._v(":15672 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    rabbitmq:3.8.21-management\n")])])])]),t._v(" "),a("li",[a("p",[t._v("docker-compose 配置文件版")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rabbitmq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rabbitmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.8.21"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("management\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rabbitmq\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rabbitmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" RABBITMQ_DEFAULT_USER=root\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" RABBITMQ_DEFAULT_PASS=root\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/rabbitmq/5672/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/rabbitmq/mnesia/rabbit@rabbitmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5672:5672"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15672:15672"')]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"elastic-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-search"}},[t._v("#")]),t._v(" Elastic Search")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("docker 命令版")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name es-9200 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"discovery.type=single-node"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ES_JAVA_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Xms256m -Xmx256m"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /etc/localtime:/etc/localtime:ro \n    -v ~/docker/es/9200/data:/usr/share/elasticsearch/data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/docker/es/9200/plugins:/usr/share/elasticsearch/plugins "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/docker/es/9200/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v(":9200 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),t._v(":9300 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    elasticsearch:7.10.1\n")])])])]),t._v(" "),a("li",[a("p",[t._v("docker-compose 配置文件版")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("elasticsearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" elasticsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("7.10.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" es\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" discovery.type=single"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(' ES_JAVA_OPTS="'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Xms512m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v('Xmx512m"\n    '),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ro \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/es/9200/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/elasticsearch/data\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/es/9200/plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/elasticsearch/plugins\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ~/docker/es/9200/config/elasticsearch.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/elasticsearch/config/elasticsearch.yml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9200:9200"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9300:9300"')]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);