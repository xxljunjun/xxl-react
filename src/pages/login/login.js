import React ,{useState}from "react";
import "./login.less";
import {useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import PhoneRegister from "@/components/phoneRegister/phoneRegister.js";
// const XxxContext = React.createContext()
const Login = (props) => {
  
  let navigate = useNavigate();
  let [isPhoneLogin,setIsPhoneLogin] = useState(true)
  let [loginStr,setLoginStr] = useState('手机短信登录/注册')
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const jumpPage = ()=>{
    navigate('/resetPassword')
  }
  const jumpegister = ()=>{
    navigate('/register')
  }
  const switchLogin = ()=>{
    console.log("切换登录方方式")
    setIsPhoneLogin(!isPhoneLogin)
    if(isPhoneLogin){
      setLoginStr('账号密码登录')
    }else{
      setLoginStr('手机短信登录/注册')
    }
   
  }
  return (
    <>
      <header>登录</header>
      {
        isPhoneLogin ?<div className="submit_box">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "邮箱/手机不能为空" }]}
          >
            <Input placeholder="邮箱/手机*"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "密码不能为空" }]}

          >
            <Input.Password placeholder="密码*"/>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" className="my_subimit">
              登录
            </Button>
          </Form.Item>
        </Form>
       
      </div>:<PhoneRegister isregister={false}/>
      }
      <div className="my_register_box">
        <Button className="my_register" onClick={switchLogin}>
          {loginStr}
        </Button>
      </div>
      <div className="forget" onClick={jumpPage}>忘记密码？</div>
      <div className="register" onClick={jumpegister}>注册DJI账号</div>
      <div className="idcar">以游客身份购买</div>
      <div className="question">登录遇到问题？</div>
      <div className="comunicat">联系客服 | 常见问题</div>
      <div className="xxl_bottom"></div>
       {/* <XxxContext.Provider value={{xxlname:'xxl',age:12}}>
         <Son/>
       </XxxContext.Provider> */}
    </>
  );
};
export default Login;

// function Son(){
//   return<>
//     <div>11111111</div>
//     <XxxContext.Consumer>
//         {
//           value=>{
//             return <li>{value.xxlname}</li>
//           }
//         }
//       </XxxContext.Consumer>
//   </>
// }
