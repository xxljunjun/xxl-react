import React,{useState,useEffect} from "react";
import "./search.less";
import { dajiang, search, shopimg, gang } from "@/utils/img.js";
import { Link,useNavigate} from "react-router-dom";
import {Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import {changeNavstatus} from '@/actions/index.js'
import {connect} from 'react-redux'


const Search = props =>{
  let {navstatus,changNav} = props
  let navigate = useNavigate()
  let [num,setNum]= useState(2)
  const gotoreflesh = () => {
    navigate('/')
    changNav(false)
  };
  const chtrolNav = ()=>{
    navstatus?changNav(false):changNav(true)
  }
  useEffect(()=>{
    PubSub.subscribe('numstatus',(msg,data) => {
        setNum(3)
    })
    return ()=>{
      PubSub.unsubscribe('numstatus');
    }
  },[num])
  return (
    <>
      <div className="topsearch">
        <div className="left" onClick={chtrolNav}>
          {
            !navstatus?<img src={gang} alt="" className="left_img" />:'关闭'
          }
          
        </div>
        <div className="middle">
          <img
            src={dajiang}
            alt=""
            className="middle_img"
            onClick={gotoreflesh}
          />
        </div>
       {
         !navstatus &&  <div className="right">
          <Link to="/search">
            <img src={search} alt="" className="right_img_1" />
          </Link>
          <Link to="/car">
            <Badge count={num}>
              <img src={shopimg} alt="" className="right_img_2" icon={<UserOutlined />} />
            </Badge>
          </Link>
        </div>
       }
      </div>
    </>
  )
}

export default connect(state=>({navstatus:state.navstatus}),{
  changNav:changeNavstatus
})(Search)
