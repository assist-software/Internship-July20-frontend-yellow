import React, { Component } from "react";
import EventsComponent from "./EventsComponent/EventsComponent";
import "./Events.css";
import { Pagination, Input } from "semantic-ui-react";
import ModalEvents from "./ModalEvents";
import ModalAdded from "../Modals/ModalAdded";
import ModalDeleted from "../Modals/ModalDeleted";
import axios from "axios";
import { Link } from "react-router-dom";

class Events extends Component {
  state = {
    membersClicked: false,
    show: false,
    showDelete: false,
    showAdd: false,
    events: [],
    ongoingevents: false,
    numberpages: 0,
    page: 1,
    search: "",
    time: 1,
    EventAdded: "",
    InClub: "",
  };

  EventIsAdded = (response) => {
    this.setState({ EventAdded: response });
  };
  AddedInClub = (response) => {
    this.setState({ InClub: response });
  };
  handleonGoingButton = () => {
    this.setState({ ongoing: true });
  };
  showModal = () => {
    this.setState({ show: true });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.search !== this.state.search) {
  //     this.setState({ search: prevProps.search });

  //     let url = `http://192.168.100.228:8001/api/event/all/events/?page=1&search=${this.state.search}&time=${this.state.time}&limit=10/`;
  //     const token = localStorage.getItem("token");
  //     axios.get(url, { headers: { Authorization: token } }).then((response) => {
  //       this.setState({ events: response.data.events });
  //       this.setState({ numberpages: response.data.page_number });
  //     });
  //   }
  // }
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
  presshandleOngoing = () => {
    this.setState({ time: 1 });

    let url = `http://34.65.176.55:8081/api/event/all/events/?page=1&search=${this.state.search}&time=${this.state.time}&limit=10/`;
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      this.setState({ events: response.data.events });
      this.setState({ numberpages: response.data.page_number });
    });
  };
  presshandlePast = () => {
    console.log(this.state.time, "bb");
    this.setState({ time: 3 });
    console.log(this.state.time, "aa");
    let url = `http://34.65.176.55:8081/api/event/all/events/?page=1&search=${this.state.search}&time=${this.state.time}&limit=10/`;
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      this.setState({ events: response.data.events });
      this.setState({ numberpages: response.data.page_number });
    });
  };
  presshandleFuture = () => {
    this.setState({ time: 2 });

    let url = `http://34.65.176.55:8081/api/event/all/events/?page=1&search=${this.state.search}&time=${this.state.time}&limit=10/`;
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      this.setState({ events: response.data.events });
      this.setState({ numberpages: response.data.page_number });
    });
  };
  componentDidMount() {
    let url = `http://34.65.176.55:8081/api/event/all/events/?page=1&search=${this.state.search}&time=${this.state.time}&limit=10/`;
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      this.setState({ events: response.data.events });
      this.setState({ numberpages: response.data.page_number });
    });
  }

  setNumPage = (event, { activePage }) => {
    this.setState({ page: activePage });
    let url = `http://34.65.176.55:8081/api/event/all/events/?page=${activePage}&time=${this.state.time}&limit=10/`;
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.setState({ events: response.data.events });
        this.setState({ numberpages: response.data.page_number });
      });
  };
  hadleInput = (date) => {
    this.setState({ search: date.target.value });
    let url = `http://34.65.176.55:8081/api/event/all/events/?page=1&search=${this.state.search}&time=${this.state.time}&limit=10/`;
    const token = localStorage.getItem("token");
    axios.get(url, { headers: { Authorization: token } }).then((response) => {
      this.setState({ events: response.data.events });
      this.setState({ numberpages: response.data.page_number });
    });
  };
  render() {
    return (
      <div className="ContentArea">
        <div className="content-area">
          <h2>Events</h2>
          <div className="grid-events">
            <Input
              iconPosition="left"
              className="search-bar-events"
              icon={{
                name: "search",
                link: true,
              }}
              onChange={this.hadleInput}
              placeholder="Search..."
            />
            <button className="but-new" onClick={this.handleOpenModal}>
              ADD NEW
            </button>
          </div>
          <div className="buttons-events">
            <button className="but" active onClick={this.presshandleOngoing}>
              Ongoing
            </button>
            <button className="but" onClick={this.presshandleFuture}>
              Future
            </button>
            <button className="but" onClick={this.presshandlePast}>
              Past
            </button>
          </div>
        </div>

        <ModalEvents
          NameModalEvents="Add Event"
          handleOpenModal={this.state.show}
          handleCloseModal={this.handleCloseModal}
          showModal={this.state.show}
          hideModal={this.hideModal}
          hideAddConfirm={this.hideAddConfirm}
          EventAdded={this.EventIsAdded}
          InClub={this.AddedInClub}
        />

        <ModalDeleted
          hideAddConfirm={this.state.showDelete}
          hideModal={this.hideModal}
        />
        <ModalAdded
          hideAddConfirm={this.state.showAdd}
          hideModal={this.hideModal}
          name={"Event Added"}
          description={`Athlete  "${this.state.EventAdded}" was added on "${this.state.InClub}"`}
        />

        <div className="events-component">
          {this.state.events &&
            this.state.events.map((event, index) => (
              <Link
                to={{
                  pathname: `/event/detail/${event.id}`,
                  state: { eventid: event.id },
                }}
                className="style-card-events-link"
              >
                <EventsComponent
                  cardId={event.id}
                  title={event.name}
                  body={event.description}
                  time={event.time}
                  date={event.date}
                  location={event.location}
                />
              </Link>
            ))}
        </div>
        <div className="pagination-events">
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
export default Events;
