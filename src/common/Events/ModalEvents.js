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
import TimePicker from "rc-time-picker";
import SingleDatePicker from "react-datepicker";
import moment from "moment";
import CalendarContainer from "rc-time-picker";

class ModalEvents extends Component {
  state = {
    dt: moment(),
    startdate: new Date(),
  };
  MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  state = { clicked: false };
  Results = () => (
    <div className="event-invite">
      <h3> Email address</h3>
      <input type="email" />
      <Icon color="grey" name="plus" />
      <label> Add another</label>
    </div>
  );
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

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Time"
                  placeholder="Input Placeholder"
                />
                <Form.Input
                  fluid
                  label="Date"
                  placeholder="Input Placeholder"
                />
              </Form.Group>

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
              <div className="invite-optional">
                <p
                  className="invite-members"
                  onClick={() =>
                    this.setState({ clicked: !this.state.clicked })
                  }
                >
                  Invite members
                </p>
              </div>

              <p className="invite-members-optional">(Optional)</p>
              <div>{this.state.clicked ? this.Results() : null}</div>

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
                        <Icon
                          style={{ margin: "3px" }}
                          name="cloud upload"
                          color="black"
                        />
                        <p>Upload File </p>
                      </div>
                    </div>
                    <p className="drag-drop-event">or drag&drop here</p>
                  </div>
                )}
              </Dropzone>
              <div className="second-line-events"></div>

              <div className="button-add-events">
                <button
                  className="button-close-event"
                  onClick={this.props.handleCloseModal}
                  inverted
                >
                  Close
                </button>
                <button
                  className="button-add-event"
                  onClick={this.addClickedHandler}
                >
                  ADD
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    );
  }
}

export default ModalEvents;
