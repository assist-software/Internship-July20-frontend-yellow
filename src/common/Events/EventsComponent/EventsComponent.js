import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import './EventsComponent.css';
import Logo from './logo.png';
import GroupAvatars from '../../Avatar';

const EventsComponent=(props) =>{
    return(
        <div className="events">
           <div className="events-image">
             <Card>
             <Image src={Logo} />
             </Card>
           </div>
           <div className="events-text">
               <div>
                    <h3>Some text</h3>
                    <p>Here will be some paragraph</p>
                   <GroupAvatars className="avatar"></GroupAvatars>
                   
               </div>
              
           </div>
        </div>
    )
}
export default EventsComponent;