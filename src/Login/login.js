import React, { Component } from "react";
import "./login.css";
import { Image, Grid, GridColumn, GridRow } from "semantic-ui-react";
import ImageLogin from "./Rectangle_28.png";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";

class Login extends Component {
  state = {
    email: " ",
    emailValidation: true,
    password: " ",
    succes: true,
    url: "http://34.65.176.55:8081/api/signin/",
  };

  config = {
    headers: { "Content-Type": "application/json" },
    //responseType: "blob",
  };

  emailHandler = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      this.setState({ email: e.target.value, emailValidation: true });
    } else {
      this.setState({ emailValidation: false });
    }
  };

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const user_email = this.state.email;
    const base_url = this.state.url;
    const user_password = this.state.password;

    axios
      .post("http://34.65.176.55:8081/api/signin/", {
        email: user_email,
        password: user_password,
      })
      .then(
        (response) => {
          window.localStorage.setItem("token", response.data.token);
          window.localStorage.setItem("role", response.data.role);
          this.setState({ succes: true });
          window.location.reload();
        },
        (error) => {
          this.setState({ succes: false });
          console.log(error);
        }
      );
  };

  render() {
    return (
      <Grid>
        <GridRow
          className="grid-row-login"
          columns="2"
          style={{ paddingBottom: "0px" }}
        >
          <GridColumn
            color="white"
            floated="left"
            computer="8"
            tablet="8"
            mobile="8"
          >
            <h3 className="form-box-login-h3">Welcome</h3>
            <h2 className="form-box-login-h2">Login To Your Account</h2>
            <h2
              className={this.state.succes ? "corect-login" : "incorect-login"}
            >
              Email or password incorrect
            </h2>
            <form className="inputs-login" onSubmit={this.submitHandler}>
              <label className="label-login">Email Adress</label>
              <br />
              <input
                className="input-login"
                type="email"
                placeholder="Input placeholder"
                required
                onChange={this.emailHandler}
              ></input>
              <br />

              <label className="label-login">Password</label>
              <br />
              <input
                className="input-login"
                type="password"
                placeholder="Input placeholder"
                required
                onChange={this.passwordHandler}
              ></input>
              <br />

              <button className="button-login" onClick={this.submitHandler}>
                Login
              </button>
            </form>
          </GridColumn>

          <GridColumn
            floated="right"
            align="right"
            computer="8"
            tablet="8"
            mobile="8"
          >
            <Image className="img-login" src={ImageLogin} />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

export default Login;
