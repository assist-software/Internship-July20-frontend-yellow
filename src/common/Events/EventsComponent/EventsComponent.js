import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon } from "semantic-ui-react";
import "./EventsComponent.css";
import Logo from "./logo.png";
import GroupAvatars from "../../Avatar";
import { render } from "@testing-library/react";

class EventsComponent extends Component {
  render() {
    console.log(this.props.img2, this.props.date, "lalalaaa");
    return (
      <div className="card-events">
        <Card fluid style={({ width: "540px" }, { height: "270px" })}>
          <Image className="events-image" src={this.props.img2} />

          <div className="events-text">
            <div className="events-text2">
              <h3>{this.props.title}</h3>
              <p>{this.props.body}</p>
              <div className="events-card-details">
                <div className="events-calendar">
                  <Icon name="calendar alternate outline" />
                  <p>{this.props.date}</p>
                </div>

                <div className="events-time">
                  <Icon name="clock outline" />
                  <p>{this.props.time}</p>
                </div>
              </div>
              <div className="events-location">
                <Icon name="location arrow " />
                <p>{this.props.location}</p>
              </div>

              <h4>Participants</h4>
              <GroupAvatars></GroupAvatars>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default EventsComponent;
