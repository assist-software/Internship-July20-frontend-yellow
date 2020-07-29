import React, { Component } from "react";
import InputSearch from "../../common/InputSearch";
import InputForm from "./ModalAddClub/ModalAddClub";
import { Link } from "react-router-dom";
import ClubThumbnail from "./ClubThumbnail";
import { Grid, GridRow, Input } from "semantic-ui-react";
import { GridColumn } from "semantic-ui-react";
import ModalAdded from "../../common/Modals/ModalAdded";
import axios from "axios";
import "./Club.css";

class Club extends Component {
  state = {
    show: false,
    showAdd: false,
    clubs: [],
    searchString: "",
    clubAdded: "",
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false, showAdd: false });
  };

  hideAddConfirm = () => {
    console.log("in");
    this.getClub();
    this.setState({
      show: false,
      showAdd: true,
    });
  };

  searchStringHandler = (e) => {
    this.setState({ searchString: e.target.value });
    this.getClub();
  };

  getClub = () => {
    let url = `http://34.65.176.55:8081/api/club/?search=${this.state.searchString}`;
    //let url = `http://192.168.100.228:8001/api/club/?search=${this.state.searchString}`;
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.number);
        this.setState({ clubs: response.data.clubs });
      });
  };

  setClubAdded = (response) => {
    this.setState({ clubAdded: response });
  };

  componentDidMount() {
    this.getClub();
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
                  <Input
                    className="search-bar"
                    iconPosition="left"
                    icon={{
                      name: "search",
                      link: true,
                      onClick: this.searchHandler,
                    }}
                    onChange={this.searchStringHandler}
                    placeholder="Search..."
                  />
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
              clubAdded={this.setClubAdded}
              object={[]}
            />
            <ModalAdded
              hideAddConfirm={this.state.showAdd}
              hideModal={this.hideModal}
              name={"Club added"}
              description={`Your club with name ${this.state.clubAdded} has been succesfully added in the system.`}
              object={this.props.object}
            />
            <div className="grid-container">
              {this.state.clubs &&
                this.state.clubs.map((club, index) => (
                  <Link to={`/clubs/${index}`} className="linkStyle">
                    <ClubThumbnail
                      key={index}
                      name={club.name}
                      coach={
                        club.id_Owner.first_name + " " + club.id_Owner.last_name
                      }
                      className="grid-item"
                      number={club}
                      id={index}
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
