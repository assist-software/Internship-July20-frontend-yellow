import React, { Component } from "react";

import { Grid, GridRow, Button, Pagination } from "semantic-ui-react";
import { GridColumn } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import InputSearch from "../../../common/InputSearch";
import "./selected-club.css";
import PersonClubThumbnail from "./person-in-club-card";
import header_icon from "../../../assets/edit.svg";
import InputForm from "../ModalAddClub/ModalAddClub";
import ModalDeleted from "../../../common/Modals/ModalDeleted";
import ModalAdded from "../../../common/Modals/ModalAdded";

class SelectedClub extends Component {
  state = {
    show: false,
    showDelete: false,
    showAdd: false,
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
  render() {
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
            <button className="button-club">Members</button>
            <button className="button-club">Requests</button>
          </div>

          <Grid>
            <GridRow>
              <GridColumn floated="left" align="left" computer="8" tablet="8">
                <InputSearch />
              </GridColumn>
              <GridColumn floated="right" align="right" computer="8" tablet="8">
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
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
            <PersonClubThumbnail />
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
