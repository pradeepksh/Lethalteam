import React from "react";
import { connect } from "react-redux";

class Symptoms extends React.Component {
  constructor(props) {
    super(props);
  }
  remove = e => {
    this.props.dispatch({ type: "remove", payload: e.target.dataset["val"] });
  };
  render() {
    return (
      <div className="symptoms">
        {this.props.symptoms.map((d, key) => {
          return (
            <div className="symptoms-box" key={key}>
              <p>{d}</p>
              <i className="material-icons" data-val={d} onClick={this.remove}>
                close
              </i>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return {
    symptoms: state.symptoms
  };
};

export default connect(mapstatetoprops)(Symptoms);
