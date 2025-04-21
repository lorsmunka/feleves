import { Component } from "../Component.js";

export class Button extends Component {
  constructor(props) {
    super({ tag: "button", ...props });

    const { onClick } = props;
    this.onClick = onClick;
  }

  render() {
    this.element.onclick = (event) => {
      if (this.onClick) {
        this.onClick(event);
      }
    };

    super.render();
    return this.element;
  }
}
