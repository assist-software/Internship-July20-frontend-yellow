import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import './EventsComponent.css';
import Logo from './logo.png';
import GroupAvatars from '../../Avatar';

const EventsComponent=(props) =>{
    return(
        <div className="events"  >
         
             <Card style={{ width: '560px' }} className="card-events">
                        <Image  className="events-image" src={Logo} />
                        <div className="events-text">
                           <h3>Some text</h3>
                            <p>Here will be some paragraph</p>
                            <h4>Participants</h4>
                            <GroupAvatars></GroupAvatars>
                         </div>
             </Card>
        </div>
    )
}
export default EventsComponent;