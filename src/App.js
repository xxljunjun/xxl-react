import React from "react";
// HashRouter 带#号的url
// BrowserRouter
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import routerArr from "@/pages/index.js";
export default function App() {
  return (
    <Router>
      <Routes>
        {routerArr.map((val,index) => {
          return <Route exact path={val.path} element={val.component} key={index}></Route>;
        })}
      </Routes>
    </Router>
  );
}
