import React from "react";
import "./home.less";
// import Son from "./components/son.js";
// import { Button } from "antd";
import TopSearch from '@/components/search/search.js'
import MySwiper from '@/components/swiper/swiper.js'
import Commodity from '@/components/commodity/commodity.js'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="home">
        <TopSearch/>
        <MySwiper/>
        <Commodity/>
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
export default Home;
