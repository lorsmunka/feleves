import { Component } from "../library/Component.js";

export class Column extends Component {
  constructor(props) {
    super(props);
    this.size = props.size || ""; // e.g. "col-md-6"
    this.className = props.className || "";

    this.element.className = `col ${this.size} ${this.className}`;
  }

  render() {
    return super.render();
  }
}
