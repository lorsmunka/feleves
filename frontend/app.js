import { WeatherWeek } from "./Components/WeatherWeek.js";
import { BudgetReact } from "./library/BudgetReact.js";
import { H1 } from "./library/Components/H1.js";
import { getData, getCurrentGreeting } from "./data.js";
import { Button } from "./library/Components/Button.js";

const weekData1 = getData();
const weekData2 = getData();
const weekData3 = getData();

const budgetReact = new BudgetReact({
  rootId: "root",
  children: [
    new H1({ children: [`${getCurrentGreeting()}, Here's Your Weather Forecast`] }),
    new WeatherWeek({ weatherData: weekData1 }),
    new WeatherWeek({ weatherData: weekData2 }),
    new WeatherWeek({ weatherData: weekData3 }),
    new Button({
      children: ["hello"],
      onClick: () => {
        console.log("hello");
      },
    }),
  ],
});

budgetReact.render();
