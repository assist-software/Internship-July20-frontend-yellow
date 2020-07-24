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
import axios from "axios";

class ModalEvents extends Component {
  state = {
    clicked: false,
    title: "",
    body: "",
    date: "",
    time: "",
    location: "",
    participants: "",
  };

  TitleHandler = (data) => {
    this.setState({ title: data.target.value });
  };

  BodyHandler = (data) => {
    this.setState({ body: data.target.value });
  };
  DateHandler = (data) => {
    this.setState({ date: data.target.value });
  };

  TimeHandler = (data) => {
    this.setState({ time: data.target.value });
  };
  LocationHandler = (data) => {
    this.setState({ location: data.target.value });
  };
  ParticipantsHandler = (data) => {
    this.setState({ participants: data.target.value });
  };

  Results = () => (
    <div className="event-invite">
      <h3> Email address</h3>
      <input type="email" />
      <Icon color="grey" name="plus" />
      <label> Add another</label>
    </div>
  );
  addClickedHandler = () => {
    axios.post("http://localhost:3000/events", {
      img: this.state.img,
      title: this.state.title,
      date: this.state.date,
      age: this.state.age,
      time: this.state.time,
      location: this.state.location,
      participants: this.state.participants,
    });
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
              <Form.Input
                label="Name"
                placeholder="Input placeholder"
                onChange={this.TitleHandler}
              />

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Time"
                  placeholder="Input Placeholder"
                  onChange={this.TimeHandler}
                />
                <Form.Input
                  fluid
                  label="Date"
                  placeholder="Input Placeholder"
                  onChange={this.DateHandler}
                />
              </Form.Group>

              <Form.Select
                className="input-description"
                label="Location"
                placeholder="Input placeholder"
                onChange={this.LocationHandler}
              />

              <Form.Input
                className="description-input"
                style={{ height: "144px" }}
                label="Description"
                placeholder="Input placeholder"
                onChange={this.BodyHandler}
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
