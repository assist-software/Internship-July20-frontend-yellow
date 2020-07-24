import React, { Component } from "react";
import "./Athletes.css";
import InputSearch from "../InputSearch";
import axios from "axios";
import {
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Pagination,
  InputForm,
} from "semantic-ui-react";
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
    let url = "http://localhost:3000/members";
    axios.get(url).then((response) => {
      this.setState({ athletes: response.data });
    });
  }
  render() {
    return (
      <div className="athletes-page">
        <div className="athletes-paragraph">
          <h2>Athletes</h2>
        </div>

        <div className="grid-athletes">
          <InputSearch />

          <button className="but-new-athletes" onClick={this.handleOpenModal}>
            ADD NEW
          </button>
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
                name={athlete.name}
                gender={athlete.gender}
                age={athlete.age}
                primary={athlete.primary}
                secondary={athlete.secondary}
              />
            ))}
        </div>
        <div className="pagination-athletes">
          <Pagination
            defaultActivePage={5}
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true,
            }}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true,
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true,
            }}
            prevItem={{ content: <Icon name="angle left" />, icon: true }}
            nextItem={{ content: <Icon name="angle right" />, icon: true }}
            totalPages={10}
          />
        </div>
        <ModalDeleted
          hideAddConfirm={this.state.showDelete}
          hideModal={this.hideModal}
        />
        <ModalAdded
          hideAddConfirm={this.state.showAdd}
          hideModal={this.hideModal}
          name={"Athlete Added"}
          description={
            "Athlete {props.NameAthlete} was added on {props.ClubName}."
          }
        />
      </div>
    );
  }
}

export default Athletes;
