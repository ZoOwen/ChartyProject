import React, { useState } from "react";
import "../css/Login.scss";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);
  return (
    <div ng-app="">
      <div>
        <form action="#" className="custom-form">
          <img
            alt="logo"
            src="https://charity.w3itexperts.com/images/logo.png"
            style={{ marginLeft: "20px" }}
          />
          <div
            className="form-group"
            ng-className="{'not-empty': userName.length}"
          >
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              ng-model="userName"
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor="email" className="animated-label">
              Username
            </label>
          </div>
          <div
            className="form-group"
            ng-className="{'not-empty': passWord.length}"
          >
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              ng-model="passWord"
              value={user.password}
              onChange={handleChange}
            />
            <label htmlFor="password" className="animated-label">
              Password
            </label>
          </div>
          <div className="submit">
            <button className="btn btn-primary btn-block">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
