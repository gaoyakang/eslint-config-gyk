/**
 * 适用于es6(es2015)的规则
 */
 module.exports = {
    rules: {
      // arrow-body-style: 要求箭头函数体使用大括号
      // as-needed：当大括号是可以省略的，强制不使用它们，比如() => { return true; }强制要求写成 () => return true;
      // requireReturnForObjectLiteral：设置为false表示在满足as-needed时不使用大括号
      "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false}],
  
      // arrow-parens: 要求箭头函数的参数使用圆括号
      // as-needed: 在可以省略括号的地方强制不使用括号,比如箭头函数体只有一个参数时 arg => return result;
      "arrow-parens": ["error", "as-needed"],
  
      // arrow-spacing: 强制箭头函数的箭头前后添加相同空格
      "arrow-spacing": "error",
  
      // 要求在继承类的构造函数中有 super() 的调用
      "constructor-super": "error",
  
      // generator-star-spacing：强制 generator 函数中 * 号前面无空格后面有空格
      // 比如:function* generator(){ }
      "generator-star-spacing": ["error", { before: false, after: true }],
  
      // no-class-assign：禁止修改类声明的变量
      // 错误做法：class A { }  A = 0;
      // 正确做法：let A = class A { }  A = 0;
      "no-class-assign": "error",
  
      // no-confusing-arrow: 禁止在可能与比较操作符相混淆的地方使用箭头函数
      // 箭头函数 (=>) 在语法上与一些比较操作符(>，<，<= 和 >=)相似,很容易写混，后期也不容易看
      // allowParens：使该规则不那么严格，将括号作为有效防止混淆的语法
      // 比如： var x = a => (1 ? 2 : 3);
      // 如果allowParens：false,就会报错
      // 如果allowParens：true, 就不会报错
      "no-confusing-arrow": ["error", { allowParens: true }],
  
      // no-const-assign：禁止修改 const 声明的变量
      // 比如：const a = 0; a = 1;会报错
      // 注意for (const a in [1, 2, 3]) 时，a在每次循环时被重新定义，而不是被修改
      "no-const-assign": "error",
  
      // no-dupe-class-members：禁止类成员中出现重复的名称
      // 比如： class Foo { bar() { } bar() { } }会报错
      "no-dupe-class-members": "error",
  
      // no-duplicate-imports：禁止重复模块导入
      // 错误做法：
      // import { merge } from "module";
      // import { find } from "module";
      // 正确做法：
      // import { merge, find } from "module";
      "no-duplicate-imports": "error",
  
      // no-new-symbol：禁止 Symbol 操作符和 new 一起使用
      // Symbol要作为函数调用
      // 错误做法：var foo = new Symbol("foo");
      // 正确做法：var foo = Symbol("foo");
      "no-new-symbol": "error",
  
      // no-restricted-imports：禁用特定的 import 加载的模块
      // 某些 import 在特定的环境下毫无意义，比如Node.js 中的 fs 模块在不包含文件系统的环境下
      // 有些模块提供相似或相同的功能，比如lodash 和 underscore
      // 这里将其关闭，上述弊端危害几乎没有
      "no-restricted-imports": "off",
  
      // no-this-before-super：禁止在构造函数中，在调用 super() 之前使用 this 或 super
      "no-this-before-super": "error",
  
      // no-useless-computed-key：禁止在对象中使用不必要的计算属性
      // 错误写法：var foo = {["a"]: "b"};
      // 正确写法：var foo = {"a": "b"};
      "no-useless-computed-key": "error",
  
      // no-useless-constructor：禁用不必要的构造函数
      // ES2015 为没有指定构造函数的类提供了默认构造函数。
      // 因此，没有必要提供一个空的构造函数或只是简单的调用父类这样的构造函数
      "no-useless-constructor": "error",
  
      // no-useless-rename：禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
      // 错误做法：import { foo as bar } from "baz"; export { foo as bar };
      //注意：下面这些值如果设置为true就不会去检查
      //检查 imports
      //检查 exports
       //检查解构赋值
      "no-useless-rename": ["error", { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }],
  
      // no-var: 必须使用 let 或 const 而不是 var
      "no-var": "error",
  
      // object-shorthand：要求对象字面量中方法和属性使用简写语法
      // ECMAScript 6 提供了简写的形式去定义对象中的方法和属性
      // always：只要有可能，简写就应该被使用
      // 报告构造函数出现的错误。
      // 显式返回箭头函数
      "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
  
      // prefer-arrow-callback：要求回调函数不使用箭头函数
      // 箭头函数并没有 this
      "prefer-arrow-callback": "off",
  
      // prefer-const:建议使用const
      // const变量从不会被重新赋值”，从而减少认知负荷，提高可维护性
      // destructuring: any 在解构中，任何变量都应该是const
      // ignoreReadBeforeAssign: true 忽略声明和第一次赋值之间的变量
      "prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: true }],
  
      //prefer-destructuring:  要求使用 const 声明那些声明后不再被修改的变量
      "prefer-destructuring": "off",
  
      // prefer-numeric-literals: 强制使用解构而不是通过成员表达式访问属性
      // 解构：从数组索引或对象属性创建变量
      "prefer-numeric-literals": "error",
  
      // prefer-rest-params：要求使用剩余参数而不是 arguments
      // 错误写法： function foo() { console.log(arguments);}
      // 正确写法： function foo(...args) { console.log(args);}
      "prefer-rest-params": "error",
  
      // prefer-spread：要求使用扩展运算符而非 .apply()
      // 错误写法：Math.max.apply(Math, args);
      // 正确写法：Math.max(...args);
      "prefer-spread": "warn",
  
      // prefer-template：要求使用模板字面量而非字符串连接
      // 错误写法：var str = "Hello, " + name + "!";
      // 正确写法：var str = `Hello, ${name}!`;
      "prefer-template": "error",
  
      // require-yield：要求 generator 函数内有 yield
      "require-yield": "error",
  
      // rest-spread-spacing：强制剩余和扩展运算符及其表达式之间不能有空格
      // 错误写法：[... arr, 4, 5, 6]
      // 正确写法：[...arr, 4, 5, 6]
      "rest-spread-spacing": ["error", "never"],
  
      // sort-imports：强制模块内的 import 排序
      // 验证所有的 import 都是首先按照使用的成员语法排序，其次是按照第一个成员或别名的字母顺序排序
      "sort-imports": "off",
  
      // symbol-description：要求 symbol 描述
      // 错误写法：var foo = Symbol();
      // 正确写法：var foo = Symbol("some description");
      "symbol-description": "error",
  
      // template-curly-spacing：禁止模板字符串中的嵌入表达式周围空格的使用
      // 错误写法：`hello, ${ people.name}!`
      // 正确写法：`hello, ${people.name}!`
      "template-curly-spacing": "error",
  
      // yield-star-spacing：强制在 yield* 表达式中 * 周围使用空格
      // after：在yield*后留1空格
      "yield-star-spacing": ["error", "after"]
    },
    //解析器配置
    //当前使用的ECMAScript版本
    //当前支持的模块化import和export
    parserOptions: { ecmaVersion: 8, sourceType: "module" }
 }  