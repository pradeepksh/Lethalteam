import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./component/header";
import Main from "./component/main";
import { Map as Map1 } from "./component/admin/map";
import { DocMap } from "./component/admin/docmap";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/auth/login";

const init_state = {
  symptoms: [],
  disease: null,
  loading: false
};
const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "Add":
      return { symptoms: [...state.symptoms, action.payload], disease: null };
    case "remove":
      const index = state.symptoms.indexOf(action.payload);
      state.symptoms.splice(index, 1);
      return { ...state, symptoms: [...state.symptoms], disease: null };
    case "add_disease":
      return {
        ...state,
        symptoms: [...state.symptoms],
        disease: action.payload
      };
    case "loading":
      return { ...state, loading: action.payload };

    case "error":
      return { ...state, symptoms: [], disease: null };

    default:
      return state;
  }
};
const store = createStore(reducer);
//store.dispatch({ type: "hello" });
class App1 extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route path="/" component={App1} exact />
          <Route path="/admin/map" component={Map1} exact />
          <Route path="/admin/docmap" component={DocMap} exact />
          <Route path="/login" component={Login} exact />

        </Provider>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
