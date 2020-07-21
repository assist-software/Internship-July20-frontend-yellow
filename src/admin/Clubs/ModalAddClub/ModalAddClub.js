import React, { useState } from "react";
import { Form, Input, Modal, Icon } from "semantic-ui-react";

import close_icon from "../../../assets/close.svg";
import "./ModalAddClub.css";
import { render } from "@testing-library/react";
import zIndex from "@material-ui/core/styles/zIndex";

const InputForm = (props) => {
  const [clicked, setClicked] = useState(false);
  const [invitedMember, setInvitedMembers] = useState([]);
  const [name, setName] = useState("");
  const [coach, setCoach] = useState("");
  const [nameValidation, setNameValidation] = useState(true);
  const [coachValidation, setCoachValidation] = useState(true);

  const Results = () => (
    <div className="club-invite">
      <h3> Email address</h3>
      <input type="email" />
    </div>
  );

  const AddAnotherEmail = () => (
    <div>
      <Icon color="grey" name="plus" />
      <label onClick={inviteHandler}> Add another</label>
    </div>
  );

  const nameHandler = (e) => {
    if (/^[a-zA-Z ]+$/.test(e.target.value)) {
      setName(e.target.value);
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }
  };

  const coachHandler = (e) => {
    if (/^[a-zA-Z ]+$/.test(e.target.value)) {
      setCoach(e.target.value);
      setCoachValidation(true);
    } else {
      setCoachValidation(false);
    }
  };

  const Edit = () => {
    return (
      <button className="delete-button-club" onClick={deleteClickedHandler}>
        {" "}
        Detele
      </button>
    );
  };

  const addClickedHandler = () => {
    props.hideAddConfirm();
  };

  const deleteClickedHandler = () => {
    props.hideDeleteConfirm();
  };

  const inviteHandler = () => {
    let members = invitedMember;
    members.push("");
    setInvitedMembers(members);
    console.log(invitedMember);
  };
  let members = invitedMember;

  return (
    <Modal
      open={props.showModal}
      onClose={props.hideModal}
      className="modal-form"
    >
      <Modal.Content>
        <Form>
          <div>
            <img
              src={close_icon}
              alt=""
              className="close-icon"
              onClick={props.hideModal}
            />
          </div>
          <div>
            <h2>{props.name}</h2>
            <hr></hr>

            <div className="modal-form-inputs">
              <Form.Input
                required
                onChange={nameHandler}
                error={
                  nameValidation
                    ? null
                    : "The field can not be empty or contain special characters"
                }
                fluid
                label="Name"
                placeholder="Input placeholder"
                width="17"
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
                onClick={() => setClicked(inviteHandler)}
              >
                Invite members{" "}
              </p>
              <div>
                {invitedMember.map((item, index) => (
                  <Results key={index} item={"ASFasff"} />
                ))}
                <div>{invitedMember.length ? <AddAnotherEmail /> : null}</div>
              </div>

              <br />
              <br />
              <div className="modal-form-buttons">
                <hr className="second-line"></hr>
                <div>{props.editForm ? <Edit /> : null}</div>
                <button className="cancel-button" onClick={props.hideModal}>
                  {" "}
                  Cancel
                </button>
                <button className="button" onClick={addClickedHandler}>
                  {props.action}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default InputForm;
