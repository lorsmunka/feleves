import { Component } from "../Component.js";

export class Button extends Component {
  constructor(props) {
    super({ tag: "button", ...props });

    const { onClick } = props;
    this.onClick = onClick;
  }

  render() {
    const onClickString = `(${this.onClick})()`.replace(/"/g, "'");
    this.element.setAttribute("onclick", onClickString);
  }
}
