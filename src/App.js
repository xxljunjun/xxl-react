import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routerArr from "@/pages/index.js";
export default function App() {
  console.log(routerArr);
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
