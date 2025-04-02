import { Component } from "../Component.js";

export class H1 extends Component {
  render() {
    return `<h1 class="text-center mb-4">${this.renderChildren()}</h1>`;
  }
}
