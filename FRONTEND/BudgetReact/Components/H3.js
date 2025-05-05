import { Component } from "../Component.js";

export class H3 extends Component {
  constructor(props) {
    super({ tag: "h3", ...props });
    this.className = props.className || "text-center mb-4";
  }

  render() {
    this.element.className = this.className;
    super.render();
    return this.element;
  }
}
