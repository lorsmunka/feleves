import { Component } from "../library/Component.js";

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.element.className = "container mt-4";
  }

  render() {
    return super.render();
  }
}
