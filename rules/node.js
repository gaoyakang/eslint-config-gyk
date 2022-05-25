/**
 * 适用于 Node.js 或 在浏览器中使用CommonJS的代码 的规则
 */
 module.exports = {
    rules: {
      //callback-return ：强制数组方法的回调函数中有 return 语句
      "callback-return": "off",
  
      // global-require ：要求 require() 出现在顶层模块作用域中
      "global-require": "off",
  
      // handle-callback-err：要求回调函数中有容错处理
      "handle-callback-err": "off",
  
      // no-mixed-requires：禁止混合常规变量声明和 require 调用
      "no-mixed-requires": "off",
  
      // no-new-require： 禁止调用 require 时使用 new 操作符
      // 错误写法： var appHeader = new require("app-header");
      // 正确写法： var appHeader = require("app-header"); new appHeader();
      "no-new-require": "error",
  
      //no-path-concat: 禁止对 __dirname 和 __filename 进行字符串连接
      // 错误写法： var fullPath = __dirname + "/foo.js";
      // 正确写法： var fullPath = dirname + "/foo.js";
      "no-path-concat": "error",
  
      // no-process-env: 禁用 process.env
      "no-process-env": "off",
  
      // no-process-exit: 禁用 process.exit()
      "no-process-exit": "off",
  
      // no-restricted-modules: 禁用通过 require 加载的指定模块
      "no-restricted-modules": "off",
  
      // no-sync: 禁用同步方法
      "no-sync": "off",
    },
    //环境变量
    //nodejs环境
    env: { node: true }
  }