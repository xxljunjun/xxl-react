import React, { useState, useEffect } from "react";
import "./shopdetail.less";
// import { Link, useNavigate } from "react-router-dom";
import TopSearch from "@/components/search/search.js";
import ShopSwiper from "@/components/shopSwiper/shopSwiper.js";
import Mybottom from "@/components/mybottom/mybottom.js";
import Fixcustomer from "@/components/fixcustomer/fixcustomer.js";
import Mybacktop from "@/components/mybacktop/mybacktop.js";
import Location from "@/components/location/location.js";
import AddShop from "@/components/addShop/addShop.js";
import Navigation from "@/components/navigation/navigation.js";
import {connect} from 'react-redux'
import { Drawer } from "antd";

const Shopdetail = (props) => {
  // let navigate = useNavigate();
  let [locationStatus, setLocationStatus] = useState(false);
  let [bottomStatus, setBottomStatus] = useState(false);
  let [drawervisible, setDrawervisible] = useState(false);
  let [listArr] = useState([
    { id: 1, message: "4/3 CMOS 哈苏相机" },
    { id: 2, message: "46 分钟飞行时间" },
    { id: 3, message: "全向避障" },
    { id: 4, message: "15 公里高清图传" },
    { id: 5, message: "高级智能返航" },
  ]);
  let [messageArr] = useState([
    {
      id: 1,
      message: "DJI Mavic 3",
      title: "¥21988或低至 ¥1007.77/月",
      txt: "配备 DJI RC Pro 遥控器，自带 1080p 高亮显示屏；套装还包含三块电池、充电管家、多功能收纳包及 ND 镜套装（ND4/8/16/32），进一步提升航拍体验。",
    },
    {
      id: 2,
      message: "DJI Mavic 3 畅飞套装",
      title: "¥21988或低至 ¥1007.77/月",
      txt: "配备 DJI RC Pro 遥控器，自带 1080p 高亮显示屏； 套装还包含三块电池、充电管家、多功能收纳包及 ND 镜套装（ND4/8/16/32）， 进一步提升航拍体验。",
    },
    {
      id: 3,
      message: "DJI Mavic 3 畅飞套装 (DJI RC Pro)",
      title: "¥21988或低至 ¥1007.77/月",
      txt: "内含三块电池，且包含充电管家、多功能收纳包及 ND 镜套装（ND4/8/16/32），助你从容应对多种拍摄场景。",
    },
    {
      id: 4,
      message: "DJI Mavic 3 Cine 大师套装",
      title: "¥21988或低至 ¥1007.77/月",
      txt: "充分包裹桨叶，避免桨叶伤人或因异物撞击而损坏，提高飞行安全。",
    },
  ]);
  const bindHandleScroll = (e) => {
    // 滚动的高度
    const scrollTop =
      e.srcElement.documentElement.scrollTop || window.pageYOffset;
    // console.log(scrollTop)
    if (scrollTop >= 375) {
      setBottomStatus(true);
    } else {
      setBottomStatus(false);
    }
  };
  const openDialog = () => {
    setDrawervisible(true);
  };
  const closeLocation = () => {
    setLocationStatus(false);
  };
  const closeAddShop = () => {
    setDrawervisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", bindHandleScroll);
    return () => {
      window.removeEventListener("scroll", bindHandleScroll);
    };
  }, []);
  return (
    <div className="shopdetail">
       <TopSearch/>
      {props.navstatus ? (
        <Navigation />
      ) : (
        <>
          <Drawer
            title=""
            placement={"bottom"}
            closable={false}
            onClose={() => setDrawervisible(false)}
            visible={drawervisible}
            key={"bottom_1"}
            height={"100vh"}
            destroyOnClose={true}
          >
            <AddShop close={closeAddShop} />
          </Drawer>
          {/* 选择地址组件 */}
          <Drawer
            title=""
            placement={"bottom"}
            closable={false}
            visible={locationStatus}
            key={"bottom_2"}
            height={"100vh"}
          >
            <Location closeLocation={closeLocation} />
          </Drawer>
          <Mybacktop />
          <ShopSwiper />
          <div className="shopmessage">
            <h2 className="title">DJI Mavic 3</h2>
            <h3>¥13888</h3>
            <p>
              低至 ¥636.52/月 × 24 期。<span className="detail">查看详情</span>
            </p>
            <ul>
              {listArr.map((item) => {
                return <li key={item.id}>{item.message}</li>;
              })}
            </ul>
            <div className="txt">产品概览</div>
            <h2 className="title">选择套装</h2>
            <p className="blue_txt">套装比较+</p>
            <div className="large_box">
              {messageArr.map((item) => {
                return (
                  <div className="box" key={item.id}>
                    <h3>{item.message}</h3>
                    <p>{item.title}</p>
                    <p className="text">{item.txt}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="txt_box">
            <p>
              1. 飞行器起飞重量（含电池及桨叶）；最大起飞重量 250
              克以下的民用无人机在部分国家或地区免注册；在中华人民共和国境内，最大起飞重量
              250 克以上（含250
              克）的民用无人机拥有者，需在中国民用航空局进行实名登记，详情请查询并确认当地法规。
            </p>
            <p>
              * FCC
              标准，在室外空旷无干扰环境下测得，实际距离或因外部环境、使用方式、固件版本的不同有所差异；为保障飞行安全，请遵守相关法律法规，并尽量在视距范围内飞行；以上数据为各标准下单程不返航飞行的最远通信距离，实际飞行时请留意
              app 上的返航提示。
            </p>
            <p>
              ** 光照条件充足，且下方表面纹理丰富、为漫反射材质，飞行器高度在
              0.5-30 米时，满足视觉悬停条件。此时垂直和水平定位精度在 ±0.1
              米范围内。
            </p>
            <p>
              *** 感知范围包含左、右、上、下、前、后六个方向，但并非 360°
              全向覆盖；左右两侧感知功能仅在智能跟随、三脚架模式和一键短片下生效。
            </p>
          </div>
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
              <div onClick={() => setLocationStatus(true)} className="location">
                深圳市
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default connect(state=>({navstatus:state.navstatus}),{
})(Shopdetail)
