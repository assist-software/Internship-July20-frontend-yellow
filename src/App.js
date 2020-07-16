import React from "react";

import * as semantic from "semantic-ui-react";
import Club from "./admin/Clubs/Club";
import "./Components.css";
import Button from "./common/Button";
import SideBar from "./common/SideBar";
import { BrowserRouter, Route } from "react-router-dom";
import Events from './common/Events/Events'

function App() {
  return (
    <div>
      <Route path="/Events" component={Events} />
      <Route path="/Clubs" component={Club} />
    </div>
  );
}

export default App;
