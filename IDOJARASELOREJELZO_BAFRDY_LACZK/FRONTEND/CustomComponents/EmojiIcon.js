import { Component } from "../BudgetReact/Component.js";
import { Span } from "../BudgetReact/Components/Span.js";

export class EmojiIcon extends Component {
  constructor(props) {
    super(props);
    this.emoji = props.emoji || "";
  }

  render() {
    return new Span({
      className: "emoji-icon",
      children: [this.emoji],
    }).render();
  }
}
