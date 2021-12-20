import React from "react";
import TopSearch from "@/components/search/search.js";
import "./car.less";
import { useNavigate} from "react-router-dom";

const Car = props=>{
  let navigate = useNavigate();
  const gotopage = ()=>{
    navigate('/')
  }
  return(
    <>
      <TopSearch/>
      <div onClick={gotopage}></div>
    </>
  )
}
export default Car;
