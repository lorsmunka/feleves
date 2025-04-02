import { Component } from "../library/Component.js";

export class WeatherDay extends Component {
  constructor(props = {}) {
    super(props);
    const { date = new Date(), temperature = 20, weatherType = "sunny", windSpeed = 10 } = props;

    this.date = date;
    this.temperature = temperature;
    this.weatherType = weatherType;
    this.windSpeed = windSpeed;
  }

  getWeatherIcon() {
    const icons = {
      sunny: "☀️",
      cloudy: "☁️",
      rainy: "🌧️",
      snowy: "❄️",
    };
    return icons[this.weatherType] || "☀️";
  }

  formatDay() {
    return this.date.toLocaleDateString("hu-HU", {
      weekday: "short",
    });
  }

  render() {
    return `
      <div class="card text-center border-0">
        <div class="card-body p-2">
          <h6 class="card-title">${this.formatDay()}</h6>
          <div class="fs-3 my-2">${this.getWeatherIcon()}</div>
          <div class="fw-bold">${this.temperature}°C</div>
          <small class="text-muted">${this.windSpeed} km/h</small>
        </div>
      </div>
    `;
  }
}
