import React, { Component } from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";

import "../Components.css";
import events_logo from "../assets/Events.svg";
import club_logo from "../assets/Clubs.svg";
import coaches_logo from "../assets/Coaches.svg";
import athletes_logo from "../assets/Athletes.svg";
import events_logo_white from "../assets/Events-white.svg";
import club_logo_white from "../assets/Clubs-White.svg";
import coaches_logo_white from "../assets/Coaches-white.svg";
import athletes_logo_white from "../assets/Athletes-white.svg";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-user">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAsgWQl01__WeqVIirDDmNPnSx0Ts_-rwgww&usqp=CAU"
            size="tiny"
            centered
            className="sidebar-icon"
          />
          <h4 className="sidebar-user-name">Name</h4>
          <h6 className="sidebar-user-role">Role</h6>
        </div>
        <div className="button-zone">
          <div></div>
          <button className="sidebar-buttons">
            <img src={coaches_logo} className="button-icon" />
            Coaches
          </button>
          <button className="sidebar-buttons">
            <img src={events_logo} className="button-icon" />
            Events
          </button>
          <button className="sidebar-buttons">
            <img src={club_logo} className="button-icon" />
            Clubs
          </button>
          <button className="sidebar-buttons">
            <img src={athletes_logo} className="button-icon" />
            Athletes
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
