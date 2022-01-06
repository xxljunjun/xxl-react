import React,{useState,useEffect} from "react";
import "./search.less";
import { dajiang, search, shopimg, gang } from "@/utils/img.js";
import { Link,useNavigate} from "react-router-dom";
import {Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'


const Search = props =>{
  let navigate = useNavigate()
  let [num,setNum]= useState(2)
  let [navStatus,setNavStatus] = useState(true)
  const gotoreflesh = () => {
    // console.log("刷新页面",navigate);
    navigate('/')
    setNavStatus(true)
    PubSub.publish('navStatus',false)
  };
  const chtrolNav = ()=>{
    setNavStatus(!navStatus)
    PubSub.publish('navStatus',navStatus)
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
            navStatus?<img src={gang} alt="" className="left_img" />:'关闭'
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
         navStatus &&  <div className="right">
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