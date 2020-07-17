import React, { Component } from "react";
import "./login.css";
import { Image, Grid, GridColumn, GridRow } from "semantic-ui-react";
import ImageLogin from "./Rectangle_28.png";

class Login extends Component {
  render() {
    return (
      <Grid>
        <GridRow className="grid-row-login" columns="2">
          <GridColumn color="white" computer="4" tablet="6">
            <h3 className="form-box-login-h3">Welcome</h3>
            <h2 className="form-box-login-h2">Login To Your Account</h2>

            <form className="inputs-login">
              <label className="label-login">Email Adress</label>
              <input
                className="input-login"
                type="email"
                placeholder="Input placeholder"
                required
              ></input>
              <label className="label-login">Password</label>
              <input
                className="input-login"
                type="password"
                placeholder="Input placeholder"
                required
              ></input>
              <button className="button-login">Login</button>
            </form>
          </GridColumn>

          <GridColumn floated="right" align="right" computer="9" tablet="10">
            <Image className="img-login" src={ImageLogin} />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

export default Login;
