import React from 'react';

import './Club.css';

import GroupAvatars from '../../common/Avatar';

const ClubThumbnail = (props) => {
    return(
        <div className = 'ClubCards'>
            <h3>{props.name}</h3>
            <h5>MEMBERS</h5>
            <GroupAvatars/>
            <h5>Coach</h5>
            <p>{props.coach}</p>
        </div>
    )
}

export default ClubThumbnail;