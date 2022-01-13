import React, { useState } from "react";
import { Select } from "antd";
import "./studyRedux.less";
import store from '../../store'
const { Option } = Select;
const StudyRedux = (props) => {
  console.log('学习redux的props',store.getState())
  let {num} = store.getState()
  const [count, setCount] = useState(0);
  const [addNum, setAddNum] = useState(1);
  const handleChange = (value) => {
    console.log(value);
    setAddNum(Number(value));
  };
  const handle = (some) => {
    console.log(some);
    console.log(addNum);
    switch (some) {
      case "+":
        setCount(count + addNum);
        break;
      case "-":
        setCount(count - addNum);
        break;
      case "x":
        setCount(count * addNum);
        break;
      case "/":
        setCount(count / addNum);
        break;
      default:
        break;
    }
  };
  return (
    <div className="studyRedux">
      {num}
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
