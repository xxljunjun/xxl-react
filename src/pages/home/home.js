import React, { useState, useEffect } from "react";
import "./home.less";
// import Son from "./components/son.js";
// import { Button } from "antd";
import TopSearch from "@/components/search/search.js";
import MySwiper from "@/components/swiper/swiper.js";
import Commodity from "@/components/commodity/commodity.js";
import Mybottom from "@/components/mybottom/mybottom.js";
import { earphone, up_arrow } from "@/utils/img.js";
import { BackTop, Drawer } from "antd";
import "./home.less";
import { Link, useNavigate } from "react-router-dom";
const Home = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    return () => {};
  }, []);
  let [drawervisible, setDrawervisible] = useState(false);
  let [buttomArr, setButtomArr] = useState([
    { id: 1, some: "热门产品分类" },
    { id: 2, some: "帮助与支持" },
    { id: 3, some: "商城项目" },
    { id: 4, some: "探索精彩大疆" },
  ]);
  const onCloseDrawer = () => {
    setDrawervisible(false);
  };
  const showDrawer = () => {
    setDrawervisible(true);
  };
  return (
    <>
      <div className="home">
        <Drawer
          title="客服服务"
          placement={"bottom"}
          closable={false}
          onClose={onCloseDrawer}
          visible={drawervisible}
          key={"bottom"}
        >
          <div>客服服务</div>
        </Drawer>
        <div className="fixed">
          <img
            src={earphone}
            alt=""
            className="earphone"
            onClick={showDrawer}
          />
        </div>
        <BackTop>
          <div className="toTop">
            <img src={up_arrow} alt="" className="up_arrow" />
          </div>
        </BackTop>
        <TopSearch />
        <MySwiper />
        <Commodity />
        <Mybottom />
      </div>
    </>
  );
};
export default Home;
