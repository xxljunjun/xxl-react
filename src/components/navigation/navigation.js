import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navigation.less";
const Navigation = (props) => {
  let navigate = useNavigate();
  let [allArr, setAllArr] = useState([
    { id: 1, title: "登录", list: [
      { id: 1, xxl: "登录" },
    ] },
    {
      id: 2,
      title: "商城分类",
      list: [
        { id: 1, xxl: "御 Mavic" },
        { id: 2, xxl: "灵眸 Osmo" },
        { id: 3, xxl: "DJI FPV" },
        { id: 4, xxl: "精灵 Phantom" },
        { id: 5, xxl: "如影 Ronin" },
        { id: 6, xxl: "机甲大师" },
      ],
    },
    {
      id: 3,
      title: "优惠",
      list: [
        { id: 1, xxl: "以旧换新" },
        { id: 2, xxl: "DJI 币返利计划" },
      ],
    },
    { id: 4, title: "指南", list: [{ id: 1, xxl: "购机指南" }] },
  ]);
  const toDetail = ()=>{
    navigate('/moreshop')
  }
  const jumpRedux = ()=>{
    navigate('/studyredux')
  }
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="nav_box">
      {allArr.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="title">{item.title}</div>
            <div className="mylist">
              {item.list.map((val) => {
                return (
                  <div className="item" key={val.id} onClick={toDetail}>
                    {val.xxl}
                    <span>{">"}</span>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
      <div className="box">
        <div className="line" onClick={jumpRedux}>更改国家或地区</div>
      </div>
    </div>
  );
};
export default Navigation;
