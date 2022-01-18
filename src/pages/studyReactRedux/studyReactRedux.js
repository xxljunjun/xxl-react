import React,{useState,useEffect}from "react";
import './studyReactRedux.less'
// import { Link,useNavigate} from "react-router-dom";
import { Select } from "antd";

const { Option } = Select;
const StudyReactRedux = props=>{
  console.log('react-redux的props',props)
  const [addNum, setAddNum] = useState(1);
  // let navigate = useNavigate()
  const handleChange = (value) => {
    setAddNum(Number(value));
  };
  const handle = (some) => {
    console.log(some);
    //改变redux中的变量count
    switch (some) {
      case "+":
        props.jia(Number(addNum))
        break;
      case "-":
        props.jian(Number(addNum))
        break;
      case "x":
        props.cheng(Number(addNum))
        break;
      case "/":
        props.chu(Number(addNum))
        break;
        case "$":
      //  setTimeout(()=>{
        props.asyncjia(Number(addNum),1000)
      //  },1000)
        break;
      default:
        break;
    }
  };
  useEffect(()=>{

    return ()=>{

    }
  },[])
  return <div className="studyReactRedux">
     { props.count}
      <br />
      <div className="handelBox">
        <div onClick={() => handle("+")}>+</div>
        <div onClick={() => handle("-")}>-</div>
        <div onClick={() => handle("x")}>x</div>
        <div onClick={() => handle("/")}>/</div>
        <button onClick={() => handle("$")}>异步加</button>
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
}
export default StudyReactRedux