import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import Xxlvertify from "@/components/xxlvertify/xxlvertify.js";
import { Button,Input } from "antd";
import "./resetPassword.less";
const ResetPassword = (props) => {
  // let navigate = useNavigate();
  let [orign, setOrign] = useState(true);
  let [keyword,setKeyword] = useState("");
  let [title,setTitle] = useState('重置密码')
  let [placeholder,setPlaceholder] = useState('')
  const clickBtn = (who)=>{
    switch (who) {
      case 1:
        setTitle('手机号找回密码')
        setPlaceholder('请输入手机号*')
        break;
        case 2:
          setTitle('通过邮箱找回')
          setPlaceholder('邮箱*')
        break;
        default:
          break;
    }
    setOrign(false)
  }
  const searchInput = (e) => {
    setKeyword(e.target.value)
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="resetPassword">
      <h3 className="title">{title}</h3>
      {orign?(
        <>
          <div className="btn_box" onClick={()=>clickBtn(1)}>
            <Button type="primary" block={true}>
              通过手机找回
            </Button>
          </div>
          <div className="btn_box" onClick={()=>clickBtn(2)}>
            <Button type="primary" block={true}>
              通过邮箱找回
            </Button>
          </div>
        </>
      ):<div className="findPassword">
        <Input
            placeholder={placeholder}
            value={keyword}
            type="text"
            onChange={searchInput}
          />
         <Xxlvertify />
          <Button type="primary" block={true}>
              下一步
            </Button>
        
        </div>}

     
    </div>
  );
};
export default ResetPassword;
