import { Component } from "../library/Component.js";
import { Div } from "../library/Components/Div.js";
import { H2 } from "../library/Components/H2.js";
import { WeatherDayCard } from "./WeatherDayCard.js";

export class WeatherWeek extends Component {
  constructor(props) {
    super(props);
    this.week = props.week || [];
  }

  render() {
    return new Div({
      className: "weather-week-container p-4",
      children: [
        new H2({
          className: "weather-week-title text-center mb-4 fw-light",
          children: ["7-Day Forecast"],
        }),
        new Div({
          className: "weather-week-cards-container d-flex flex-nowrap overflow-auto pb-3",
          children: this.week.map((dayData) => {
            return new Div({
              className: "weather-day-wrapper mx-2",
              children: [new WeatherDayCard({ data: dayData })],
            });
          }),
        }),
      ],
    }).render();
  }
}
