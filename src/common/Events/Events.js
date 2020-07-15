import React,{Component} from 'react';
import EventsComponent from './EventsComponent/EventsComponent';
import './Events.css';
import Button from '../Button';
import InputSearch from '../InputSearch';
import {Grid,GridColumn,GridRow} from 'semantic-ui-react';
import ModalEvents from './ModalEvents';

class Events extends Component{
   
       state={show: false}
        
    
        handleOpenModal = () => {
            this.setState({show : true})
        }
           
           
          handleCloseModal = () => {
              this.setState ({ show: false })
          }
    render() {
    return(
        <div className="ContentArea">
            <h2>Events</h2>
         <div>  
             <Grid className="grid">
                    <GridRow >
                        <GridColumn floated = 'left' align= 'left' computer = '8' tablet = '8'>
                            <InputSearch />
                        </GridColumn>
                        <GridColumn floated ='right' align = 'right' computer = '8' tablet = '8'>
                            <button className="but-new" onClick={this.handleOpenModal}>ADD NEW</button>
                        </GridColumn>
                    </GridRow>
            </Grid>
            <ModalEvents  handleOpenModal={this.state.show} handleCloseModal={this.handleCloseModal}  />
         </div>
          
          <button className="but">Ongoing</button>
          <button className="but">Future</button>
          <button className="but">Past</button>
            <div className="events-component" >
                  <EventsComponent />
                  <EventsComponent />
                  <EventsComponent />
                  <EventsComponent />
                  <EventsComponent />
                  <EventsComponent />

             </div>
             

          
        </div>

    )
    };
}
export default Events;