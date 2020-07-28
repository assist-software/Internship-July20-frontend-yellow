import React, { Component } from "react";

import { Grid, GridRow, Pagination, Input } from "semantic-ui-react";
import { GridColumn } from "semantic-ui-react";
import InputSearch from "../../../common/InputSearch";
import "./selected-club.css";
import PersonClubThumbnail from "./person-in-club-card";
import header_icon from "../../../assets/edit.svg";
import InputForm from "../ModalAddClub/ModalAddClub";
import ModalDeleted from "../../../common/Modals/ModalDeleted";
import ModalAdded from "../../../common/Modals/ModalAdded";
import Axios from "axios";

class SelectedClub extends Component {
  state = {
    membersClicked: false,
    show: false,
    showDelete: false,
    showAdd: false,
    members: [],
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

  id_array = window.location.pathname.split("/");
  id = parseInt(this.id_array[2]) + 1;

  requestsClickHandler = () => {
    let url = `http://34.65.176.55:8081/api/club/${this.id}/requested`;
    this.membersHandler(url);
  };

  membersHandler = (url) => {
    const token = localStorage.getItem("token");
    Axios.get(
      url,

      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then((response) => {
        console.log(response.data, "response");
        this.setState({ members: response.data.Members });
      })
      .catch((error) => {
        alert(error);
      });
  };

  componentDidMount() {
    let url = `http://34.65.176.55:8081/api/club/${this.id}/`;
    this.membersHandler(url);
  }

  hideDeleteConfirm = () => {
    this.setState({
      show: false,
      showDelete: true,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className="selected-club-main">
        <div className="header-selected-club">
          <h2>Biking Club</h2>
          <img
            src={header_icon}
            className="icon-header"
            onClick={this.showModal}
          />
        </div>
        <label className="header-details">Coach</label>
        <br />
        <label className="header-details">Coach name</label>
        <div>
          <div className="selector-buttons">
            <button className="button-club" onClick={this.membersClickHandler}>
              Members
            </button>
            <button className="button-club" onClick={this.requestsClickHandler}>
              Requests
            </button>
          </div>

          <Grid>
            <GridRow>
              <GridColumn floated="left" align="left" computer="8" tablet="16">
                <Input
                  className="search-bar"
                  icon={{
                    name: "search",
                    circular: true,
                    link: true,
                    onClick: this.searchHandler,
                  }}
                  onChange={this.searchStringHandler}
                  placeholder="Search..."
                />
              </GridColumn>
              <GridColumn floated="left" align="left" computer="8" tablet="16">
                <button className="button">Add new</button>
              </GridColumn>
            </GridRow>
          </Grid>
          <InputForm
            showModal={this.state.show}
            hideModal={this.hideModal}
            hideDeleteConfirm={this.hideDeleteConfirm}
            hideAddConfirm={this.hideAddConfirm}
            name={"Edit Club"}
            action={"Save"}
            editForm={true}
          />
          <ModalDeleted
            hideAddConfirm={this.state.showDelete}
            hideModal={this.hideModal}
          />
          <ModalAdded
            hideAddConfirm={this.state.showAdd}
            hideModal={this.hideModal}
            name={"Club modified"}
            description={
              "Your club with name “Biking Club” has been succesfully modified in the system."
            }
          />
          <div className="persons-grid">
            {this.state.members &&
              this.state.members.map((member, index) => (
                <PersonClubThumbnail
                  name={
                    member.id_User.first_name + " " + member.id_User.last_name
                  }
                  gender={member.id_User.gender === 0 ? "male" : "female"}
                  age={member.id_User.age}
                  primary_sport={
                    member.id_User.primary_sport
                      ? member.id_User.primary_sport.description
                      : "none"
                  }
                  secondary_sport={
                    member.id_User.secondary_sport
                      ? member.id_User.secondary_sport.description
                      : "none"
                  }
                />
              ))}
          </div>
        </div>
        <div className="pagination-numbers">
          <Pagination activePage="1" totalPages="5" />
        </div>
      </div>
    );
  }
}

export default SelectedClub;
