import React, { useState, useEffect } from "react";
import "./moreshop.less";
// import { Link, useNavigate } from "react-router-dom";
import TopSearch from "@/components/search/search.js";
import Fixcustomer from "@/components/fixcustomer/fixcustomer.js";
import Mybacktop from "@/components/mybacktop/mybacktop.js";
import BScroll from "@better-scroll/core";
import { swiper_1 } from "@/utils/img.js";
import MoreshopBox from "@/components/moreshop_box/moreshop_box.js";
import Navigation from "@/components/navigation/navigation.js";
import {connect} from 'react-redux'

const Moreshop = (props) => {
  // let navigate = useNavigate();
  let [swiperArr] = useState([
    { id: 1, message: "御 Mavic", img_url: swiper_1 },
    { id: 1, message: "灵眸 Osmo", img_url: swiper_1 },
    { id: 1, message: "DJI FPV", img_url: swiper_1 },
    { id: 1, message: "精灵 Phantom", img_url: swiper_1 },
    { id: 1, message: "如影 Ronin", img_url: swiper_1 },
    { id: 1, message: "机甲大师", img_url: swiper_1 },
    { id: 1, message: "悟 Inspire", img_url: swiper_1 },
    { id: 1, message: "行业应用", img_url: swiper_1 },
    { id: 1, message: "睿炽科技丨特洛", img_url: swiper_1 },
  ]);
  let [serveArr] = useState([
    {
      id: 1,
      message: "DJI Care 随心换 1 年版 (DJI Mavic 3)",
      img_url: swiper_1,
      price: "¥1488",
    },
    {
      id: 1,
      message: "DJI Care 随心换 2 年版 (DJI Mavic 3)",
      img_url: swiper_1,
      price: "¥2488",
    },
    {
      id: 1,
      message: "DJI Care 随心换 1 年版 (DJI Action 2)",
      img_url: swiper_1,
      price: "¥169",
    },
    {
      id: 1,
      message: "DJI Care 随心换 2 年版 (DJI Action 2)",
      img_url: swiper_1,
      price: "¥249",
    },
  ]);
  useEffect(() => {
    let bs = new BScroll(".wrapper", {
      // ...... 详见配置项
      scrollX: true,
      scrollY: false,
    });
    let bs2 = new BScroll(".wrapper_two", {
      // ...... 详见配置项
      scrollX: true,
      scrollY: false,
    });
    console.log(bs)
    console.log(bs2)
    return () => {};
  }, []);
  return (
    <>
      <TopSearch/>
      {
        props.navstatus ?<Navigation />:<div className="moreshop">
        <Mybacktop />
        <Fixcustomer />
        <div className="wrapper">
          <ul className="content">
            {swiperArr.map((item) => {
              return (
                <li>
                  <img src={item.img_url} alt="" />
                  <div>{item.message}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="banner">
          <img src={swiper_1} alt="" />
        </div>
        <div className="serve">
          <p className="title">DJI Care 增值服务</p>
          {serveArr.map((val) => {
            return <MoreshopBox obj={val} />;
          })}
        </div>
        <div className="serve_two">
          <p className="title">增值服务</p>
          <div className="wrapper_two">
            <ul className="content">
              {swiperArr.map((item) => {
                return (
                  <li>
                    <div>{item.message}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="large_box">
          <div className="inner_box">
            {serveArr.map((val) => {
              return <MoreshopBox obj={val} />;
            })}
            <div className="more">更多</div>
          </div>
          
        </div>
      </div>
      }
      
    </>
  );
};
export default connect(state=>({navstatus:state.navBar_reducer.navstatus}),{
 
})(Moreshop)
