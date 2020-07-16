import React, { Component } from "react";

import InputSearch from "../../common/InputSearch";
import InputForm from "./InputForm/InputForm";
import SideBar from "../../common/SideBar";

import ClubThumbnail from "./ClubThumbnail";
import { Grid, GridRow, Button } from "semantic-ui-react";
import { GridColumn } from "semantic-ui-react";

import "./Club.css";

class Club extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="main-div">
        <div className="club-main">
          <h2 className="page-title-club">Clubs</h2>
          <div>
            <Grid>
              <GridRow>
                <GridColumn floated="left" align="left" computer="8" tablet="8">
                  <InputSearch show={this.state.show} />
                </GridColumn>
                <GridColumn
                  floated="right"
                  align="right"
                  computer="8"
                  tablet="8"
                >
                  <button className="button" onClick={this.showModal}>
                    Add new
                  </button>
                </GridColumn>
              </GridRow>
            </Grid>
            <InputForm showModal={this.state.show} hideModal={this.hideModal} />
            <div className="grid-container">
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="naem"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="asf"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="safa"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="naem"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="asf"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="safa"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="naem"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="asf"
              />
              <ClubThumbnail
                className="grid-item"
                name="Bike Club"
                coach="safa"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Club;
