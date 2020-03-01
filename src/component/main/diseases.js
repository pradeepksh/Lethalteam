import React from "react";
import { connect } from "react-redux";
import ReactTooltip from 'react-tooltip'

const data=require("./details.json")

class Diseases extends React.Component {
  constructor(props) {
    super(props);
  }

  show(e){
    e.preventDefault()
    e.target.dataset['tip']=data[e.target.dataset['disease']].detail
  }

  render() {
    return (
      <div className="diseases">
        
        {this.props.disease !== null
          ? this.props.disease.map((d, key) => (
              <div className="disease-main" key={key}>
                <div className="disease-top">
                  <div className="disease-name">{d}</div>
                  <i className="material-icons" data-disease={d}  onMouseOver={this.show} data-tip data-for={`global-${key}`} >info</i>
                  <ReactTooltip type="info" type="dark" place="bottom" multiline={false} id={`global-${key}`} html={true} /> 
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
