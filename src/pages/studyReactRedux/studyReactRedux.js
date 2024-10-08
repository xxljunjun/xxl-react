//引入UI组件
import React,{useState,useEffect}from "react";
import {connect} from 'react-redux'//引入connect用于连接UI组件与redux
import {
    changeCount_jia,
    changeCount_jian,
    changeCount_cheng,
    changeCount_chu,
    changeCountAsync_jia
} from '@/redux/actions/count_action.js'
import './studyReactRedux.less'
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
//简化写法  ==>react-redux帮我们去dispatch分发actions
//a函数返回的对象中的key就作为传递给UI组件的key,value作为传递给UI组件的value
export default connect(
  state=>({count:state.count_reducer.count}),
  //第一种写法
  // dispatch=>({
  //   jia: num=>dispatch(changeCount_jia(num)),
  //   jian: num=>dispatch(changeCount_jian(num)),
  //   cheng: num=>dispatch(changeCount_cheng(num)),
  //   chu: num=>dispatch(changeCount_chu(num)),
  //   asyncjia: num=>dispatch(changeCountAsync_jia(num)),
  // })
  //第二种写法
  {
    jia:changeCount_jia,
    jian:changeCount_jian,
    cheng:changeCount_cheng,
    chu:changeCount_chu,
    asyncjia:changeCountAsync_jia
  }
)(StudyReactRedux)



