import React,{useState,useEffect}from "react";
import { Link,useNavigate} from "react-router-dom";
import './location.less'
const Location = props=>{
    let {closeLocation} = props
  let navigate = useNavigate()
  const closeDialog = ()=>{
    closeLocation()
  }
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <>
    <div className="close_top">
        <div>收货地址</div>
        <div onClick={closeDialog}>关闭</div>
    </div>
  </>
}
export default Location