### 可能出现丢包情况

```js
npm install react-scripts
//or
npm install
//删包重装
```
### 整理项目所用到的插件
| 包名       | 项目中是否使用      | 作用             | 官网域名 |
| :--------- | :---------- | :------------------- | :------- |
| redux | 是 | `组件通信`  | https://www.cntofu.com/book/4/index.html |
| react-redux | 是 | `组件通信` ||
| redux-devtools | 是 | `组件通信`  ||
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

### 插件redux-devtools需要配合redux-devtools-extension使用  redux开发者工具  Redux DevTools
+ 在store/index.js文件夹下
```js
// 引入redux-devtools-extension
 import { composeWithDevTools} from 'redux-devtools-extension'
 //配合redux-devtools插件使用
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
```
### react DevTools











