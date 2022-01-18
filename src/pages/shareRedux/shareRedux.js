import React,{useState,useRef} from "react";
import {connect} from 'react-redux'
import {changePerson} from '@/actions/index.js'
import './shareRedux.less'
const ShareRedux = (props) => {
  let {personArr} = props
  const input_1Element = useRef()
  const input_2Element = useRef()
  let [num,setNum] = useState(1)
  const addPerson = ()=>{
    console.log(num)
    if(input_1Element.current.value === '' || input_2Element.current.value === ''){
      return 
    }
    let obj = {
      id:num,
      myname:input_1Element.current.value,
      age:input_2Element.current.value
    }
    //修改redux里的数组
    props.pushAction(obj)
    
    //清空数据
    setNum(++num)
    input_1Element.current.value =''
    input_2Element.current.value = ''
  }
  return <div className="shareRedux">
    <div className="top_box">
      <input ref={input_1Element} type='text'/>
      <input ref={input_2Element}  type='text'/>
      <button onClick={addPerson}>增加人</button>
    </div>
    <div className="listBox">
      {
        personArr.map(item=>{
          return <li key={item.id}>{`我是${item.myname}，今年${item.age}岁了`}</li>
        })
      }
    </div>
  </div>
};

export default connect(state=>({personArr:state.she.personArr}),{
  pushAction:changePerson
})(ShareRedux)
