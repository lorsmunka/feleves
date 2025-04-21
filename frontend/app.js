import { BudgetReact } from "./library/BudgetReact.js";
import { H1 } from "./library/Components/H1.js";
import { DataService } from "./DataService.js";
import { WeatherApp } from "./Components/WeatherApp.js";

const budgetReact = new BudgetReact({
  rootId: "root",
  children: [
    new WeatherApp({
      children: [
        new H1({
          children: [`${DataService.getPersonalizedGreeting()}, Here's Your Weather Forecast`],
        }),
      ],
    }),
  ],
});

budgetReact.render();
