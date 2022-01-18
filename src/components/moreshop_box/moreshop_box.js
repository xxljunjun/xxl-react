import React, {useEffect } from "react";
// import {useNavigate } from "react-router-dom";
import "./moreshop_box.less";
const Moreshop_box = (props) => {
  let {obj} = props
  // let navigate = useNavigate();
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div className="val_box">
        <img src={obj.img_url} alt="" className="shop_img" />
        <div className="txx_box">
          <h2>{obj.message}</h2>
          <p>{obj.price}</p>
        </div>
      </div>
    </>
  );
};
export default Moreshop_box;
