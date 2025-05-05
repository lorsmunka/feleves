import { Component } from "../Component.js";

export class Div extends Component {
  constructor(props) {
    super({ tag: "div", ...props });
    this.className = props.className || "";
  }

  render() {
    this.element.className = this.className;
    super.render();
    return this.element;
  }
}
