import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SideBar from "./common/SideBar";

import Login from "./Login/login";

require("typeface-inter");

const App = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <BrowserRouter>
        <div className="rendered">
          <SideBar />
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Redirect from="/" to="/login" />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
