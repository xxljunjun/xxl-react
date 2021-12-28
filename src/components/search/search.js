import React from "react";
import "./search.less";
import { dajiang, search, shopimg, gang } from "@/utils/img.js";
import { Link,useNavigate} from "react-router-dom";
import {Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const Search = props =>{
  let navigate = useNavigate()
  const gotoreflesh = () => {
    // console.log("刷新页面",navigate);
    navigate('/')
  };
  return (
    <>
      <div className="topsearch">
        <div className="left">
          <img src={gang} alt="" className="left_img" />
        </div>
        <div className="middle">
          <img
            src={dajiang}
            alt=""
            className="middle_img"
            onClick={gotoreflesh}
          />
        </div>
        <div className="right">
          <Link to="/search">
            <img src={search} alt="" className="right_img_1" />
          </Link>
          <Link to="/car">
            <Badge count={2}>
              <img src={shopimg} alt="" className="right_img_2" icon={<UserOutlined />} />
            </Badge>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Search;