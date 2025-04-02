import { Component } from "../Component.js";

export class Div extends Component {
  constructor(props) {
    super(props);
    this.className = props.className || "";
  }

  render() {
    return `<div class="${this.className}">${this.renderChildren()}</div>`;
  }
}
