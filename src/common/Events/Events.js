import React,{Component} from 'react';
import EventsComponent from './EventsComponent/EventsComponent';
import './Events.css';

class Events extends Component{
    
    render() {

    return(
        <div className="ContentArea">
          <button>Ongoing</button>
          <button>Future</button>
          <button>Past</button>
        </div>

    )
    }
}
export default Events;