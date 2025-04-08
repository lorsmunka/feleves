import { Component } from "../library/Component.js";
import { Div } from "../library/Components/Div.js";
import { H2 } from "../library/Components/H2.js";
import { Span } from "../library/Components/Span.js";
import { EmojiIcon } from "./EmojiIcon.js";

const conditionEmojis = {
  Sunny: "☀️",
  Cloudy: "☁️",
  Rainy: "🌧️",
  Windy: "💨",
  Snowy: "❄️",
  Stormy: "⛈️",
  Foggy: "🌫️",
};

export class DetailedWeatherDayCard extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    const { day, temperature, condition, windSpeed, humidity, uvIndex, precipitation, pressure } = this.data;

    return new Div({
      className: "weather-day-detailed-card",
      children: [
        new Div({
          className: "weather-day-header",
          children: [
            new H2({ className: "weather-day-title", children: [day] }),
            new Div({
              className: "weather-day-icon",
              children: [new EmojiIcon({ emoji: conditionEmojis[condition] || "❓", size: "xl" })],
            }),
          ],
        }),
        new Div({
          className: "weather-day-main-info",
          children: [
            new Span({ className: "weather-day-temperature", children: [`${temperature}°`] }),
            new Span({ className: "weather-day-condition", children: [condition] }),
          ],
        }),
        new Div({
          className: "weather-day-details",
          children: [
            this.createDetailItem("Wind", `${windSpeed} km/h`, "Gentle breeze"),
            this.createDetailItem("Humidity", `${humidity}%`, this.getHumidityDescription(humidity)),
            this.createDetailItem("UV Index", uvIndex, this.getUVIndexDescription(uvIndex)),
            this.createDetailItem(
              "Precipitation",
              `${precipitation} mm`,
              this.getPrecipitationDescription(precipitation)
            ),
            this.createDetailItem("Pressure", `${pressure} hPa`, this.getPressureDescription(pressure)),
          ],
        }),
      ],
    }).render();
  }

  createDetailItem(label, value, description) {
    return new Div({
      className: "weather-day-detail-item",
      children: [
        new Span({ className: "weather-day-detail-label", children: [label] }),
        new Span({ className: "weather-day-detail-value", children: [value] }),
        new Span({ className: "weather-day-detail-description", children: [description] }),
      ],
    });
  }

  getHumidityDescription(humidity) {
    if (humidity < 30) return "Dry";
    if (humidity < 60) return "Comfortable";
    return "Humid";
  }

  getUVIndexDescription(uvIndex) {
    if (uvIndex <= 2) return "Low";
    if (uvIndex <= 5) return "Moderate";
    if (uvIndex <= 7) return "High";
    if (uvIndex <= 10) return "Very High";
    return "Extreme";
  }

  getPrecipitationDescription(precipitation) {
    if (precipitation === 0) return "No rain expected";
    if (precipitation < 2) return "Light showers possible";
    if (precipitation < 6) return "Moderate rain likely";
    return "Heavy rain expected";
  }

  getPressureDescription(pressure) {
    if (pressure < 1000) return "Low";
    if (pressure > 1020) return "High";
    return "Normal";
  }
}
