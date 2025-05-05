import { Component } from "../Component.js";

export class Span extends Component {
  constructor(props) {
    super({ tag: "span", ...props });
    this.className = props.className || "";
  }

  render() {
    this.element.className = this.className;
    super.render();
    return this.element;
  }
}
