import React from "react";
import Header from "../header";

class Login extends React.Component {
  render() {
    return (
      <div
        className="login"
        style={{
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%"
        }}
      >
        <Header />
        <div
          className="login-main"
          style={{ alignSelf: "center", justifySelf: "center", margin: "auto" }}
        >
          <h3 style={{ fontFamily: "sans-serif", color: "var(--blue--)" }}>
            Login
          </h3>
          <div
            className="login-form"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="text"
              name="email"
              onChange={this.handle}
              placeholder="Email"
              style={{
                border: "1px solid var(--blue--)",
                borderRadius: "5px",
                height: "30px",
                outline: "none",
                paddingLeft: "5px"
              }}
            />
            <input
              type="password"
              name="password"
              onChange={this.handle}
              placeholder="Password"
              style={{
                marginTop: "20px",
                border: "1px solid var(--blue--)",
                borderRadius: "5px",
                height: "30px",
                outline: "none",
                paddingLeft: "5px"
              }}
            />

            <button
              style={{
                backgroundColor: "var(--blue--)",
                marginTop: "20px",
                height: "30px",
                border: "none",
                color: "white"
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
