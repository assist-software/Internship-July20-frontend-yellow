import React from "react";

import Club from "./admin/Clubs/Club";
import "./Components.css";

import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login/login";
import Events from "./common/Events/Events";
import SelectedEvents from "./common/Events/SelectedEvents/SelectedEvents";
import EventsComponent from "./common/Events/EventsComponent/EventsComponent";
import SelectedClub from "./admin/Clubs/selected-club/selected-club";
import Coach from "./admin/Coaches/Coach";
import SideBar from "./common/SideBar";

function App() {
  return (
    <div>
      <Route path="/events" component={Events} />
      <Route path="/clubs" component={Club} />
      <Route path="/coach" component={Coach} />
      <Route path="/selected-club" component={SelectedClub} />
    </div>
  );
}

export default App;
