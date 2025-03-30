import { BudgetReact } from "./library/BudgetReact.js";
import { Button } from "./library/Components/Button.js";
import { H1 } from "./library/Components/H1.js";

const testFunction = () => {
  console.log("hi");
};

const budgetReact = new BudgetReact({
  rootId: "root",
  children: [new H1({ children: ["Hello World"] }), new Button({ children: ["Click Me"], onClick: testFunction })],
});
budgetReact.render();
