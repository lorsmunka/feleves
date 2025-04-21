import { Component } from "../library/Component.js";

export class CardBody extends Component {
  constructor(props) {
    super(props);
    this.className = props.className || "";
    this.element.className = `card-body ${this.className}`;
  }

  render() {
    this.element.innerHTML = "";

    this.children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        this.element.appendChild(textNode);
      } else if (child instanceof Component) {
        this.element.appendChild(child.render());
      }
    });

    return this.element;
  }
}
