import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import {Link} from 'react-router-dom';


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
  state = {
    coachespressed: false,
    athletespressed: false,
    clubsspressed: false,
    eventpressed: false,
  };

  clickedHandlerClubs = () =>{
    
  }

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
          
          <button
            className="sidebar-buttons"
            onFocus={this.pressedHandlerCoaches}
          >
            <img
              src={
                this.state.coachespressed ? coaches_logo_white : coaches_logo
              }
              className="button-icon"
            />
            Coaches
          </button>
          
          <Link to="/Events">
          <button
            className="sidebar-buttons"
            onFocus={this.pressedHandlerEvents}
          >
            <img
              src={this.state.eventpressed ? events_logo_white : events_logo}
              className="button-icon"
            />
            Events
          </button>
          </Link>
           <Link to="/Clubs">
          <button
            className="sidebar-buttons"
            onFocus={this.pressedHandlerClubs}
            onClick = {this.clickedHandlerClubs}
          >
            <img
              src={this.state.clubsspressed ? club_logo_white : club_logo}
              className="button-icon"
            />
           
            Clubs
          </button>
          </Link>
          <button
            className="sidebar-buttons"
            onFocus={this.pressedHandlerAthletes}
          >
            <img
              src={
                this.state.athletespressed ? athletes_logo_white : athletes_logo
              }
              className="button-icon"
            />
            Athletes
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
