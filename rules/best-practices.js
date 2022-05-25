/**
 * 适用于 的规则
 * These rules relate to better ways of doing things to help you avoid problems
 */
 module.exports = {
    rules: {
      // accessor-pairs: 关闭强制 getter 和 setter 在对象中成对出现
      "accessor-pairs": "off",
  
      // array-callback-return： 强制数组方法的回调函数中有 return 语句
      "array-callback-return": "error",
  
      // block-scoped-var：强制把变量的使用限制在其定义的作用域范围内
      "block-scoped-var": "error",
  
      // class-methods-use-this：强制类方法使用 this
      "class-methods-use-this": "error",
  
      // complexity：关闭指定程序中允许的最大环路复杂度
      // 圈复杂度数量上表现为覆盖所有代码的独立现行路径条数。
      // 通过在项目中设置一个圈复杂度阈值来控制代码的复杂度
      "complexity": "off",
  
      // 关闭要求 return 语句要么总是指定返回的值，要么不指定
      "consistent-return": "off",
  
      // curly：强制所有控制语句使用一致的括号风格
      // if (foo) foo++; else doSomething();
      "curly": ["error", "multi-line"],
  
      // default-case：	要求 switch 语句中有 default 分支
      "default-case": "off",
  
      // dot-location: 强制在点号之前和之后一致的换行
      // property 表达式中的点号操作符应该和属性在同一行。
      // var bar = object.property;
      "dot-location": ["error", "property"],
  
      // dot-notation:强制尽可能地使用点号
      // 错误：var x = foo["bar"];
      // 正确：var x = foo.bar
      "dot-notation": ["error", { allowKeywords: true }],
  
      // reqeqeq：要求使用 === 和 !==
      // 错误：if (x == 42) { }
      // 正确：if (x === 42) { }
      "eqeqeq": ["error", "always", { null: "ignore" }],
  
      // guard-for-in：要求 for-in 循环中有一个 if 语句
      "guard-for-in": "off",
      
      //强制每个文件中包含的的类的最大数量
      "max-classes-per-file":"off",


      // no-alert：不允许alert
      "no-alert": "off",
  
      // no-caller：禁用 arguments.caller 或 arguments.callee
      "no-caller": "error",
  
      // no-case-declarations：不允许在 case 子句中使用词法声明
      "no-case-declarations": "error",
  
      // no-div-regex：禁止除法操作符显式的出现在正则表达式开始的位置
      "no-div-regex": "off",
  
      // no-else-return:禁止 if 语句中 return 语句之后有 else 块
      "no-else-return": "error",
  
      // no-empty-functio:禁止出现空函数
      "no-empty-function": ["error", {
        allow: [
          "arrowFunctions",
          "functions",
          "methods",
        ]
      }],
  
      // no-empty-pattern: 禁止使用空解构模式
      "no-empty-pattern": "error",
  
      // no-eq-null：禁止在没有类型检查操作符的情况下与 null 进行比较
      "no-eq-null": "off",
  
      // no-eval：禁用 eval()
      "no-eval": "error",
  
      // no-extend-native：禁止扩展原生类型
      "no-extend-native": "error",
  
      // no-extra-bin：禁止不必要的 .bind() 调用
      "no-extra-bind": "error",
  
      // no-extra-label：禁用不必要的标签
      "no-extra-label": "error",
  
      // no-fallthrough：禁止 case 语句落空
      "no-fallthrough": "error",
  
      // no-floating-decimal：禁止数字字面量中使用前导和末尾小数点
      "no-floating-decimal": "error",
  
      // no-global-assign：禁止对原生对象或只读的全局对象进行赋值
      "no-global-assign": "error",
  
      // no-implicit-coercion：禁止使用短符号进行类型转换
      "no-implicit-coercion": "off",
  
      // no-implicit-globals：禁止在全局范围内使用变量声明和 function 声明
      "no-implicit-globals": "off",
  
      // 禁止使用类似 eval() 的方法
      "no-implied-eval": "error",
  
      // 禁止 this 关键字出现在类和类对象之外
      "no-invalid-this": "off",
  
      // 禁用 __iterator__ 属性
      "no-iterator": "error",
  
      // 禁用标签语句
      // allowLoop：忽略循环语句中的标签
      // allowSwitch：忽略switch语句中的标签
      "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
  
      // 禁用不必要的嵌套块
      "no-lone-blocks": "error",
  
      // no-loop-func：禁止在循环语句中出现包含不安全引用的函数声明
      "no-loop-func": "error",
  
      // no-magic-numbers：禁用魔术数字
      // 魔术数字是在代码中多次出现的没有明确含义的数字
      "no-magic-numbers": "off",
  
      // 禁止使用多个空格
      "no-multi-spaces": "error",
  
      // no-multi-str：禁止使用多行字符串
      "no-multi-str": "error",
  
      // 禁止使用 new 以避免产生副作用
      "no-new": "error",
  
      // disallow function constructor
      "no-new-func": "error",
  
      // disallow primitive wrapper instances
      "no-new-wrappers": "error",
  
      // disallow use of (old style) octal literals
      "no-octal": "error",
  
      // disallow use of octal escape sequences in string literals, such as
      // var foo = "Copyright \251";
      "no-octal-escape": "error",
  
      // disallow reassignment of function parameters
      "no-param-reassign": "off",
  
      // disallow use of __proto__ property
      "no-proto": "error",
  
      // disallow variable redeclaration
      "no-redeclare": "error",
  
      // disallow certain object properties
      "no-restricted-properties": ["error", {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      }, {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      }, {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      }],
  
      // disallow assignment in return statement
      "no-return-assign": "error",
  
      // disallows unnecessary return await
      "no-return-await": "error",
  
      // disallow script URLs
      // such as: location.href = "javascript:void(0)"
      "no-script-url": "error",
  
      // disallow self assignment
      "no-self-assign": "error",
  
      // disallow self compare
      "no-self-compare": "error",
  
      // disallow use of comma operator
      "no-sequences": "error",
  
      // restrict what can be thrown as an exception
      "no-throw-literal": "error",
  
      // disallow unmodified conditions of loops
      "no-unmodified-loop-condition": "off",
  
      // disallow unused expressions
      "no-unused-expressions": ["error", {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }],
  
      // disallow unused labels
      "no-unused-labels": "error",
  
      // disallow unnecessary .call() and .apply()
      "no-useless-call": "error",
  
      // disallow useless string concatenation
      "no-useless-concat": "error",
  
      // disallow unnecessary string escaping
      "no-useless-escape": "error",
  
      // disallow redundant return statements
      "no-useless-return": "error",
  
      // disallow use of void operator
      "no-void": "error",
  
      // disallow warning comments
      "no-warning-comments": "off",
  
      // disallow with statements
      "no-with": "error",
  
      // require using Error objects as Promise rejection reasons
      "prefer-promise-reject-errors": ["off", { allowEmptyReject: true }],
  
      // require radix parameter
      "radix": "off",
  
      // disallow async functions which have no await expression
      "require-await": "off",
  
      // require variable declarations to be at the top of their scope
      "vars-on-top": "off",
  
      // require IIFEs to be wrapped
      "wrap-iife": ["error", "any", { functionPrototypeMethods: true }],
  
      // require or disallow Yoda conditions
      "yoda": ["error", "never"]
    }
  }