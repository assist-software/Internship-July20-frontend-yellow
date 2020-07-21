import React from "react";

import Club from "./admin/Clubs/Club";
import "./Components.css";

import { Route, Redirect } from "react-router-dom";
import Login from "./Login/login";
import Events from "./common/Events/Events";

import SelectedClub from "./admin/Clubs/selected-club/selected-club";
import Coach from "./admin/Coaches/Coach";

import Athletes from "./common/Athletes/Athletes";


function App() {
  return (
    <div>

      <Route path="/athletes" component={Athletes} />

      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={Login} />

      <Route path="/clubs" component={Club} />
      <Route path="/clubs/:id" component={SelectedClub} />
      <Route path="/coach" component={Coach} />
      <Route path="/events" component={Events} />

    </div>
  );
}

export default App;
