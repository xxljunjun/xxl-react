import React from "react";
import { Carousel } from "antd";
import "./swiper.less";

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
        <Carousel afterChange={this.onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Swiper;
