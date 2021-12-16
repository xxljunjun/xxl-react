import React from "react";
import "./son.less";
class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sonName: "我是son组件",
    };
  }
  change() {
    let { onChangeColor } = this.props;
    console.log("需要调用父组件的方法");
    onChangeColor();
  }
  render() {
    let { sonName } = this.state;
    // let {myName} = this.props
    // console.log("props",this.props.children) 类似于vue中的插槽的作用
    return (
      <div className="son" onClick={() => this.change()}>
        {sonName}
      </div>
    );
  }
  componentDidMount() {
   
  }
  sholdComponentUpdate(){
      return true

  }
  componentDidUpdate(){
      
  }
  componentWillUnmount() {
   
  }
}
export default Son;
