import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from './store'
// console.log('引入redux全局store',store)

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
