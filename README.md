### 创建项目

```
npx create-react-app xxl-react
```

### 把config文件暴露出来

```js
//踩坑：执行命令前要把提交修改到远程仓库！！！
npm run eject
```

### less安装

```js
//踩坑：less-loader与webpack的版本问题！！！
npm install less less-loader --save
//可以通过gitHub查找对应的版本问题！！！
npm install less@3.5.0 --save
npm install less-loader@7.0.0 --save
```

- webpack.config 文件配置

```js
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// 再在rules数组中添加下面一段代码
// Less 解析配置
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    "less-loader"
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
        modules: true,
        getLocalIdent: getCSSModuleLocalIdent,
    },
    "less-loader"
    ),
},

```

### 集成 ant-designUI 库

```js
 npm install antd -S
 //在入口文件引入less样式
 import "antd/dist/antd.css";

//安装ant图标库
npm install --save @ant-design/icons

```

### 配置路由
```js
npm install --save react-router-dom  //最新版本6变化太多了！！！
//或
yarn add react-router-dom

npm install @loadable/component -S
```
```js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import loadable from "@loadable/component";
const Home = loadable(() => import("./pages/home/home.js"))

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/"  element={<Home />}></Route>
        </Routes>
    </Router>
  );
}

```
```js
//编程式路由跳转
import { Link,useNavigate} from "react-router-dom";
<Link to='/home'>跳转路由</Link>
//路由跳转
let navigate = useNavigate()
navigate("/")
```

### 配置路由别名
```js
alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        "react-native": "react-native-web",
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          "react-dom$": "react-dom/profiling",
          "scheduler/tracing": "scheduler/tracing-profiling",
        }),
        ...(modules.webpackAliases || {}),
        // 文件路径别名
        '@': path.resolve(__dirname, '../src'),
      },
```


### 滚动插件
```js
npm install better-scroll --save

/*
//插件官网地址
https://better-scroll.github.io/docs/zh-CN/
*/

```

### 打包成apk
+ 1、执行npm run build

+ 2、打包之后的apk出现白屏问题
package.json
```js
//"homepage":"./",
```
路由用hash路由！！！
```js
// HashRouter
// BrowserRouter
```

### 移动端适配方案（兼容vant-UI）
* npm i postcss-px-to-viewport -D
* 在.postcssrc.js文件中
```
const path = require('path');
module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;

  return {
    plugins: {
      autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
      "postcss-px-to-viewport": {
        unitToConvert: "px", // 要转化的单位
        viewportWidth: 2732, // UI设计稿的宽度
        unitPrecision: 2, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        // selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配/
        landscape: false // 是否处理横屏情况
      }
    }
  }

}
```

### 配置axios请求
+ 解决跨域在config/webpackDevServer.config.js的104行
```js
proxy: {
  '/he': {
    target: 'https://way.jd.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
},
```





