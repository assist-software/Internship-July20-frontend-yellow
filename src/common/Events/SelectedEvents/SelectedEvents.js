import React, { Component } from "react";
import ImageEvent from "./Rectangle30.png";
import "./SelectedEvents.css";
import ModalEvents from "../ModalEvents";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Image, Icon, Card, Checkbox } from "semantic-ui-react";
import ShowPersonEvent from "./ShowPersonEvent/ShowPersonEvent";

class SelectedEvents extends Component {
  state = {
    barChartData: {
      labels: ["Africa", "Asia", "Europe"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [2478, 5267, 734, 784, 433],
        },
      ],
    },
  };
  state = {
    show: false,
    displaycheck: false,
    eventselected: [],
  };

  handleOpenModal = () => {
    this.setState({ show: true });
  };

  passData = () => {
    return this.props.location.state;
  };

  handleCloseModal = () => {
    this.setState({ show: false });
  };
  handleEditCard = () => {
    if (this.state.displaycheck === false) {
      this.setState({ displaycheck: true });
      this.setState({ buttonChange: "DONE" });
    } else {
      this.setState({ displaycheck: false });
      this.setState({ buttonChange: "Compare Performance" });
    }
  };

  componentDidMount() {
    let url = `http://192.168.100.228:8001/api/event/detail/${this.props.location.state.eventid}/`;
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log(response.data, "aaaaa");
        this.setState({ eventselected: response.data });
        const selectevent = this.state.eventselected[0];
        console.log(this.selectevent.name, "asfasfasfasf");
      });
  }
  render() {
    console.log(this.state.eventselected[0].name, "asfasfasfasf");
    return (
      console.log(this.selectevent, "asfasfasfasf"),
      (
        <div className="cards-event">
          <div className="page-top">
            <div className="label-event">
              <h3>{"Events > "}</h3>
              {/* <h4> {this.state.eventselected[0]}</h4> */}
            </div>
            <div className="div-event-button-edit">
              {/* <h2>{this.state.eventselected}</h2> */}
              <button
                className="event-button-edit"
                onClick={this.handleOpenModal}
              >
                EDIT
              </button>
            </div>
            <div className="event-bar">
              <Icon name="calendar alternate outline" />
              <p>{this.props.location.state.eventid}</p>

              <div className="time-event">
                <Icon name="clock outline" />
                <p>{this.props.location.state.eventid}</p>
              </div>
              <div className="location-event">
                <Icon name="location arrow " />
                <p>{this.props.location.state.eventid}</p>
              </div>
            </div>
          </div>
          <div className="card-event">
            <Card centered fluid>
              <Image src={ImageEvent} wrapped ui={false} />
              <Card.Content className="card-content-event">
                <div className="first-paragraph">
                  <h3>{this.props.location.state.eventid}</h3>
                  <p>
                    this.props.SecondParagraphsdvdbdbdvcsbfbdsybusybfubsdbcusbcusbdvgykusdvbusuidvbousivvbisudvbusdibvnsoubsdvinoduvidbohjnmklkjashugftgvbhnjmk,lsxhbdfvvghujikoijuhygtfrdesdrftgyhujikolxkoasjihucygdrtfyguh
                  </p>
                </div>
              </Card.Content>
            </Card>
          </div>

          <div className="athletes-bottom-page">
            <div className="cards-features">
              <h3>Participants ({this.props.CountNumberParticipantsEvent})</h3>

              <button
                className="event-button-compare"
                onClick={this.handleEditCard}
              >
                {this.state.displaycheck ? "Done" : "Compare Performance"}
              </button>
            </div>
            <div>
              {this.state.displaycheck ? (
                <p className="paragraph-select-athlete">
                  Select participants you want to compare
                </p>
              ) : null}
            </div>
            <div className="show-person-parent">
              <ShowPersonEvent checkboxdisplay={this.state.displaycheck} />
              <ShowPersonEvent checkboxdisplay={this.state.displaycheck} />
              <ShowPersonEvent checkboxdisplay={this.state.displaycheck} />
              <ShowPersonEvent checkboxdisplay={this.state.displaycheck} />
              <ShowPersonEvent checkboxdisplay={this.state.displaycheck} />
              <ShowPersonEvent checkboxdisplay={this.state.displaycheck} />
              <ShowPersonEvent checkboxdisplay={this.state.displaycheck} />
            </div>
            <div>
              {this.state.displaycheck ? (
                <div>
                  <p className="paragraph-metrics">
                    Select metrics you want to be compared
                  </p>
                  <div className="metrics">
                    <div className="metric">
                      <Checkbox className="select-metric" label="Heart rate" />
                    </div>
                    <div className="metric">
                      <Checkbox className="select-metric" label="Calories" />
                    </div>
                    <div className="metric">
                      <Checkbox className="select-metric" label="Av.speed" />
                    </div>
                    <div className="metric">
                      <Checkbox className="select-metric" label="Distance" />
                    </div>
                  </div>
                  <Bar
                    data={this.state.barChartData}
                    options={{
                      title: {
                        display: true,
                        text: "Graph",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                    width={400}
                    height={200}
                  />
                </div>
              ) : null}
            </div>
          </div>

          <ModalEvents
            NameModalEvents="Edit Event"
            handleOpenModal={this.state.show}
            handleCloseModal={this.handleCloseModal}
            IdEvent={this.props.location.state.eventid}
          />
        </div>
      )
    );
  }
}

export default SelectedEvents;
