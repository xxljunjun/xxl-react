import React, { useState, useEffect } from "react";
import "./shopSwiper.less";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import { swiper_1, swiper_2, swiper_3 } from "@/utils/img.js";
import xxlvideo from '@/static/video/badminton.mp4' 
const ShopSwiper = (props) => {
  let navigate = useNavigate();
  let [swiperNum, setSwiperNum] = useState(1);
  let [step, setStep] = useState(1);
  let [swiperArr, setSwiperArr] = useState([
    { id: 1, txt: "111111", imgurl: swiper_1 },
    { id: 2, txt: "222222", imgurl: swiper_2 },
    { id: 3, txt: "3333333", imgurl: swiper_3 },
    { id: 4, txt: "444444444", imgurl: swiper_1 },
    { id: 5, txt: "5555555", imgurl: swiper_2 },
    { id: 6, txt: "66666666", imgurl: swiper_3 },
    { id: 7, txt: "7777", imgurl: swiper_1 },
  ]);
  let [btnArr, setBtnArr] = useState([
    { id: 1, txt: "图片", ischoose: true },
    { id: 2, txt: "拍摄样品", ischoose: false },
    { id: 3, txt: "产品介绍", ischoose: false },
  ]);
  const onChange = (a, b, c) => {
    console.log(a, b, c);
    setSwiperNum(a + 1);
    //轮播图左右滑动时的判断
    if(a === 0){
      setStep(2)
      clickBtn(2)
    }
  };
  /**
   * 点击切换轮播图和视频的显示
   */
  const clickBtn = (id) => {
    console.log(id);
    setStep(id)
    let objArr = [...btnArr];
    objArr.forEach((val) => {
      if (id === val.id) {
        val.ischoose = true;
      } else {
        val.ischoose = false;
      }
    });
    setBtnArr(objArr);
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
        {step === 1 && (
          <>
            <Carousel afterChange={onChange} dots={false}>
              {swiperArr.map((item) => {
                return (
                  <div key={item.id}>
                    <h3 style={contentStyle}>
                      <img src={item.imgurl} alt="" className="swiper_item" />
                    </h3>
                  </div>
                );
              })}
            </Carousel>
            <div className="xxl_count">{`${swiperNum}/${swiperArr.length}`}</div>
          </>
        )}
        {step === 2 && (
          <div className="yangping">
            <video width="375" height="375" controls src={xxlvideo} type="video/mp4">
            </video>
          </div>
        )}
        {step === 3 && (
          <div className="jiesao"></div>
        )}
        <div className="btn_box">
          {btnArr.map((item) => {
            return (
              <div
                key={item.id}
                className="btn"
                style={{
                  background: item.ischoose ? "#000" : "#f0f1f2",
                  color: item.ischoose ? "#fff" : "#000",
                }}
                onClick={() => clickBtn(item.id)}
              >
                {item.txt}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ShopSwiper;
