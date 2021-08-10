(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{410:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"django与mysql连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django与mysql连接"}},[s._v("#")]),s._v(" django与mysql连接")]),s._v(" "),a("p",[a("strong",[s._v("如果你有数据已经存放在数据库中，下面的办法将你的数据库与django同步")]),s._v(" "),a("strong",[s._v("步骤：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("打开django项目，推荐前端开发轻量级工具Hbuilder")])]),s._v(" "),a("li",[a("p",[s._v("找到setting文件夹更改配置")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DATABASES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.mysql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置数据库类型")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#你新建的数据库名称")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#帐号")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("安装pymysql")])]),s._v(" "),a("blockquote",[a("p",[s._v("pip install pymysql")])]),s._v(" "),a("ul",[a("li",[s._v("再者在__init__.py中添加代码：")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pymysql\npymysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("install_as_MySQLdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("你可能会出现如下错误：")])]),s._v(" "),a("blockquote",[a("p",[s._v("报错：ImproperlyConfigured: mysqlclient 1.3.13 or newer is required; you have 0.9.3.")])]),s._v(" "),a("ul",[a("li",[s._v("解决方法：")])]),s._v(" "),a("blockquote",[a("p",[s._v("在你所创建的虚拟环境中 envs>lib>site-packages>django>db>backends>mysql>base.py注释掉一下两行代码：")]),s._v(" "),a("h1",{attrs:{id:"if-version-1-3-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-version-1-3-13"}},[s._v("#")]),s._v(" if version < (1, 3, 13):")]),s._v(" "),a("h1",{attrs:{id:"raise-improperlyconfigured-mysqlclient-1-3-13-or-newer-is-required-you-have-s-database-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raise-improperlyconfigured-mysqlclient-1-3-13-or-newer-is-required-you-have-s-database-version"}},[s._v("#")]),s._v(" raise ImproperlyConfigured(‘mysqlclient 1.3.13 or newer is required; you have %s.’ % Database.version)")]),s._v(" "),a("p",[s._v("这样你运动django项目时就不会报错了")])]),s._v(" "),a("h2",{attrs:{id:"同步已存在的表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步已存在的表"}},[s._v("#")]),s._v(" 同步已存在的表")]),s._v(" "),a("ul",[a("li",[s._v("使用命令")])]),s._v(" "),a("blockquote",[a("p",[s._v("python manage.py inspectdb")]),s._v(" "),a("p",[s._v("python manage.py inspectdb > django_test/models.py  //django_test是我的应用名称")])]),s._v(" "),a("p",[a("valine")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);