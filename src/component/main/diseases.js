import React from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import loader from "./loading.gif";

const preventions = require("./preventions.json");
const data = require("./details.json");

class Diseases extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "none"
    };
  }
  show(e) {
    e.preventDefault();
    e.target.dataset["tip"] = data[e.target.dataset["disease"]].detail;
  }

  block = () => {
    this.state.display === "none"
      ? this.setState(prev => ({
          ...prev,
          display: "block"
        }))
      : this.setState(prev => ({
          ...prev,
          display: "none"
        }));
  };

  render() {
    //console.log(this.props);
    return (
      <div className="diseases">
        {this.props.disease !== null ? (
          this.props.disease.map((d, key) => (
            <div className="disease-main" key={key}>
              <div className="disease-top">
                <div
                  className="disease-name"
                  style={{
                    /*textDecoration: "underline",*/ cursor: "pointer"
                  }}
                  onClick={this.block}
                >
                  {d}
                </div>
                <i
                  className="material-icons"
                  data-disease={d}
                  onMouseOver={this.show}
                  data-tip
                  data-for={`global-${key}`}
                >
                  info
                </i>
                <ReactTooltip
                  type="info"
                  type="dark"
                  place="bottom"
                  multiline={false}
                  id={`global-${key}`}
                  html={true}
                />
              </div>
              {/* <div className="disease-bottom" style={{ display: "block" }}>
                <h3
                  style={{
                    color: "#6088bb",
                    fontSize: "14px",
                    fontFamily: "sans-serif"
                  }}
                >
                  Precautions
                </h3>
                <p style={{ fontFamily: "sans-serif" }}>
                  {preventions.d !== "undefined"
                    ? JSON.stringify(preventions.d.precautions)
                    : null}
                </p>
              </div> */}
            </div>
          ))
        ) : this.props.loading ? (
          <div>
            <img
              src={loader}
              style={{ width: "150px", height: "150px" }}
              alt="loader"
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return { disease: state.disease, loading: state.loading };
};

export default connect(mapstatetoprops)(Diseases);
