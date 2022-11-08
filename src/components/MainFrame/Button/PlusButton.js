import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClick, text, className } = this.props;
    return (
      <button onClick={onClick} className={className}>
        {text}
      </button>
    );
  }
}

<Button onClick={this.handlePlusClick} text="+" className="plus-button" />;
