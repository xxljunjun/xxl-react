import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "@/components/topBar/topBar.js";
import TipsDialog from "@/components/tipsDialog/tipsDialog.js";
import "./writeShop.less";
const WriteShop = (props) => {
  let navigate = useNavigate();
  let [dialogStatus,setDialogStatus] = useState(false)
  let [num, setNum] = useState(8);
  let [otherarr, setOtherarr] = useState([
    { id: 1, check: false, txt: "遥控不正常" },
    { id: 2, check: false, txt: "影像功能不正常" },
    { id: 3, check: false, txt: "有过拆修" },
    { id: 4, check: false, txt: "无以上问题" },
  ]);
  let [numarr, setNumarr] = useState([
    {
      id: 1,
      name: "激活情况",
      choose: [
        { id: 1, checkname: "未激活", check: false },
        { id: 2, checkname: "已激活", check: false },
      ],
      ischoose: true,
      who: "",
    },
    {
      id: 2,
      name: "飞行器成色",
      choose: [
        { id: 1, checkname: "外壳完美无瑕疵", check: false },
        { id: 2, checkname: "轻微磕碰掉漆", check: false },
        { id: 3, checkname: "外壳有破损/断裂", check: false },
        { id: 4, checkname: "外壳变形/部件缺失", check: false },
      ],
      ischoose: true,
      who: "",
    },
    {
      id: 3,
      name: "云台成色",
      choose: [
        { id: 1, checkname: "外壳完美无瑕疵", check: false },
        { id: 2, checkname: "外壳轻微磕碰/磨损", check: false },
        { id: 3, checkname: "外壳/排线断裂", check: false },
        { id: 4, checkname: "云台整体缺失或脱落", check: false,isNoBack:true },
      ],
      ischoose: true,
      who: "",
    },
    {
      id: 4,
      name: "遥控器成色",
      choose: [
        { id: 1, checkname: "外壳完好", check: false },
        { id: 2, checkname: "外壳磕碰", check: false },
        { id: 3, checkname: "部件缺失/缺失", check: false },
        { id: 4, checkname: "官配无遥控器", check: false },
      ],
      ischoose: true,
      who: "",
    },
    {
      id: 5,
      name: "进水受潮",
      choose: [
        { id: 1, checkname: "无进水受潮", check: false },
        { id: 2, checkname: "进水受潮", check: false },
      ],
      ischoose: true,
      who: "",
    },
    {
      id: 6,
      name: "配套附件",
      choose: [
        { id: 1, checkname: "配件及电池齐全", check: false },
        { id: 2, checkname: "配件有缺失", check: false },
      ],
      ischoose: true,
      who: "",
    },
    {
      id: 7,
      name: "飞行功能",
      choose: [
        { id: 1, checkname: "飞行正常", check: false },
        { id: 2, checkname: "模块异常", check: false },
        { id: 3, checkname: "飞行不正常", check: false },
      ],
      ischoose: true,
      who: "",
    },
    {
      id: 8,
      name: "循环次数",
      choose: [
        { id: 1, checkname: "0-15次", check: false },
        { id: 2, checkname: "16-45次", check: false },
        { id: 3, checkname: "＞45次", check: false },
        { id: 4, checkname: "无电池或电池异常", check: false },
      ],
      ischoose: true,
      who: "",
    },
  ]);
  let [step, setStep] = useState(0);
  let [shop, setShop] = useState("iDol智能飞行器");
  /**
   * 点击选项
  */
  const chooseStep = (large, inner) => {
    console.log(large);
    console.log(inner);
    if(inner.isNoBack){
      setDialogStatus(true)
      return
    }

    const objarr = JSON.parse(JSON.stringify(numarr));
    objarr.forEach((val) => {
      if (val.id === large.id) {
        if (large.who === "" && val.who === "") {
          console.log("是否有值", large);
          setStep(large.id);
        }
        val.ischoose = false;
        val.who = inner.checkname;
        val.choose.forEach((k) => {
          if (k.id === inner.id) {
            k.check = true;
          } else {
            k.check = false;
          }
        });
      }
    });
    setNumarr(objarr);
  };
  /**
   * 已经选择了的，点击修改
  */
  const rechoose = (item) => {
    const objarr = JSON.parse(JSON.stringify(numarr));
    console.log(item);
    objarr.forEach((val) => {
      if (item.id === val.id) {
        val.ischoose = true;
      }
    });
    setNumarr(objarr);
  };
  /**
   * 选择一些其他的问题
  */
  const chooseOther = (m)=>{
    console.log(m)
    const objarr = JSON.parse(JSON.stringify(otherarr));
    objarr.forEach(val=>{
      if(m.id === val.id){
        val.check = true
      }else{
        val.check = false
      }
    })
    setOtherarr(objarr)
  }
  /**
   * 点击查看报价
  */
  const toSeePrice =()=>{
    //把所有的信息暴露出去
    navigate('/login')
  }
  /**
   * 关闭弹窗
  */
  const closetipsDialog = ()=>{
    setDialogStatus(false)
  }
  /**
   * 生命周期
  */
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <TipsDialog dialogStatus={dialogStatus} close={closetipsDialog}/>
      <div className="writerShop"> 
        <TopBar />
        {/* 进度条 */}
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
        {/* 选择回收步骤 */}
        <div className="step_box">
          {numarr.map((item) => {
            return (
              step + 1 >= item.id && (
                <div className="step" key={item.id}>
                  <div className="aline">
                    {item.name}
                    {!item.ischoose && (
                      <div>
                        <span className="who">{item.who}</span>
                        <span className="rep" onClick={() => rechoose(item)}>
                          修改
                        </span>
                      </div>
                    )}
                  </div>
                  {item.ischoose && (
                    <div className="choose_box">
                      {item.choose.map((val) => {
                        return (
                          <div
                            key={val.id}
                            className={val.check ? "choose checked" : "checked"}
                            onClick={() => chooseStep(item, val)}
                            style={{color:val.isNoBack?'#cccccc':'#000000'}}
                          >
                            {val.checkname}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )
            );
          })}
          {step >= numarr.length && (
            <div className="otherchoose">
              <p>
                多选项
                <span className="hui_txt">（可多选，如无异常可不选）</span>
              </p>
              <div className="other">
                {otherarr.map((m) => {
                  return (
                    <div
                      key={m.id}
                      className={m.check ? "choose checked" : "checked"}
                      onClick={() => chooseOther(m)}
                      style={{fontWeight:(m.id) ===4?600:500}}
                    >
                      {m.txt}
                    </div>
                  );
                })}
              </div>
              <div className="fix_btn_box">
                <span className="btn" onClick={toSeePrice}>查看报价</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default WriteShop;
