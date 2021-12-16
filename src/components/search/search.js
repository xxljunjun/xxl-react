import React from "react";
import "./search.less";
// import logo from '@/static/logo.svg'
import reactImg from '@/static/react.png'
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="topsearch">
        <div className="left">
          <img src={reactImg} alt="" className="left_img"/>
        </div>
        <div className="middle">
          <img src={reactImg} alt="" className="middle_img"/>
        </div>
        <div className="right">
          <img src={reactImg}alt="" className="right_img_1"/>
          <img src={reactImg} alt="" className="right_img_2"/>
        </div>
      </div>
    );
  }
}
export default Search;
