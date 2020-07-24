import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import checked_icon from "../../assets/checked_icon.svg";
import close_icon from "../../assets/close.svg";

class ModalDeleted extends Component {
  render() {
    return (
      <div>
        <Modal
          size="tiny"
          open={this.props.hideAddConfirm}
          onClose={this.props.hideModal}
        >
          <Modal.Header>
            <div>
              <img
                src={close_icon}
                className="close-icon"
                onClick={this.props.hideModal}
              />
            </div>
            <h2> Delete Club </h2>
          </Modal.Header>
          <Modal.Content>
            <p>
              Are you sure you want to delete {this.props.name}? If you delete
              this club, all data associated with it will be permanently
              deleted, including events and athletes.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <button className="cancel-button" onClick={this.props.hideModal}>
              Cancel
            </button>
            <button className="button" onClick={this.props.hideModal}>
              Delete
            </button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalDeleted;
