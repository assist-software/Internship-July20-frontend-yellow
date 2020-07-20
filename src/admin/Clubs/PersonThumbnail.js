import React, { Component } from "react";
import { Image, Modal, Table, Header, TableCell } from "semantic-ui-react";
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
            <div>
              <p>Lily Jones</p>
              <p>Female 28 years</p>
            </div>
            <div>
              <hr />
              <div className="vertical-line"></div>
              <div className="person-sport">
                <label>Primary sport</label>
                <label>Secondary sport</label>
              </div>
              <div className="person-sport">
                <label>king</label>
                <label>Swimming</label>
              </div>
              <hr />
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
