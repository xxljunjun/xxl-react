
import React,{useState,useEffect}from "react";
import "./fixcustomer.less";
import { Link,useNavigate} from "react-router-dom";
import {  Drawer } from "antd";
import { earphone } from "@/utils/img.js";
import { CommentOutlined,MailOutlined,PhoneOutlined,WechatOutlined} from '@ant-design/icons'
const Fixcustomer = props=>{
  let navigate = useNavigate()
  let [drawervisible, setDrawervisible] = useState(false);
  const onCloseDrawer = () => {
    setDrawervisible(false);
  };
  const showDrawer = () => {
    setDrawervisible(true);
  };
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <>
  <div className="fixcustomer">
  <Drawer
          title="客服服务"
          placement={"bottom"}
          closable={false}
          onClose={onCloseDrawer}
          visible={drawervisible}
          key={"bottom"}
          height={480}
          className='fixcustomer_Drawer'
        >
          <div className="box">
            <h3>
            <CommentOutlined />
              在线聊天
            </h3>
            <p>周一至周日 9:00-21:00</p>
            <p>GMT+8</p>
          </div>
          <div className="box">
            <h3><MailOutlined />邮件联系</h3>
          </div>
          <div className="box">
            <h3><PhoneOutlined />电话联系</h3>
            <p>400 700 0303</p>
            <p>周一至周日 9:00-12:30；14:00-21:00</p>
            <p>GMT+8</p>
          </div>
          <div className="box">
            <h3><WechatOutlined />微信</h3>
            <p>点击复制，请前往微信关注“大疆”公众号</p>
          </div>
        </Drawer>
        <div className="fixed">
          <img
            src={earphone}
            alt=""
            className="earphone"
            onClick={showDrawer}
          />
        </div>
  </div>
  </>
}
export default Fixcustomer
