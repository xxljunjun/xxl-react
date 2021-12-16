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

