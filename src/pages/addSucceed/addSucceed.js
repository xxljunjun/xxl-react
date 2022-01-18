import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import TopSearch from "@/components/search/search.js";
import { Button } from "antd";
import "./addSucceed.less";
const AddSucceed = (props) => {
  let navigate = useNavigate();
  let [shopArr] = useState([
    { id: 1, shopname: "机甲大师 RoboMaster S1", num: 1 },
  ]);
  const jumpCar = ()=>{
    navigate('/car')
  }
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="addSucceed">
      <TopSearch />
      <div className="some_box">
        <div className="some">1件商品已经加入购物车：</div>

        {shopArr.map((val) => {
          return (
            <div className="item">
              {val.shopname}
              <span>{`x${val.num}`}</span>
            </div>
          );
        })}
      </div>
      <Button type="primary" htmlType="submit" className="show_btn" onClick={jumpCar}>
          查看购物车
      </Button>
    </div>
  );
};
export default AddSucceed;
