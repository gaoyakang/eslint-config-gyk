## 介绍

>  gyk 的 eslint 配置,目的是要写出统一风格的代码，所有的规则来自eslint官网 http://eslint.cn/docs/rules/


## 安装

1.新建目录
```shell
mkdir demo & cd demo
```

2.安装
```shell
npm install eslint eslint-config-gyk --save-dev
```

3.配置
```shell
./node_modules/.bin/eslint --init

```

4.使用
经过上面init后在根目录下生成.eslintrc.js文件，配置如下：
```javascript
module.exports = {
    // 代码最终在什么环境使用
    "env": {
        "browser": true,
        "es2021": true
    },
    //启用 http://eslint.cn/docs/rules/ 打✅的规则
    // "extends": "eslint:recommended",
    //给解析器的配置
    "parserOptions": {
        //解析时依据的ecma版本
        "ecmaVersion": "latest",
        //模块化风格
        "sourceType": "module"
    },
    //引入gyk的eslint配置
    "extends":"gyk",
    //对文件的检测规则
    //0关闭，1警告，2错误
    "rules": {
        //填写自定义的配置
    }
}

```

或者在里面配置下面的选项：

```javascript

{
  "eslintConfig": {
    "extends": "eslint-config-gyk"
  }
}

```
历史版本的js需要配置：
```javascript

{
  "extends": "gyk/legacy",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## 使用

1.在根目录下新建index.js
```javascript
for (let i = 0; i < 3; i++) {
    console.log(i)
}
```


2.在package.json配置脚本

```json
"scripts": {
    "dev": "./node_modules/.bin/eslint index.js && node index.js"
},
```



3.当前根目录shell中

```shell
npm run dev
```
![](https://cdn.jsdelivr.net/gh/Apollo2light/apolloblogpicture/img/%E6%88%AA%E5%B1%8F2022-05-25%20%E4%B8%8B%E5%8D%8811.23.38.png)


将console.log()前的 4tab 改为 2空格后，再次运行：
```shell
npm run dev
```
![](https://cdn.jsdelivr.net/gh/Apollo2light/apolloblogpicture@master/img/%E6%88%AA%E5%B1%8F2022-05-25%20%E4%B8%8B%E5%8D%8811.25.35.png)


4.之后的开发中可以：
- 在rules中自定义规则
- 在要编写的页面通过注释定义规则
- 使用"extends": "eslint:recommended"默认规则
- 使eslint暂时失效

```javascript
/* eslint 规则名 : 等级 */

/* eslint-disable */
代码
/* eslint-enable */
```
5.如果不知道怎么解决eslint检测出的错误，可以前往http://eslint.cn/docs/rules/ 查找修改
