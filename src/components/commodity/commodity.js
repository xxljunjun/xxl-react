import React from "react";
import "./commodity.less";
import { img_1, img_2, img_3,banner } from "@/utils/img.js";

class Commodity extends React.Component {
  render() {
    return (
      <div className="commodity">
        <div className="title">精灵 Phantom</div>
        <div className="one">
          <img src={img_1} alt="" className="shop_img" />
          <h3 className="shopname">DJI Ronin 4D-6K</h3>
          <p className="price">¥46888</p>
        </div>
        <div className="two">
          <div className="box_1 box">
            <img src={img_2} alt="" className="shop_img" />
            <h3 className="shopname">DJI Air 2S</h3>
            <p className="price">¥6499</p>
          </div>
          <div className="box_2 box">
            <img src={img_3} alt="" className="shop_img" />
            <h3 className="shopname">DJI Mini 2</h3>
            <p className="price">¥2899</p>
          </div>
        </div>
        <div className="threen">更多 Mavic 产品</div>
        <div className="four">
            <img src={banner} alt=""/>
        </div>
      </div>
    );
  }
}
export default Commodity;
