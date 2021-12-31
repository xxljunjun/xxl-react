import React, { useState, useEffect } from "react";
import "./shopSwiper.less";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import { swiper_1, swiper_2, swiper_3 } from "@/utils/img.js";
const ShopSwiper = (props) => {
  let navigate = useNavigate();
  const onChange = (a, b, c) => {
    console.log(a, b, c);
  };
  const contentStyle = {
    height: "375px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div className="shopSwiper">
        <Carousel afterChange={onChange} autoplay>
          <div>
            <h3 style={contentStyle}>
              <img src={swiper_1} alt="" className="swiper_item" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={swiper_2} alt="" className="swiper_item" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={swiper_3} alt="" className="swiper_item" />
            </h3>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default ShopSwiper;
