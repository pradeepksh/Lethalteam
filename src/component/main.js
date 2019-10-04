import React from "react";
import Search from "./main/search";
import Symptoms from "./main/symptoms";
import Diseases from "./main/diseases";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Search />
        <Symptoms />
        <Diseases />
      </div>
    );
  }
}

export default Main;
