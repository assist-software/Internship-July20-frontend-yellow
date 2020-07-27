import React, { Component } from "react";
import InputSearch from "../../common/InputSearch";
import InputForm from "./ModalAddClub/ModalAddClub";
import { Link } from "react-router-dom";
import ClubThumbnail from "./ClubThumbnail";
import { Grid, GridRow } from "semantic-ui-react";
import { GridColumn } from "semantic-ui-react";
import ModalAdded from "../../common/Modals/ModalAdded";
import axios from "axios";
import "./Club.css";

class Club extends Component {
  state = { show: false, showAdd: false, clubs: [] };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false, showAdd: false });
  };

  hideAddConfirm = () => {
    this.setState({
      show: false,
      showAdd: true,
    });
  };

  componentDidMount() {
    let url = "http://34.65.176.55:8081/api/club/";
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response, "clvu");
        this.setState({ clubs: response.data });
      });
  }

  render() {
    return (
      <div className="main-div">
        <div className="club-main">
          <h2 className="page-title-club">Clubs</h2>
          <div>
            <Grid>
              <GridRow>
                <GridColumn floated="left" align="left" computer="8" tablet="8">
                  <InputSearch show={this.state.show} align="right" />
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
            <InputForm
              showModal={this.state.show}
              hideModal={this.hideModal}
              hideAddConfirm={this.hideAddConfirm}
              name={"Add Club"}
              action={"Add"}
              editForm={false}
              object={[]}
            />
            <ModalAdded
              hideAddConfirm={this.state.showAdd}
              hideModal={this.hideModal}
              name={"Club added"}
              description={
                "Your club with name “Biking Club” has been succesfully added in the system."
              }
              object={this.props.object}
            />
            <div className="grid-container">
              {this.state.clubs &&
                this.state.clubs.map((club, index) => (
                  <Link to={`/clubs/${index}`} className="linkStyle">
                    <ClubThumbnail
                      key={index}
                      name={club.name}
                      coach={club.first_name + " " + club.last_name}
                      className="grid-item"
                      number={club.members}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Club;
