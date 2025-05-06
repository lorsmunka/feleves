import { Component } from "../BudgetReact/Component.js";
import { Div } from "../BudgetReact/Components/Div.js";
import { Span } from "../BudgetReact/Components/Span.js";
import { EmojiIcon } from "./EmojiIcon.js";
import { CardContainer } from "./CardContainer.js";
import { CardBody } from "./CardBody.js";
import { Row } from "./Row.js";
import { Column } from "./Column.js";
import { getWeatherEmoji, getTemperatureClass, getBackgroundGradient } from "./WeatherDayCard.js";
import { Hr } from "../BudgetReact/Components/Hr.js";

export class WeatherDetail extends Component {
  constructor(props) {
    super(props);
    this.weatherData = props.weatherData || {};
    this.className = props.className || "";
    this.element.className = `${this.className} weather-detail`;
  }

  createMetricCard(label, value, unit = "", icon = null) {
    return new CardContainer({
      className: "h-100 metric-card glassmorphic high-contrast-card rounded-4 border-0",
      children: [
        new CardBody({
          className: "text-center p-3 p-sm-3",
          children: [
            icon
              ? new Div({
                  className: "metric-icon mb-1 mb-sm-2",
                  children: [icon],
                })
              : null,
            new Div({
              className: "fw-semibold mb-0 mb-sm-1 metric-label",
              children: [label],
            }),
            new Div({
              className: "fs-4 fs-sm-3 fw-bold metric-value",
              children: [`${value}${unit}`],
            }),
          ].filter(Boolean),
        }),
      ],
    });
  }

  getWeatherIcon(type) {
    const iconMap = {
      wind: "💨",
      humidity: "💧",
      uv: "☀️",
      precipitation: "🌧️",
      pressure: "🌡️",
    };

    return new EmojiIcon({
      emoji: iconMap[type] || "📊",
      className: "d-block",
    });
  }

  render() {
    const condition = this.weatherData.condition;
    const bgClass = getBackgroundGradient(condition);

    const weatherInfoCol = new Column({
      size: "col-12 col-lg-4",
      className: "text-center mb-4 mb-lg-0",
      children: [
        new CardContainer({
          className: `glassmorphic ${bgClass} main-weather-card rounded-4 border-0`,
          children: [
            new CardBody({
              className: "d-flex flex-column justify-content-center py-3 py-md-4",
              children: [
                new Div({
                  className: "fs-3 fs-md-2 fw-bold text-contrast mb-0 mb-md-1",
                  children: [this.weatherData.day],
                }),
                new Div({
                  className: "mb-1 mb-md-2 text-contrast-secondary",
                  children: [
                    new Span({
                      children: [new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })],
                    }),
                  ],
                }),
                new EmojiIcon({
                  emoji: getWeatherEmoji(condition),
                  className: "fs-1 my-2 my-md-4 weather-detail-icon",
                }),
                new Div({
                  className: `${getTemperatureClass(this.weatherData.temperature)} fs-1 fw-bold mb-1 mb-md-2`,
                  children: [`${this.weatherData.temperature}°C`],
                }),
                new Div({
                  className: "fs-5 text-contrast mb-2 mb-md-3",
                  children: [condition],
                }),
                new Div({
                  className: "detail-divider my-1 my-md-2 mx-auto",
                }),
                new Div({
                  className: "d-flex justify-content-around text-contrast-secondary mt-2 mt-md-3",
                  children: [
                    new Div({
                      className: "text-center",
                      children: [
                        new Div({ className: "small", children: ["Feels like"] }),
                        new Div({
                          className: "fw-semibold",
                          children: [`${this.weatherData.temperature - 1}°C`],
                        }),
                      ],
                    }),
                    new Div({
                      className: "text-center",
                      children: [
                        new Div({ className: "small", children: ["High/Low"] }),
                        new Div({
                          className: "fw-semibold",
                          children: [`${this.weatherData.temperature + 2}°/${this.weatherData.temperature - 3}°`],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });

    const metricsGrid = new Column({
      size: "col-12 col-lg-8",
      children: [
        new Row({
          columns: "row-cols-2 row-cols-md-3",
          gap: "g-3",
          children: [
            new Column({
              children: [this.createMetricCard("Wind", this.weatherData.windSpeed, " km/h", this.getWeatherIcon("wind"))],
            }),
            new Column({
              children: [this.createMetricCard("Humidity", this.weatherData.humidity, "%", this.getWeatherIcon("humidity"))],
            }),
            new Column({
              children: [this.createMetricCard("UV Index", this.weatherData.uvIndex, "", this.getWeatherIcon("uv"))],
            }),
            new Column({
              children: [
                this.createMetricCard("Rain", this.weatherData.precipitation, "%", this.getWeatherIcon("precipitation")),
              ],
            }),
            new Column({
              children: [this.createMetricCard("Pressure", this.weatherData.pressure, " hPa", this.getWeatherIcon("pressure"))],
            }),
            new Column({
              className: "d-flex align-items-stretch",
              children: [
                new CardContainer({
                  className: "h-100 w-100 glassmorphic forecast-summary-card rounded-4 border-0",
                  children: [
                    new CardBody({
                      className: "d-flex flex-column justify-content-center align-items-center p-3",
                      children: [
                        new Div({
                          className: "forecast-badge mb-1 mb-md-2",
                          children: ["Forecast"],
                        }),
                        new Div({
                          className: "forecast-summary-text",
                          children: [
                            condition === "Stormy"
                              ? "Expect stormy conditions with strong winds."
                              : `Expect ${condition.toLowerCase()} conditions today.`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });

    const detailCard = new CardContainer({
      className: "border-0 bg-transparent",
      children: [
        new CardBody({
          className: "p-0",
          children: [
            new Row({
              className: "g-3 g-md-4",
              children: [weatherInfoCol, metricsGrid],
            }),
          ],
        }),
        new Hr({}),
      ],
    });

    this.element.innerHTML = "";
    this.element.appendChild(detailCard.render());

    return this.element;
  }
}
