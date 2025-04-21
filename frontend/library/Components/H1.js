import { Component } from "../Component.js";

export class H1 extends Component {
  constructor(props) {
    super({ tag: "h1", ...props });
    this.className = props.className || "text-center mb-4";
  }

  render() {
    this.element.className = this.className;
    super.render();
    return this.element;
  }
}
