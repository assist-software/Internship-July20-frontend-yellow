import React, { Component } from "react";
import "./Athletes.css";
import InputSearch from "../InputSearch";
import Button from "../Button";
import { Grid, GridColumn, GridRow, Icon, Pagination } from "semantic-ui-react";
import PersonClubThumbnail from "../../admin/Clubs/selected-club/person-in-club-card";
import ModalAthletes from "./ModalAthletes/ModalAthletes";

class Athletes extends Component {
  state = { show: false };

  handleOpenModal = () => {
    this.setState({ show: true });
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="athletes-page">
        <div className="athletes-paragraph">
          <h2>Athletes</h2>
        </div>

        <div className="grid-athletes">
          <Grid>
            <GridRow>
              <GridColumn floated="left" align="left" computer="8" tablet="8">
                <InputSearch />
              </GridColumn>
              <GridColumn floated="right" align="right" computer="8" tablet="8">
                <button className="but-new" onClick={this.handleOpenModal}>
                  ADD NEW
                </button>
              </GridColumn>
            </GridRow>
          </Grid>
        </div>
        <ModalAthletes
          NameModalAthletes="Add Athlete"
          handleOpenModal={this.state.show}
          handleCloseModal={this.handleCloseModal}
        />
        <div className="persons-atheltes">
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
      </div>
    );
  }
}

export default Athletes;
