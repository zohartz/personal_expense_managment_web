import React, { Componenet, useState } from "react";
import  { Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../api/expense_mng_api";
import "./components.css";
import * as contants from '../Constants.js'

const Login = (props) => {
  const { expenseMngApi } = props;
  const initialUserState = {
    password: "",
    email: "",
  };
  const [user, setUser] = useState(initialUserState);

  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState({ status: false, msg: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //setTutorial({ ...tutorial, [name]: value });
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    var data = {
      password: user.password,
      email: user.email,
    };

    expenseMngApi.login(data).then(
    //API.login(data).then(
      (result) => {
        expenseMngApi.userId = result.data.data.id;
        setSubmitted(true);
      },
      (error) => {
        console.log(error);
        if (error.response && error.response.status === 400) {
          setHasError({
            status: true,
            msg: contants.login.badRequestError
          });
        } else {
          setHasError({
            status: true,
            msg:contants.login.internalError
          });
        }
      }
    );
  };

  return (
    <div className="signUpDiv">
      <div className="submit">
        <div className="submit-form">
          {submitted ? (
            //props.history.push("/dashboard")
            //<Redirect to="/dashboard"/>
             <Redirect to='/dashboard'  />
          ) : (
            <div>
              <header className="formHeader">Login</header>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              {hasError.status && (
                <label className="errorLable">
                  {" "}
                  <i className="fa fa-info-circle"></i>
                  {hasError.msg}
                </label>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={login}
              >
                Submit
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#hhh">password?</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
