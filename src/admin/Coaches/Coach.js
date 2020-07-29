import React, { Component } from "react";
import CoachTable from "./CoachTable";
import { Grid, GridRow, GridColumn, Input } from "semantic-ui-react";
import InputSearch from "../../common/InputSearch";
import axios from "axios";
import "./Coach.css";

import ModalAddCoach from "./ModalAddCoach";
import ModalAdded from "../../common/Modals/ModalAdded";
import { search } from "superagent";

class Coach extends Component {
  state = {
    show: false,
    showAdd: false,
    coaches: [],
    name: "",
    searchString: "",
    searchOk: false,
  };

  constructor(props) {
    super(props);
    this.childTable = React.createRef();
  }

  nameHandle = (nameReceived) => {
    this.setState({ name: nameReceived });
  };

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

  searchStringHandler = (e) => {
    this.setState({ searchString: e.target.value });
  };

  searchHandler = () => {
    this.setState({ searchOk: true });
  };

  handlerCoachesChild = () => {
    this.childTable.current.coachesHandler();
  };

  render() {
    return (
      <div className="coach-main-page">
        <h2 className="page-title-coach">Coaches</h2>
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
            <GridColumn floated="right" align="right" computer="8" tablet="8">
              <button className="button" onClick={this.showModal}>
                Add new
              </button>
            </GridColumn>
          </GridRow>
        </Grid>
        <ModalAddCoach
          showModal={this.state.show}
          hideModal={this.hideModal}
          hideAddConfirm={this.hideAddConfirm}
          coachesHandler={this.handlerCoachesChild}
          name={"Add Coach"}
          action={"Add"}
          editForm={false}
          object={[]}
          nameSet={this.nameHandle}
        />
        <ModalAdded
          hideAddConfirm={this.state.showAdd}
          hideModal={this.hideModal}
          name={"Coach added"}
          description={"Coach " + this.state.name + " was added"}
        />
        <div className="table-coach">
          <CoachTable
            ref={this.childTable}
            searchString={this.state.searchString}
            searchPressed={this.state.searchOk}
          />
        </div>
      </div>
    );
  }
}

export default Coach;
