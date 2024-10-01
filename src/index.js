import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import store from '@/redux/store/index.js'
import {Provider} from 'react-redux'

ReactDOM.render(
  // 包裹之后能检测App里面的代码不太合理的地方React.StrictMode
  <React.StrictMode>
    {/* 此处需要用provider包裹App,目的是让App所有的后代容器组件都能接收到store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// 页面性能检测
// reportWebVitals();
