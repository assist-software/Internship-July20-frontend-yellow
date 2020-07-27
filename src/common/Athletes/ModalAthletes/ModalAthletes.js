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
    heightvalid: true,
    weightvalid: true,
    sports: [],
    name: "",
    email: "",
    psport: "",
    ssport: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
  };
  optionsGender = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
  ];
  NameHandler = (data) => {
    if (/^[a-zA-Z ]+$/.test(data.target.value)) {
      this.setState({ namevalid: true });
      this.setState({ name: data.target.value });
    } else {
      this.setState({ namevalid: false });
    }
  };
  AgeHandler = (data) => {
    if (
      /([1-5][0-9])/.test(data.target.value) &&
      data.target.value.length < 3
    ) {
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

  HeightHandler = (data) => {
    if (
      /[1-2][0-90-9]+$/.test(data.target.value) &&
      data.target.value.length < 4
    ) {
      this.setState({ heightvalid: true });
      this.setState({ height: data.target.value });
    } else {
      this.setState({ heightvalid: false });
    }
  };

  WeightHandler = (data) => {
    if (
      /[1-3][0-90-9]+$/.test(data.target.value) &&
      data.target.value.length < 4
    ) {
      this.setState({ weightvalid: true });
      this.setState({ weight: data.target.value });
    } else {
      this.setState({ weightvalid: false });
    }
  };

  componentDidMount() {
    let url = "http://192.168.100.228:8001/api/sports/";
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      let sport =
        response &&
        response.data &&
        response.data.map((item, index) => {
          return {
            key: index,
            text: item.description,
            value: item.description,
          };
        });
      console.log(sport, "aaaaa");
      this.setState({ sports: sport });
      console.log(response.data, "asfuysaf");
    });
  }
  addClickedHandler = () => {
    if (
      this.state.namevalid &&
      this.state.emailvalid &&
      this.state.psportvalid &&
      this.state.ssportvalid &&
      this.state.agevalid &&
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.age.length > 0 &&
      this.state.height.length > 0 &&
      this.state.weight.length > 0
    ) {
      const token = localStorage.getItem("token");
      axios.post(
        "http://192.168.100.228:8001/api/athlete/",
        {
          name: this.state.name,
          email: this.state.email,
          primary_sport: this.state.psport,
          secondary_sport: this.state.ssport,
          gender: this.state.gender,
          age: this.state.age,
          height: this.state.height,
          weight: this.state.weight,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

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
  cancelClickedHandler = () => {
    {
      this.setState({ img: "" });
      this.setState({ name: "" });
      this.setState({ gender: "" });
      this.setState({ age: "" });
      this.setState({ psport: "" });
      this.setState({ ssport: "" });
      this.setState({ height: "" });
      this.setState({ weight: "" });
      this.setState({ email: "" });
    }
    {
      this.setState({ namevalid: true });
      this.setState({ heightvalid: true });
      this.setState({ gendervalid: true });
      this.setState({ agevalid: true });
      this.setState({ psportvalid: true });
      this.setState({ ssportvalid: true });
      this.setState({ weightvalid: true });
      this.setState({ emailvalid: true });
    }
    this.props.handleCloseModal();
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
                className="close-icon-athlete"
                alt=""
                onClick={this.cancelClickedHandler}
              />
            </div>
            <div className="modal-athletes-div">
              <h2>{this.props.NameModalAthletes}</h2>
              <div className="first-line-athletes">
                <hr></hr>
              </div>

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
                  <Form.Select
                    fluid
                    label="Primary Sport"
                    placeholder="Input placeholder"
                    options={this.state.sports || []}
                    error={
                      this.state.psportvalid
                        ? null
                        : "The field can not be empty.Select an option"
                    }
                    onChange={this.PsportHandler}
                  />
                  <Form.Select
                    fluid
                    options={this.state.sports || []}
                    label="Secondary Sport"
                    placeholder="Input placeholder"
                    error={
                      this.state.ssportvalid
                        ? null
                        : "The field can not be empty.Select an option"
                    }
                    onChange={this.SsportHandler}
                  />
                </Form.Group>
                <p>Personal Information </p>
                <Form.Group widths="equal">
                  <Form.Select
                    fluid
                    label="Gender"
                    placeholder="Input placeholder"
                    options={this.optionsGender}
                    error={
                      this.state.gendervalid
                        ? null
                        : "The field can not be empty."
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
                        : "The field can not be empty and must contain only digits.The maximum value is 49"
                    }
                    onChange={this.AgeHandler}
                  />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Height"
                    placeholder="Input Placeholder"
                    error={
                      this.state.heightvalid
                        ? null
                        : "The field can not be empty and must contain only digits.The maximum value is 299"
                    }
                    onChange={this.HeightHandler}
                  />
                  <Form.Input
                    fluid
                    label="Weight"
                    placeholder="Input Placeholder"
                    error={
                      this.state.weightvalid
                        ? null
                        : "The field can not be empty and must contain only digits.The maximum value is 399"
                    }
                    onChange={this.WeightHandler}
                  />
                </Form.Group>
                <Form.Select
                  className="input-description"
                  label="Assign to a club"
                  placeholder="Input placeholder"
                  required="true"
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
                <div className="second-line-athletes">
                  <hr></hr>
                </div>

                <div className="modal-buttons-athletes">
                  <button
                    className="cancel-button-athletes"
                    onClick={this.cancelClickedHandler}
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
