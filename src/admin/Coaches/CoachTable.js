import _ from "lodash";
import React, { Component } from "react";
import { Table, Checkbox } from "semantic-ui-react";
import "./CoachTable.css";
import edit_icon from "../../assets/edit-icon.svg";
import trash_icon from "../../assets/trash.svg";
import ModalAddCoach from "./ModalAddCoach";
import ModalAdded from "../../common/Modals/ModalAdded";
import ModalDeleted from "../../common/Modals/ModalDeleted";
import axios from "axios";
import { Pagination } from "semantic-ui-react";

export default class CoachTable extends Component {
  state = {
    column: null,
    id: 0,
    direction: null,
    show: false,
    showAdd: false,
    showDelete: false,
    coaches: [],
    page: 1,
  };

  componentDidMount() {
    let url = "http://localhost:3001/coaches";
    axios.get(url).then((response) => {
      this.setState({ coaches: response.data });
    });
  }

  showModal = (e) => {
    this.setState({
      id: e.target.id,
      show: true,
    });
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

  hideDeleteConfirm = (e) => {
    console.log(e.target.id);
    axios.delete("http://localhost:3001/coaches", { first_name: "fsafsa" });
    var newState = this.state.coaches.slice();
    newState.splice(e.target.id, 1);
    this.setState({ coaches: newState });
    console.log(this.state.coaches);
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

  setNumPage = (event, { activePage }) => {
    this.setState({ page: activePage });
  };

  render() {
    const { column, data, direction } = this.state;
    const coachesOnTable = this.state.coaches.slice(
      (this.state.page - 1) * 7,
      (this.state.page - 1) * 7 + 6
    );
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
                sorted={column === "Email Address" ? direction : null}
                onClick={this.handleSort("Email Address")}
              >
                Email Address
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "gender" ? direction : null}
                onClick={this.handleSort("gender")}
              >
                Owwned Clubs
              </Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {coachesOnTable.map((coaches, index) => (
              <Table.Row key={coaches.first_name}>
                <Table.Cell>
                  <Checkbox className="table-checkbox" />
                  {coaches.first_name + " " + coaches.last_name}
                </Table.Cell>
                <Table.Cell>{coaches.email}</Table.Cell>
                <Table.Cell>{coaches.club}</Table.Cell>
                <Table.Cell>
                  <img
                    src={edit_icon}
                    className="table-icons"
                    onClick={this.showModal}
                    id={index}
                  />
                  <img
                    onClick={this.hideDeleteConfirm}
                    src={trash_icon}
                    id={index}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Pagination
            defaultActivePage={1}
            totalPages={10}
            onPageChange={this.setNumPage}
            activePage={this.state.page}
          />
        </Table>
        <ModalAddCoach
          showModal={this.state.show}
          hideModal={this.hideModal}
          hideAddConfirm={this.hideAddConfirm}
          hideDeleteConfirm={this.hideDeleteConfirm}
          id={this.state.id}
          name={"Edit Coach"}
          action={"Save"}
          editForm={true}
        />
        <ModalAdded
          hideAddConfirm={this.state.showAdd}
          hideModal={this.hideModal}
          name={"Coach edited"}
          description={"Coach was edited"}
        />
        <ModalDeleted
          hideAddConfirm={this.state.showDelete}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}
