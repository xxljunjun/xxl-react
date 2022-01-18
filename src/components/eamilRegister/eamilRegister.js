

import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { Form, Input, Button } from "antd";
import Xxlvertify from "@/components/xxlvertify/xxlvertify.js";
import "./eamilRegister.less";
const EamilRegister = (props) => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const checkPrice = (_, value) => {
    console.log('11',_)
    console.log('22',value)
    // if (value.number > 0) {
    //   return Promise.resolve('1111111111111');
    // }
    return Promise.reject(new Error('请按照提示完成验证'));
  };
  const goToLogin = ()=>{
    navigate('/login')
  }
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="phoneRegister">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "手机号不能为空" }]}
        >
            <Input className="pnone_input" placeholder="邮箱*"/>
        </Form.Item>

        <Form.Item
          name="password_1"
          rules={[{ required: true, message: "手机号不能为空" }]}
        >
            <Input className="pnone_input" placeholder="密码*"/>
        </Form.Item>

        <Form.Item
          name="password_2"
          rules={[{ required: true, message: "手机号不能为空" }]}
        >
            <Input className="pnone_input" placeholder="再次输入密码*"/>
        </Form.Item>

        <Form.Item
          name="xxl"
          rules={[{ validator: checkPrice }]}
        >
          <Xxlvertify />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="my_subimit">
            注册
          </Button>
        </Form.Item>
      </Form>
      <div className="idcar">
        <div onClick={goToLogin}>立即登录</div>
        {/* <div>以游客身份购买</div> */}
      </div>
      <div className="question">登录遇到问题？</div>
      <div className="comunicat">联系客服 | 常见问题</div>
    </div>
  );
};
export default EamilRegister;
