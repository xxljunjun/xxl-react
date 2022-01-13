import React, { useState,useEffect} from "react";
import { Select } from "antd";
import "./studyRedux.less";
import store from '@/store/index.js'
const { Option } = Select;
const StudyRedux = (props) => {
  // console.log('学习redux的props',store.getState())
  const [addNum, setAddNum] = useState(1);
  let [count,setCount] = useState(store.getState().count)
  const handleChange = (value) => {
    console.log(value);
    setAddNum(Number(value));
  };
  const handle = (some) => {
    console.log(some);
    let shortNum = ''
    switch (some) {
      case "+":
        shortNum= count+addNum
        break;
      case "-":
        shortNum= count-addNum
        break;
      case "x":
        shortNum= count*addNum
        break;
      case "/":
        shortNum= count/addNum
        break;
      default:
        break;
    }
    console.log(shortNum)
    //改变redux中的变量count
    store.dispatch({
      type:'CHANGE_COUNT',
      data:shortNum
    })
  };
  useEffect(() => {
    // 监听state的变化
    let unsubscribe  = store.subscribe(() => {
      console.log('监听中..',store.getState())
      setCount(store.getState().count)
    })
    return () => {
      // 取消监听
      unsubscribe();
    }
  },[])
  return (
    <div className="studyRedux">
      {count}
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
