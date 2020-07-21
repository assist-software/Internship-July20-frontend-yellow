import React, { useState } from "react";
import { Form, Input, Modal } from "semantic-ui-react";
import close_icon from "../../assets/close.svg";
import "../Clubs/ModalAddClub/ModalAddClub.css";

const ModalAddCoach = (props) => {
  var [emailValidation, setEmailValidation] = useState(true);
  var [lastNameValidation, setlastNameValidation] = useState(true);
  var [firstNameValidation, setfirstNameValidation] = useState(true);
  var [classError, setClassError] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const Edit = () => {
    return (
      <button className="delete-button-club" onClick={deleteClickedHandler}>
        {" "}
        Detele
      </button>
    );
  };

  const firstNameHandler = (e) => {
    if (/^[a-zA-Z ]+$/.test(e.target.value)) {
      setfirstNameValidation(true);
      setFirstName(e.target.value);
    } else {
      setfirstNameValidation(false);
    }
  };

  const lastNameHandler = (e) => {
    if (/^[a-zA-Z ]+$/.test(e.target.value)) {
      setlastNameValidation(true);
      setLastName(e.target.value);
    } else {
      setlastNameValidation(false);
    }
  };
  const emailHandler = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setEmailValidation(true);
      setEmail(e.target.value);
    } else {
      setEmailValidation(false);
    }
  };

  const addClickedHandler = () => {
    if (
      lastNameValidation &&
      firstNameValidation &&
      emailValidation &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0
    ) {
      setFirstName("");
      setLastName("");
      setEmail("");
      props.hideAddConfirm(firstName);
    }
  };

  const exitHandler = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    props.hideModal();
  };

  const deleteClickedHandler = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    props.hideDeleteConfirm();
  };

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
              className="close-icon"
              onClick={exitHandler}
            />
          </div>
          <div>
            <h2>{props.name}</h2>
            <hr></hr>

            <div className="modal-form-inputs">
              <Form.Input
                required
                error={
                  firstNameValidation
                    ? null
                    : "The field can not be empty or contain special characters"
                }
                onChange={firstNameHandler}
                fluid
                label="First Name"
                placeholder="Input placeholder"
                width="17"
              />

              <Form.Input
                required
                onChange={lastNameHandler}
                error={
                  lastNameValidation
                    ? null
                    : "The field can not be empty or contain special characters"
                }
                fluid
                label="Last Name"
                placeholder="Input placeholder"
                width="17"
              />

              <Form.Input
                required
                onChange={emailHandler}
                error={emailValidation ? null : "Enter a valid email address"}
                fluid
                label="Email Addres"
                placeholder="Input placeholder"
                width="17"
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
                <div>{props.editForm ? <Edit /> : null}</div>
                <button className="cancel-button" onClick={exitHandler}>
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

export default ModalAddCoach;
