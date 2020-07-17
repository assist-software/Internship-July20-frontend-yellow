import React from "react";
import {
  Button,
  Card,
  Image,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";

import "./selected-club.css";

const PersonClubThumbnail = () => (
  <div className="person-club-card">
    <Card className="card-width">
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
          circular
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description Content>
          <div className="grid-sports">
            <label className="card-first-line-label">Primary sport</label>
            <label className="card-first-line-label">Secondary sport</label>
          </div>
          <div className="grid-sports">
            <label className="card-second-line-label">Swimming</label>
            <label className="card-second-line-label">Running</label>
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default PersonClubThumbnail;
