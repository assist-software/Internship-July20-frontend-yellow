import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import checked_icon from "../../assets/checkmark-circle.svg";
import personImage from "../../assets/person.jpg";

import "./PersonThumbnail.css";

class PersonThumbnail extends Component {
  render() {
    return (
      <div>
        <Modal
          size="tiny"
          open={this.props.showModal}
          onClose={this.props.hideModal}
        >
          <Modal.Content>
            <img src={personImage} className="person-image" />
            <div className="person-info">
              <label className="person-name">{this.props.name}</label>
              <p className="person-details">
                {this.props.gender} - {this.props.age}
              </p>
            </div>
            <div className="person-sports-div">
              <hr className="person-hr" />

              <div className="person-sport">
                <label>Primary sport</label>
                <label>Secondary sport</label>
              </div>
              <div className="person-sport">
                <label>{this.props.primary_sport}</label>
                <label>{this.props.secondary_sport}</label>
              </div>
              <hr className="person-hr" />
            </div>
            <button
              className="button-modal-added"
              onClick={this.props.hideModal}
            >
              Close
            </button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default PersonThumbnail;
