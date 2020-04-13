import React from "react";

class Bar extends React.Component {
  render() {
    return (
      <div
        className="bar"
        style={{
          maxWidth: "200px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div
          className="bar-peice"
          style={{
            backgroundColor:
              this.props.percentage >= 0 ? "var(--blue--)" : "#adadad"
          }}
        />
        <div
          className="bar-peice"
          style={{
            backgroundColor:
              this.props.percentage >= 25 ? "var(--blue--)" : "#adadad"
          }}
        />
        <div
          className="bar-peice"
          style={{
            backgroundColor:
              this.props.percentage >= 50 ? "var(--blue--)" : "#adadad"
          }}
        />
        <div
          className="bar-peice"
          style={{
            backgroundColor:
              this.props.percentage >= 75 ? "var(--blue--)" : "#adadad"
          }}
        />
      </div>
    );
  }
}

export default Bar;
