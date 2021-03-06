//代码分割（类似路由懒加载）
import loadable from "@loadable/component";
import React from "react";

//引入组件（页面）
const Home = loadable(() => import("@/pages/home/home.js"))
const SearchShop = loadable(() => import("@/pages/searchShop/searchShop.js"))
const Car = loadable(() => import("@/pages/car/car.js"))
const Shopdetail = loadable(() => import("@/pages/shopdetail/shopdetail.js"))
const Moreshop = loadable(() => import("@/pages/moreshop/moreshop.js"))
const Login = loadable(() => import("@/pages/login/login.js"))
const WriteShop = loadable(() => import("@/pages/writeShop/writeShop.js"))
const ResetPassword = loadable(() => import("@/pages/resetPassword/resetPassword.js"))
const AddSucceed = loadable(() => import("@/pages/addSucceed/addSucceed.js"))
const Register = loadable(() => import("@/pages/register/register.js"))
const StudyRedux = loadable(() => import("@/pages/studyRedux/studyRedux.js"))
const StudyReactRedux = loadable(() => import("@/pages/studyReactRedux/studyReactRedux.js"))
const ShareRedux = loadable(() => import("@/pages/shareRedux/shareRedux.js"))

const routes = [
    {path:'/',component:<Home/>},
    {path:'/search',component:<SearchShop/>},
    {path:'/car',component:<Car/>},
    {path:'/shopdetail',component:<Shopdetail/>},
    {path:'/moreshop',component:<Moreshop/>},
    {path:'/login',component:<Login/>},
    {path:'/writeShop',component:<WriteShop/>},
    {path:'/resetPassword',component:<ResetPassword/>},
    {path:'/addSucceed',component:<AddSucceed/>},
    {path:'/register',component:<Register/>},
    {path:'/studyredux',component:<StudyRedux/>},
    {path:'/studyreactredux',component:<StudyReactRedux/>},
    {path:'/shareredux',component:<ShareRedux/>},
]
 
export default routes;
