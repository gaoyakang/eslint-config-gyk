
//TODO 读取./rules/*.js文件,找出rule:desc后与数据比对查看是否有新规则更新或者被废弃
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');




function get_all_rules(filename){
    return new Promise((resolve,reject) => {
        let len=0;
        let arr=[];
        //创建读取对象
        const rl = readline.createInterface({
            input: fs.createReadStream('./rules/'+filename+'.js'),
            output: process.stdout,
            terminal: false
        });
        
        //开始读取
        rl.on('line', (line) => {
            //去除空行
            if(line.length!=0){
                //跳过注释
                if(!line.includes("//") && line.includes('"')){
                    len++
                    //去除key值前的空格
                    line = line.slice(6,line.length-1);
                    //提取key和value
                    let split_position = line.indexOf(":");
                    let key = line.slice(0,split_position);
                    let value = line.slice(split_position+1,line.length)
                    let obj = {
                        "rule":key,
                        "desc":value
                    }
                    arr.push(obj)
                }
            }
        })

        //读取结束
        rl.on("close",() => {
            resolve(arr)
            // for(let i=0;i<arr.length;i++){
            //     console.log(`${arr[i]["rule"]}"`)
            //     console.log(`${arr[i]["desc"]}"`)
            // }
            // console.log(len);
        })
        })
    
}

let file_arr = ['best-practices','errors','es6','node','strict','style','variables'];
let func_arr = []
for(let n=0;n<file_arr.length;n++)[
    func_arr.push(get_all_rules(file_arr[n]))
]

Promise.all(func_arr).then(data => {
    console.log(data);
})



