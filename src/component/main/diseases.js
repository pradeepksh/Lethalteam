import React from "react";
import { connect } from "react-redux";
class Diseases extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="diseases">
        {this.props.disease !== null
          ? this.props.disease.map((d, key) => (
              <div className="disease-main" id={key}>
                <div className="disease-top">
                  <div className="disease-name">{d}</div>
                  <i className="material-icons">info</i>
                </div>
                <div className="disease-bottom" />
              </div>
            ))
          : null}
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return { disease: state.disease };
};

export default connect(mapstatetoprops)(Diseases);
