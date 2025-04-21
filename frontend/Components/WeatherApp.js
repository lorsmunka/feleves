import { DataService } from "../DataService.js";
import { Component } from "../library/Component.js";

export class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.onMount = async () => {
      const weatherData = await DataService.getWeatherData();
      this.setState({
        weatherData,
      });
    };
  }

  render() {
    const { weatherData } = this.state;

    if (weatherData) {
      const weatherList = weatherData.map((weather) => {
        return new Component({
          tag: "div",
          children: [
            new Component({
              tag: "p",
              children: [`Date: ${weather.date}`],
            }),
            new Component({
              tag: "p",
              children: [`Temperature: ${weather.temperature}°C`],
            }),
            new Component({
              tag: "p",
              children: [`Condition: ${weather.condition}`],
            }),
          ],
        });
      });

      this.children = weatherList;
    }

    return super.render();
  }
}
