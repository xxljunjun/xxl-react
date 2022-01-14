import React,{useState,useEffect} from "react";
import "./search.less";
import { dajiang, search, shopimg, gang } from "@/utils/img.js";
import { Link,useNavigate} from "react-router-dom";
import {Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import store from "@/store/index.js";
import {changeNavstatus} from '@/actions/index.js'


const Search = props =>{
  let {who} = props
  let navigate = useNavigate()
  let [num,setNum]= useState(2)
  const gotoreflesh = () => {
    // console.log("刷新页面",navigate);
    navigate('/')
    // setNavStatus(true)
    // PubSub.publish('navStatus',false)
    changeNavstatus(false)
  };
  const chtrolNav = ()=>{
    // setNavStatus(!navStatus)
    // PubSub.publish('navStatus',navStatus)
    console.log(store.getState().navstatus)
    store.getState().navstatus?changeNavstatus(false):changeNavstatus(true)
    navigate(`/${who}`)
  }
  useEffect(()=>{
    PubSub.subscribe('numstatus',(msg,data) => {
      console.log('11111111111',msg)
      console.log('2222222',data)
      // if(data){
        setNum(3)
      // }
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
            !store.getState().navstatus?<img src={gang} alt="" className="left_img" />:'关闭'
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
         !store.getState().navstatus &&  <div className="right">
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
export default Search;