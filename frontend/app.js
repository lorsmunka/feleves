import { BudgetReact } from "./library/BudgetReact.js";
import { H1 } from "./library/Components/H1.js";
import { Button } from "./library/Components/Button.js";
import { DataService } from "./DataService.js";

const budgetReact = new BudgetReact({
  rootId: "root",
  children: [
    new H1({ children: [`${DataService.getPersonalizedGreeting()}, Here's Your Weather Forecast`] }),
    new Button({
      children: ["hello"],
      onClick: () => {
        console.log("hello");
      },
    }),
  ],
});

budgetReact.render();
