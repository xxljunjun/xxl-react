import React, { useState, useEffect } from "react";
import "./shopdetail.less";
import { Link, useNavigate } from "react-router-dom";
import TopSearch from "@/components/search/search.js";
import ShopSwiper from "@/components/shopSwiper/shopSwiper.js";
import Mybottom from "@/components/mybottom/mybottom.js";
import Fixcustomer from "@/components/fixcustomer/fixcustomer.js";
import Mybacktop from "@/components/mybacktop/mybacktop.js";
import Location from "@/components/location/location.js";
import AddShop from "@/components/addShop/addShop.js";
import { Drawer } from "antd";
const Shopdetail = (props) => {
  let navigate = useNavigate();
  let [locationStatus, setLocationStatus] = useState(false);
  let [bottomStatus, setBottomStatus] = useState(false);
  let [drawervisible, setDrawervisible] = useState(false);
  const bindHandleScroll = (e) => {
    // 滚动的高度
    const scrollTop =
      e.srcElement.documentElement.scrollTop || window.pageYOffset;
    if (scrollTop >= 375) {
      setBottomStatus(true);
    } else {
      setBottomStatus(false);
    }
  };
  const openDialog = () => {
    setDrawervisible(true);
  };
  const closeLocation = ()=>{
    setLocationStatus(false)
  }
  const closeAddShop = ()=>{
    setDrawervisible(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", bindHandleScroll);
    return () => {
      window.removeEventListener("scroll", bindHandleScroll);
    };
  }, []);
  return (
    <div className="shopdetail">
      <Drawer
        title=""
        placement={"bottom"}
        closable={false}
        onClose={() => setDrawervisible(false)}
        visible={drawervisible}
        key={"bottom_1"}
        height={'100vh'}
      >
        <AddShop close={closeAddShop}/>
      </Drawer>
      {/* 选择地址组件 */}
      <Drawer
        title=""
        placement={"bottom"}
        closable={false}
        visible={locationStatus}
        key={"bottom_2"}
        height={'100vh'}
      >
        <Location closeLocation={closeLocation}/>
      </Drawer>
      <Mybacktop />
      <TopSearch />
      <ShopSwiper />
      <div className="shopmessage"></div>
      <Mybottom />
      <Fixcustomer />
      {bottomStatus && (
        <div className="goshop">
          <p>
            <span>¥32888</span>或低至 ¥1507.36/月
          </p>
          <p>预计明天发货</p>
          <p className="add_box">
            <span className="add" onClick={openDialog}>
              加入购物车
            </span>
          </p>
          <div onClick={()=>setLocationStatus(true)} className="location">深圳市</div>
        </div>
      )}
    </div>
  );
};
export default Shopdetail;
