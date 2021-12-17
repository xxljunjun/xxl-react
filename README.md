### 一、创建项目

```
npx create-react-app xxl-react
```

### 二、把 config 文件暴露出来

```js
//踩坑：执行命令前要把提交修改到远程仓库！！！
npm run eject
```

### 三、安装 less

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

### 四、集成 ant-designUI 库

```js
 npm install antd -S
 //在入口文件引入less样式
 import "antd/dist/antd.css";

```
### 五、配置路由
```js
npm install --save react-router-dom
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
//路由跳转
 import {Link} from 'react-router-dom'
 <Link to='/home'>跳转路由</Link>
```
### 六、配置路由别名
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

