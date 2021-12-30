import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./tipsDialog.less";
const tipsDialog = (props) => {
  console.log("父组件传的值", props);
  let {dialogStatus,close} = props;
  //   let navigate = useNavigate();
  const clickMask = () => {
    close()
  };
  const clickComfire = () => {
    close()
  };
  return (
    <>
        <div className="tipsDialog" style={{ display: dialogStatus?'block':'none'}}>
          <div className="mask" onClick={clickMask}></div>
          <div className="box">
            <h3 className="title">w温馨提示</h3>
            <p className="text">为了您的隐私安全，暂不回收该类机器</p>
            <p className="btn_box">
              <span className="btn" onClick={clickComfire}>
                确认
              </span>
            </p>
          </div>
        </div>
    </>
  );
};
export default tipsDialog;
