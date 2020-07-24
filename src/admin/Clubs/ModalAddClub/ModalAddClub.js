import React, { Component } from "react";
import { Form, Modal, Icon, Input } from "semantic-ui-react";
import Axios from "axios";
import close_icon from "../../../assets/close.svg";
import "./ModalAddClub.css";
import Coach from "../../Coaches/Coach";

class InputForm extends Component {
  state = {
    clicked: false,
    invitedMember: [],
    name: "",
    coach: "",
    nameValidation: true,
    coachValidation: true,
    coachesList: [],
    id: -1,
  };

  role = localStorage.getItem("role");

  handleId = (id_received) => {
    this.setState({ id: id_received });
  };
  members = this.state.invitedMember;
  inviteMailHandler = (e, index) => {
    this.members[index] = e.target.value;
    console.log("members", this.members);
  };

  Results = () =>
    this.state.invitedMember.map((item, index) => (
      <input
        onChange={(e) => this.inviteMailHandler(e, index)}
        type="email"
        placeholder="Input email"
        className="input-mail-invite"
        id={index}
      />
    ));

  nameHandler = (e) => {
    if (/^[a-zA-Z ]+$/.test(e.target.value)) {
      this.setState({ name: e.target.value, nameValidation: true });
    } else {
      this.setState({ nameValidation: false });
    }
  };

  coachHandler = (e) => {
    if (/^[a-zA-Z ]+$/.test(e.target.value)) {
      this.setState({ coach: e.target.value, coachValidation: true });
    } else {
      this.setState({ coachValidation: false });
    }
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

  addAnother = () => (
    <div>
      <Icon color="grey" name="plus" />
      <label onClick={this.inviteHandler}> Add another</label>
    </div>
  );

  addClickedHandler = () => {
    const token = localStorage.getItem("token");
    if (
      this.state.nameValidation &&
      !!this.state.name &&
      this.state.coachValidation &&
      !!this.state.coach
    )
      Axios.post(
        "http://192.168.100.228:8001/api/club/",
        {
          name: this.state.name,
          coach: this.state.coach,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      ).then((response) => {
        console.log(response);
      });
    this.props.hideAddConfirm();
  };

  deleteClickedHandler = () => {
    this.props.hideDeleteConfirm();
  };

  inviteHandler = () => {
    let members = this.state.invitedMember;
    members.push("");
    this.setState({ invitedMember: members });
  };

  componentDidMount() {
    let url = `http://192.168.100.228:8001/api/coach/`;
    const token = localStorage.getItem("token");

    Axios.get(
      url,

      {
        headers: {
          Authorization: token,
        },
      },
      {
        params: {
          page: 1,
        },
      }
    ).then((response) => {
      this.setState({ coachesList: response.data.coaches });
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
                alt=""
                className="close-icon"
                onClick={this.props.hideModal}
              />
            </div>
            <div>
              <h2>{this.props.name}</h2>
              <hr></hr>

              <div className="modal-form-inputs">
                <Form.Input
                  required
                  onChange={this.nameHandler}
                  error={
                    this.state.nameValidation
                      ? null
                      : "The field can not be empty or contain special characters"
                  }
                  fluid
                  label="Name"
                  placeholder="Input placeholder"
                  width="16"
                />
                <label>Assign a Coach</label>
                <br />
                {this.role == 0 ? (
                  <div>
                    <Form.Input
                      list="Coach"
                      placeholder="Input placeholder"
                      fluid
                      onChange={this.coachHandler}
                      error={
                        this.state.coachValidation
                          ? null
                          : "The field can not be empty or contain special characters"
                      }
                    />
                    <datalist id="Coach">
                      {this.state.coachesList.map((coac) => {
                        return (
                          <option
                            value={coac.first_name + " " + coac.last_name}
                          />
                        );
                      })}
                    </datalist>
                  </div>
                ) : null}

                <p
                  className="label-invite-members"
                  onClick={this.inviteHandler}
                >
                  Invite members{" "}
                </p>
                <div>
                  <div>
                    {this.state.invitedMember.length ? (
                      <h3>Email Addres</h3>
                    ) : null}
                  </div>
                  <this.Results />
                  <div>
                    {this.state.invitedMember.length ? (
                      <this.addAnother />
                    ) : null}
                  </div>
                </div>
                <div></div>

                <br />
                <br />
                <div className="modal-form-buttons">
                  <hr className="second-line"></hr>
                  <div>{this.props.editForm ? <this.Edit /> : null}</div>
                  <button
                    className="cancel-button"
                    onClick={this.props.hideModal}
                  >
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
      </Modal>
    );
  }
}

export default InputForm;
