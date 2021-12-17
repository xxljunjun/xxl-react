import React from "react";
import TopSearch from "@/components/search/search.js";
import "./car.less";
class Car extends React.Component {
  render() {
    return <div className="car">
        <TopSearch />
    </div>;
  }
}
export default Car;
