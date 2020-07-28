import React, { Component } from "react";
import "./Athletes.css";
import InputSearch from "../InputSearch";
import axios from "axios";
import { Icon, Pagination } from "semantic-ui-react";
import PersonClubThumbnail from "../../admin/Clubs/selected-club/person-in-club-card";
import ModalAthletes from "./ModalAthletes/ModalAthletes";
import ModalAdded from "../Modals/ModalAdded";
import ModalDeleted from "../Modals/ModalDeleted";

class Athletes extends Component {
  state = {
    membersClicked: false,
    show: false,
    showDelete: false,
    showAdd: false,
    athletes: [],
    page: 1,
    numberpages: 0,
  };

  handleOpenModal = () => {
    this.setState({ show: true });
  };

  handleCloseModal = () => {
    this.setState({ show: false });
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
  componentDidMount() {
    let url = `http://192.168.100.228:8001/api/athlete/?page=1&limit=10`;
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      this.setState({ athletes: response.data });
      this.setState({ numberpages: response.data.page_number });
    });
  }
  setNumPage = (event, { activePage }) => {
    this.setState({ page: activePage });
    let url = `http://192.168.100.228:8001/api/athlete/?page=${activePage}&time=${this.state.time}&limit=10/`;
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState({ athletess: response.data });
        this.setState({ numberpages: response.data.page_number });
      });
  };
  render() {
    return (
      <div className="athletes-page">
        <div className="bottom-content-athletes">
          <h2>Athletes</h2>
          <div className="grid-athletes">
            <InputSearch />
            <button className="but-new-athletes" onClick={this.handleOpenModal}>
              ADD NEW
            </button>
          </div>
        </div>
        <ModalAthletes
          NameModalAthletes="Add Athlete"
          handleOpenModal={this.state.show}
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.show}
          hideModal={this.hideModal}
          hideAddConfirm={this.hideAddConfirm}
        />

        <ModalDeleted
          hideAddConfirm={this.state.showDelete}
          hideModal={this.hideModal}
        />
        <ModalAdded
          hideAddConfirm={this.state.showAdd}
          hideModal={this.hideModal}
          name={"Athlete Added"}
          description={"Athlete {this.name} was added on {this.clubName}"}
        />
        <div className="persons-atheltes">
          {this.state.athletes &&
            this.state.athletes.map((athlete, index) => (
              <PersonClubThumbnail
                name={athlete.first_name + " " + athlete.last_name}
                gender={athlete.gender}
                age={athlete.age}
                primary_sport={athlete.primary_sport}
                secondary_sport={athlete.secondary_sport}
              />
            ))}
        </div>
        <div className="pagination-athletes">
          <Pagination
            defaultActivePage={1}
            totalPages={this.state.numberpages}
            onPageChange={this.setNumPage}
            activePage={this.state.page}
          />
        </div>
      </div>
    );
  }
}

export default Athletes;
