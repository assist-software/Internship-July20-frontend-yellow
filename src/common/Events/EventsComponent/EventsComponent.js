import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon } from "semantic-ui-react";
import "./EventsComponent.css";
import Logo from "./logo.png";
import GroupAvatars from "../../Avatar";

const EventsComponent = (props) => {
  return (
    <div className="events">
      <Card style={{ width: "560px" }} className="card-events">
        <Image className="events-image" src={Logo} />

        <div className="events-text">
          <h3>Some text</h3>
          <p>
            Here will be some paragraph
            fhsdfyusdkgfdsfuilofgyadsukihsdtyukyagukhfcvdyfsvsiuhsafncyufsaiugkchsudtbivykl
          </p>
          <div className="events-card-details">
            <div className="events-calendar">
              <Icon name="calendar alternate outline" />
              <p>20.06.2020</p>
            </div>

            <div className="events-time">
              <Icon name="clock outline" />
              <p>09:00 AM</p>
            </div>
          </div>
          <div className="events-location">
            <Icon name="location arrow " />
            <p>Suceava fortress, Main Enter</p>
          </div>

          <h4>Participants</h4>
          <GroupAvatars></GroupAvatars>
        </div>
      </Card>
    </div>
  );
};
export default EventsComponent;
