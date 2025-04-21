export class Component {
  constructor(props) {
    const { tag = "div", children } = props;
    this.element = document.createElement(tag);

    this.children = children || [];
  }

  renderChildren() {
    if (this.children.length === 0) {
      return;
    }

    this.children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        this.element.appendChild(textNode);
      } else if (child instanceof Component) {
        this.element.appendChild(child.render());
      }
    });
  }

  render() {
    this.renderChildren();
    return this.element;
  }
}
