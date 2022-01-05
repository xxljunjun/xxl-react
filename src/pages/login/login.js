import React from "react";
import "./login.less";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";

const Login = (props) => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const jumpPage = ()=>{
    navigate('/resetPassword')
  }
  return (
    <>
      <header>登录</header>
      <div className="submit_box">
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
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "密码不能为空" }]}

          >
            <Input.Password />
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" className="my_subimit">
              登录
            </Button>
          </Form.Item>
          <Form.Item >
          <Button className="my_register">
        手机短信登录/注册
        </Button>
          </Form.Item>
        </Form>
       
      </div>
      <div className="forget" onClick={jumpPage}>忘记密码？</div>
      <div className="register">注册DJI账号</div>
      <div className="idcar">以游客身份购买</div>
      <div className="question">登录遇到问题？</div>
      <div className="comunicat">联系客服 | 常见问题</div>
      <div className="xxl_bottom"></div>
    </>
  );
};
export default Login;
