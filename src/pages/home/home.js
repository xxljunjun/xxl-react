import React from "react";
import "./home.less";
import Son from "./components/son.js";
import { Button } from "antd";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: "我是home组件",
      status: false,
    };
  }
  changeColor() {
    this.setState({
      myName: "我是更新后的home组件",
      status: true,
    });
  }
  render() {
    let { myName, status } = this.state;
    return (
      <div className="home">
        <Button type="primary">Primary Button</Button>
        <div
          className={status ? "title_1" : "title_2"}
          onClick={() => this.changeColor()}
        >
          {myName}
        </div>
        <Son myName={myName} onChangeColor={() => this.changeColor()} />
      </div>
    );
  }
  componentDidMount() {
    //dom加载完成
    //相当于vue的mounted
    console.log("------------,componentDidMount");
  }
  // sholdComponentUpdate(){
  //     console.log("------------,sholdComponentUpdate")
  //     console.log(this.state)
  //     return true

  // }
  // componentDidUpdate(){
  //     console.log("------------,componentDidUpdate")
  //     //调接口，更新完成
  // }
  componentWillUnmount() {
    console.log("------------,componentWillUnmount");
    //相当于vue的beforeDestroy
  }
}
export default Home;
