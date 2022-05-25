/**
 * 适用于变量声明的规则
 */
 module.exports = {
    rules: {
      // init-declarations: 关闭要求var 声明中的初始化
      "init-declarations": "off",
  
      //no-shadow:禁止变量声明与外层作用域的变量同名
      "no-shadow":"off",

      // no-delete-var:禁止删除变量
      // delete x;
      "no-delete-var": "error",
  
      // no-label-var:不允许标签与变量同名
      "no-label-var": "error",
  
      // no-restricted-globals:禁用特定的全局变量
      "no-restricted-globals": "off",
  
      // no-shadow-restricted-names :禁止将标识符定义为受限的名字
      "no-shadow-restricted-names": "error",
  
      // no-undef:禁用未声明的变量
      "no-undef": "error",
  
      // no-undef-init:禁止将变量初始化为 undefined
      "no-undef-init": "error",
  
      // no-undefined:禁止将 undefined 作为标识符
      "no-undefined": "error",
  
      // no-unused-vars: 禁止出现未使用过的变量
      // vars:all检测所有变量，包括全局环境中的变量
      // args:none不检查参数。
      // ignoreRestSiblings:true使 rest 属性的兄弟属性被忽略
      "no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: true }],
  
      // no-use-before-define:禁止在变量定义之前使用它们
      "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
    }
  }