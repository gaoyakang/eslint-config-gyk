/**
 * 适用于 JavaScript代码中可能的错误或逻辑错误 的规则
 */
 module.exports = {
    rules: {
      // for-direction: 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
      // 错误写法：for (var i = 0; i < 10; i--) 
      // 正确写法：for (var i = 0; i < 10; i++) 
      "for-direction":"error",
      
      // getter-return：强制 getter 函数中出现 return 语句
      "getter-return":"error",
      
      // no-async-promise-executor :禁止使用异步函数作为 Promise executor
      // new Promise()传参不可以是async function函数
      "no-async-promise-executor":"error",

      // no-await-in-loop：禁止在循环中出现 await
      // 在迭代器的每个元素上执行运算时禁止每次运算都执行 await
      // 可以将每个元素赋值给中间变量result，最后await Promise.all(result）
      // http://eslint.cn/docs/rules/no-await-in-loop
      "no-await-in-loop": "error",
  
      // no-compare-neg-zero：禁止与 -0 进行比较
      "no-compare-neg-zero": "off",
  
      // no-cond-assign：禁止条件表达式中出现赋值操作符
      // 禁止在 if、for、while 和 do...while 语句中出现模棱两可的赋值操作符
      // 因为在条件语句中，很容易将一个比较运算符（像 ==）错写成赋值运算符（如 =
      "no-cond-assign": ["error", "always"],
  
      // no-console：禁止使用console
      "no-console": "off",
  
      // no-constant-condition：禁止在条件中使用常量表达式
      // 比如if (false) 是不被允许的
      "no-constant-condition": "warn",
  
      // no-control-regex：禁止在正则表达式中使用控制字符
      // 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误
      // 错误例子：var pattern1 = /\x1f/;
      "no-control-regex": "error",
  
      // no-debugger：禁用 debugger
      // 随着现代调试和开发工具的出现，使用调试器已不是最佳实践
      "no-debugger": "error",
  
      // no-dupe-args：禁止 function 定义中出现重名参数
      "no-dupe-args": "error",
  
      // no-dupe-keys：禁止对象字面量中出现重复的 key
      "no-dupe-keys": "error",
  
      // no-duplicate-case：禁止出现重复的 case 标签
      "no-duplicate-case": "error",
  
      // no-empty：禁止出现空语句块
      // 比如： if (foo) { }
      "no-empty": "error",
  
      // no-empty-character-class：禁止在正则表达式中使用空字符集
      "no-empty-character-class": "error",
  
      // no-ex-assign：禁止对 catch 子句的参数重新赋值
      // catch的e参数不能被重新赋值
      "no-ex-assign": "error",
  
      // no-extra-boolean-cast：禁止不必要的布尔转换
      // 错误代码：var foo = !!!bar;
      "no-extra-boolean-cast": "error",
  
      // no-extra-parens: 禁止不必要的括号
      // 只在 函数表达式周围禁止不必要的圆括号
      "no-extra-parens": ["error", "functions"],
  
      // no-extra-semi: 禁止不必要的分号
      "no-extra-semi": "error",
  
      // no-func-assign:禁止对 function 声明重新赋值
      // 错误写法：function foo() {} foo = bar;
      // 正确写法：var foo = function () {} foo = bar;
      "no-func-assign": "error",
  
      // no-inner-declarations：禁止在嵌套的块中出现变量声明或 function 声明
      "no-inner-declarations": ["error", "functions"],
  
      // no-invalid-regexp：禁止 RegExp 构造函数中存在无效的正则表达式字符串
      "no-invalid-regexp": "error",
  
      // no-irregular-whitespace：禁止不规则的空白
      "no-irregular-whitespace": "error",
      
      // no-misleading-character-class：不允许在字符类语法中出现由多个代码点组成的字符
      // http://eslint.cn/docs/rules/no-misleading-character-class
      "no-misleading-character-class":"error",

      // no-obj-calls：禁止把全局对象作为函数调用
      // 禁止将 Math、JSON 和 Reflect 对象当作函数进行调用。
      // 错误写法：var math = Math();
      // 正确写法：Math.PI * r * r;
      "no-obj-calls": "error",
  
      // no-prototype-builtins：禁止直接在对象实例上调用 Object.prototype 的内置属性
      // 错误写法：var hasBarProperty = foo.hasOwnProperty("bar");
      // 正确写法：var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");
      "no-prototype-builtins": "off",
  
      // no-regex-spaces：禁止正则表达式字面量中出现多个空格
      // 错误写法： var re = /foo   bar/;
      // 正确写法：var re = /foo {3}bar/;
      "no-regex-spaces": "error",
  
      // no-sparse-arrays：禁用稀疏数组
      // 错误写法：var colors = [ "red",, "blue" ];
      "no-sparse-arrays": "error",
  
      // no-template-curly-in-string： 禁止在常规字符串中出现模板字面量占位符语法
      // 对常规字符串中包含看起来像是模板字面量占位符的情况发出警告
      "no-template-curly-in-string": "error",
  
      // no-unexpected-multiline:禁止出现令人困惑的多行表达式
      // http://eslint.cn/docs/rules/no-unexpected-multiline
      "no-unexpected-multiline": "error",
  
      // no-unreachable:禁止在 return、throw、continue 和 break 语句之后出现不可达代码
      "no-unreachable": "error",
  
      // no-unsafe-finally:禁止在 finally 语句块中出现控制流语句
      "no-unsafe-finally": "error",
  
      // no-unsafe-negation:禁止对关系运算符的左操作数使用否定操作符
      // 错误写法：if (!key in object) 
      // 正确写法：if (!(key in object)) 
      "no-unsafe-negation": "error",
  
      // use-isnan：要求使用 isNaN() 检查 NaN
      "use-isnan": "error",
  
      // valid-jsdoc：已经被废弃
      // "valid-jsdoc": "off",
  
      // valid-typeof：强制 typeof 表达式与有效的字符串进行比较
      // requireStringLiterals:比较的内容必须写在“”中，比如typeof foo === undefined是错误的，应该是typeof foo === ”undefined“
      // 错误写法：typeof foo === "strnig"
      // 正确写法：typeof foo === "string"
      "valid-typeof": ["error", { requireStringLiterals: true }],
    }
  }


