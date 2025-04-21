import { BudgetReact } from "./library/BudgetReact.js";
import { H1 } from "./library/Components/H1.js";
import { DataService } from "./DataService.js";
import { WeatherWeek } from "./Components/WeatherWeek.js";
import { DetailedWeatherDayCard } from "./Components/DetailedWeatherDayCard.js";

const budgetReact = new BudgetReact({
  rootId: "root",
  children: [new H1({ children: [`${DataService.getPersonalizedGreeting()}, Here's Your Weather Forecast`] })],
});

budgetReact.render();
