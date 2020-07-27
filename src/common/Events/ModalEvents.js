import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { FileDrop } from "react-file-drop";
import { useDropzone } from "react-dropzone";
import {
  Modal,
  Form,
  Icon,
  Input,
  FormGroup,
  TextArea,
} from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./ModalEvents.css";
import Button from "../Button";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import close_icon from "../../assets/close.svg";

class ModalEvents extends Component {
  state = {
    clicked: false,
    titlevalid: true,
    bodyvalid: true,
    timevalid: true,
    datevalid: true,
    title: "",
    body: "",
    date: "",
    time: "",
    location: "",
    participants: "",
    img: "",
    address: "",
    invite: [],
  };

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  TitleHandler = (data) => {
    if (/^[a-zA-Z0-9-_. ]+$/.test(data.target.value)) {
      this.setState({ titlevalid: true });
      this.setState({ title: data.target.value });
    } else {
      this.setState({ titlevalid: false });
    }
  };

  BodyHandler = (data) => {
    if (data.target.value.length !== 0) {
      this.setState({ bodyvalid: true });
      this.setState({ body: data.target.value });
    } else this.setState({ bodyvalid: false });
  };
  DateHandler = (data) => {
    if (data.target.value.length !== 0) {
      this.setState({ date: data.target.value });
      this.setState({ datevalid: true });
    } else this.setState({ datevalid: false });
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
    if (
      this.state.titlevalid &&
      this.state.datevalid &&
      this.state.bodyvalid &&
      this.state.timevalid &&
      this.state.title.length > 0 &&
      this.state.body.length > 0 &&
      this.state.date.length > 0 &&
      this.state.time.length > 0
    ) {
      const token = localStorage.getItem("token");
      axios.post(
        "http://34.65.176.55:8081/api/event/create/",
        {
          img: this.state.img,
          title: this.state.title,
          date: this.state.date,
          body: this.state.body,
          time: this.state.time,
          location: this.state.address,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      this.props.hideAddConfirm();
    }
  };
  cancelClickedHandler = () => {
    this.setState({ titlevalid: true });
    this.setState({ datevalid: true });
    this.setState({ timevalid: true });
    this.setState({ bodyvalid: true });
  };
  deleteClickedHandler = () => {
    this.props.hideDeleteConfirm();
  };

  inviteHandler = () => {
    let members = this.state.invite;
    members.push("");
    this.setState({ invite: members });
  };

  render() {
    {
      console.log(this.reciveData, "coco");
    }
    return (
      <Modal
        className="modal-events"
        open={this.props.handleOpenModal}
        close={this.props.handleCloseModal}
        reciveData={this.props.passData}
      >
        <div className="modal-content-div">
          <div className="close-icon-events">
            <img
              src={close_icon}
              alt=""
              onClick={this.props.handleCloseModal}
            />
          </div>
          <Form>
            <div className="buttom-modal-events">
              <h2>{this.props.NameModalEvents}</h2>
              <div className="first-line-events">
                <hr></hr>
              </div>
            </div>
            <div className="form-events">
              <Form.Input
                label="Name"
                placeholder="Input placeholder"
                error={
                  this.state.titlevalid
                    ? null
                    : "The field can not be empty or contain some special characters"
                }
                onChange={this.TitleHandler}
              />
              <Form.Group widths="equal">
                <Form.Input
                  label="Date"
                  type="date"
                  value={this.state.date}
                  dateformat={"yyyy/MM/dd"}
                  placeholder="Input placeholder"
                  filterDate={(date) =>
                    date.getDay() !== 6 && date.getDay() !== 0
                  }
                  error={
                    this.state.datevalid ? null : "The field can not be empty "
                  }
                  onChange={(newdate) => {
                    this.setState({ date: newdate.target.value });
                  }}
                />
                <Form.Input
                  label="Time"
                  type="time"
                  step="1"
                  placeholder="Input placeholder"
                  value={this.state.time}
                  onChange={(ev) => {
                    this.setState({ time: ev.target.value });
                  }}
                />
              </Form.Group>

              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <Form.Input
                      {...getInputProps({
                        placeholder: "Input placeholder",
                        className: "location-search-input",
                        label: "Location",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>

              <Form.Field
                control={TextArea}
                style={{ height: "130px" }}
                label="Description"
                placeholder="Input placeholder"
                error={
                  this.state.bodyvalid ? null : "The field can not be empty "
                }
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
              <div className="bottom-events-modal">
                <hr></hr>

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
            </div>
          </Form>
        </div>
      </Modal>
    );
  }
}

export default ModalEvents;
