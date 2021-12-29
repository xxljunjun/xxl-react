import React, { useState, useEffect } from "react";
import "./home.less";
import TopSearch from "@/components/search/search.js";
import MySwiper from "@/components/swiper/swiper.js";
import Commodity from "@/components/commodity/commodity.js";
import Mybottom from "@/components/mybottom/mybottom.js";
import Fixcustomer from '@/components/fixcustomer/fixcustomer.js'
import Mybacktop from "@/components/mybacktop/mybacktop.js";
import "./home.less";
import { Link, useNavigate } from "react-router-dom";
const Home = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    return () => {};
  }, []);
  let [buttomArr, setButtomArr] = useState([
    { id: 1, some: "热门产品分类" },
    { id: 2, some: "帮助与支持" },
    { id: 3, some: "商城项目" },
    { id: 4, some: "探索精彩大疆" },
  ]);

  return (
    <>
      <div className="home">
      <Mybacktop/>
      <Fixcustomer/>
        <TopSearch />
        <MySwiper />
        <Commodity />
        <Mybottom />
      </div>
    </>
  );
};
export default Home;
