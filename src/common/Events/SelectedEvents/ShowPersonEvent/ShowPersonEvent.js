import React, { Component } from "react";
import "./ShowPersonEvent.css";
import {
  Grid,
  GridColumn,
  GridRow,
  Image,
  Icon,
  Card,
  CardContent,
} from "semantic-ui-react";
import Avatar from "@material-ui/core/Avatar";

class ShowPersonEvent extends Component {
  render() {
    return (
      <div>
        <div className="show-cards-event">
          <Card>
            <Card.Content className="show-card-event">
              <div className="content-show-card-event">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                ></Avatar>
                <h2>Harold Howard</h2>
                <h3>Female 28 years</h3>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}
export default ShowPersonEvent;
