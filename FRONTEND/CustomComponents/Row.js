import { Component } from "../BudgetReact/Component.js";

export class Row extends Component {
  constructor(props) {
    super(props);
    this.columns = props.columns || ""; // e.g. "row-cols-1 row-cols-md-3"
    this.gap = props.gap || ""; // e.g. "g-3"
    this.className = `row ${this.columns} ${this.gap} ${props.className || ""}`;
  }

  render() {
    return super.render();
  }
}
