import React, {useEffect } from "react";
import "./home.less";
import TopSearch from "@/components/search/search.js";
import MySwiper from "@/components/swiper/swiper.js";
import Commodity from "@/components/commodity/commodity.js";
import Mybottom from "@/components/mybottom/mybottom.js";
import Fixcustomer from "@/components/fixcustomer/fixcustomer.js";
import Mybacktop from "@/components/mybacktop/mybacktop.js";
import Navigation from "@/components/navigation/navigation.js";
import "./home.less";
import {connect} from 'react-redux'
import {getWeather} from '@/utils/axios/api.js'
// import { Link, useNavigate } from "react-router-dom";
const Home = (props) => {
  // let navigate = useNavigate();
  // let [buttomArr, setButtomArr] = useState([
  //   { id: 1, some: "热门产品分类" },
  //   { id: 2, some: "帮助与支持" },
  //   { id: 3, some: "商城项目" },
  //   { id: 4, some: "探索精彩大疆" },
  // ]);
  useEffect(() => {
    //测试axios请求
    let params = {
      city:'深圳',
      appkey:'7a85fc9df58cd155f764e033a257d879'
    }
    getWeather(params).then(res=>{
      console.log('请求成功',res)
    },err=>{
      console.log('请求失败',err)
    })
    return () => {};
  }, []);
  return (
    <>
     <TopSearch/>
      {props.navstatus ? (
        <Navigation />
      ) : (
        <div className="home">
          <Mybacktop />
          <Fixcustomer />
          <MySwiper />
          <Commodity />
          <Mybottom />
        </div>
      )}
    </>
  );
};

export default connect(state=>({navstatus:state.navBar_reducer.navstatus}),{
})(Home)
