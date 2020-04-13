import React from "react";
import Search from "./main/search";
import Symptoms from "./main/symptoms";
import Diseases from "./main/diseases";

import undraw from "./undraw.png";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <img
          src={undraw}
          style={{ width: "400px", height: "300px" }}
          alt="disease"
        />
        <Search />
        <Symptoms />
        <Diseases />
      </div>
    );
  }
}

export default Main;
