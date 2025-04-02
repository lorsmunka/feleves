import { Component } from "../Component.js";

export class Span extends Component {
  constructor(props) {
    super(props);
    this.className = props.className || "";
  }

  render() {
    return `<span class="${this.className}">${this.renderChildren()}</span>`;
  }
}
