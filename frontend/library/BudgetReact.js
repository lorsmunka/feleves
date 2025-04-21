import { Component } from "./Component.js";

export class BudgetReact extends Component {
  constructor(props) {
    super({ tag: "div", ...props });

    const { rootId } = props;
    this.rootId = rootId;
  }

  render() {
    const root = document.getElementById(this.rootId);

    if (!root) {
      throw new Error(`Root element with id ${this.rootId} not found`);
    }

    this.renderChildren();
    root.appendChild(this.element);
  }
}
