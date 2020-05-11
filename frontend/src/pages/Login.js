import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../css/Login.scss";
function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {};
  console.log(user);
  return (
    <div ng-app="">
      <div>
        <form
          action="#"
          className="custom-form"
          style={{ marginBottom: "200px", marginTop: "200px" }}
        >
          <img
            alt="logo"
            src="https://charity.w3itexperts.com/images/logo.png"
            style={{ marginLeft: "35px" }}
            alt="logo"
          />
          <div
            className="form-group"
            ng-className="{'not-empty': Email.length}"
          >
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              ng-model="Email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label htmlFor="email" className="animated-label">
              Username
            </label>
          </div>
          <div
            className="form-group"
            ng-className="{'not-empty': password.length}"
          >
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              ng-model="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label htmlFor="password" className="animated-label">
              Password
            </label>
          </div>
          <div className="submit">
            <div className="row">
              <div className="col-md-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary btn-block">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);