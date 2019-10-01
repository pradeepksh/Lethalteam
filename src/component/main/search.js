import React from "react";
import { connect } from "react-redux";

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

    fetch("https://efd5f.csb.app/pradeep7.pythonanywhere.com")
      .then(f => {
        return f.json();
      })
      .then(data => console.log(data));
  };
  pres = e => {
    if (e.key === "Enter") {
      this.props.dispatch({ type: "Add", payload: this.state.symptoms });
      this.setState({
        word: ""
      });
      document.getElementById("search").value = "";
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
