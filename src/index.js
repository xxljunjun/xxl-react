import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import store from '@/store/index.js'
import {Provider} from 'react-redux'
console.log('入口文件的redux',store)

ReactDOM.render(
  <React.StrictMode>
    {/* 此处需要用provider包裹App,目的是让App所有的后代容器组件都能接收到store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



// reportWebVitals();

// 监测redux中的状态改变，如redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// })
