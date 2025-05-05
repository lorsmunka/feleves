import { Component } from "../BudgetReact/Component.js";
import { Div } from "../BudgetReact/Components/Div.js";
import { WeatherWeek } from "./WeatherWeek.js";
import { WeatherDetail } from "./WeatherDetail.js";
import { DataService } from "../DataService.js";

export class WeatherApp extends Component {
  constructor(props) {
    super({
      ...props,
      state: {
        weatherData: [],
        selectedDay: null,
      },
      className: "weather-app mb-3 mt-3",
    });

    this.propsChildren = props.children || [];

    this.onMount = async () => {
      const weatherData = await DataService.getWeatherData();
      this.setState({
        weatherData,
        selectedDay: null,
      });
    };
  }

  handleDaySelect(dayData) {
    this.setState({
      ...this.state,
      selectedDay: dayData,
    });
  }

  render() {
    const { weatherData, selectedDay } = this.state;

    const appContainerChildren = [];

    if (weatherData && weatherData.length > 0) {
      if (selectedDay) {
        appContainerChildren.push(
          new WeatherDetail({
            weatherData: selectedDay,
            className: "mb-3 mt-3",
          })
        );
      }

      appContainerChildren.push(
        new WeatherWeek({
          weatherData: weatherData,
          onDaySelect: (dayData) => {
            if (this.state.selectedDay === dayData) {
              this.handleDaySelect(null);
            } else {
              this.handleDaySelect(dayData);
            }
          },
        })
      );
    }

    const appContainer = new Div({
      children: appContainerChildren,
      className: "container mt-2",
    });

    this.children = [...this.propsChildren, appContainer];

    return super.render();
  }
}
