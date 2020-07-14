import React,{Component} from 'react';
import EventsComponent from './EventsComponent/EventsComponent';
import './Events.css';
import Button from '../Button';
import Input from '../Input';
import {Grid,GridColumn,GridRow} from 'semantic-ui-react';

class Events extends Component{
   
    render() {
    
        
        
    return(
        <div className="ContentArea">
            
            <Grid>
                    <GridRow >
                        <GridColumn floated = 'left' align= 'left' computer = '8' tablet = '8'>
                            <Input />
                        </GridColumn>
                        <GridColumn floated ='right' align = 'right' computer = '8' tablet = '8'>
                            <Button name= {"Add new"}/>
                        </GridColumn>
                    </GridRow>
            </Grid>
          <button className="but">Ongoing</button>
          <button className="but">Future</button>
          <button className="but">Past</button>
        </div>

    )
    }
}
export default Events;