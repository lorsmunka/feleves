import { Component } from "./Component.js";

export class BudgetReact extends Component {
  constructor(props) {
    super(props);

    const { rootId } = props;
    this.rootId = rootId;
  }

  render() {
    const root = document.getElementById(this.rootId);
    if (!root) {
      throw new Error(`Root element with id ${this.rootId} not found`);
    }

    const childrenString = this.renderChildren();

    root.innerHTML = childrenString;
  }
}
