import React from "react";
import { Carousel } from "antd";
import "./swiper.less";
import {swiper_1,swiper_2,swiper_3} from '@/utils/img.js'

const contentStyle = {
  height: "320px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
class Swiper extends React.Component {
  onChange= (a,b,c)=>{
    console.log(a, b, c)
  }
  render() {
    return (
      <div className="swiper">
        <Carousel afterChange={this.onChange} autoplay>
          <div>
            <h3 style={contentStyle}>
            <img src={swiper_1} alt="" className="swiper_item"/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
            <img src={swiper_2} alt=""  className="swiper_item"/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
            <img src={swiper_3} alt=""  className="swiper_item"/>
            </h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Swiper;
