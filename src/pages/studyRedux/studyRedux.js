import React, { useState,useEffect} from "react";
import { Select } from "antd";
import "./studyRedux.less";
import store from '@/store/index.js'
import {changeCount_jia,changeCount_jian,changeCount_cheng,changeCount_chu} from '@/actions/index.js'//生成action对象
const { Option } = Select;
const StudyRedux = (props) => {
  // console.log('学习redux的props',store.getState())
  const [addNum, setAddNum] = useState(1);
  const handleChange = (value) => {
    console.log(value);
    setAddNum(Number(value));
  };
  const handle = (some) => {
    console.log(some);
    //改变redux中的变量count
    switch (some) {
      case "+":
       store.dispatch(changeCount_jia(Number(addNum)))
        break;
      case "-":
        store.dispatch(changeCount_jian(Number(addNum)))
        break;
      case "x":
        store.dispatch(changeCount_cheng(Number(addNum)))
        break;
      case "/":
        store.dispatch(changeCount_chu(Number(addNum)))
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    // 监听state的变化
    let unsubscribe  = store.subscribe(() => {
      console.log('监听中..',store.getState())
    })
    return () => {
      // 取消监听
      unsubscribe();
    }
  },[])
  return (
    <div className="studyRedux">
      { store.getState().count}
      <br />
      <div className="handelBox">
        <div onClick={() => handle("+")}>+</div>
        <div onClick={() => handle("-")}>-</div>
        <div onClick={() => handle("x")}>x</div>
        <div onClick={() => handle("/")}>/</div>
      </div>
      <div className="select_box">
        <Select
          defaultValue={addNum}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select>
      </div>
    </div>
  );
};
export default StudyRedux;
