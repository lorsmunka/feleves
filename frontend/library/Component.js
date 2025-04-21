export class Component {
  constructor(props) {
    const { tag = "div", children, onMount, onRender, state } = props;
    this.element = document.createElement(tag);

    this.children = children || [];
    this.onMount = onMount || null;
    this.onRender = onRender || null;

    this._state = state || {};
  }

  get state() {
    return this._state;
  }

  setState(newState) {
    this._state = { ...this._state, ...newState };
    this.render();
  }

  renderChildren() {
    if (this.children.length === 0) {
      return;
    }

    this.element.innerHTML = "";

    this.children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        this.element.appendChild(textNode);
      } else if (child instanceof Component) {
        this.element.appendChild(child.render());
      }
    });
  }

  renderLifecycle() {
    if (this.onMount) {
      this.onMount();
      this.onMount = null;
    }

    if (this.onRender) {
      this.onRender();
    }
  }

  render() {
    this.renderLifecycle();
    this.renderChildren();

    return this.element;
  }
}
