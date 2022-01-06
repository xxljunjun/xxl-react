import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./addShop.less";
import { Button,message } from "antd";
import PubSub from 'pubsub-js'
const AddShop = (props) => {
  let { close } = props;
  let navigate = useNavigate();
  const closeIt = () => {
    close();
  };
  const addShop = ()=>{
    close();
    //购物车数量增加
      // 发布消息
      setTimeout(()=>{
        navigate('/addSucceed')
      },500)
     
      message.success('加入购物车成功')
      PubSub.publish('numstatus',true)
      
  }
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="addShop">
      <div onClick={closeIt} className="close">
        关闭
      </div>
      <div className="header">推荐您添加 DJI Care 随心换</div>
      <div className="text_box">
        1. 若在购买 DJI 大疆产品时搭配加购DJI Care 随心换，
        服务协议日期为产品激活当天。针对DJI OM 5、DJI OM 4 系列，
        如您的产品购买后未操作激活， DJI Care
        随心换的服务生效时间为您购买的产品发货日期顺延45天，
        具体时间请以DJI大疆提供的服务协议所载日期为准。
        <br />
        2. DJI
        大疆提供的置换产品为与您产品相同型号的全新产品或与全新产品具有相同性能和可靠性的产品。
      </div>
      <div className="bottom_box">
        <Button type="primary" htmlType="submit" className="my_jump_1" onClick={addShop}>
        加入购物车
        </Button>
        <Button type="primary" htmlType="submit" className="my_jump_2" onClick={addShop}>
        跳过
        </Button>
      </div>
    </div>
  );
};
export default AddShop;
