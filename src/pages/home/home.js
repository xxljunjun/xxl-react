import React from "react";
import "./home.less";
// import Son from "./components/son.js";
// import { Button } from "antd";
import TopSearch from "@/components/search/search.js";
import MySwiper from "@/components/swiper/swiper.js";
import Commodity from "@/components/commodity/commodity.js";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttomArr:[
        {id:1,some:'热门产品分类'},
        {id:2,some:'帮助与支持'},
        {id:3,some:'商城项目'},
        {id:4,some:'探索精彩大疆'}
      ]
    };
  }
  render() {
    let {buttomArr} = this.state
    return (
      <div className="home">
        <TopSearch />
        <MySwiper />
        <Commodity />
        <div className="buttom_box">
          <ul className="ulbox">
            {
              buttomArr.map(val=>{
                return (
                  <li className="item">{val.some}</li>
                )
              })
            }
          </ul>
          <div className="somthing">
            <span>DJI.COM</span>
            <span>隐私政策</span>
            <span>使用条款</span>
          </div>
          <div className="txt">中国大陆( 简体中文 / ¥ CNY )</div>
          <div className="polic">版权所有© 2021 大疆创新保留所有权利</div>
        </div>
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
