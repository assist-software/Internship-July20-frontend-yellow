import React, { Component } from "react";
import { Form, Input, Modal } from "semantic-ui-react";
import close_icon from "../../assets/close.svg";
import "../Clubs/ModalAddClub/ModalAddClub.css";
import Axios from "axios";
import ModalAdded from "../../common/Modals/ModalAdded";
import ModalDeleted from "../../common/Modals/ModalDeleted";

class ModalAddCoach extends Component {
  state = {
    show: false,
    showAdd: false,
    emailValidation: true,
    lastNameValidation: true,
    firstNameValidation: true,
    lastName: "",
    firstName: "",
    email: "",
    id: -1,
    url: "http://localhost:3001/coaches",
  };

  Edit = () => {
    return (
      <button
        className="delete-button-club"
        onClick={this.deleteClickedHandler}
      >
        {" "}
        Detele
      </button>
    );
  };

  firstNameHandler = (event) => {
    if (/^[a-zA-Z ]+$/.test(event.target.value)) {
      this.setState({
        firstNameValidation: true,
        firstName: event.target.value,
      });
    } else {
      this.setState({
        firstNameValidation: false,
      });
    }
  };

  lastNameHandler = (event) => {
    if (/^[a-zA-Z ]+$/.test(event.target.value)) {
      this.setState({
        lastNameValidation: true,
        lastName: event.target.value,
      });
    } else {
      this.setState({
        lastNameValidation: false,
      });
    }
  };
  emailHandler = (event) => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    ) {
      this.setState({
        emailValidation: true,
        email: event.target.value,
      });
    } else {
      this.setState({
        emailValidation: false,
      });
    }
  };

  nameHandle = (nameReceived) => {
    this.props.nameSet(nameReceived);
  };

  addClickedHandler = () => {
    if (
      this.state.lastNameValidation &&
      this.state.firstNameValidation &&
      this.state.emailValidation &&
      !!this.state.email &&
      !!this.state.firstName &&
      !!this.state.lastName
    ) {
      const token = localStorage.getItem("token");
      console.log(token);
      Axios.post(
        "http://192.168.100.228:8001/api/coach/",
        {
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      ).then((response) => {
        this.nameHandle(
          response.data.first_name + " " + response.data.last_name
        );
        this.setState({ id: response.data.id });
      });
      this.setState({
        email: "",
        firstName: "",
        lastName: "",
      });
      this.props.hideAddConfirm();
    }
  };

  exitHandler = () => {
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
    });
    this.props.hideModal();
  };

  deleteClickedHandler = () => {
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
    });
    this.props.hideDeleteConfirm();
  };
  componentDidMount() {
    Axios.get(this.state.url, {
      params: {
        id: this.props.id,
      },
    }).then((response) => {
      console.log(this.props.id, "   ");
      this.setState({
        email: response.data.email,
        firstName: response.data.first_name,
        lastName: response.data.last_name,
      });
    });
  }

  render() {
    return (
      <Modal
        open={this.props.showModal}
        onClose={this.props.hideModal}
        className="modal-form"
      >
        <Modal.Content>
          <Form>
            <div>
              <img
                src={close_icon}
                className="close-icon"
                onClick={this.exitHandler}
              />
            </div>
            <div>
              <h2>{this.props.name}</h2>
              <hr></hr>

              <div className="modal-form-inputs">
                <Form.Input
                  required
                  error={
                    this.state.firstNameValidation
                      ? null
                      : "The field can not be empty or contain special characters"
                  }
                  onChange={this.firstNameHandler}
                  fluid
                  label="First Name"
                  placeholder="Input placeholder"
                  width="16"
                />

                <Form.Input
                  required
                  onChange={this.lastNameHandler}
                  error={
                    this.state.lastNameValidation
                      ? null
                      : "The field can not be empty or contain special characters"
                  }
                  fluid
                  label="Last Name"
                  placeholder="Input placeholder"
                  width="16"
                />

                <Form.Input
                  required
                  onChange={this.emailHandler}
                  error={
                    this.state.emailValidation
                      ? null
                      : "Enter a valid email address"
                  }
                  fluid
                  label="Email Addres"
                  placeholder="Input placeholder"
                  width="16"
                />
                <label>Club Assign</label>
                <Input list="Club" placeholder="Input placeholder" fluid />
                <datalist id="Club">
                  <option value="English" />
                  <option value="Chinese" />
                  <option value="Dutch" />
                </datalist>

                <br />
                <br />
                <div className="modal-form-buttons">
                  <hr className="second-line"></hr>
                  <div>{this.props.editForm ? <this.Edit /> : null}</div>
                  <button className="cancel-button" onClick={this.exitHandler}>
                    {" "}
                    Cancel
                  </button>
                  <button className="button" onClick={this.addClickedHandler}>
                    {this.props.action}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Content>
        <ModalAdded
          hideAddConfirm={this.state.showAdd}
          hideModal={this.hideModal}
          name={"Coach edited"}
          description={"Coach name was edited"}
        />
        <ModalDeleted
          hideAddConfirm={this.state.showDelete}
          hideModal={this.hideModal}
        />
      </Modal>
    );
  }
}

export default ModalAddCoach;
