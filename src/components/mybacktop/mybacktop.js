import React,{useEffect}from "react";
// import { Link,useNavigate} from "react-router-dom";
import { BackTop } from "antd";
import { up_arrow } from "@/utils/img.js";
import './mybacktop.less'
const Mybacktop = props=>{
  // let navigate = useNavigate()
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <>
    <BackTop>
          <div className="toTop">
            <img src={up_arrow} alt="" className="up_arrow" />
          </div>
    </BackTop>
  </>
}
export default Mybacktop