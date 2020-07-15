import React from "react";

import * as semantic from "semantic-ui-react";
import Club from "./admin/Clubs/Club";
import "./Components.css";
import Button from "./common/Button";
import SideBar from "./common/SideBar";

function App() {
  return (
    <div className="rendered">
      <SideBar />
      <Club />
    </div>
  );
}

export default App;
