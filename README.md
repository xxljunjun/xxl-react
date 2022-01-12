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

//安装ant图标库
npm install --save @ant-design/icons

```
### 五、配置路由
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
### 七、类组件基本模板和函数式组件基本模板
```js
//函数式组件
import React,{useState,useEffect}from "react";
import { Link,useNavigate} from "react-router-dom";
const demo = props=>{
  let navigate = useNavigate()
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <></>
}
export default demo

//类组件
import React from 'react'
class Demo extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount() {
    
  }
  sholdComponentUpdate(){
      return true
  }
  componentDidUpdate(){
      
  }
  componentWillUnmount() {
    
  }
}
```

### 八、滚动插件
```js
npm install better-scroll --save

/*
//插件官网地址
https://better-scroll.github.io/docs/zh-CN/
*/

```

### 九、打包成apk
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
#### 十、移动端适配方案（兼容vant-UI）
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

#### 十一、react组件间的项目通信

+ 父子间通信
```js
  // props
```

+ 祖孙组件通信
```js
  // context
  const XxxContext = React.createContext()
  <XxxContext.Provider value={{xxlname:'xxl',age:12}}>
    <Son/>
  </XxxContext.Provider>
  <XxxContext.Consumer>
    {
      value=>{
        return <li>{value.xxlname}</li>
      }
    }
  </XxxContext.Consumer>
```

+ 兄弟组件通信
```js
  // npm install pubsub-js -S
  import PubSub from 'pubsub-js'
  // 订阅消息
    PubSub.subscribe('msg',(msg,data) => {
      console.log(msg)
      console.log(data)
      this.setState({
        msg:data
      })
    })
    // 发布消息
  PubSub.publish('msg',`我是发布的随机数：${parseInt(Math.random()*1000)}`)
```

+ 任意组件通信mobs
```js
//mobs
//跨平台开发app
//小程序
//mobs + mobx-react --------------小项目
    npm install mobs -S
// mobx-react
//在src中新建 store/index.js，代码如下
    import { makeObservable,action,observable } from 'mobx'
    class Store {
      constructor() {
          makeAutoObservable(this,{
              msg:observable,
              changeMsg:action,
              total:computed
          })
      }
      msg = 'hello'
      list = []
      changeMsg(payload) {
          this.msg = payload
      }
      get total(){
        return this.list.length
      }
    }
    export default new Store()
//在App.js中，代码如下
    import { Provider } from 'mobx-react'
    import store from './store/index.js'
    export default function App() {
      return(
          <Provider store={store}>
            <Layout />
          </Provider>
      )
    }
//在页面组件中代码如下：
    import { inject, observer } from 'mobx-react'
    export default inject('store')(observer(props=>()))
//在页面中，使用 props.store 来访问 共享的数据和action方法。
```

+ 任意组件通信mobs
```js
  // reduce
  //rudux + rudux-react-------------大项目
  // 主要的想法是如何根据这些 action 对象来更新 state
```
