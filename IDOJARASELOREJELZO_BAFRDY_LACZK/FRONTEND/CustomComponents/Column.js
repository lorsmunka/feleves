import { Component } from "../BudgetReact/Component.js";

export class Column extends Component {
  constructor(props) {
    super(props);
    this.size = props.size || ""; // e.g. "col-md-6"
    this.className = `col ${this.size} ${props.className || ""}`;
  }

  render() {
    return super.render();
  }
}
