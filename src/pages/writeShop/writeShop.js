import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "@/components/topBar/topBar.js";
import "./writeShop.less";
const WriteShop = (props) => {
  let navigate = useNavigate();
  let [num, setNum] = useState(8);
  let [numarr, setNumarr] = useState([
    {
      id: 1,
      name: "激活情况",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
    {
      id: 2,
      name: "飞行器成色",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
    {
      id: 3,
      name: "云台成色",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
    {
      id: 4,
      name: "遥控器成色",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
    {
      id: 5,
      name: "进水受潮",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
    {
      id: 6,
      name: "配套附件",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
    {
      id: 7,
      name: "飞行功能",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
    {
      id: 8,
      name: "循环次数",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose:true,
      who:''
    },
  ]);
  let [step, setStep] = useState(0);
  let [shop, setShop] = useState("iDol智能飞行器");
  const chooseStep = (largeId,inner) => {
    console.log(largeId)
    console.log(inner)
    setStep(largeId)
    numarr.forEach(val=>{
      if(val.id === largeId){
        val.ischoose= false
        val.who = inner.checkname
        val.choose.forEach(k=>{
          if(k.id ===inner.id){
            k.check = true
          }
        })
      }
    })
    
  };
  const rechoose= (item)=>{

  const objarr = JSON.parse(JSON.stringify(numarr));
    console.log(item)
    objarr.forEach(val=>{
      if(item.id === val.id){
        val.ischoose = true
        val.who = ''
      }
    })
    setNumarr(objarr)
  }
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <div className="writerShop">
        <TopBar />
        <div className="process">
          {numarr.map((item) => {
            return (
              <div
                key={item.id}
                className={step >= item.id ? "blue_item" : "item"}
                style={{ width: (1 / numarr.length) * 100 + "%" }}
              ></div>
            );
          })}
          <div className="nums">
            <span>{step}</span>
            <span>/</span>
            <span>{num}</span>
          </div>
        </div>
        <h3 className="title">{shop}</h3>
        <div className="step_box">
          {numarr.map((item) => {
            return (
              step + 1 >= item.id && (
                <div className="step" key={item.id}>
                  <div className="aline">
                    {item.name}
                    {
                     item.who &&<div>
                      <span className="who">{item.who}</span>
                      <span className="rep" onClick={()=>rechoose(item)}>修改</span>
                    </div>
                    }
                    
                  </div>
                  {
                    item.ischoose && <div className="choose_box">
                    {item.choose.map((val) => {
                      return (
                        <div
                          key={val.id}
                          className={ val.check?'choose checked':'checked'}
                          onClick={()=>chooseStep(item.id,val)}
                        >
                          {val.checkname}
                        </div>
                      );
                    })}
                  </div>
                  }
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};
export default WriteShop;
