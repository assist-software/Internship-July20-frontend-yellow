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
  addClickedHandler = () => {
    this.props.hideAddConfirm();
  };

  deleteClickedHandler = () => {
    this.props.hideDeleteConfirm();
  };
  render() {
    return (
      <Modal
        style={{ maxWidth: "600px" }}
        open={this.props.handleOpenModal}
        close={this.props.handleCloseModal}
        className="modal-athletes"
      >
        <Modal.Content>
          <Form>
            <div className="modal-athletes-div">
              <h2>{this.props.NameModalAthletes}</h2>
              <hr></hr>
              <p>General Information</p>
              <div className="modal-form-inputs-athletes">
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Name"
                    placeholder="Input placeholder"
                  />
                  <Form.Input
                    fluid
                    label="Email Adress"
                    placeholder="Input placeholder"
                  />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Primary Sport"
                    placeholder="Input placeholder"
                  />
                  <Form.Input
                    fluid
                    label="Secondary Sport"
                    placeholder="Input placeholder"
                  />
                </Form.Group>
                <p>Personal Information </p>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Gender"
                    placeholder="Input placeholder"
                  />
                  <Form.Input
                    fluid
                    label="Age"
                    placeholder="Input placeholder"
                  />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>
                <Form.Select
                  className="input-description"
                  label="Location"
                  placeholder="Input placeholder"
                />
                <h3>Avatar Image</h3>
                <Dropzone onDrop={(files) => console.log(files)}>
                  {({ getRootProps, getInputProps }) => (
                    <div className="drag-and-drop-athlets">
                      <div
                        {...getRootProps({
                          className: "dropzone-athletes",
                          onDrop: (event) => event.stopPropagation(),
                        })}
                      >
                        <input {...getInputProps()} />
                        <div className="upload-file-athletes">
                          <Icon
                            name="cloud upload"
                            color="black"
                            style={{ margin: "7px" }}
                          />
                          <p>Upload File </p>
                        </div>
                      </div>
                      <p className="drag-drop-athletes">or drag&drop here</p>
                    </div>
                  )}
                </Dropzone>

                <hr className="second-line"></hr>
                <div className="modal-buttons-athletes">
                  <button
                    className="cancel-button-athletes"
                    onClick={this.props.handleCloseModal}
                  >
                    CANCEL
                  </button>
                  <button
                    className="button-athletes-add"
                    onClick={this.addClickedHandler}
                  >
                    ADD
                  </button>
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
