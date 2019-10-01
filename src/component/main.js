import React from "react";
import Search from "./main/search";
import Symptoms from "./main/symptoms";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Search />
        <Symptoms />
      </div>
    );
  }
}

export default Main;
