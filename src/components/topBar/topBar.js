import React,{useState,useEffect}from "react";
import { Link,useNavigate} from "react-router-dom";
import './topBar.less'
const TopBar = props=>{
  let navigate = useNavigate()
  const goback = ()=>{
    console.log(navigate)
    navigate('/')
  }
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <>
    <div className="topBar">
        <div className="arrow" onClick={goback}>{`<`}</div>
        <div>填写机器信息</div>
    </div>
  </>
}
export default TopBar