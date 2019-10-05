import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import $ from "jquery";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: ""
    };
  }
  handlechange = e => {
    this.setState({
      symptoms: e.target.value
    });
  };
  Predict = e => {
    e.preventDefault();
    if (this.props.symptoms.length > 0) {
      const { dispatch } = this.props;
      const s = this.props.symptoms;
      $.ajax({
        type: "GET",
        url: "https://whispering-fortress-45201.herokuapp.com/api",
        data: { symptoms: s.toString() },
        contentType: "application/json;charset=UTF-8",
        success: function(result) {
          dispatch({ type: "add_disease", payload: result });
        }
      });
    }
  };
  pres = e => {
    if (e.key === "Enter") {
      if (this.state.symptoms !== "") {
        this.props.dispatch({ type: "Add", payload: this.state.symptoms });
        this.setState({
          symptoms: ""
        });
        document.getElementById("search").value = "";
      }
    }
  };
  render() {
    return (
      <div className="search">
        <input
          id="search"
          type="text"
          name="search"
          value={this.props.count}
          placeholder="Type your Symptoms..."
          onChange={this.handlechange}
          onKeyUp={this.pres}
          autoFocus
        />
        <button className="predict" onClick={this.Predict}>
          Predict
        </button>
      </div>
    );
  }
}

const mapstatestoprops = state => {
  return { symptoms: state.symptoms, disease: state.disease };
};

export default connect(mapstatestoprops)(Search);
