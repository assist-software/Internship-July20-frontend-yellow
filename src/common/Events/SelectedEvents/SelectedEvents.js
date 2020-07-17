import React, { Component } from "react";
import ImageEvent from "./Rectangle30.png";
import "./SelectedEvents.css";
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
  render() {
    return (
      <div className="cards-event">
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
          <div className="show-person-parent">
            <ShowPersonEvent />
            <ShowPersonEvent />
            <ShowPersonEvent />
            <ShowPersonEvent />
            <ShowPersonEvent />
            <ShowPersonEvent />
            <ShowPersonEvent />
            <ShowPersonEvent />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedEvents;
