
import React,{useEffect}from "react";
// import {useNavigate} from "react-router-dom";
import './loading.less'
import { loading} from "@/utils/img.js";
const Myloading = props=>{
  // let navigate = useNavigate()
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <>
    <div className="myloading">
        <img src={loading} alt="" className="loading_img" />
    </div>
  </>
}
export default Myloading