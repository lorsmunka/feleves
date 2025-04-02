import { Component } from "../library/Component.js";
import { WeatherDay } from "./WeatherDay.js";

export class WeatherWeek extends Component {
  constructor(props = {}) {
    super(props);
    const { weatherData = [] } = props;
    this.weatherData = weatherData;
  }

  render() {
    const daysHTML = this.weatherData
      .map((day) => {
        const dayComponent = new WeatherDay({
          date: day.date,
          temperature: day.temperature,
          weatherType: day.weatherType,
          windSpeed: day.windSpeed,
        });
        return `<div class="col">${dayComponent.render()}</div>`;
      })
      .join("");

    return `
      <div class="container-fluid">
        <div class="row row-cols-7 justify-content-center gx-1" style="width: 80%; margin: 0 auto;">
          ${daysHTML}
        </div>
      </div>
    `;
  }
}
