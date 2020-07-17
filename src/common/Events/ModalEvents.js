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
              <Dropzone onDrop={(files) => console.log(files)}>
                {({ getRootProps, getInputProps }) => (
                  <div className="container-event">
                    <div
                      {...getRootProps({
                        className: "dropzone",
                        onDrop: (event) => event.stopPropagation(),
                      })}
                    >
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </div>
                )}
              </Dropzone>
            </div>
            <div className="bottom-add-edit">
              <hr />
              <div className="button-add-events">
                <button
                  className="button-close"
                  onClick={this.props.handleCloseModal}
                  inverted
                >
                  Close
                </button>
                <Button name="Add"></Button>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    );
  }
}

export default ModalEvents;
