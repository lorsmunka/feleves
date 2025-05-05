import { Component } from "../library/Component.js";

export class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.className = props.className || "";
    this.element.className = `card border ${this.className}`;
  }

  render() {
    return super.render();
  }
}
