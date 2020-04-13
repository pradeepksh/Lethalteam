import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        className="header"
        style={{
          alignSelf: "flex-start",
          width: "100%"
          //margin: "auto"
          //justifySelf: "flex-start"
        }}
      >
        <div className="header-left">
          <p style={{ fontFamily: "sans-serif" }}>Disease Predictor</p>
        </div>
      </div>
    );
  }
}

export default Header;
