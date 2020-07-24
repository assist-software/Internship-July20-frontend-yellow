import _ from "lodash";
import React, { Component } from "react";
import { Table, Checkbox } from "semantic-ui-react";
import "./CoachTable.css";
import edit_icon from "../../assets/edit-icon.svg";
import trash_icon from "../../assets/trash.svg";
import ModalAddCoach from "./ModalAddCoach";
import ModalAdded from "../../common/Modals/ModalAdded";
import ModalDeleted from "../../common/Modals/ModalDeleted";
import Axios from "axios";
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
    nameDeleted: "",
    coaches_page: [],
  };


  token = localStorage.getItem("token");

  nameHandle = (nameReceived) => {
    this.setState({ name: nameReceived });
  };

  componentDidMount() {
    let url = "http://192.168.100.228:8001/api/coach/";
    const token = localStorage.getItem("token");
    axios
      .get(
        url,
        { page: 1 },
        {
          headers: { Authorization: token },
        }
      )
      .then((response) => {
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
    Axios.get("http://192.168.100.228:8001/api/coach/<int:id>/", {
      headers: {
        Authorization: this.token,
      },
    }).then((response) => {
      this.setState({
        nameDeleted: response.data.first_name + " " + response.data.last_name,
      });
      this.setState({ id: response.data.id });
    });
  };

  hideDeleteConfirm = (e) => {
    e.preventDefault();
    const index = parseInt(e.target.id);

    const url = `http://192.168.100.228:8001/api/coach/${this.state.coaches_page[indexx].id}/`;
    Axios.delete(url, {
      headers: {
        Authorization: this.token,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      this.setState({
        show: false,
        showDelete: true,
      });
    });
  };

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending",
      });;

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  componentDidMount() {
    let url = "http://192.168.100.228:8001/api/coach/";
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
      this.setState({ coaches_page: response.data.coaches });
    });
  }

  setNumPage = (event, { activePage }) => {
    this.setState({ page: activePage });
    let url = "http://192.168.100.228:8001/api/coach/";
    Axios.get(
      url,

      {
        headers: {
          Authorization: this.token,
        },
      },
      {
        params: {
          page: this.state.page,
        },
      }
    ).then((response) => {
      this.setState({ coaches_page: response.data.coaches });
    });
  };

  render() {
    const { column, data, direction } = this.state;
    const coachesOnTable = this.state.coaches_page;
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
                Owned Clubs
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
          setName={this.nameHandle}
          name={this.state.nameDeleted}
        />
      </div>
    );
  }
}
