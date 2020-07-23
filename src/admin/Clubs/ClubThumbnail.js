import React from "react";

import "./Club.css";

import GroupAvatars from "../../common/Avatar";
import { Link } from "react-router-dom";
import Club from "./Club";

const ClubThumbnail = (props) => {
  return (
    <div className="ClubCards">
      <h3>{props.name}</h3>
      <h5>MEMBERS</h5>
      <GroupAvatars number={props.number} />
      <h5>Coach</h5>
      <p>{props.coach}</p>
    </div>
  );
};

export default ClubThumbnail;
