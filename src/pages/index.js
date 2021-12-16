//代码分割（类似路由懒加载）
import loadable from "@loadable/component";
import React from "react";

//引入组件（页面）
const Home = loadable(() => import("@/pages/home/home.js"));

const routes = [
    {path:'/',component:<Home/>}
]
 

export default routes;
