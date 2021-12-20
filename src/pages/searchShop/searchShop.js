import React from "react";
import "./searchShop.less";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
const SearchShop = (props) => {
  let navigate = useNavigate();
  let keyword = "";
  let searchArr = [
    { id: 1, xxl: "DJI Air 2S" },
    { id: 2, xxl: "DJI OM 5" },
    { id: 3, xxl: "机甲大师 RoboMaster S1" },
    { id: 4, xxl: "御 Mavic Air 2" },
    { id: 5, xxl: "灵眸运动相机" },
    { id: 6, xxl: "DJI Pocket 2" },
    { id: 7, xxl: "DJI Mini 2" },
  ];
  const goBack = () => {
    console.log("返回上一级");
    navigate("/");
  };
  const searchInput = (e) => {
    this.setState({ keyword: e.target.value });
  };
  return (
    <>
      <div className="searchShop">
        <div className="top">
          <Input
            placeholder="搜索产品"
            value={keyword}
            type="text"
            onChange={searchInput}
          />
          <span className="cancle" onClick={goBack}>
            取消
          </span>
        </div>
        <div className="search_box">
          <div className="title">推荐产品</div>
          <ul>
            {searchArr.map((val) => {
              return (
                <li className="searchname" key={val.id}>
                  {val.xxl}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SearchShop;
