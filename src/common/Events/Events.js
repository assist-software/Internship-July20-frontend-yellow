import React, { Component } from "react";
import EventsComponent from "./EventsComponent/EventsComponent";
import "./Events.css";
import InputSearch from "../InputSearch";
import { Pagination, Icon } from "semantic-ui-react";
import ModalEvents from "./ModalEvents";
import ModalAdded from "../Modals/ModalAdded";
import ModalDeleted from "../Modals/ModalDeleted";
import axios from "axios";
import { Link } from "react-router-dom";
import SelectedEvents from "./SelectedEvents/SelectedEvents";

class Events extends Component {
  state = {
    membersClicked: false,
    show: false,
    showDelete: false,
    showAdd: false,
    events: [],
    ongoingevents: false,
    page: 1,
    searchterm: "",
    currentTime: new Date().toLocaleString,
  };
  handleChangeInput = (event) => {
    this.setState({ searchterm: event.target.value });
  };
  handleonGoingButton = () => {
    this.setState({ ongoing: true });
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

  handleOpenModal = () => {
    this.setState({ show: true });
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    let url = "http://34.65.176.55:8081/api/event/all/events/";
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      this.setState({ events: response.data });
    });
  }

  render() {
    let SearchEvents = this.state.events.filter((event) => {
      if (event.title)
        return (
          event.title
            .toLowerCase()
            .indexOf(this.state.searchterm.toLowerCase()) !== -1
        );
    });

    return (
      <div className="ContentArea">
        <div className="content-area">
          <h2>Events</h2>
          <div className="grid-events">
            <input
              className="input-events-new"
              placeholder="Input placeholder"
              Icon="search"
              value={this.state.searchTerm}
              onChange={this.handleChangeInput.bind(this)}
            />
            <button className="but-new" onClick={this.handleOpenModal}>
              ADD NEW
            </button>
          </div>
          <div className="buttons-events">
            <button className="but" onClick={this.handleonGoingButton}>
              Ongoing
            </button>
            <button className="but">Future</button>
            <button className="but">Past</button>
          </div>
        </div>

        <ModalEvents
          NameModalEvents="Add Event"
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
          name={"Event Added"}
          description={"Athlete {this.name} was added on {this.clubName}"}
        />

        <div className="events-component">
          {SearchEvents &&
            this.state.events.map((event, index) => (
              <Link
                to={{
                  pathname: `/event/${event.id}`,
                  state: { eventid: event },
                }}
                className="style-card-events-link"
              >
                <EventsComponent
                  cardId={index}
                  title={event.title}
                  body={event.body}
                  time={event.time}
                  date={event.date}
                  location={event.location}
                  img2={"data:image/png;base64," + event.img}
                />
              </Link>
            ))}
        </div>
        <div className="pagination-events">
          <Pagination
            defaultActivePage={1}
            totalPages={10}
            onPageChange={this.setNumPage}
            activePage={this.state.page}
          />
        </div>
      </div>
    );
  }
}
export default Events;
