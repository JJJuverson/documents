(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{394:function(s,n,a){"use strict";a.r(n);var e=a(3),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"es6新特性-http-caibaojian-com-es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6新特性-http-caibaojian-com-es6"}},[s._v("#")]),s._v(" (es6新特性)[http://caibaojian.com/es6/]")]),s._v(" "),a("p",[s._v("1.块级作用域变量let，const\n2.新增基本数据类型Symbol\n3.结构赋值\n4.给形参设置默认值&箭头函数\n5.对象或者数组的展开符 …\n6.String的include方法\n7.Array新增API：isArray/from/of 和新增方法：entries()/kes()/values()等\n8.增加class语法糖\n9.新增模块化（import/export）\n10.新增Map，Set数据结构\n11.模板字符串\n12.for…of 和 for…in")]),s._v(" "),a("h2",{attrs:{id:"var-let-const区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-let-const区别"}},[s._v("#")]),s._v(" var let const区别")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1.不存在变量提升")])]),s._v(" "),a("li",[a("p",[s._v("var 命令会发生变量提升现象，即变量可以在声明之前使用，值为undefined。")])]),s._v(" "),a("li",[a("p",[s._v("let 和 const 则没有变量声明提升的功能，必须要先声明才能使用")])]),s._v(" "),a("li",[a("p",[s._v("2.不允许重复声明")])]),s._v(" "),a("li",[a("p",[s._v("var命令能重复声明，后者覆盖前者")])]),s._v(" "),a("li",[a("p",[s._v("let 和 const不允许在相同作用域内，重复声明同一个变量")])]),s._v(" "),a("li",[a("p",[s._v("3.作用域")])]),s._v(" "),a("li",[a("p",[s._v("var 的作用域是以函数为界限，全局作用域或者函数作用域")])]),s._v(" "),a("li",[a("p",[s._v("let 和 const 的作用域是块作用域，块级作用域指 { } 内的范围")])]),s._v(" "),a("li",[a("p",[s._v("var 可以定义全局变量和局部变量，let 和 const 只能定义局部变量")])]),s._v(" "),a("li",[a("p",[s._v("const 的声明的常量不能被修改，但对于引用类型来说，堆内存中的值是可以被改变的。")])]),s._v(" "),a("li",[a("p",[s._v("4.变量作为全局属性")])]),s._v(" "),a("li",[a("p",[s._v("定义的变量会作为window对象的属性，let不会")])])]),s._v(" "),a("h2",{attrs:{id:"结构赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构赋值"}},[s._v("#")]),s._v(" 结构赋值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('对象结构赋值\nlet obj ={a:1,b:2};\nlet {a,b}=obj;\nconsole.log(a,b);//1,2\n\n数组结构赋值\nlet arr =["a","b","c"];\nlet [e,f]=arr;\nconsole.log(e,f); //a,b\n\n快速交换a,b的值\n[a,b] = [b,a];\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"展开运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展开运算符"}},[s._v("#")]),s._v(" 展开运算符(...)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("剩余参数\nlet arr = [1,2,3,4];\nlet [a,b,...c] = arr;\nconsole.log(a,b,c);\n\n//对象展开\nlet obj = {a:1,b:2};\nlet obj2 = {...abj,c:3,d:4};\nconsole.log(obj2); //{a:1,b:2,c:3,d:4}\n\n//传值问题\nlet obj2 ={obj};\nobj2.a = 10;\nconsole.log(obj);//{a:10,b:2}\n\nlet obj2 ={...obj};\nobj2.a = 10;\nconsole.log(obj);//{a:1,b:2}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"set和map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set和map"}},[s._v("#")]),s._v(" Set和Map")]),s._v(" "),a("ul",[a("li",[s._v("构造函数用来构建某一类型的对象（对象的实例化）\nSet：类似数组，但成员值都是唯一的，不会重复，并且没有索引；\nWeakSet：特殊的Set；成员只能是对象类型，并且对成员的引用是弱引用；当成员被回收时，该成员会自动被移除；\nMap：键值集合，键可以是各种类型的值；\nWeakSet：特殊的Map，只能用对象或者null作为键，键对对象的引用是弱用；当键引用的对象被回收时，该键及其对应的值会被自动移除；")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Set\nlet arr = [1,2,3,4,1,2]\nlet s = new Set(arr);\nconsole.log(s);//{1,2,3,4}\nconsole.log[...s];//[1,2,3,4]\n\nset.size  //size数值的个数，==>length\nset.clear //清空所有值\nset.delete(val) //删除某个值val,返回boolen\nset.add(5) //添加5\nset.has() //查看是否包含某值，返回boolen\n\nMap\nlet arr =[\n  ["a",1],["b",2]\n]\nlet m = new Map(arr);\nconsole.log(m);{"a"=>1,"b"=>2};\n\nmap.size  //size数值的个数，==>length\nmap.clear //清空所有值\nmap.delete(key) //删除某个值val,返回boolen\nmap.set(key,val) //设立一个值，key，val的形式，返回对象本身\nmap.get(key) //获取某一项的值\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[s._v("#")]),s._v(" 箭头函数")]),s._v(" "),a("ul",[a("li",[s._v("ES6 中函数式声明方式被箭头函数 => 取代")]),s._v(" "),a("li",[s._v("箭头函数：形参 => 返回值,(形参，形参) =>返回值，（）=>返回值，（）=>{执行语句 返回值}")]),s._v(" "),a("li",[s._v("箭头函数没有this，this是父级的\n定义时候绑定，就是this是继承自父执行上下文！！中的this\nES5中，this指调用者，ES6中，this指定义时候绑定")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let fn =nub =>nub*2;\nconsole.log(fn(10)); //20\n\nlet fn =()=>{\n  console.log(11);\n  return 22\n}\nconsole.log(fn()); //11 22\n\n//箭头函数没有不定参，如果要用，则需要用剩余(rest)参数\nlet fn = (...arg)=>{\n  console.log(arg)\n}\nfn(1,2,3,4)\n\n//箭头函数的this问题\ndocument.onclick = function(){\n  /* function fn(){\n    console.log(this); //window\n  } */\n  \n  let fn = ()=>{\n    console.log(this);//document\n  }\n  \n  /* \n  箭头函数本身没有this，调用箭头函数的this时，指向其声明时所在的作用域this\n  */\n}\n\n 参数默认值\n let fn =(a=10,b=2)=>{\n   console.log(a*b); //20\n }\nfn();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h2",{attrs:{id:"数组新增方法（构造函数array下的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组新增方法（构造函数array下的方法"}},[s._v("#")]),s._v(" 数组新增方法（构造函数Array下的方法)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  Array.from() 把一个类数组转化成真数组。 类数组：有下标有length\n  <li>1</li> <li>2</li> <li>3</li> <li>4</li>\n  \n  let lis = document.query.SelectorAll("#list li");\n  console.log(lis); //NodeList\n  lis = Array.from(lis);\n}\n\n{\n  Array.of() 将参数转化成新数组\n  console.log(Array.of(1,2,3)); //[1,2,3]\n}\n\n{\n  Array.isArray() 判断是不是数组\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"find方法-查找数组中满足要求的第一个值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find方法-查找数组中满足要求的第一个值"}},[s._v("#")]),s._v(" find方法(查找数组中满足要求的第一个值)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let arr =[1,2,3,4]\nlet val = arr.find((item,index)=>{\n  if(item>3){\n    return true;\n  }\n});\n//var = arr.find(item=>item>3);\nconsole.log(val);//4\n\nfindIndex 查找数组中满足要求的第一个元素的索引\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"数组扁平化-arr-flat-depth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组扁平化-arr-flat-depth"}},[s._v("#")]),s._v(" 数组扁平化 arr.flat([depth])")]),s._v(" "),a("h2",{attrs:{id:"arr-flatmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arr-flatmap"}},[s._v("#")]),s._v(" arr.flatMap")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('let arr =[\n  ["小明","18"],\n  ["小刚"，”20]\n];\nlet newArr = arr.flatMap((item)=>{\n  item= item.filter((item,index)=>{\n    return index ==0;\n  });\n  return item;\n});\nconsole.log(newArr); // ["小明","小刚"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"arr-fill-用一个固定值填充一个数组中从起始索引到终止索引的全部元素，不包括终止索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arr-fill-用一个固定值填充一个数组中从起始索引到终止索引的全部元素，不包括终止索引"}},[s._v("#")]),s._v(" arr.fill(用一个固定值填充一个数组中从起始索引到终止索引的全部元素，不包括终止索引)")]),s._v(" "),a("ul",[a("li",[s._v('arr.fill("填充值",start,end) 不修改原始长度')])]),s._v(" "),a("h2",{attrs:{id:"arr-includes-用于判断数组是包含某个元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arr-includes-用于判断数组是包含某个元素"}},[s._v("#")]),s._v(" arr.includes(用于判断数组是包含某个元素)")]),s._v(" "),a("ul",[a("li",[s._v('arr.includes("val",fromIndex) 从fromIndex开始查找')])]),s._v(" "),a("h2",{attrs:{id:"新增字符串方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增字符串方法"}},[s._v("#")]),s._v(" 新增字符串方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//字符串新增方法：\n方法                返回值          作用\nincludes('str')     boolean         判断字符串中包含子串\nendWith('str')      boolean         判断字符串以\"str\"结尾\nstartWith('str')    boolean         判断字符串以\"str\"开头\nrepeat(n)           重复拼接自身     重复n次输出字符串 repeat + repeat\n\n//不全方法: 补全字符串长度\npadStart(length, s);        字符串开头补全\nendStart(length, s);        字符串末尾补全\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"es6模板字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6模板字符串"}},[s._v("#")]),s._v(" es6模板字符串")]),s._v(" "),a("ul",[a("li",[s._v("模板字符串 反引号 ``")]),s._v(" "),a("li",[s._v("1.支持换行 //空白会打印出来")]),s._v(" "),a("li",[s._v("2.模板中传变量 ${变量}")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    let obj = {\n        name: 'jack',\n        age: 20\n    };\n    console.log(`名称：${obj.name},年龄：${obj.age}`);  //名称：jack,年龄：20\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),a("p",[s._v("1.对象支持属性简写语法；\n假设：x是 变量 或者 常量 或者 函数；\n则有：{x}相当于{'x':x}；\n2.在对象字变量中支持用表达式定义属性名，格式为{[表达式]：属性值}，属性的名为把表达式的值\n转化为字符串类型后的值；\n3.支持扩展运算符 ...,格式为：{...对象}\n假设：x是个对象；\n则有：表达式{...x}会取出对象x的所有可遍历属性，并将取出的所有属性及属性值拷贝到当前对象字面量中；\n4.支持NULL传导运算符；\n5.对象合并：Object.assign(a,b) 后面对象合并到前面对象中去\n6.判断两个值是否相等：Object.is(val1,val2)")]),s._v(" "),a("h2",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),a("p",[s._v("1.ES6的模块自动采用严格模式；\n2.在ES6模块中，顶层的this的值是undefined，不应该在顶层代码使用this；\n3.export语句输出的接口与其对应的值是动态绑定关系，即通过该接口，可以获取到模块内部实时的值；这一点与CommonJS规范完全不同，CommonJS模块输出的是值的缓存，不存在动态更新；\n4.export 和 import 命令可以并且只能出现在模块顶层的任意位置；如果export 和 import 命令处于块级作用域内，就会报错；这是因为如果export 和 import 命令处于代码块之中，就没法做静态优化了，违背了ES6模块的设计初衷；\n5.因为：export default命令的本质是：将该命令后面的值，赋给default变量，然后输出一个叫做default的量；\n所以：\n可以直接将一个值写在export default之后；\nexport default之后不能跟变量声明语句；\n6.import后面的from指定模块文件的位置，可以是相对路径或者绝对路径，.js后缀也可以省略；如果from后面指定的不是路径，只是一个模块名字，那么必须有配置文件能使JavaScript引擎找到该模块的位置；\n7.import命令具有提升效果，会提升到整个模块的顶部，首先执行。这种行为的本质是：import命令是编译阶段执行的，所以它会在所有代码运行之前执行；\n8.由于import语句是在编译阶段执行，所以import语句中不能包含表达式、变量等只能在运行时才能得到结果的语法结构；\n9.如果有相同的多条import语句，那么只会执行一次同一条import语句；\n10.由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错；\n11.在 Node 环境中，使用import命令加载 CommonJS 模块，Node 会自动将module.exports属性，当作模块的默认输出，即等同于export default；\n12.采用require命令加载 ES6 模块时，ES6 模块的所有输出接口，会成为输入对象的属性。\n13.ES6模块与CommonJS模块（一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的）的区别：\nCommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。\nCommonJS 模块是运行时加载，ES6 模块是编译时输出接口。\nES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块。\n14.import()提案：import(modulePath) 函数可以运行时加载内容，也就是说，只有当代码执行到 import() 语句时，才会加载指定的内容；该函数返回一个 Promise 对象；import() 函数可以用在任地方，不仅仅是模块，非模块的脚本也可以使用；与 import 语句不同的是： import() 函数所加载出的值 与 源模块中的值不具有动态绑定关系；注意： import()暂时还只是个提案；")])])}),[],!1,null,null,null);n.default=t.exports}}]);