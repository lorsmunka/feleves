import { Component } from "../library/Component.js";
import { WeatherDayCard } from "./WeatherDayCard.js";
import { Row } from "./Row.js";
import { Column } from "./Column.js";

export class WeatherWeek extends Component {
  constructor(props) {
    super(props);
    this.weatherData = props.weatherData || [];
    this.onDaySelect = props.onDaySelect || null;

    this.element.className = "weather-week overflow-auto";
  }

  render() {
    const dayCards = [];

    this.weatherData.forEach((dayData) => {
      dayCards.push(
        new Column({
          children: [
            new WeatherDayCard({
              weatherData: dayData,
              onSelectDay: this.onDaySelect,
            }),
          ],
        })
      );
    });

    const weatherRow = new Row({
      columns: "row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5",
      gap: "g-3",
      children: dayCards,
    });

    this.element.innerHTML = "";
    this.element.appendChild(weatherRow.render());

    return this.element;
  }
}
