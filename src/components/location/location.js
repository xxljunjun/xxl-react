import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./location.less";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const Location = (props) => {
  let { closeLocation } = props;
  let navigate = useNavigate();
  let [zimuArr, setZimuArr] = useState([
    {
      id: 1,
      letter: "A",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 2,
      letter: "B",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 3,
      letter: "C",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 4,
      letter: "D",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 5,
      letter: "E",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 6,
      letter: "F",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 7,
      letter: "G",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 8,
      letter: "H",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 9,
      letter: "I",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 10,
      letter: "J",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 11,
      letter: "K",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 12,
      letter: "L",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 13,
      letter: "M",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 14,
      letter: "N",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 15,
      letter: "O",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 16,
      letter: "P",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 17,
      letter: "Q",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 18,
      letter: "R",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 19,
      letter: "X",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 20,
      letter: "T",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 21,
      letter: "U",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 22,
      letter: "V",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 23,
      letter: "W",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 24,
      letter: "X",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 25,
      letter: "Y",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
    {
      id: 26,
      letter: "Z",
      arr: [
        { id: 1, txt: "阿拉善盟" },
        { id: 2, txt: "鞍山市" },
        { id: 3, txt: "安庆市" },
        { id: 4, txt: "阿坝藏族羌族自治州" },
        { id: 5, txt: "阿勒泰地区" },
        { id: 6, txt: "阿拉善盟" },
      ],
    },
  ]);
  let [locationStatus, setLocationStatus] = useState(true);
  let [topletterstatus, setTopletterstatus] = useState(false);
  let [letterstatus, setLetterstatus] = useState(false);
  let [keyword, setKeyword] = useState("");
  const wordChange = (e) => {
    console.log(e);
    //单词联想功能
  };
  const cancleFocus = () => {
    setLocationStatus(true);
  };
  const wordFocus = () => {
    setLocationStatus(false);
  };
  const closeDialog = () => {
    closeLocation();
    setTopletterstatus(false);
  };
  const chooseCity = () => {
    closeLocation();
  };
  const openLetter = () => {
    setLetterstatus(!letterstatus);
  };
  useEffect(() => {
    setTimeout(() => {
      setTopletterstatus(true);
    }, 2000);
    return () => {};
  }, []);
  return (
    <>
      <div className="close_top">
        <div>收货地址</div>
        <div onClick={closeDialog}>关闭</div>
      </div>
      <div className="location_box">
        {topletterstatus && (
          <div className="top_letter" onClick={openLetter}>
            <span>字母索引</span>
            {letterstatus && (
              <div className="ausolte_letter">
                {zimuArr.map((val) => {
                  return (
                    <div className="zimu_box" key={val.id}>
                      {val.letter}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div className="input_box">
          <Input
            size="large"
            placeholder="请输入城市或拼音查询"
            prefix={<UserOutlined />}
            allowClear={true}
            value={keyword}
            onChange={wordChange}
            onFocus={wordFocus}
            style={{ width: locationStatus ? "320px" : "260px" }}
          />
          {!locationStatus && (
            <span onClick={cancleFocus} className="cancle">
              取消
            </span>
          )}
        </div>
        {locationStatus && (
          <>
            <h4 className="title">常用地址</h4>
            <div className="orign_city" onClick={chooseCity}>
              深圳市
            </div>
            <h4 className="title">字母索引</h4>
            <div className="zimu">
              {zimuArr.map((val) => {
                return (
                  <div className="zimu_box" key={val.id}>
                    {val.letter}
                  </div>
                );
              })}
            </div>
            <div className="choose_zimu">
              {zimuArr.map((val) => {
                return (
                  <React.Fragment key={val.id}>
                    <div className="zimu_title">{val.letter}</div>
                    <div className="box">
                      {val.arr.map((item) => {
                        return (
                          <div className="choose_zimu_box" key={item.id}>
                            {item.txt}
                          </div>
                        );
                      })}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Location;
