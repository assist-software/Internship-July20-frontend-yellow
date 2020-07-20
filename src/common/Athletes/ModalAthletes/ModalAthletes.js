import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { FileDrop } from "react-file-drop";
import { useDropzone } from "react-dropzone";
import {
  Header,
  Image,
  Modal,
  Form,
  Icon,
  Input,
  FormGroup,
} from "semantic-ui-react";
import "./ModalAthletes.css";

class ModalAthletes extends Component {
  render() {
    return (
      <Modal
        open={this.props.handleOpenModal}
        close={this.props.handleCloseModal}
        className="modal-form"
      >
        <Modal.Content>
          <Form>
            <div>
              <h2>{this.props.NameModalAthletes}</h2>
              <hr></hr>
              <p>General Information</p>
              <div className="modal-form-inputs-athletes">
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                    error
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                    error
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>
                <p>Personal Information </p>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                    error
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                    error
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>
                <p className="label-invite-members">Invite members </p>

                <br />
                <br />
                <div className="modal-form-buttons">
                  <hr className="second-line"></hr>

                  <button className="cancel-button"> Cancel</button>
                  <button className="button"></button>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalAthletes;
