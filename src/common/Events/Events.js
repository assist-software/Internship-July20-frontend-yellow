import React,{Component} from 'react';
import EventsComponent from './EventsComponent/EventsComponent';
import './Events.css';
import Button from '../Button';
import InputSearch from '../InputSearch';
import {Grid,GridColumn,GridRow} from 'semantic-ui-react';

class Events extends Component{
   
    render() {
    return(
        <div className="ContentArea">
            <h2>Events</h2>
         <div>  
             <Grid>
                    <GridRow >
                        <GridColumn floated = 'left' align= 'left' computer = '8' tablet = '8'>
                            <InputSearch />
                        </GridColumn>
                        <GridColumn floated ='right' align = 'right' computer = '8' tablet = '8'>
                            <Button name= {"Add new"}/>
                        </GridColumn>
                    </GridRow>
            </Grid>
        </div>
          
           
          <button className="but">Ongoing</button>
          <button className="but">Future</button>
          <button className="but">Past</button>
          <div  className="component">
             <EventsComponent />
         
          </div>
          
        </div>

    )
    }
}
export default Events;