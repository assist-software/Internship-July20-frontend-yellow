import React from "react";

import "./Club.css";

import GroupAvatars from "../../common/Avatar";
import { Link } from "react-router-dom";

const ClubThumbnail = (props) => {
  return (
    <Link to="clubs + id" className="linkStyle">
      <div className="ClubCards">
        <h3>{props.name}</h3>
        <h5>MEMBERS</h5>
        <GroupAvatars />
        <h5>Coach</h5>
        <p>{props.coach}</p>
      </div>
    </Link>
  );
};

export default ClubThumbnail;
