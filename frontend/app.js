import { BudgetReact } from "./library/BudgetReact.js";
import { H1 } from "./library/Components/H1.js";
import { DataService } from "./DataService.js";
import { Button } from "./library/Components/Button.js";

const budgetReact = new BudgetReact({
  rootId: "root",
  children: [
    new H1({
      children: [
        `${DataService.getPersonalizedGreeting()}, Here's Your Weather Forecast`,
        new Button({
          children: ["Refresh"],
          onClick: () => {
            console.log("Refresh button clicked");
          },
        }),
      ],
    }),
  ],
});

budgetReact.render();
