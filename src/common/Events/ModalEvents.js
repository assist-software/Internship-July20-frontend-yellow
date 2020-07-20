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
import "./ModalEvents.css";
import Button from "../Button";

class ModalEvents extends Component {
  render() {
    return (
      <Modal
        size="large"
        className="modal-events"
        open={this.props.handleOpenModal}
        close={this.props.handleCloseModal}
      >
        <div className="modal-content-div">
          <Form>
            <h2>{this.props.NameModalEvents}</h2>
            <hr></hr>

            <div className="form-events">
              <Form.Input label="Name" placeholder="Input placeholder" />

              <div className="input-time-date">
                <FormGroup inline="true">
                  <Form.Input
                    label="Time"
                    icon="clock outline"
                    placeholder="Input placeholder"
                  />

                  <Form.Input
                    label="Date"
                    icon="calendar alternate outline"
                    placeholder="Search..."
                  />
                </FormGroup>
              </div>
              <Form.Select
                className="input-description"
                label="Location"
                placeholder="Input placeholder"
              />

              <Form.Input
                className="description-input"
                style={{ height: "144px" }}
                label="Description"
                placeholder="Input placeholder"
              />
              <div>
                <p className="invite-members">Invite memebers</p>
                <p className="invite-members-optional">(Optional)</p>
              </div>

              <p className="event-cover">Event cover</p>
              <Dropzone onDrop={(files) => console.log(files)}>
                {({ getRootProps, getInputProps }) => (
                  <div className="container-event">
                    <div
                      {...getRootProps({
                        className: "dropzone-event",
                        onDrop: (event) => event.stopPropagation(),
                      })}
                    >
                      <input {...getInputProps()} />
                      <div className="upload-file-event">
                        <Icon name="cloud upload" color="black" />
                        <p>Upload File </p>
                      </div>
                    </div>
                    <p className="drag-drop-event">or drag&drop here</p>
                  </div>
                )}
              </Dropzone>
            </div>
          </Form>

          <div className="button-add-events">
            <hr></hr>
            <button
              className="button-close-event"
              onClick={this.props.handleCloseModal}
              inverted
            >
              Close
            </button>
            <button className="button-add-event">ADD</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ModalEvents;
