import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import $ from "jquery";
class Search extends React.Component {
  constructor() {
    super();
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
    // fetch(`http://localhost:5000/a`, {
    //   method: "POST",
    //   credentials: "include",
    //   body: JSON.stringify("hello"),
    //   mode: "no-cors",
    //   cache: "no-cache",

    //   headers: {
    //    "content-type": "*"
    //   }
    // }
    // ).then(function(response) {
    //   response.json().then(
    //     data=>console.log(data)
    //   )
    // });

    $.ajax({
      type: "GET",
      url: "http://localhost:5000/a",
      data: { arg1: ["hello", "asdhas", "pasdiias"].toString() },
      contentType: "application/json;charset=UTF-8",
      success: function(result) {
        console.log(result);
      }
    });
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
  return { symptoms: state.symptoms };
};

export default connect(mapstatestoprops)(Search);
