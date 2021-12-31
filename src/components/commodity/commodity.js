
import "./commodity.less";
import { img_1, img_2, img_3,banner } from "@/utils/img.js";
import React,{useState,useEffect}from "react";
import { Link,useNavigate} from "react-router-dom";
const Commodity = props=>{
  let navigate = useNavigate()
  useEffect(()=>{

    return ()=>{

    }
  },[])
  const goToDetail = ()=>{
    navigate('/shopdetail')
  }
  const toOldNew = ()=>{
    navigate('/writeShop')
  }
  const goToMore = ()=>{
    navigate('/moreshop')
  }
  return <>
  <div className="commodity">
        <div className="title">精灵 Phantom</div>
        <div className="one" onClick={goToDetail}>
          <img src={img_1} alt="" className="shop_img" />
          <h3 className="shopname">DJI Ronin 4D-6K</h3>
          <p className="price">¥46888</p>
        </div>
        <div className="two">
          <div className="box_1 box" onClick={goToDetail}>
            <img src={img_2} alt="" className="shop_img" />
            <h3 className="shopname">DJI Air 2S</h3>
            <p className="price">¥6499</p>
          </div>
          <div className="box_2 box" onClick={goToDetail}>
            <img src={img_3} alt="" className="shop_img" />
            <h3 className="shopname">DJI Mini 2</h3>
            <p className="price">¥2899</p>
          </div>
        </div>
        <div className="threen" onClick={goToMore}>更多 Mavic 产品</div>
        <div className="four" onClick={toOldNew}>
            <img src={banner} alt=""/>
        </div>
      </div>
  </>
}
export default Commodity
