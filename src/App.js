import React from "react";

import * as semantic from "semantic-ui-react";
import Club from "./admin/Clubs/Club";
import "./Components.css";
import Button from "./common/Button";
import SideBar from "./common/SideBar";
import { BrowserRouter, Route } from "react-router-dom";
import Events from './common/Events/Events'
import SelectedClub from './admin/Clubs/selected-club/selected-club'


function App() {
  return (
    <div>
      <Route path="/events" component={Events} />
      <Route path="/clubs" component={SelectedClub} />
    </div>
  );
}

export default App;
