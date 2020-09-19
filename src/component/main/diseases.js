import React from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import loader from "./loading.gif";
import Bar from "./bar";

const preventions = require("./preventions.json");
const data = require("./details.json");
var x;
class Diseases extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  show(e) {
    e.preventDefault();
    e.target.dataset["tip"] = data[e.target.dataset["disease"]].detail;
  }

  block = e => {
    document.getElementById(e.currentTarget.getAttribute("data-key")).style
      .display === "none"
      ? (document.getElementById(
          e.currentTarget.getAttribute("data-key")
        ).style.display = "block")
      : (document.getElementById(
          e.currentTarget.getAttribute("data-key")
        ).style.display = "none");
  };

  render() {
    return (
      <div className="diseases">
        {this.props.disease !== null ? (
          this.props.disease.map((d, key) => (
            <div className="disease-main" key={key}>
              <div className="disease-top">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    className="disease-name"
                    data-key={key}
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer"
                    }}
                    onClick={this.block}
                  >
                    {d[0]}
                  </div>
                  <i
                    className="material-icons"
                    data-disease={d[0]}
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
                <br />
                <Bar percentage={parseFloat(d[1]) * 100} />
              </div>
              <div
                id={key}
                className="disease-bottom"
                style={{ display: "none" }}
              >
                <h3
                  style={{
                    color: "#6088bb",
                    fontSize: "14px",
                    fontFamily: "sans-serif"
                  }}
                >
                  Precautions
                </h3>
                <p style={{ fontFamily: "sans-serif", textAlign: "justify" }}>
                  {preventions[d[0]]
                    ? preventions[d[0]].precautions
                    : "Not Available"}
                </p>
              </div>
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
