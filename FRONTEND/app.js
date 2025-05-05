// JavaScript component
import { BudgetReact } from "./BudgetReact/BudgetReact.js";
import { H1 } from "./BudgetReact/Components/H1.js";
import { DataService } from "./DataService.js";
import { WeatherApp } from "./Components/WeatherApp.js";

const budgetReact = new BudgetReact({
  rootId: "root",
  children: [
    new WeatherApp({
      children: [
        new H1({
          children: [`${DataService.getPersonalizedGreeting()}, Here's Your Weather Forecast`],
          className: "weather-heading display-4 text-center",
        }),
      ],
    }),
  ],
});

budgetReact.render();
