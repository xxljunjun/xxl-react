

import React,{useEffect}from "react";
import {useNavigate} from "react-router-dom";
import { Carousel } from "antd";
import "./swiper.less";
import {swiper_1,swiper_2,swiper_3} from '@/utils/img.js'
const Swiper = props=>{
  const contentStyle = {
    height: "320px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  let navigate = useNavigate()
  useEffect(()=>{

    return ()=>{

    }
  },[])
  const onChange= (a,b,c)=>{
    console.log(a, b, c)
  }
  const goToDetail = ()=>{
    navigate('/shopdetail')

  }
  return <>
     <div className="swiper">
        <Carousel afterChange={onChange} autoplay>
          <div onClick={goToDetail}>
            <h3 style={contentStyle}>
            <img src={swiper_1} alt="" className="swiper_item" />
            </h3>
          </div>
          <div onClick={goToDetail}>
            <h3 style={contentStyle}>
            <img src={swiper_2} alt=""  className="swiper_item" />
            </h3>
          </div>
          <div onClick={goToDetail}>
            <h3 style={contentStyle}>
            <img src={swiper_3} alt=""  className="swiper_item" />
            </h3>
          </div>
        </Carousel>
      </div>
  </>
}
export default Swiper
