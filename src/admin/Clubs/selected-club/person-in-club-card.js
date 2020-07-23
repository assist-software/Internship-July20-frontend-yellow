import React, { useState } from "react";
import {
  Button,
  Card,
  Image,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";

import "./selected-club.css";
import PersonThumbnail from "../PersonThumbnail";

const PersonClubThumbnail = (props) => {
  const [show, setShow] = useState(false);
  const hideModal = () => {
    setShow(false);
  };
  return (
    <div className="person-club-card">
      <Card className="card-width" onClick={() => setShow(!show)}>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            circular
          />
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            {props.gender} -{props.age}
          </Card.Meta>
          <Card.Description Content>
            <div className="grid-sports">
              <label className="card-first-line-label">Primary sport</label>
              <label className="card-first-line-label">Secondary sport</label>
            </div>
            <div className="grid-sports">
              <label className="card-second-line-label">{props.primary}</label>
              <label className="card-second-line-label">
                {props.secondary}
              </label>
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
      <PersonThumbnail showModal={show} hideModal={hideModal} />
    </div>
  );
};

export default PersonClubThumbnail;