import { Component } from "../library/Component.js";
import { Div } from "../library/Components/Div.js";
import { EmojiIcon } from "./EmojiIcon.js";
import { CardContainer } from "./CardContainer.js";
import { CardBody } from "./CardBody.js";
import { Row } from "./Row.js";
import { Column } from "./Column.js";
import { getWeatherEmoji, getTemperatureClass } from "../WeatherDayCard.js";

export class WeatherDetail extends Component {
  constructor(props) {
    super(props);
    this.weatherData = props.weatherData || {};
    this.className = props.className || "";
    this.element.className = this.className;
  }

  createMetricCard(label, value, unit = "") {
    return new CardContainer({
      className: "h-100",
      children: [
        new CardBody({
          className: "text-center",
          children: [
            new Div({
              className: "text-muted mb-1",
              children: [label],
            }),
            new Div({
              className: "fs-4",
              children: [`${value}${unit}`],
            }),
          ],
        }),
      ],
    });
  }

  render() {
    const weatherInfoCol = new Column({
      size: "col-md-4",
      className: "text-center mb-3 mb-md-0",
      children: [
        new Div({
          className: "fs-1 fw-bold",
          children: [this.weatherData.day],
        }),
        new EmojiIcon({
          emoji: getWeatherEmoji(),
          className: "fs-1 my-3",
        }),
        new Div({
          className: `${getTemperatureClass()} fs-1 fw-bold`,
          children: [`${this.weatherData.temperature}°C`],
        }),
        new Div({
          className: "fs-5 text-muted",
          children: [this.weatherData.condition],
        }),
      ],
    });

    const metricsGrid = new Column({
      size: "col-md-8",
      children: [
        new Row({
          columns: "row-cols-2",
          gap: "g-3",
          children: [
            new Column({
              children: [this.createMetricCard("Wind Speed", this.weatherData.windSpeed, " km/h")],
            }),
            new Column({
              children: [this.createMetricCard("Humidity", this.weatherData.humidity, "%")],
            }),
            new Column({
              children: [this.createMetricCard("UV Index", this.weatherData.uvIndex)],
            }),
            new Column({
              children: [this.createMetricCard("Precipitation", this.weatherData.precipitation, "%")],
            }),
          ],
        }),
      ],
    });

    const detailCard = new CardContainer({
      children: [
        new CardBody({
          children: [
            new Row({
              className: "align-items-center",
              children: [weatherInfoCol, metricsGrid],
            }),
          ],
        }),
      ],
    });

    this.element.innerHTML = "";
    this.element.appendChild(detailCard.render());

    return this.element;
  }
}
