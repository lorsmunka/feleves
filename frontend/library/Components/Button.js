import { Component } from "../Component.js";

export class Button extends Component {
  constructor(props) {
    super(props);

    const { onClick } = props;
    this.onClick = onClick;
  }

  render() {
    const onClickString = `(${this.onClick})()`.replace(/"/g, "'");
    return `<button onclick="${onClickString}" class="btn btn-primary"> ${this.renderChildren()}</button>`;
  }
}
