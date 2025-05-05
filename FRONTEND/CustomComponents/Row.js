import { Component } from "../BudgetReact/Component.js";

export class Row extends Component {
  constructor(props) {
    super(props);
    this.columns = props.columns || ""; // e.g. "row-cols-1 row-cols-md-3"
    this.gap = props.gap || ""; // e.g. "g-3"
    this.className = props.className || "";

    this.element.className = `row ${this.columns} ${this.gap} ${this.className}`;
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
