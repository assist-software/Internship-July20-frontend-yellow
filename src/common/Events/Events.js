import React, { Component } from "react";
import EventsComponent from "./EventsComponent/EventsComponent";
import "./Events.css";
import Button from "../Button";
import InputSearch from "../InputSearch";
import { Grid, GridColumn, GridRow, Pagination, Icon } from "semantic-ui-react";
import ModalEvents from "./ModalEvents";

class Events extends Component {
  state = { show: false };

  handleOpenModal = () => {
    this.setState({ show: true });
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="ContentArea">
        <h2>Events</h2>
        <div className="grid-events">
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
        <ModalEvents
          NameModalEvents="Add Event"
          handleOpenModal={this.state.show}
          handleCloseModal={this.handleCloseModal}
        />
        <div className="buttons-events">
          <button className="but">Ongoing</button>
          <button className="but">Future</button>
          <button className="but">Past</button>
        </div>
        <div className="events-component">
          <EventsComponent />
          <EventsComponent />
          <EventsComponent />
          <EventsComponent />
          <EventsComponent />
          <EventsComponent />
        </div>
        <div className="pagination-events">
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
export default Events;
