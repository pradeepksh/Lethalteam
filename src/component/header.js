import React from "react";
import { withRouter } from "react-router-dom";

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
        <div className="header-right">
          <p
            onClick={() => {
              this.props.history.push("/coronavirus");
            }}
            style={{
              paddingRight: "20px",
              fontSize: 14,
              fontFamily: "sans-serif",
              color: "#374b64",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            <div
              className="dot"
              style={{
                borderRadius: "100%",
                position: "fixed",
                backgroundColor: "var(--blue--)"
              }}
            />
            Corona Virus Tracker
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
