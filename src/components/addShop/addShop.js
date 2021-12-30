import React,{useState,useEffect}from "react";
import { Link,useNavigate} from "react-router-dom";
import './addShop.less'
const AddShop = props=>{
    let {close} = props
  let navigate = useNavigate()
  const closeIt = ()=>{
    close()
  }
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <>
    <div onClick={closeIt}>关闭</div>
    <div>推荐您添加 DJI Care 随心换</div>
  </>
}
export default AddShop