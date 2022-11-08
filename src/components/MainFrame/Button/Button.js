import React from "react";

export default class ButtonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      functionality: this.props.functionality,
    };

    this.handlerButtonFunctionPlaceholder =
      this.handlerButtonFunctionPlaceholder.bind(this);
  }

  handlerButtonFunctionPlaceholder() {
    this.setState((prevState) => ({
      functionality: prevState.functionality + " is not defined",
    }));
  }

  render() {
    // const {}

    return (
      <>
        <button onClick={this.handlerButtonFunctionPlaceholder}>
          {this.props.type}
        </button>
        <p>{this.state.functionality}</p>
      </>
    );
  }
}
