import React from "react";

import $ from "jquery";

class Corona extends React.Component {
  componentDidMount = () => {
    $("#myFrame")
      .on("load")
      .contents()
      .find("img")
      .css({
        opacity: "0 !important",
        display: "none !important"
      });
  };
  render() {
    return (
      <div className="corona" style={{ width: "100%", height: "100%" }}>
        <iframe
          id="myFrame"
          width="100%"
          height="100%"
          src="https://app.developer.here.com/coronavirus/"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default Corona;
