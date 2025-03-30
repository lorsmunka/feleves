import { Component } from "../Component.js";

export class H1 extends Component {
  render() {
    return `<h1>${this.renderChildren()}</h1>`;
  }
}
