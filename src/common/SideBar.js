import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

import "../Components.css";
import events_logo from "../assets/Events.svg";
import club_logo from "../assets/Clubs.svg";
import coaches_logo from "../assets/Coaches.svg";
import athletes_logo from "../assets/Athletes.svg";
import events_logo_white from "../assets/Events-white.svg";
import club_logo_white from "../assets/Clubs-White.svg";
import coaches_logo_white from "../assets/Coaches-white.svg";
import athletes_logo_white from "../assets/Athletes-white.svg";
import logout from "../assets/log-out.svg";
import avatar from "../assets/person.jpg";

class SideBar extends Component {
  state = {
    coachespressed: false,
    athletespressed: false,
    clubsspressed: false,
    eventpressed: false,
  };

  clickedHandlerClubs = () => {};

  pressedHandlerClubs = () => {
    this.setState({
      coachespressed: false,
      athletespressed: false,
      clubsspressed: true,
      eventpressed: false,
    });
  };

  pressedHandlerAthletes = () => {
    this.setState({
      coachespressed: false,
      athletespressed: true,
      clubsspressed: false,
      eventpressed: false,
    });
  };

  pressedHandlerCoaches = () => {
    this.setState({
      coachespressed: true,
      athletespressed: false,
      clubsspressed: false,
      eventpressed: false,
    });
  };

  pressedHandlerEvents = () => {
    this.setState({
      coachespressed: false,
      athletespressed: false,
      clubsspressed: false,
      eventpressed: true,
    });
  };
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-user">
          <Image src={avatar} className="sidebar-icon" />
          <p className="sidebar-user-name">Connie Web</p>
          <p className="sidebar-user-role">Administrator</p>
        </div>
        <div className="button-zone">
          <div></div>
          <NavLink to="/coach" activeClassName="active">
            <button
              className="sidebar-buttons"
              onClick={this.pressedHandlerCoaches}
            >
              <img
                src={
                  this.state.coachespressed ? coaches_logo_white : coaches_logo
                }
                className="button-icon"
              />
              Coaches
            </button>
          </NavLink>

          <NavLink to="/events" activeClassName="active">
            <button
              className="sidebar-buttons"
              onClick={this.pressedHandlerEvents}
            >
              <img
                src={this.state.eventpressed ? events_logo_white : events_logo}
                className="button-icon"
              />
              Events
            </button>
          </NavLink>
          <NavLink to="/clubs" activeClassName="active">
            <button
              className="sidebar-buttons"
              onClick={this.pressedHandlerClubs}
            >
              <img
                src={this.state.clubsspressed ? club_logo_white : club_logo}
                className="button-icon"
              />
              Clubs
            </button>
          </NavLink>
          <NavLink to="/athletes" activeClassName="active">
            <button
              className="sidebar-buttons"
              onClick={this.pressedHandlerAthletes}
            >
              <img
                src={
                  this.state.athletespressed
                    ? athletes_logo_white
                    : athletes_logo
                }
                className="button-icon"
              />
              Athletes
            </button>
          </NavLink>
        </div>
        <div className="logout-div">
          <img src={logout} />
          <button className="logout-button">Logout</button>
        </div>
      </div>
    );
  }
}

export default SideBar;
