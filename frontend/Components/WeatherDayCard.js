import { Component } from "../library/Component.js";
import { Div } from "../library/Components/Div.js";
import { Span } from "../library/Components/Span.js";
import { EmojiIcon } from "./EmojiIcon.js";

export function getWeatherEmoji() {
  const condition = this.weatherData.condition;
  const emojiMap = {
    Sunny: "☀️",
    Cloudy: "☁️",
    Rainy: "🌧️",
    Snowy: "❄️",
    Windy: "💨",
    Stormy: "⛈️",
    Foggy: "🌫️",
  };

  return emojiMap[condition] || "🌤️";
}

export function getTemperatureColor() {
  const temp = this.weatherData.temperature;

  if (temp < 0) {
    return "text-primary";
  } else if (temp < 15) {
    return "text-info";
  } else if (temp < 25) {
    return "text-success";
  } else {
    return "text-danger";
  }
}

export class WeatherDayCard extends Component {
  constructor(props) {
    super(props);
    this.weatherData = props.weatherData || {};
    this.onSelectDay = props.onSelectDay || null;

    this.element.className = "weather-day-card";
    this.element.style.cursor = "pointer";

    if (this.onSelectDay) {
      this.element.addEventListener("click", () => {
        this.onSelectDay(this.weatherData);
      });
    }
  }

  render() {
    const dayContainer = new Div({
      className: "card shadow-sm rounded-lg p-3 text-center h-100",
      children: [
        new Div({
          className: "mb-2 fw-bold",
          children: [this.weatherData.day],
        }),
        new EmojiIcon({
          emoji: getWeatherEmoji(),
          className: "fs-1 mb-2 d-block",
        }),
        new Div({
          className: `${getTemperatureColor()} fs-4 fw-bold`,
          children: [`${this.weatherData.temperature}°C`],
        }),
        new Span({
          className: "text-muted",
          children: [this.weatherData.condition],
        }),
      ],
    });

    this.element.innerHTML = "";
    this.element.appendChild(dayContainer.render());

    return this.element;
  }
}
