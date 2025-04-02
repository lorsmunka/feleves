import { Component } from "../Component.js";

export class H3 extends Component {
  constructor(props) {
    super(props);
    this.className = props.className || "text-center mb-4";
  }

  render() {
    return `<h3 class="${this.className}">${this.renderChildren()}</h3>`;
  }
}
