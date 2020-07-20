import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Header,
  Icon,
} from "semantic-ui-react";

import close_icon from "../../../assets/close.svg";
import "./ModalAddClub.css";

const InputForm = (props) => {
  const [clicked, setClicked] = useState(false);
  const Results = () => (
    <div className="club-invite">
      <h3> Email address</h3>
      <input type="email" />
      <Icon color="grey" name="plus" />
      <label> Add another</label>
    </div>
  );

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
                onClick={() => setClicked(!clicked)}
              >
                Invite members{" "}
              </p>
              <div>{clicked ? <Results /> : null}</div>

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
