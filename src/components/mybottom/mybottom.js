import React from 'react'
import './mybottom.less'
import { add } from "@/utils/img.js";
const Mybottom = props=>{
    const buttomArr= [
        { id: 1, some: "热门产品分类" },
        { id: 2, some: "帮助与支持" },
        { id: 3, some: "商城项目" },
        { id: 4, some: "探索精彩大疆" },
      ]
    return (
        <>
            <div className="my_bottom">
          <ul className="ulbox">
            {buttomArr.map((val, index) => {
              return (
                <li className="item" key={index}>
                  <span>{val.some}</span>
                  <img src={add} alt="" className="add" />
                </li>
              );
            })}
          </ul>
          <div className="somthing">
            <span>DJI.COM</span>
            <span>隐私政策</span>
            <span>使用条款</span>
          </div>
          <div className="txt">中国大陆( 简体中文 / ¥ CNY )</div>
          <div className="polic">版权所有© 2021 大疆创新保留所有权利</div>
        </div>
        </>
    )
}
export default Mybottom