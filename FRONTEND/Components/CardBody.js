import { Component } from "../BudgetReact/Component.js";

export class CardBody extends Component {
  constructor(props) {
    super(props);
    this.className = props.className || "";
    this.element.className = `card-body ${this.className}`;
  }

  render() {
    return super.render();
  }
}
