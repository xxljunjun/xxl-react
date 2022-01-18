import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import "./xxlvertify.less";
const Xxlvertify = (props) => {
  // let navigate = useNavigate();
  let [num, setNum] = useState(0);
  let [x,setX] = useState(0)
  useEffect(() => {
    return () => {};
  }, []);
  /**
   * 按下之时
  */
  const moveDownThing = (e) => {
    if(num === 265){
      return
    }
    let x = e.touches[0].clientX
    setX(x)
    console.log(x)
  };
  /**
   * 松开之时
  */
  const moveUpThing = (e) => {
    if(num === 265){
      setNum(265)
      return
    }
    setNum(0)
  };
  /**
   * 移动之时
  */
  const moveThing = (e) => {
    if(num === 265){
      return
    }
    let large = e.touches[0].clientX-x
    if(large >=265){
      setNum(265)
      return
    }
    if(large<=0){
      setNum(0)
      return
    }
    setNum(large);
  };
  return (
    <div className="xxlvertify">
      <div
        className="box"
        style={{ left: num }}
        onTouchStart={moveDownThing}
        onTouchMove={moveThing}
        onTouchEnd={moveUpThing}
      >
        {num === 265?'ok':">>"}
      </div>
      <div className="light" style={{width:num}}>
        {num === 265?'验证通过':''}
      </div>
      <div className="txt">向右滑动验证</div>
    </div>
  );
};
export default Xxlvertify;
/*
  touchstart：触摸开始（手指放在触摸屏上）
  touchmove：拖动（手指在触摸屏上移动）
  touchend：触摸结束（手指从触摸屏上移开）
  touchenter ：移动的手指进入一个dom元素
  touchleave ：移动的手指离开一个dom元素
*/
/*
  mousedown：按下鼠标后触发
  mouseup：	松开鼠标后触发
  mousemove：移动鼠标时触发
  mouseout：当鼠标离开当前对象时触发
*/
/*
  clientX
  clientY

  clientHeight
  clientWidth 
  offsetHeight
  offsetWidth

  offsetLeft
  offsetRight
  offsetTop
  offsetBottom
*/
