import { Component } from "../library/Component.js";
import { Div } from "../library/Components/Div.js";
import { Span } from "../library/Components/Span.js";
import { EmojiIcon } from "./EmojiIcon.js";

export function getWeatherEmoji(condition) {
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

export function getTemperatureClass(temp) {
  if (temp < 0) {
    return "text-temp-cold";
  } else if (temp < 15) {
    return "text-temp-cool";
  } else if (temp < 25) {
    return "text-temp-warm";
  } else {
    return "text-temp-hot";
  }
}

export function getBackgroundGradient(condition) {
  const gradientMap = {
    Sunny: "bg-sunny",
    Cloudy: "bg-cloudy",
    Rainy: "bg-rainy",
    Snowy: "bg-snowy",
    Windy: "bg-windy",
    Stormy: "bg-stormy",
    Foggy: "bg-foggy",
  };

  return gradientMap[condition] || "bg-default";
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
    const condition = this.weatherData.condition;
    const bgClass = getBackgroundGradient(condition);

    const dayContainer = new Div({
      className: `card glassmorphic ${bgClass} rounded-4 p-4 text-center h-100 weather-card-hover transition`,
      children: [
        new Div({
          className: "card-header-transparent border-0 pt-2 pb-3",
          children: [
            new Div({
              className: "day-label fw-bold text-contrast",
              children: [this.weatherData.day],
            }),
          ],
        }),
        new Div({
          className: "card-body d-flex flex-column justify-content-center py-2",
          children: [
            new EmojiIcon({
              emoji: getWeatherEmoji(condition),
              className: "weather-icon fs-1 mb-3 d-block",
            }),
            new Div({
              className: `temperature-display ${getTemperatureClass(this.weatherData.temperature)} fs-2 fw-bold mb-1`,
              children: [`${this.weatherData.temperature}°C`],
            }),
            new Span({
              className: "condition-text text-contrast fs-6",
              children: [condition],
            }),
          ],
        }),
        new Div({
          className: "card-footer-transparent border-0 mt-2 pt-0 pb-1",
          children: [
            new Div({
              className: "humidity-wind text-contrast-secondary small",
              children: [`${this.weatherData.humidity || "40%"} · ${this.weatherData.wind || "5 km/h"}`],
            }),
          ],
        }),
      ],
    });

    this.element.innerHTML = "";
    this.element.appendChild(dayContainer.render());

    return this.element;
  }
}
