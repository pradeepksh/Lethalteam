import React from "react";
import { connect } from "react-redux";
class Diseases extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="diseases">
        {this.props.disease !== "" ? (
          <div className="disease-main">
            <div className="disease-top">
              <div className="disease-name">{this.props.disease}</div>
              <i className="material-icons">info</i>
            </div>
            <div className="disease-bottom" />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return { disease: state.disease };
};

export default connect(mapstatetoprops)(Diseases);
