import React from "react";
import "./search.less";
import {dajiang,search,shopimg,gang} from '@/utils/img.js'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="topsearch">
        <div className="left">
          <img src={gang} alt="" className="left_img"/>
        </div>
        <div className="middle">
          <img src={dajiang} alt="" className="middle_img"/>
        </div>
        <div className="right">
          <img src={search}alt="" className="right_img_1"/>
          <img src={shopimg} alt="" className="right_img_2"/>
        </div>
      </div>
    );
  }
}
export default Search;
