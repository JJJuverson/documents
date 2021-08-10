(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{386:function(a,s,t){"use strict";t.r(s);var n=t(3),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"常见的dos命令（cmd）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的dos命令（cmd）"}},[a._v("#")]),a._v(" 常见的DOS命令（cmd）")]),a._v(" "),t("ul",[t("li",[a._v("cls清楚屏幕")]),a._v(" "),t("li",[a._v("DOS窗口内容复制:在窗口任意位置，点击鼠标右键，选择标记，接下来选择要复制的内容，再在窗口任意位置点击鼠标右键。")]),a._v(" "),t("li",[a._v("dir 列出当前目录下的所有子目录")]),a._v(" "),t("li",[a._v("cd 改变目录")]),a._v(" "),t("li",[a._v("cd .. 回到上行目录")]),a._v(" "),t("li",[a._v("cd \\ 回到根目录")])]),a._v(" "),t("h2",{attrs:{id:"jvm-java虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-java虚拟机"}},[a._v("#")]),a._v(" JVM java虚拟机")]),a._v(" "),t("h2",{attrs:{id:"java的加载与执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java的加载与执行"}},[a._v("#")]),a._v(" Java的加载与执行")]),a._v(" "),t("ul",[t("li",[a._v("java的执行包括两个 重要的阶段（编译阶段和运行阶段）")]),a._v(" "),t("li",[a._v(".java -> .class(编译阶段)")]),a._v(" "),t("li",[a._v("-> 类装载器 -> Java虚拟机（JVM）-> 操作系统 -> 硬件平台 (执行阶段)")]),a._v(" "),t("li",[a._v("编译阶段：程序员需要在硬盘的任意位置新建一个.java扩展名的文件，该文件被称为java源文件，源文件中\n编写的是java源代码/源程序。程序员需要使用JDK当中自带的javac.exe命令进行java查询的编译，\n生成多个.class文件（javac 路径）")]),a._v(" "),t("li",[a._v("运行阶段：JDK安装之后，除了自带一个javac.exe之外，还有另一个工具/命令java.exe，主要负责运行阶段（在DOS窗口中使用 java 类名）")]),a._v(" "),t("li",[a._v("打开DOS窗口，输入java 类名，之后会启动Java虚拟机，JVM会启动类加载器classLoader,类加载器会去硬盘中搜索 类名.class\n文件，并将字节码文件装载到JVM中，JVM将字节码文件解释成二进制数据，然后操作系统执行二进制和底层硬件进行交互。")])]),a._v(" "),t("h2",{attrs:{id:"java-doc注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-doc注释"}},[a._v("#")]),a._v(" java doc注释")]),a._v(" "),t("p",[a._v("/**\n*\n*\n*/ 可以被javadoc.exe提取出来生成帮助文档")]),a._v(" "),t("h2",{attrs:{id:"解释helloword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释helloword"}},[a._v("#")]),a._v(" 解释helloword")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//public 表示公开的")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//class 表示定义一个类")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//test 类名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n    * public 公开的\n    * static 静态的\n    * void 空\n    * main 方法名是main\n    * (string[] args) 是一个main方法的形式参数列表\n    * \n    * 需要记住的是：以下的方法是一个程序的主方法，是程序的执行入口\n    */")]),a._v("\n   \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//表示定义一个公开的静态主方法")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br")])]),t("h2",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[a._v("#")]),a._v(" 结论")]),a._v(" "),t("ul",[t("li",[a._v("一个java源文件可以定义多个class")]),a._v(" "),t("li",[a._v("public类不是必须的，可以没有")]),a._v(" "),t("li",[a._v("在源文件中只要定义有一个class，那么必然对应生成一个class文件")]),a._v(" "),t("li",[a._v("public的类可以没有，但如果有的话，public修饰的类名必须和源文件保持一致")]),a._v(" "),t("li",[a._v("public的类有也只能有一个")])])])}),[],!1,null,null,null);s.default=e.exports}}]);