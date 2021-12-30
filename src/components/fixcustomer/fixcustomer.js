
import React,{useState,useEffect}from "react";
import "./fixcustomer.less";
import { Link,useNavigate} from "react-router-dom";
import {  Drawer } from "antd";
import { earphone } from "@/utils/img.js";
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
          height={400}
        >
          <div>客服服务</div>
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
