import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import Xxlvertify from "@/components/xxlvertify/xxlvertify.js";
import "./phoneRegister.less";
const PhoneRegister = (props) => {
  console.log("111111",props)
  let { isregister } = props;
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const checkPrice = (_, value) => {
    console.log("11", _);
    console.log("22", value);
    // if (value.number > 0) {
    //   return Promise.resolve('1111111111111');
    // }
    return Promise.reject(new Error("请按照提示完成验证"));
  };
  const goToLogin = () => {
    navigate("/login");
  };
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
          <div className="phone_box">
            <div className="nums">{"+86"}</div>
            <Input className="pnone_inp" placeholder="请输入手机号*" />
          </div>
        </Form.Item>

        <Form.Item name="xxl" rules={[{ validator: checkPrice }]}>
          <Xxlvertify />
        </Form.Item>

        <Form.Item
          name="some"
          rules={[{ required: true, message: "短信验证码必填" }]}
        >
          <div className="yan">
            <Input className="yan_num" placeholder="短信验证码*" />
            <Button className="getnum">登录</Button>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="my_subimit">
            {isregister?'下一步':'登录/注册'}
          </Button>
        </Form.Item>
      </Form>
      {isregister && (
        <>
          <div className="idcar">
            <div onClick={goToLogin}>立即登录</div>
            {/* <div>以游客身份购买</div> */}
          </div>
          <div className="question">登录遇到问题？</div>
          <div className="comunicat">联系客服 | 常见问题</div>
        </>
      )}
    </div>
  );
};
export default PhoneRegister;
