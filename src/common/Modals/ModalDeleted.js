import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import checked_icon from '../../assets/checked_icon.svg';

class ModalAdded extends Component {
  state = { open: false }

  show = () => this.setState({open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open} = this.state.open

    return (
      <div>
        <Modal size= 'tiny' open={this.props.showModal} onClose={this.close}>
          <Modal.Header>
            
          </Modal.Header>
          <Modal.Content>
            <h2> Club added </h2>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <button className = 'button' onClick = {this.close}>Close</button>
            
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalAdded;