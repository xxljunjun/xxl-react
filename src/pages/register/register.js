import React, {useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import PhoneRegister from "@/components/phoneRegister/phoneRegister.js";
import EamilRegister from "@/components/eamilRegister/eamilRegister.js";
import { Tabs } from "antd";
import './register.less'
const { TabPane } = Tabs;
const Register = (props) => {
  // let navigate = useNavigate();
  const callback = (key) => {
    console.log(key);
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="myregister">
      <div className="swithtabBar">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="手机注册" key="1">
            <PhoneRegister isregister={true}/>
          </TabPane>
          <TabPane tab="邮箱注册" key="2">
            <EamilRegister/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default Register;
