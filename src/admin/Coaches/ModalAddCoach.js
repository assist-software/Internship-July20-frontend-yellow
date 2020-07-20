import React, { useState } from "react";
import { Form, Input, Modal } from "semantic-ui-react";
import close_icon from "../../assets/close.svg";
import "../Clubs/ModalAddClub/ModalAddClub.css";

const ModalAddCoach = (props) => {
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
              onClick={props.hideModal}
            />
          </div>
          <div>
            <h2>{props.name}</h2>
            <hr></hr>

            <div className="modal-form-inputs">
              <Form.Input
                fluid
                label="First Name"
                placeholder="Input placeholder"
                width="17"
              />

              <Form.Input
                fluid
                label="Last Name"
                placeholder="Input placeholder"
                width="17"
              />

              <Form.Input
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

export default ModalAddCoach;
