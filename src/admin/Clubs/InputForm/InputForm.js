import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Header,
  Icon,
} from "semantic-ui-react";

import "./ModalForm.css";

const InputForm = (props) => (
  <Modal
    open={props.showModal}
    onClose={props.hideModal}
    className="modal-form"
  >
    <Modal.Content>
      <Form>
        <div>
          <h2>Add Coach</h2>
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
            <br />
            <br />
            <div className="modal-form-buttons">
              <hr className="second-line"></hr>
              <button className="cancel-button" onClick={props.hideModal}>
                {" "}
                Cancel
              </button>
              <button className="button">Add</button>
            </div>
          </div>
        </div>
      </Form>
    </Modal.Content>
  </Modal>
);

export default InputForm;
