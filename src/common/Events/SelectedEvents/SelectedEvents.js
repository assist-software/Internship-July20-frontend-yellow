import React, { Component } from "react";
import ImageEvent from "./Rectangle30.png";
import "./SelectedEvents.css";
import ModalEvents from "../ModalEvents";

import {
  Grid,
  GridColumn,
  GridRow,
  Image,
  Icon,
  Card,
  CardContent,
} from "semantic-ui-react";
import ShowPersonEvent from "./ShowPersonEvent/ShowPersonEvent";

class SelectedEvents extends Component {
  state = { show: false };

  handleOpenModal = () => {
    this.setState({ show: true });
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="cards-event">
        <div className="label-event">
          <h3>{"Events > "}</h3>
          <h4> Running for life</h4>
        </div>
        <div className="div-event-button-edit">
          <button className="event-button-edit" onClick={this.handleOpenModal}>
            EDIT
          </button>
        </div>
        <div className="event-bar">
          <Icon name="calendar alternate outline" />
          <p>20.06.2020</p>

          <div className="time-event">
            <Icon name="clock outline" />
            <p>09:00 AM</p>
          </div>
          <div className="location-event">
            <Icon name="location arrow " />
            <p>Suceava fortress, Main Enter</p>
          </div>
        </div>
        <div className="card-event">
          <Card centered fluid>
            <Image src={ImageEvent} wrapped ui={false} />
            <Card.Content className="card-content-event">
              <div className="first-paragraph">
                <h3>
                  this.props.FirstParagraphdbgvbsidybbfsaduougfadnilsisffadhiJSGDFHAID
                </h3>
                <p>
                  this.props.SecondParagraphsdvdbdbdvcsbfbdsybusybfubsdbcusbcusbdvgykusdvbusuidvbousivvbisudvbusdibvnsoubsdvinoduvidbohjnmklkjashugftgvbhnjmk,lsxhbdfvvghujikoijuhygtfrdesdrftgyhujikolxkoasjihucygdrtfyguh
                </p>
              </div>
            </Card.Content>
          </Card>
        </div>
        <div className="show-person-parent">
          <ShowPersonEvent />
          <ShowPersonEvent />
          <ShowPersonEvent />
          <ShowPersonEvent />
          <ShowPersonEvent />
          <ShowPersonEvent />
          <ShowPersonEvent />
        </div>

        <div className="cards-features">
          <h3>Participants ({this.props.CountNumberParticipantsEvent})</h3>
          <button className="event-button-compare">Compare Performance</button>
        </div>
        <ModalEvents
          NameModalEvents="Edit Event"
          handleOpenModal={this.state.show}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default SelectedEvents;
