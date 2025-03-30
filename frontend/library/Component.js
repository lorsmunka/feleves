export class Component {
  constructor(props) {
    const { children } = props;
    this.children = children || [];
  }

  renderChildren() {
    if (this.children.length === 0) {
      return "";
    }

    return this.children
      .map((child) => {
        if (typeof child === "string") {
          return child;
        } else if (child instanceof Component) {
          return child.render();
        }
      })
      .join("");
  }

  render() {
    return this.renderChildren();
  }
}