function test(){
    [
      {
          "Possible Errors表第1条：": {
              "rule": "for-direction",
              "desc": "强制 “for” 循环中更新子句的计数器朝着正确的方向移动"
          }
      },
      {
          "Possible Errors表第2条：": {
              "rule": "getter-return",
              "desc": "强制 getter 函数中出现 return 语句"
          }
      },
      {
          "Possible Errors表第3条：": {
              "rule": "no-async-promise-executor",
              "desc": "禁止使用异步函数作为 Promise executor"
          }
      },
      {
          "Possible Errors表第4条：": {
              "rule": "no-await-in-loop",
              "desc": "禁止在循环中出现 awaitawait"
          }
      },
      {
          "Possible Errors表第5条：": {
              "rule": "no-compare-neg-zero",
              "desc": "禁止与 -0 进行比较"
          }
      },
      {
          "Possible Errors表第6条：": {
              "rule": "no-cond-assign",
              "desc": "禁止条件表达式中出现赋值操作符"
          }
      },
      {
          "Possible Errors表第7条：": {
              "rule": "no-console",
              "desc": "禁用 consoleconsole"
          }
      },
      {
          "Possible Errors表第8条：": {
              "rule": "no-constant-condition",
              "desc": "禁止在条件中使用常量表达式"
          }
      },
      {
          "Possible Errors表第9条：": {
              "rule": "no-control-regex",
              "desc": "禁止在正则表达式中使用控制字符"
          }
      },
      {
          "Possible Errors表第10条：": {
              "rule": "no-debugger",
              "desc": "禁用 debuggerdebugger"
          }
      },
      {
          "Possible Errors表第11条：": {
              "rule": "no-dupe-args",
              "desc": "禁止 function 定义中出现重名参数"
          }
      },
      {
          "Possible Errors表第12条：": {
              "rule": "no-dupe-keys",
              "desc": "禁止对象字面量中出现重复的 key"
          }
      },
      {
          "Possible Errors表第13条：": {
              "rule": "no-duplicate-case",
              "desc": "禁止出现重复的 case 标签"
          }
      },
      {
          "Possible Errors表第14条：": {
              "rule": "no-empty",
              "desc": "禁止出现空语句块"
          }
      },
      {
          "Possible Errors表第15条：": {
              "rule": "no-empty-character-class",
              "desc": "禁止在正则表达式中使用空字符集"
          }
      },
      {
          "Possible Errors表第16条：": {
              "rule": "no-ex-assign",
              "desc": "禁止对 catch 子句的参数重新赋值"
          }
      },
      {
          "Possible Errors表第17条：": {
              "rule": "no-extra-boolean-cast",
              "desc": "禁止不必要的布尔转换"
          }
      },
      {
          "Possible Errors表第18条：": {
              "rule": "no-extra-parens",
              "desc": "禁止不必要的括号"
          }
      },
      {
          "Possible Errors表第19条：": {
              "rule": "no-extra-semi",
              "desc": "禁止不必要的分号"
          }
      },
      {
          "Possible Errors表第20条：": {
              "rule": "no-func-assign",
              "desc": "禁止对 function 声明重新赋值"
          }
      },
      {
          "Possible Errors表第21条：": {
              "rule": "no-inner-declarations",
              "desc": "禁止在嵌套的块中出现变量声明或 function 声明"
          }
      },
      {
          "Possible Errors表第22条：": {
              "rule": "no-invalid-regexp",
              "desc": "禁止 RegExp 构造函数中存在无效的正则表达式字符串"
          }
      },
      {
          "Possible Errors表第23条：": {
              "rule": "no-irregular-whitespace",
              "desc": "禁止不规则的空白"
          }
      },
      {
          "Possible Errors表第24条：": {
              "rule": "no-misleading-character-class",
              "desc": "不允许在字符类语法中出现由多个代码点组成的字符"
          }
      },
      {
          "Possible Errors表第25条：": {
              "rule": "no-obj-calls",
              "desc": "禁止把全局对象作为函数调用"
          }
      },
      {
          "Possible Errors表第26条：": {
              "rule": "no-prototype-builtins",
              "desc": "禁止直接调用 Object.prototypes 的内置属性"
          }
      },
      {
          "Possible Errors表第27条：": {
              "rule": "no-regex-spaces",
              "desc": "禁止正则表达式字面量中出现多个空格"
          }
      },
      {
          "Possible Errors表第28条：": {
              "rule": "no-sparse-arrays",
              "desc": "禁用稀疏数组"
          }
      },
      {
          "Possible Errors表第29条：": {
              "rule": "no-template-curly-in-string",
              "desc": "禁止在常规字符串中出现模板字面量占位符语法"
          }
      },
      {
          "Possible Errors表第30条：": {
              "rule": "no-unexpected-multiline",
              "desc": "禁止出现令人困惑的多行表达式"
          }
      },
      {
          "Possible Errors表第31条：": {
              "rule": "no-unreachable",
              "desc": "禁止在 ,return,throw,continue,break 语句之后出现不可达代码"
          }
      },
      {
          "Possible Errors表第32条：": {
              "rule": "no-unsafe-finally",
              "desc": "禁止在 finally 语句块中出现控制流语句"
          }
      },
      {
          "Possible Errors表第33条：": {
              "rule": "no-unsafe-negation",
              "desc": "禁止对关系运算符的左操作数使用否定操作符"
          }
      },
      {
          "Possible Errors表第34条：": {
              "rule": "require-atomic-updates",
              "desc": "禁止由于 ,await,yield的使用而可能导致出现竞态条件的赋值"
          }
      },
      {
          "Possible Errors表第35条：": {
              "rule": "use-isnan",
              "desc": "要求使用 ,isNaN(),NaNNaN"
          }
      },
      {
          "Possible Errors表第36条：": {
              "rule": "valid-typeof",
              "desc": "强制 typeof 表达式与有效的字符串进行比较"
          }
      },
      {
          "Best Practices表第1条：": {
              "rule": "accessor-pairs",
              "desc": "强制 getter 和 setter 在对象中成对出现"
          }
      },
      {
          "Best Practices表第2条：": {
              "rule": "array-callback-return",
              "desc": "强制数组方法的回调函数中有 return 语句"
          }
      },
      {
          "Best Practices表第3条：": {
              "rule": "block-scoped-var",
              "desc": "强制把变量的使用限制在其定义的作用域范围内"
          }
      },
      {
          "Best Practices表第4条：": {
              "rule": "class-methods-use-this",
              "desc": "强制类方法使用 thisthis"
          }
      },
      {
          "Best Practices表第5条：": {
              "rule": "complexity",
              "desc": "指定程序中允许的最大环路复杂度"
          }
      },
      {
          "Best Practices表第6条：": {
              "rule": "consistent-return",
              "desc": "要求 return 语句要么总是指定返回的值，要么不指定"
          }
      },
      {
          "Best Practices表第7条：": {
              "rule": "curly",
              "desc": "强制所有控制语句使用一致的括号风格"
          }
      },
      {
          "Best Practices表第8条：": {
              "rule": "default-case",
              "desc": "要求 ,switch,default 分支"
          }
      },
      {
          "Best Practices表第9条：": {
              "rule": "dot-location",
              "desc": "强制在点号之前和之后一致的换行"
          }
      },
      {
          "Best Practices表第10条：": {
              "rule": "dot-notation",
              "desc": "强制尽可能地使用点号"
          }
      },
      {
          "Best Practices表第11条：": {
              "rule": "eqeqeq",
              "desc": "要求使用 ,===,!==!=="
          }
      },
      {
          "Best Practices表第12条：": {
              "rule": "guard-for-in",
              "desc": "要求 ,for-in,if 语句"
          }
      },
      {
          "Best Practices表第13条：": {
              "rule": "max-classes-per-file",
              "desc": "强制每个文件中包含的的类的最大数量"
          }
      },
      {
          "Best Practices表第14条：": {
              "rule": "no-alert",
              "desc": "禁用 ,alert,confirm,promptprompt"
          }
      },
      {
          "Best Practices表第15条：": {
              "rule": "no-caller",
              "desc": "禁用 ,arguments.caller,arguments.calleearguments.callee"
          }
      },
      {
          "Best Practices表第16条：": {
              "rule": "no-case-declarations",
              "desc": "不允许在 case 子句中使用词法声明"
          }
      },
      {
          "Best Practices表第17条：": {
              "rule": "no-div-regex",
              "desc": "禁止除法操作符显式的出现在正则表达式开始的位置"
          }
      },
      {
          "Best Practices表第18条：": {
              "rule": "no-else-return",
              "desc": "禁止 ,if,return,else 块"
          }
      },
      {
          "Best Practices表第19条：": {
              "rule": "no-empty-function",
              "desc": "禁止出现空函数"
          }
      },
      {
          "Best Practices表第20条：": {
              "rule": "no-empty-pattern",
              "desc": "禁止使用空解构模式"
          }
      },
      {
          "Best Practices表第21条：": {
              "rule": "no-eq-null",
              "desc": "禁止在没有类型检查操作符的情况下与 null 进行比较"
          }
      },
      {
          "Best Practices表第22条：": {
              "rule": "no-eval",
              "desc": "禁用 eval()eval()"
          }
      },
      {
          "Best Practices表第23条：": {
              "rule": "no-extend-native",
              "desc": "禁止扩展原生类型"
          }
      },
      {
          "Best Practices表第24条：": {
              "rule": "no-extra-bind",
              "desc": "禁止不必要的 .bind() 调用"
          }
      },
      {
          "Best Practices表第25条：": {
              "rule": "no-extra-label",
              "desc": "禁用不必要的标签"
          }
      },
      {
          "Best Practices表第26条：": {
              "rule": "no-fallthrough",
              "desc": "禁止 case 语句落空"
          }
      },
      {
          "Best Practices表第27条：": {
              "rule": "no-floating-decimal",
              "desc": "禁止数字字面量中使用前导和末尾小数点"
          }
      },
      {
          "Best Practices表第28条：": {
              "rule": "no-global-assign",
              "desc": "禁止对原生对象或只读的全局对象进行赋值"
          }
      },
      {
          "Best Practices表第29条：": {
              "rule": "no-implicit-coercion",
              "desc": "禁止使用短符号进行类型转换"
          }
      },
      {
          "Best Practices表第30条：": {
              "rule": "no-implicit-globals",
              "desc": "禁止在全局范围内使用变量声明和 function 声明"
          }
      },
      {
          "Best Practices表第31条：": {
              "rule": "no-implied-eval",
              "desc": "禁止使用类似 eval() 的方法"
          }
      },
      {
          "Best Practices表第32条：": {
              "rule": "no-invalid-this",
              "desc": "禁止 this 关键字出现在类和类对象之外"
          }
      },
      {
          "Best Practices表第33条：": {
              "rule": "no-iterator",
              "desc": "禁用 __iterator__ 属性"
          }
      },
      {
          "Best Practices表第34条：": {
              "rule": "no-labels",
              "desc": "禁用标签语句"
          }
      },
      {
          "Best Practices表第35条：": {
              "rule": "no-lone-blocks",
              "desc": "禁用不必要的嵌套块"
          }
      },
      {
          "Best Practices表第36条：": {
              "rule": "no-loop-func",
              "desc": "禁止在循环语句中出现包含不安全引用的函数声明"
          }
      },
      {
          "Best Practices表第37条：": {
              "rule": "no-magic-numbers",
              "desc": "禁用魔术数字"
          }
      },
      {
          "Best Practices表第38条：": {
              "rule": "no-multi-spaces",
              "desc": "禁止使用多个空格"
          }
      },
      {
          "Best Practices表第39条：": {
              "rule": "no-multi-str",
              "desc": "禁止使用多行字符串"
          }
      },
      {
          "Best Practices表第40条：": {
              "rule": "no-new",
              "desc": "禁止使用 new 以避免产生副作用"
          }
      },
      {
          "Best Practices表第41条：": {
              "rule": "no-new-func",
              "desc": "禁止对 ,Function,new 操作符"
          }
      },
      {
          "Best Practices表第42条：": {
              "rule": "no-new-wrappers",
              "desc": "禁止对 ,String,Number,Boolean,new 操作符"
          }
      },
      {
          "Best Practices表第43条：": {
              "rule": "no-octal",
              "desc": "禁用八进制字面量"
          }
      },
      {
          "Best Practices表第44条：": {
              "rule": "no-octal-escape",
              "desc": "禁止在字符串中使用八进制转义序列"
          }
      },
      {
          "Best Practices表第45条：": {
              "rule": "no-param-reassign",
              "desc": "禁止对 function 的参数进行重新赋值"
          }
      },
      {
          "Best Practices表第46条：": {
              "rule": "no-proto",
              "desc": "禁用 __proto__ 属性"
          }
      },
      {
          "Best Practices表第47条：": {
              "rule": "no-redeclare",
              "desc": "禁止多次声明同一变量"
          }
      },
      {
          "Best Practices表第48条：": {
              "rule": "no-restricted-properties",
              "desc": "禁止使用对象的某些属性"
          }
      },
      {
          "Best Practices表第49条：": {
              "rule": "no-return-assign",
              "desc": "禁止在 return 语句中使用赋值语句"
          }
      },
      {
          "Best Practices表第50条：": {
              "rule": "no-return-await",
              "desc": "禁用不必要的 return awaitreturn await"
          }
      },
      {
          "Best Practices表第51条：": {
              "rule": "no-script-url",
              "desc": "禁止使用 javascript: url"
          }
      },
      {
          "Best Practices表第52条：": {
              "rule": "no-self-assign",
              "desc": "禁止自我赋值"
          }
      },
      {
          "Best Practices表第53条：": {
              "rule": "no-self-compare",
              "desc": "禁止自身比较"
          }
      },
      {
          "Best Practices表第54条：": {
              "rule": "no-sequences",
              "desc": "禁用逗号操作符"
          }
      },
      {
          "Best Practices表第55条：": {
              "rule": "no-throw-literal",
              "desc": "禁止抛出异常字面量"
          }
      },
      {
          "Best Practices表第56条：": {
              "rule": "no-unmodified-loop-condition",
              "desc": "禁用一成不变的循环条件"
          }
      },
      {
          "Best Practices表第57条：": {
              "rule": "no-unused-expressions",
              "desc": "禁止出现未使用过的表达式"
          }
      },
      {
          "Best Practices表第58条：": {
              "rule": "no-unused-labels",
              "desc": "禁用出现未使用过的标"
          }
      },
      {
          "Best Practices表第59条：": {
              "rule": "no-useless-call",
              "desc": "禁止不必要的 ,.call(),.apply().apply()"
          }
      },
      {
          "Best Practices表第60条：": {
              "rule": "no-useless-catch",
              "desc": "禁止不必要的 catch 子句"
          }
      },
      {
          "Best Practices表第61条：": {
              "rule": "no-useless-concat",
              "desc": "禁止不必要的字符串字面量或模板字面量的连接"
          }
      },
      {
          "Best Practices表第62条：": {
              "rule": "no-useless-escape",
              "desc": "禁用不必要的转义字符"
          }
      },
      {
          "Best Practices表第63条：": {
              "rule": "no-useless-return",
              "desc": "禁止多余的 return 语句"
          }
      },
      {
          "Best Practices表第64条：": {
              "rule": "no-void",
              "desc": "禁用 void 操作符"
          }
      },
      {
          "Best Practices表第65条：": {
              "rule": "no-warning-comments",
              "desc": "禁止在注释中使用特定的警告术语"
          }
      },
      {
          "Best Practices表第66条：": {
              "rule": "no-with",
              "desc": "禁用 with 语句"
          }
      },
      {
          "Best Practices表第67条：": {
              "rule": "prefer-named-capture-group",
              "desc": "建议在正则表达式中使用命名捕获组"
          }
      },
      {
          "Best Practices表第68条：": {
              "rule": "prefer-promise-reject-errors",
              "desc": "要求使用 Error 对象作为 Promise 拒绝的原因"
          }
      },
      {
          "Best Practices表第69条：": {
              "rule": "radix",
              "desc": "强制在 parseInt() 使用基数参数"
          }
      },
      {
          "Best Practices表第70条：": {
              "rule": "require-await",
              "desc": "禁止使用不带 await 表达式的 async 函数"
          }
      },
      {
          "Best Practices表第71条：": {
              "rule": "require-unicode-regexp",
              "desc": "强制在 RegExp 上使用 u 标志"
          }
      },
      {
          "Best Practices表第72条：": {
              "rule": "vars-on-top",
              "desc": "要求所有的 var 声明出现在它们所在的作用域顶部"
          }
      },
      {
          "Best Practices表第73条：": {
              "rule": "wrap-iife",
              "desc": "要求 IIFE 使用括号括起来"
          }
      },
      {
          "Best Practices表第74条：": {
              "rule": "yoda",
              "desc": "要求或禁止 “Yoda” 条件"
          }
      },
      {
          "Strict Mode表第1条：": {
              "rule": "strict",
              "desc": "要求或禁止使用严格模式指令"
          }
      },
      {
          "Variables表第1条：": {
              "rule": "init-declarations",
              "desc": "要求或禁止 var 声明中的初始化"
          }
      },
      {
          "Variables表第2条：": {
              "rule": "no-delete-var",
              "desc": "禁止删除变量"
          }
      },
      {
          "Variables表第3条：": {
              "rule": "no-label-var",
              "desc": "不允许标签与变量同名"
          }
      },
      {
          "Variables表第4条：": {
              "rule": "no-restricted-globals",
              "desc": "禁用特定的全局变量"
          }
      },
      {
          "Variables表第5条：": {
              "rule": "no-shadow",
              "desc": "禁止变量声明与外层作用域的变量同名"
          }
      },
      {
          "Variables表第6条：": {
              "rule": "no-shadow-restricted-names",
              "desc": "禁止将标识符定义为受限的名字"
          }
      },
      {
          "Variables表第7条：": {
              "rule": "no-undef",
              "desc": "禁用未声明的变量，除非它们在 /*global */ 注释中被提到"
          }
      },
      {
          "Variables表第8条：": {
              "rule": "no-undef-init",
              "desc": "禁止将变量初始化为 undefinedundefined"
          }
      },
      {
          "Variables表第9条：": {
              "rule": "no-undefined",
              "desc": "禁止将 undefined 作为标识符"
          }
      },
      {
          "Variables表第10条：": {
              "rule": "no-unused-vars",
              "desc": "禁止出现未使用过的变量"
          }
      },
      {
          "Variables表第11条：": {
              "rule": "no-use-before-define",
              "desc": "禁止在变量定义之前使用它们"
          }
      },
      {
          "Node.js and CommonJS表第1条：": {
              "rule": "callback-return",
              "desc": "强制数组方法的回调函数中有 return 语句"
          }
      },
      {
          "Node.js and CommonJS表第2条：": {
              "rule": "global-require",
              "desc": "要求 require() 出现在顶层模块作用域中"
          }
      },
      {
          "Node.js and CommonJS表第3条：": {
              "rule": "handle-callback-err",
              "desc": "要求回调函数中有容错处理"
          }
      },
      {
          "Node.js and CommonJS表第4条：": {
              "rule": "no-buffer-constructor",
              "desc": "禁用 Buffer() 构造函数"
          }
      },
      {
          "Node.js and CommonJS表第5条：": {
              "rule": "no-mixed-requires",
              "desc": "禁止混合常规变量声明和 require 调用"
          }
      },
      {
          "Node.js and CommonJS表第6条：": {
              "rule": "no-new-require",
              "desc": "禁止调用 ,require,new 操作符"
          }
      },
      {
          "Node.js and CommonJS表第7条：": {
              "rule": "no-path-concat",
              "desc": "禁止对 ,__dirname,__filename 进行字符串连接"
          }
      },
      {
          "Node.js and CommonJS表第8条：": {
              "rule": "no-process-env",
              "desc": "禁用 process.envprocess.env"
          }
      },
      {
          "Node.js and CommonJS表第9条：": {
              "rule": "no-process-exit",
              "desc": "禁用 process.exit()process.exit()"
          }
      },
      {
          "Node.js and CommonJS表第10条：": {
              "rule": "no-restricted-modules",
              "desc": "禁用通过 require 加载的指定模块"
          }
      },
      {
          "Node.js and CommonJS表第11条：": {
              "rule": "no-sync",
              "desc": "禁用同步方法"
          }
      },
      {
          "Stylistic Issues表第1条：": {
              "rule": "array-bracket-newline",
              "desc": "在数组开括号后和闭括号前强制换行"
          }
      },
      {
          "Stylistic Issues表第2条：": {
              "rule": "array-bracket-spacing",
              "desc": "强制数组方括号中使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第3条：": {
              "rule": "array-element-newline",
              "desc": "强制数组元素间出现换行"
          }
      },
      {
          "Stylistic Issues表第4条：": {
              "rule": "block-spacing",
              "desc": "禁止或强制在代码块中开括号前和闭括号后有空格"
          }
      },
      {
          "Stylistic Issues表第5条：": {
              "rule": "brace-style",
              "desc": "强制在代码块中使用一致的大括号风格"
          }
      },
      {
          "Stylistic Issues表第6条：": {
              "rule": "camelcase",
              "desc": "强制使用骆驼拼写法命名约定"
          }
      },
      {
          "Stylistic Issues表第7条：": {
              "rule": "capitalized-comments",
              "desc": "强制或禁止对注释的第一个字母大写"
          }
      },
      {
          "Stylistic Issues表第8条：": {
              "rule": "comma-dangle",
              "desc": "要求或禁止末尾逗号"
          }
      },
      {
          "Stylistic Issues表第9条：": {
              "rule": "comma-spacing",
              "desc": "强制在逗号前后使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第10条：": {
              "rule": "comma-style",
              "desc": "强制使用一致的逗号风格"
          }
      },
      {
          "Stylistic Issues表第11条：": {
              "rule": "computed-property-spacing",
              "desc": "强制在计算的属性的方括号中使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第12条：": {
              "rule": "consistent-this",
              "desc": "当获取当前执行环境的上下文时，强制使用一致的命名"
          }
      },
      {
          "Stylistic Issues表第13条：": {
              "rule": "eol-last",
              "desc": "要求或禁止文件末尾存在空行"
          }
      },
      {
          "Stylistic Issues表第14条：": {
              "rule": "func-call-spacing",
              "desc": "要求或禁止在函数标识符和其调用之间有空格"
          }
      },
      {
          "Stylistic Issues表第15条：": {
              "rule": "func-name-matching",
              "desc": "要求函数名与赋值给它们的变量名或属性名相匹配"
          }
      },
      {
          "Stylistic Issues表第16条：": {
              "rule": "func-names",
              "desc": "要求或禁止使用命名的 function 表达式"
          }
      },
      {
          "Stylistic Issues表第17条：": {
              "rule": "func-style",
              "desc": "强制一致地使用 function 声明或表达式"
          }
      },
      {
          "Stylistic Issues表第18条：": {
              "rule": "function-paren-newline",
              "desc": "强制在函数括号内使用一致的换行"
          }
      },
      {
          "Stylistic Issues表第19条：": {
              "rule": "id-blacklist",
              "desc": "禁用指定的标识符"
          }
      },
      {
          "Stylistic Issues表第20条：": {
              "rule": "id-length",
              "desc": "强制标识符的最小和最大长度"
          }
      },
      {
          "Stylistic Issues表第21条：": {
              "rule": "id-match",
              "desc": "要求标识符匹配一个指定的正则表达式"
          }
      },
      {
          "Stylistic Issues表第22条：": {
              "rule": "implicit-arrow-linebreak",
              "desc": "强制隐式返回的箭头函数体的位置"
          }
      },
      {
          "Stylistic Issues表第23条：": {
              "rule": "indent",
              "desc": "强制使用一致的缩进"
          }
      },
      {
          "Stylistic Issues表第24条：": {
              "rule": "jsx-quotes",
              "desc": "强制在 JSX 属性中一致地使用双引号或单引号"
          }
      },
      {
          "Stylistic Issues表第25条：": {
              "rule": "key-spacing",
              "desc": "强制在对象字面量的属性中键和值之间使用一致的间距"
          }
      },
      {
          "Stylistic Issues表第26条：": {
              "rule": "keyword-spacing",
              "desc": "强制在关键字前后使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第27条：": {
              "rule": "line-comment-position",
              "desc": "强制行注释的位置"
          }
      },
      {
          "Stylistic Issues表第28条：": {
              "rule": "linebreak-style",
              "desc": "强制使用一致的换行风格"
          }
      },
      {
          "Stylistic Issues表第29条：": {
              "rule": "lines-around-comment",
              "desc": "要求在注释周围有空行"
          }
      },
      {
          "Stylistic Issues表第30条：": {
              "rule": "lines-between-class-members",
              "desc": "要求或禁止类成员之间出现空行"
          }
      },
      {
          "Stylistic Issues表第31条：": {
              "rule": "max-depth",
              "desc": "强制可嵌套的块的最大深度"
          }
      },
      {
          "Stylistic Issues表第32条：": {
              "rule": "max-len",
              "desc": "强制一行的最大长度"
          }
      },
      {
          "Stylistic Issues表第33条：": {
              "rule": "max-lines",
              "desc": "强制最大行数"
          }
      },
      {
          "Stylistic Issues表第34条：": {
              "rule": "max-lines-per-function",
              "desc": "强制函数最大代码行数"
          }
      },
      {
          "Stylistic Issues表第35条：": {
              "rule": "max-nested-callbacks",
              "desc": "强制回调函数最大嵌套深度"
          }
      },
      {
          "Stylistic Issues表第36条：": {
              "rule": "max-params",
              "desc": "强制函数定义中最多允许的参数数量"
          }
      },
      {
          "Stylistic Issues表第37条：": {
              "rule": "max-statements",
              "desc": "强制函数块最多允许的的语句数量"
          }
      },
      {
          "Stylistic Issues表第38条：": {
              "rule": "max-statements-per-line",
              "desc": "强制每一行中所允许的最大语句数量"
          }
      },
      {
          "Stylistic Issues表第39条：": {
              "rule": "multiline-comment-style",
              "desc": "强制对多行注释使用特定风格"
          }
      },
      {
          "Stylistic Issues表第40条：": {
              "rule": "multiline-ternary",
              "desc": "要求或禁止在三元操作数中间换行"
          }
      },
      {
          "Stylistic Issues表第41条：": {
              "rule": "new-cap",
              "desc": "要求构造函数首字母大写"
          }
      },
      {
          "Stylistic Issues表第42条：": {
              "rule": "new-parens",
              "desc": "强制或禁止调用无参构造函数时有圆括号"
          }
      },
      {
          "Stylistic Issues表第43条：": {
              "rule": "newline-per-chained-call",
              "desc": "要求方法链中每个调用都有一个换行符"
          }
      },
      {
          "Stylistic Issues表第44条：": {
              "rule": "no-array-constructor",
              "desc": "禁用 Array 构造函数"
          }
      },
      {
          "Stylistic Issues表第45条：": {
              "rule": "no-bitwise",
              "desc": "禁用按位运算符"
          }
      },
      {
          "Stylistic Issues表第46条：": {
              "rule": "no-continue",
              "desc": "禁用 continue 语句"
          }
      },
      {
          "Stylistic Issues表第47条：": {
              "rule": "no-inline-comments",
              "desc": "禁止在代码后使用内联注释"
          }
      },
      {
          "Stylistic Issues表第48条：": {
              "rule": "no-lonely-if",
              "desc": "禁止 ,if,else 语句中"
          }
      },
      {
          "Stylistic Issues表第49条：": {
              "rule": "no-mixed-operators",
              "desc": "禁止混合使用不同的操作符"
          }
      },
      {
          "Stylistic Issues表第50条：": {
              "rule": "no-mixed-spaces-and-tabs",
              "desc": "禁止空格和 tab 的混合缩进"
          }
      },
      {
          "Stylistic Issues表第51条：": {
              "rule": "no-multi-assign",
              "desc": "禁止连续赋值"
          }
      },
      {
          "Stylistic Issues表第52条：": {
              "rule": "no-multiple-empty-lines",
              "desc": "禁止出现多行空行"
          }
      },
      {
          "Stylistic Issues表第53条：": {
              "rule": "no-negated-condition",
              "desc": "禁用否定的表达式"
          }
      },
      {
          "Stylistic Issues表第54条：": {
              "rule": "no-nested-ternary",
              "desc": "禁用嵌套的三元表达式"
          }
      },
      {
          "Stylistic Issues表第55条：": {
              "rule": "no-new-object",
              "desc": "禁用 Object 的构造函数"
          }
      },
      {
          "Stylistic Issues表第56条：": {
              "rule": "no-plusplus",
              "desc": "禁用一元操作符 ,++,----"
          }
      },
      {
          "Stylistic Issues表第57条：": {
              "rule": "no-restricted-syntax",
              "desc": "禁用特定的语法"
          }
      },
      {
          "Stylistic Issues表第58条：": {
              "rule": "no-tabs",
              "desc": "禁用 tab"
          }
      },
      {
          "Stylistic Issues表第59条：": {
              "rule": "no-ternary",
              "desc": "禁用三元操作符"
          }
      },
      {
          "Stylistic Issues表第60条：": {
              "rule": "no-trailing-spaces",
              "desc": "禁用行尾空格"
          }
      },
      {
          "Stylistic Issues表第61条：": {
              "rule": "no-underscore-dangle",
              "desc": "禁止标识符中有悬空下划线"
          }
      },
      {
          "Stylistic Issues表第62条：": {
              "rule": "no-unneeded-ternary",
              "desc": "禁止可以在有更简单的可替代的表达式时使用三元操作符"
          }
      },
      {
          "Stylistic Issues表第63条：": {
              "rule": "no-whitespace-before-property",
              "desc": "禁止属性前有空白"
          }
      },
      {
          "Stylistic Issues表第64条：": {
              "rule": "nonblock-statement-body-position",
              "desc": "强制单个语句的位置"
          }
      },
      {
          "Stylistic Issues表第65条：": {
              "rule": "object-curly-newline",
              "desc": "强制大括号内换行符的一致性"
          }
      },
      {
          "Stylistic Issues表第66条：": {
              "rule": "object-curly-spacing",
              "desc": "强制在大括号中使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第67条：": {
              "rule": "object-property-newline",
              "desc": "强制将对象的属性放在不同的行上"
          }
      },
      {
          "Stylistic Issues表第68条：": {
              "rule": "one-var",
              "desc": "强制函数中的变量要么一起声明要么分开声明"
          }
      },
      {
          "Stylistic Issues表第69条：": {
              "rule": "one-var-declaration-per-line",
              "desc": "要求或禁止在变量声明周围换行"
          }
      },
      {
          "Stylistic Issues表第70条：": {
              "rule": "operator-assignment",
              "desc": "要求或禁止在可能的情况下使用简化的赋值操作符"
          }
      },
      {
          "Stylistic Issues表第71条：": {
              "rule": "operator-linebreak",
              "desc": "强制操作符使用一致的换行符"
          }
      },
      {
          "Stylistic Issues表第72条：": {
              "rule": "padded-blocks",
              "desc": "要求或禁止块内填充"
          }
      },
      {
          "Stylistic Issues表第73条：": {
              "rule": "padding-line-between-statements",
              "desc": "要求或禁止在语句间填充空行"
          }
      },
      {
          "Stylistic Issues表第74条：": {
              "rule": "prefer-object-spread",
              "desc": "禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。"
          }
      },
      {
          "Stylistic Issues表第75条：": {
              "rule": "quote-props",
              "desc": "要求对象字面量属性名称用引号括起来"
          }
      },
      {
          "Stylistic Issues表第76条：": {
              "rule": "quotes",
              "desc": "强制使用一致的反勾号、双引号或单引号"
          }
      },
      {
          "Stylistic Issues表第77条：": {
              "rule": "semi",
              "desc": "要求或禁止使用分号代替 ASI"
          }
      },
      {
          "Stylistic Issues表第78条：": {
              "rule": "semi-spacing",
              "desc": "强制分号之前和之后使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第79条：": {
              "rule": "semi-style",
              "desc": "强制分号的位置"
          }
      },
      {
          "Stylistic Issues表第80条：": {
              "rule": "sort-keys",
              "desc": "要求对象属性按序排列"
          }
      },
      {
          "Stylistic Issues表第81条：": {
              "rule": "sort-vars",
              "desc": "要求同一个声明块中的变量按顺序排列"
          }
      },
      {
          "Stylistic Issues表第82条：": {
              "rule": "space-before-blocks",
              "desc": "强制在块之前使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第83条：": {
              "rule": "space-before-function-paren",
              "desc": "强制在 function的左括号之前使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第84条：": {
              "rule": "space-in-parens",
              "desc": "强制在圆括号内使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第85条：": {
              "rule": "space-infix-ops",
              "desc": "要求操作符周围有空格"
          }
      },
      {
          "Stylistic Issues表第86条：": {
              "rule": "space-unary-ops",
              "desc": "强制在一元操作符前后使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第87条：": {
              "rule": "spaced-comment",
              "desc": "强制在注释中 ,//,/* 使用一致的空格"
          }
      },
      {
          "Stylistic Issues表第88条：": {
              "rule": "switch-colon-spacing",
              "desc": "强制在 switch 的冒号左右有空格"
          }
      },
      {
          "Stylistic Issues表第89条：": {
              "rule": "template-tag-spacing",
              "desc": "要求或禁止在模板标记和它们的字面量之间有空格"
          }
      },
      {
          "Stylistic Issues表第90条：": {
              "rule": "unicode-bom",
              "desc": "要求或禁止 Unicode 字节顺序标记 (BOM)"
          }
      },
      {
          "Stylistic Issues表第91条：": {
              "rule": "wrap-regex",
              "desc": "要求正则表达式被括号括起来"
          }
      },
      {
          "ECMAScript6表第1条：": {
              "rule": "arrow-body-style",
              "desc": "要求箭头函数体使用大括号"
          }
      },
      {
          "ECMAScript6表第2条：": {
              "rule": "arrow-parens",
              "desc": "要求箭头函数的参数使用圆括号"
          }
      },
      {
          "ECMAScript6表第3条：": {
              "rule": "arrow-spacing",
              "desc": "强制箭头函数的箭头前后使用一致的空格"
          }
      },
      {
          "ECMAScript6表第4条：": {
              "rule": "constructor-super",
              "desc": "要求在构造函数中有 super() 的调用"
          }
      },
      {
          "ECMAScript6表第5条：": {
              "rule": "generator-star-spacing",
              "desc": "强制 generator 函数中 * 号周围使用一致的空格"
          }
      },
      {
          "ECMAScript6表第6条：": {
              "rule": "no-class-assign",
              "desc": "禁止修改类声明的变量"
          }
      },
      {
          "ECMAScript6表第7条：": {
              "rule": "no-confusing-arrow",
              "desc": "禁止在可能与比较操作符相混淆的地方使用箭头函数"
          }
      },
      {
          "ECMAScript6表第8条：": {
              "rule": "no-const-assign",
              "desc": "禁止修改 const 声明的变量"
          }
      },
      {
          "ECMAScript6表第9条：": {
              "rule": "no-dupe-class-members",
              "desc": "禁止类成员中出现重复的名称"
          }
      },
      {
          "ECMAScript6表第10条：": {
              "rule": "no-duplicate-imports",
              "desc": "禁止重复模块导入"
          }
      },
      {
          "ECMAScript6表第11条：": {
              "rule": "no-new-symbol",
              "desc": "禁止 ,Symbolnew,new 一起使用"
          }
      },
      {
          "ECMAScript6表第12条：": {
              "rule": "no-restricted-imports",
              "desc": "禁止使用指定的 import 加载的模块"
          }
      },
      {
          "ECMAScript6表第13条：": {
              "rule": "no-this-before-super",
              "desc": "禁止在构造函数中，在调用 ,super(),this,supersuper"
          }
      },
      {
          "ECMAScript6表第14条：": {
              "rule": "no-useless-computed-key",
              "desc": "禁止在对象中使用不必要的计算属性"
          }
      },
      {
          "ECMAScript6表第15条：": {
              "rule": "no-useless-constructor",
              "desc": "禁用不必要的构造函数"
          }
      },
      {
          "ECMAScript6表第16条：": {
              "rule": "no-useless-rename",
              "desc": "禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字"
          }
      },
      {
          "ECMAScript6表第17条：": {
              "rule": "no-var",
              "desc": "要求使用 ,let,const,varvar"
          }
      },
      {
          "ECMAScript6表第18条：": {
              "rule": "object-shorthand",
              "desc": "要求或禁止对象字面量中方法和属性使用简写语法"
          }
      },
      {
          "ECMAScript6表第19条：": {
              "rule": "prefer-arrow-callback",
              "desc": "要求回调函数使用箭头函数"
          }
      },
      {
          "ECMAScript6表第20条：": {
              "rule": "prefer-const",
              "desc": "要求使用 const 声明那些声明后不再被修改的变量"
          }
      },
      {
          "ECMAScript6表第21条：": {
              "rule": "prefer-destructuring",
              "desc": "优先使用数组和对象解构"
          }
      },
      {
          "ECMAScript6表第22条：": {
              "rule": "prefer-numeric-literals",
              "desc": "禁用 ,parseInt(),Number.parseInt()，使用二进制，八进制和十六进制字面量"
          }
      },
      {
          "ECMAScript6表第23条：": {
              "rule": "prefer-rest-params",
              "desc": "要求使用剩余参数而不是 argumentsarguments"
          }
      },
      {
          "ECMAScript6表第24条：": {
              "rule": "prefer-spread",
              "desc": "要求使用扩展运算符而非 .apply().apply()"
          }
      },
      {
          "ECMAScript6表第25条：": {
              "rule": "prefer-template",
              "desc": "要求使用模板字面量而非字符串连接"
          }
      },
      {
          "ECMAScript6表第26条：": {
              "rule": "require-yield",
              "desc": "要求 generator 函数内有 yieldyield"
          }
      },
      {
          "ECMAScript6表第27条：": {
              "rule": "rest-spread-spacing",
              "desc": "强制剩余和扩展运算符及其表达式之间有空格"
          }
      },
      {
          "ECMAScript6表第28条：": {
              "rule": "sort-imports",
              "desc": "强制模块内的 import 排序"
          }
      },
      {
          "ECMAScript6表第29条：": {
              "rule": "symbol-description",
              "desc": "要求 symbol 描述"
          }
      },
      {
          "ECMAScript6表第30条：": {
              "rule": "template-curly-spacing",
              "desc": "要求或禁止模板字符串中的嵌入表达式周围空格的使用"
          }
      },
      {
          "ECMAScript6表第31条：": {
              "rule": "yield-star-spacing",
              "desc": "强制在 ,yield*,* 周围使用空格"
          }
      }
  ]
  }