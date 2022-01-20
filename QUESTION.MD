#### 可能出现丢包情况

```js
npm install react-scripts
//or
npm install
//删包重装
```

#### 整理项目所用到的插件
| 包名       | 项目中是否使用      | 作用             | 官网域名 |
| :--------- | :---------- | :------------------- | :------- |
| redux | 是 | `组件通信`  | https://www.cntofu.com/book/4/index.html |
| react-redux | 是 | `组件通信` ||
| redux-devtools | 是 | `组件通信`  |react DevTools还需要谷歌插件|
| redux-thunk | 是 | `actions可以返回一个函数` ||
| react-css-modules | 是 | `syleclassName`  ||
| antdesign | 是 | `蚂蚁UI组件库`  | https://ant.design/index-cn |
| propTypes | 是 | `props传参的类型检查` ||
| better-scroll | 是 | `上拉加载和下拉刷新组件` | https://better-scroll.github.io/docs/zh-CN/guide/base-scroll.html#%E4%B8%8A%E6%89%8B |
| postcss-px-to-viewport | 是 | `页面自适应` ||
| mobs | 是 | `组件通信`  | https://cn.mobx.js.org/ |
| less | 是 | `css预编译语言` | https://less.bootcss.com/#%E6%A6%82%E8%A7%88 |
| less-loader | 是 | `css预编译语言`  |          |
| qs | 是 | `npm run build-prod` ||
| axios | 是 | `ajax请求` ||
| mock | 是 | `模拟http请求` | http://mockjs.com/ |
| classNames | 是 | `类名的判断使用` ||

#### 组件基本模板和函数式组件基本模板
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

#### 插件redux-devtools需要配合redux-devtools-extension使用  
+ 在store/index.js文件夹下
```js
// 引入redux-devtools-extension
 import { composeWithDevTools} from 'redux-devtools-extension'
 //配合redux-devtools插件使用
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
```

#### react组件间的项目通信

+ 父子间通信
```js
  // props
```

+ 祖孙组件通信context
```js
  //在最大的组件中
  const XxxContext = React.createContext()
  <XxxContext.Provider value={{xxlname:'xxl',age:12}}>
    <Son/>
  </XxxContext.Provider>
  //在后代组件中
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

+ 任意组件通信reduce
```js
  // reduce
  //rudux + rudux-react-------------大项目
  // 主要的想法是如何根据这些 action 对象来更新 state
  
```

#### HOOKS写法redux库
```js
//useState：状态钩子
//useEffect:副作用钩子
//useContext():共享状态钩子
//useReducer()：action 钩子
//useMemo、useCallback：减少子组件的多余render
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
```
+ 在store/index.js中
```js
import { createStore } from 'redux'
import rootReducer from './reducers'
export default createStore(rootReducer)
```
+ 在reducers/index.js
```js
const initState = {
  count: 0,
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "JIA_COUNT":
      return Object.assign({}, state, {
        count: state.count + action.payload,
      });
    default:
      return state;
  }
};
export default rootReducer;
```
+ actions/index.js
```js

//该文件统一控制actions中的dispatch分发
export function changeCount_jia(payload) {
    return {
        type: 'JIA_COUNT',
        payload
    }
}
//异步的actions   npm install redux-thunk -S //dispatch可以接受一个函数~！！！
export function changeCountAsync_jia(payload,time) {
    return (dispatch)=>{
        setTimeout(()=>{
            store.dispatch(changeCount_jia(payload))
        },time)
    }
    
}
//需要配置store/index.js
import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
export default createStore(rootReducer,applyMiddleware(thunk))
```
+ 在react组件中使用
```js
import store from '@/store/index.js'
 store.dispatch(changeCount_jia(Number(addNum)))
```
+ 在项目中的入口文件中的index.js
```js
//监测redux中的状态改变，如redux的状态发生了改变，那么重新渲染App组件
store.subscribe(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
})
```
/*
  原生redux总结
    ==>actions可以是一个异步的，可以接受;一个对象(同步)一个函数(异步)
    ==>npm install redux-thunk -S:使用redux-thunk的库作为redux的middleeware存在的，让dispatch可以是一个函数
    ==>流程：组件中通过actions生成action==>dispatch提交actions交给store==>store通知reducer处理数据返回新数据
    ==>reducer只是帮我们修改store中的数据，并不会监听数据的变化
*/

#### HOOKS写法react-redux库
+ 在容器组件studyReactRedux_contain.js中
```js
//引入UI组件
import studyReactReduxUI from '@/pages/studyReactRedux/studyReactRedux.js'
import {changeCount_jia} from '@/actions/index.js'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
/*
    1、mapStateToProps函数返回一个对象
    2、返回的对象的可以就是传递给UI组件的props的key,value就作为传递给UI的props的value
    3、mapStateToProps用于传递状态
*/
const mapStateToProps = state=>({count:state.count}) 
/*
    1、mapDispatchToProps函数返回一个对象
    2、mapDispatchToProps函数返回的对象中的key就作为UI组件中的props的key,value就作为传递给UI组件中props的value
    3、mapDispatchToProps函数用于传递操作状态的方法
*/
const mapDispatchToProps = dispatch=>({
    jia:number=>dispatch(changeCount_jia(number)),
    jian:number=>dispatch(changeCount_jian(number)),
    cheng:number=>dispatch(changeCount_cheng(number)),
    chu:number=>dispatch(changeCount_chu(number)),
    asyncjia:(number,time) => dispatch(changeCountAsync_jia(number,time))
})
//使用connect()()创建并暴露一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(studyReactReduxUI)
//简化写法
// export default connect(mapStateToProps,{
//     jia:changeCount_jia,
//     jian:changeCount_jian,
//     cheng:changeCount_cheng,
//     chu:changeCount_chu,
//     asyncjia:changeCountAsync_jia
// })(studyReactReduxUI)
```
+ 在UI组件studyReactRedux.js中
```js
//直接通过props传递进去的操作方法进行操作store中的数据
props.jia(Number(addNum))
```

### react-redux总结
```js
/*
  优化点
    ==>1、react-redux自动监测store
    ==>2、react-redux自动dispatch分发actions
      mapDispatchToProps的简化写法
    ==>3、在项目入口文件中Provider给所有组件传入store
    ==>4、整合容器组件和UI组件
    ==>5、一个组件要和redux打交道要经过几步
      (1)定义好一个UI组件---不暴露
      (2)引入connect生成一个容器组件并暴露，写法如下：
        export default connect(state=>({key:value}),{
            key:xxxxAction,
        })(UI组件)
      (3)在UI组件中通过this.props.xxxxx读取和操作状态
*/
/*
  react-redux总结
    ==>容器组件和UI组件是父子关系
      import {connect} from 'react-redux'容器组件和UI组件建立联系
      mapStateToProps、mapDispatchToProps容器组件和redux建立联系
    ==>容器组件包含所有的操作store的方法、
    ==>流程：mapStateToProps传递进去UI组件展示，mapDispatchToProps操作dispatch改变数据
*/
```












