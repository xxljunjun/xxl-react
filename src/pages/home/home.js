import React from "react";
import "./home.less";
// import Son from "./components/son.js";
// import { Button } from "antd";
import TopSearch from "@/components/search/search.js";
import MySwiper from "@/components/swiper/swiper.js";
import Commodity from "@/components/commodity/commodity.js";
import Mybottom from '@/components/mybottom/mybottom.js'
import {  earphone, up_arrow } from "@/utils/img.js";
import { BackTop, Drawer } from "antd";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Drawervisible: false,
      buttomArr: [
        { id: 1, some: "热门产品分类" },
        { id: 2, some: "帮助与支持" },
        { id: 3, some: "商城项目" },
        { id: 4, some: "探索精彩大疆" },
      ],
    };
  }
  onCloseDrawer = () => {
    this.setState({
      Drawervisible: false,
    });
  };
  showDrawer = () => {
    this.setState({
      Drawervisible: true,
    });
  };
  render() {
    console.log("home组件的props",this.props)
    let {Drawervisible } = this.state;
    return (
      <div className="home">
        <Drawer
          title="客服服务"
          placement={"bottom"}
          closable={false}
          onClose={this.onCloseDrawer}
          visible={Drawervisible}
          key={"bottom"}
        >
          <div>客服服务</div>
        </Drawer>
        <div className="fixed">
          <img
            src={earphone}
            alt=""
            className="earphone"
            onClick={this.showDrawer}
          />
        </div>
        <BackTop>
          <div className="toTop">
            <img src={up_arrow} alt="" className="up_arrow" />
          </div>
        </BackTop>
        <TopSearch />
        <MySwiper />
        <Commodity />
        <Mybottom/>
      </div>
    );
  }
  componentDidMount() {}
  sholdComponentUpdate() {
    return true;
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
}
export default Home;
