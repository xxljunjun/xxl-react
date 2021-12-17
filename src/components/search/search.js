import React from "react";
import "./search.less";
import { dajiang, search, shopimg, gang } from "@/utils/img.js";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  gotoreflesh = () => {
    console.log("刷新页面");
  };
  render() {
    return (
      <div className="topsearch">
        <div className="left">
          <img src={gang} alt="" className="left_img" />
        </div>
        <div className="middle">
          <img
            src={dajiang}
            alt=""
            className="middle_img"
            onClick={this.gotoreflesh}
          />
        </div>
        <div className="right">
          <Link to="/search">
            <img src={search} alt="" className="right_img_1" />
          </Link>
          <Link to="/car">
            <img src={shopimg} alt="" className="right_img_2" />
          </Link>
        </div>
      </div>
    );
  }
}
export default Search;
