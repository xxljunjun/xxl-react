import React from "react";
import "./mybottom.less";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Mybottom = (props) => {
  const buttomArr = [
    {
      id: 1,
      some: "热门产品分类",
      cildren: [
        { id: 1, shop: "御 Mavic" },
        { id: 2, shop: "灵眸 Osmo" },
      ],
    },
    {
      id: 2,
      some: "帮助与支持",
      cildren: [
        { id: 1, shop: "御 Mavic" },
        { id: 2, shop: "灵眸 Osmo" },
      ],
    },
    {
      id: 3,
      some: "商城项目",
      cildren: [
        { id: 1, shop: "御 Mavic" },
        { id: 2, shop: "灵眸 Osmo" },
      ],
    },
    {
      id: 4,
      some: "探索精彩大疆",
      cildren: [
        { id: 1, shop: "御 Mavic" },
        { id: 2, shop: "灵眸 Osmo" },
      ],
    },
  ];
  return (
    <>
      <div className="my_bottom">
        <Collapse bordered={false} accordion>
          {buttomArr.map((val) => {
            return (
              <Panel header={val.some} key={val.id}>
                <ul>
                  {val.cildren.map((txt,index) => {
                    return <li key={index} style={{padding:10}}>{txt.shop}</li>;
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
