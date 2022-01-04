import React from "react";
import "./mybottom.less";
import { Collapse } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Panel } = Collapse;

const Mybottom = (props) => {
  let navigate = useNavigate();
  const buttomArr = [
    {
      id: 1,
      some: "热门产品分类",
      cildren: [
        { id: 1, shop: "航拍无人机" },
        { id: 2, shop: "手持拍摄设备" },
        { id: 3, shop: "商用产品及方案" },
        { id: 4, shop: "增值服务" },
      ],
    },
    {
      id: 2,
      some: "帮助与支持",
      cildren: [
        { id: 1, shop: "支付方式" },
        { id: 2, shop: "订单帮助" },
        { id: 3, shop: "发货和物流" },
        { id: 4, shop: "维修中心" },
        { id: 5, shop: "技术支持" },
        { id: 6, shop: "售后服务政策" },
      ],
    },
    {
      id: 3,
      some: "商城项目",
      cildren: [
        { id: 1, shop: "DJI 币返利计划" },
        { id: 2, shop: "DJI 大疆商城 APP" },
      ],
    },
    {
      id: 4,
      some: "探索精彩大疆",
      cildren: [
        { id: 1, shop: "天空之城" },
        { id: 2, shop: "DJI 大疆社区" },
        { id: 3, shop: "安全飞行指引" },
        { id: 4, shop: "环球飞行指南" },
      ],
    },
  ];
  const goTomoreshop = ()=>{
    navigate('/moreshop')
  }
  return (
    <>
      <div className="my_bottom">
        <Collapse bordered={false} accordion defaultActiveKey={1}>
          {buttomArr.map((val) => {
            return (
              <Panel header={val.some} key={val.id}>
                <ul>
                  {val.cildren.map((txt,index) => {
                    return <li key={index} style={{padding:10}} onClick={goTomoreshop}>{txt.shop}</li>;
                  })}
                </ul>
              </Panel>
            );
          })}
        </Collapse>
        <div className="somthing">
          <span>DJI.COM</span>
          <span>隐私政策</span>
          <span>使用条款</span>
        </div>
        <div className="txt">中国大陆( 简体中文 / ¥ CNY )</div>
        <div className="polic">版权所有© 2021 大疆创新保留所有权利</div>
      </div>
    </>
  );
};
export default Mybottom;
