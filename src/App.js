import React from "react";

import Club from "./admin/Clubs/Club";
import "./Components.css";

import { BrowserRouter, Route } from "react-router-dom";
import Events from "./common/Events/Events";
import SelectedClub from "./admin/Clubs/selected-club/selected-club";
import Coach from "./admin/Coaches/Coach";

function App() {
  return (
    <div>
      <Route path="/events" component={Events} />
      <Route path="/clubs" component={SelectedClub} />
      <Route path="/coach" component={Coach} />
    </div>
  );
}

export default App;
