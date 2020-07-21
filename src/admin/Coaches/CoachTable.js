import _ from "lodash";
import React, { Component } from "react";
import { Table, Checkbox } from "semantic-ui-react";
import "./CoachTable.css";
import edit_icon from "../../assets/edit-icon.svg";
import trash_icon from "../../assets/trash.svg";
import ModalAddCoach from "./ModalAddCoach";
import ModalAdded from "../../common/Modals/ModalAdded";
import ModalDeleted from "../../common/Modals/ModalDeleted";

const tableData = [
  { name: "John", age: 15, gender: "Male" },
  { name: "Amber", age: 40, gender: "Female" },
  { name: "Leslie", age: 25, gender: "Other" },
  { name: "Ben", age: 70, gender: "Male" },
];

export default class CoachTable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
    show: false,
    showAdd: false,
    showDelete: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({
      show: false,
      showDelete: false,
      showAdd: false,
    });
  };

  hideAddConfirm = () => {
    this.setState({
      show: false,
      showAdd: true,
    });
  };

  hideDeleteConfirm = () => {
    this.setState({
      show: false,
      showDelete: true,
    });
  };

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending",
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  render() {
    const { column, data, direction } = this.state;

    return (
      <div>
        <Table sortable fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "name" ? direction : null}
                onClick={this.handleSort("name")}
              >
                First and Last Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "age" ? direction : null}
                onClick={this.handleSort("age")}
              >
                Email Address
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "gender" ? direction : null}
                onClick={this.handleSort("gender")}
              >
                Owwned Clubs
              </Table.HeaderCell>
              <Table.HeaderCell
                width="20px"
                sorted={column === "gender" ? direction : null}
                onClick={this.handleSort("gender")}
              >
                Actions
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ age, gender, name }) => (
              <Table.Row key={name}>
                <Table.Cell>
                  <Checkbox className="table-checkbox" />
                  {name}
                </Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{gender}</Table.Cell>
                <Table.Cell>
                  <img
                    src={edit_icon}
                    className="table-icons"
                    onClick={this.showModal}
                  />
                  <img onClick={this.hideDeleteConfirm} src={trash_icon} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <ModalAddCoach
          showModal={this.state.show}
          hideModal={this.hideModal}
          hideAddConfirm={this.hideAddConfirm}
          hideDeleteConfirm={this.hideDeleteConfirm}
          name={"Edit Coach"}
          action={"Save"}
          editForm={true}
        />
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
      </div>
    );
  }
}
