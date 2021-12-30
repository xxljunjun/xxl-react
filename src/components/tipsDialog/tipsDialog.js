import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./tipsDialog.less";
const TipsDialog = (props) => {
  console.log("父组件传的值", props);
  let {dialogStatus,close,title,text,height,maskcan} = props;
  //   let navigate = useNavigate();
  const clickMask = () => {
    if(maskcan){
      close()
    }
  };
  const clickComfire = () => {
    close()
  };
  useEffect(() => {
    //页面中有遮罩时添加属性使得遮罩不滚动
    if(dialogStatus){
      document.body.style.overflow='hidden';
      document.body.style.height='100%';
    }else{
      document.body.style.overflow="visible";
      document.body.style.height="auto";
    }
    return () => {
      
    };
  }, [dialogStatus]);
  return (
    <>
        <div className="tipsDialog" style={{ display: dialogStatus?'block':'none'}}>
          <div className="mask" onClick={clickMask}></div>
          <div className="box" style={{height:height?'140px':'auto'}}>
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
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
export default TipsDialog;
