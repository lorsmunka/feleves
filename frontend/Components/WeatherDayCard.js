import { Component } from "../library/Component.js";
import { Div } from "../library/Components/Div.js";
import { H1 } from "../library/Components/H1.js";
import { Span } from "../library/Components/Span.js";
import { EmojiIcon } from "./EmojiIcon.js";

const conditionEmojis = {
  Sunny: "☀️",
  Cloudy: "☁️",
  Rainy: "🌧️",
  Windy: "💨",
};

export class WeatherDayCard extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    const { day, temperature, condition } = this.data;
    return new Div({
      className: "card weather-day-card shadow-sm border-0",
      children: [
        new Div({
          className: "card-body text-center py-4",
          children: [
            new H1({
              className: "weather-day-card-title card-title h5 fw-light mb-3 text-uppercase",
              children: [day.substring(0, 3)],
            }).render(),
            new Div({
              className: "weather-day-card-icon my-3",
              children: [new EmojiIcon({ emoji: conditionEmojis[condition] || "❓", size: "lg" }).render()],
            }).render(),
            new Span({
              className: "weather-day-card-temperature d-block fw-bold fs-2 mb-2",
              children: [`${temperature}°`],
            }).render(),
            new Span({
              className: "weather-day-card-condition text-secondary fs-6",
              children: [condition],
            }).render(),
          ],
        }).render(),
      ],
    }).render();
  }
}
