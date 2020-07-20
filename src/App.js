import React from "react";

import * as semantic from "semantic-ui-react";
import Club from "./admin/Clubs/Club";
import "./Components.css";
import Button from "./common/Button";
import SideBar from "./common/SideBar";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login/login";
import Events from "./common/Events/Events";
import SelectedEvents from "./common/Events/SelectedEvents/SelectedEvents";
import EventsComponent from "./common/Events/EventsComponent/EventsComponent";

function App() {
  return (
    <div>
      <SideBar />
      <Events />
    </div>
  );
}

export default App;
