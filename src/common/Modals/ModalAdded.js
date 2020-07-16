import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import checked_icon from '../../assets/checked_icon.svg';

class ModalAdded extends Component {
  render() {
    
    return (
      <div>
        <Modal size= 'tiny' open={this.props.hideAddConfirm} onClose={this.props.hideModal}>
          <Modal.Header>
            
          </Modal.Header>
          <Modal.Content>
            <h2> Club added </h2>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <button className = 'button' onClick = {this.props.hideModal}>Close</button>
            
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalAdded;