import React from "react";
import "./tabBar.less";
class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xxlname: "我是tabBar",
      tabbarList: [
        { id: 1, name: "首页", istrue: true },
        { id: 2, name: "分类", istrue: false },
        { id: 3, name: "消息", istrue: false },
        { id: 4, name: "购物车", istrue: false },
        { id: 5, name: "我的", istrue: false },
      ],
    };
  }
  clickItem(item) {
    console.log("选择的tabBar", item);
    let { tabbarList } = this.state;
    tabbarList.forEach((val) => {
      val.istrue = false;
      if (item.id === val.id) {
        val.istrue = true;
      }
    });
    this.setState({
      tabbarList,
    });
  }
  render() {
    let { tabbarList } = this.state;
    return (
      <div className="tabBar">
        <div className="item_box">
          {tabbarList.map((item, index) => {
            return (
              <div
                key={index}
                className={item.istrue ? "active" : ""}
                onClick={() => this.clickItem(item)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
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
export default TabBar;
