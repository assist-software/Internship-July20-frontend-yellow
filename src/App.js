<<<<<<< HEAD
import React from 'react'
import Events from './common/Events/Events';
import './common/Events/Events.css';
import './Components.css';
import * as semantic from 'semantic-ui-react';
import Login from './Login/login';

function App() {
  return (
    <div   className="App">
       <Login />
=======
import React from "react";

import * as semantic from "semantic-ui-react";
import Club from "./admin/Clubs/Club";
import "./Components.css";
import Button from "./common/Button";
import SideBar from "./common/SideBar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" component={Club} />
>>>>>>> f631e56c9223e59e22c37b5ae05c6a5ab5dc9377
    </div>
  );
}

export default App;
