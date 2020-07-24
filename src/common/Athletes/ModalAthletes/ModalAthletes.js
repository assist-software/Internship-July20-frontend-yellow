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
import axios from "axios";
import close_icon from "../../../assets/close.svg";

class ModalAthletes extends Component {
  state = {
    namevalid: true,
    emailvalid: true,
    psportvalid: true,
    ssportvalid: true,
    gendervalid: true,
    agevalid: true,
    heightvalid: false,
    wightvalid: false,
    locationvalid: false,
    name: "",
    email: "",
    psport: "",
    ssport: "",
    gender: "",
    age: "",
  };

  NameHandler = (data) => {
    if (/^[a-zA-Z ]+$/.test(data.target.value)) {
      this.setState({ namevalid: true });
      this.setState({ name: data.target.value });
    } else {
      this.setState({ namevalid: false });
    }
  };
  AgeHandler = (data) => {
    if (/([1-9 ][0-9 ])/.test(data.target.value)) {
      this.setState({ agevalid: true });
      this.setState({ age: data.target.value });
    } else {
      this.setState({ agevalid: false });
    }
  };

  EmailHandler = (data) => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.target.value)
    ) {
      this.setState({ emailvalid: true });
      this.setState({ email: data.target.value });
    } else {
      this.setState({ emailvalid: false });
    }
  };

  PsportHandler = (data) => {
    if (/^[a-zA-Z ]+$/.test(data.target.value)) {
      this.setState({ psportvalid: true });
      this.setState({ psport: data.target.value });
    } else {
      this.setState({ psportvalid: false });
    }
  };

  SsportHandler = (data) => {
    if (/^[a-zA-Z ]+$/.test(data.target.value)) {
      this.setState({ ssportvalid: true });
      this.setState({ ssport: data.target.value });
    } else {
      this.setState({ ssportvalid: false });
    }
  };

  GenderHandler = (data) => {
    if (/^[a-zA-Z]+$/.test(data.target.value)) {
      this.setState({ gendervalid: true });
      this.setState({ gender: data.target.value });
    } else {
      this.setState({ gendervalid: false });
    }
  };

  addClickedHandler = () => {
    if (
      this.state.namevalid &&
      this.state.emailvalid &&
      this.state.psportvalid &&
      this.state.ssportvalid &&
      this.state.agevalid &&
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.psport.length > 0 &&
      this.state.ssport.length > 0 &&
      this.state.age.length > 0
    ) {
      axios.post("http://localhost:3000/members", {
        img: this.state.img,
        name: this.state.name,
        gender: this.state.gender,
        age: this.state.age,
        primary: this.state.psport,
        secondary: this.state.ssport,
      });

      {
        this.setState({ img: "" });
        this.setState({ name: "" });
        this.setState({ gender: "" });
        this.setState({ age: "" });
        this.setState({ psport: "" });
        this.setState({ ssport: "" });
        this.props.hideAddConfirm();
      }
    }
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
            <div>
              <img
                src={close_icon}
                className="close-icon"
                alt=""
                onClick={this.props.handleCloseModal}
              />
            </div>
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
                    error={
                      this.state.namevalid
                        ? null
                        : "The field can not be empty or contain special characters"
                    }
                    onChange={this.NameHandler}
                  />
                  <Form.Input
                    fluid
                    label="Email Adress"
                    placeholder="Input placeholder"
                    error={
                      this.state.emailvalid
                        ? null
                        : "Enter a valid email address"
                    }
                    onChange={this.EmailHandler}
                  />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Primary Sport"
                    placeholder="Input placeholder"
                    error={
                      this.state.psportvalid
                        ? null
                        : "The field can not be empty or contain special characters"
                    }
                    onChange={this.PsportHandler}
                  />
                  <Form.Input
                    fluid
                    label="Secondary Sport"
                    placeholder="Input placeholder"
                    error={
                      this.state.ssportvalid
                        ? null
                        : "The field can not be empty or contain special characters"
                    }
                    onChange={this.SsportHandler}
                  />
                </Form.Group>
                <p>Personal Information </p>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Gender"
                    placeholder="Input placeholder"
                    error={
                      this.state.gendervalid
                        ? null
                        : "The field can not be empty or contain space character"
                    }
                    onChange={this.GenderHandler}
                  />
                  <Form.Input
                    fluid
                    label="Age"
                    placeholder="Input placeholder"
                    error={
                      this.state.agevalid
                        ? null
                        : "The field can not be empty or contain space charactere"
                    }
                    onChange={this.AgeHandler}
                  />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Height"
                    placeholder="Input Placeholder"
                  />
                  <Form.Input
                    fluid
                    label="Weight"
                    placeholder="Input Placeholder"
                  />
                </Form.Group>
                <Form.Select
                  className="input-description"
                  label="Assign to a club"
                  placeholder="Input placeholder"
                  required="false"
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
