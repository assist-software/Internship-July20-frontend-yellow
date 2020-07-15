import React, {Component} from 'react'
import {  Header, Image, Modal,Form, Icon, Input } from 'semantic-ui-react'
import './ModalEvents.css';
import Button from '../Button';

class ModalEvents extends  Component{
  render(){
  return(
  <Modal className="modal-events" 
  open={this.props.handleOpenModal}
  close={this.props.handleCloseModal}>
     
   <Form >
   <div>
      <h2>Add Event</h2>  
      <hr></hr>   
      
      <div className="form-events">
    
   <Form.Input fluid label='Name' placeholder='Input placeholder'  />

   <Input  className="input-t-d"icon placeholder='Input placeholder'>
      <input />
      <Icon name='calendar' />
    </Input>
    <Input icon className="input-t-d" placeholder='Search...'>
      <input />
      <Icon name='time' />
    </Input>
   
   
    <Form.Select fluid label='Location' placeholder='Input placeholder'  />
    <Form.Input className="description-input" style={{height: '144px'}} fluid label='Description' placeholder='Input placeholder'  />
    
    </div>
    <div className='bottom-add-edit'>
        <hr></hr>
        <div className="button-add-events">
              <button className='button-close' onClick={this.props.handleCloseModal} inverted>Close</button>
              <Button name='Add'  ></Button>
        </div>
         
    </div>
    </div>
  
  </Form>

  </Modal>
  )
  }
}

export default ModalEvents;
