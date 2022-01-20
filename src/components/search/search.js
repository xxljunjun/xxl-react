import React,{useEffect} from "react";
import "./search.less";
import { dajiang, search, shopimg, gang } from "@/utils/img.js";
import { Link,useNavigate} from "react-router-dom";
import {Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import PubSub from 'pubsub-js'
import {changeNavstatus,updateShopnums} from '@/actions/index.js'
import {connect} from 'react-redux'


const Search = props =>{
  let {navstatus,changNav,shopNums} = props
  let navigate = useNavigate()
  const gotoreflesh = () => {
    navigate('/')
    changNav(false)
  };
  const chtrolNav = ()=>{
    navstatus?changNav(false):changNav(true)
    // changNum(++shopNums)
  }
  useEffect(()=>{
    // PubSub.subscribe('numstatus',(msg,data) => {
    //     setNum(3)
    // })
    return ()=>{
      // PubSub.unsubscribe('numstatus');
    }
  },[])
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
            <Badge count={shopNums}>
              <img src={shopimg} alt="" className="right_img_2" icon={<UserOutlined />} />
            </Badge>
          </Link>
        </div>
       }
      </div>
    </>
  )
}

export default connect(state=>({navstatus:state.he.navstatus,shopNums:state.shop.shopNums}),{
  changNav:changeNavstatus,
  changNum:updateShopnums
})(Search)
