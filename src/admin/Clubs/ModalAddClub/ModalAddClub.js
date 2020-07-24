import React, { Component } from "react";
import { Form, Input, Modal, Icon } from "semantic-ui-react";

import close_icon from "../../../assets/close.svg";
import "./ModalAddClub.css";
import { render } from "@testing-library/react";
import zIndex from "@material-ui/core/styles/zIndex";

class InputForm extends Component {
  state = {
    clicked: false,
    invitedMember: [],
    name: "",
    coach: "",
    nameValidation: true,
    coachValidation: true,
    id: -1,
  };

  Results = () =>
    this.state.invitedMember.map(() => (
      <input type="email" placeholder="Input email" />
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
    this.props.hideAddConfirm();
  };

  deleteClickedHandler = () => {
    this.props.hideDeleteConfirm();
  };

  inviteHandler = () => {
    let members = this.state.invitedMember;
    members.push("");
    this.setState({ invitedMember: members });
    console.log(this.state.invitedMember);
  };
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
                <Input list="Coach" placeholder="Input placeholder" fluid />
                <datalist id="Coach">
                  <option value="English" />
                  <option value="Chinese" />
                  <option value="Dutch" />
                </datalist>
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
