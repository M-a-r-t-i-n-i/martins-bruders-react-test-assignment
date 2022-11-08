import React from "react";
// import Button from "./Button/PlusButton";

export default class MainFrameClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      counter: this.props.counter,
    };

    this.handlerIncreaseCount = this.handlerIncreaseCount.bind(this);
    this.handlerDecreaseCount = this.handlerDecreaseCount.bind(this);
    this.handlerResetCount = this.handlerResetCount.bind(this);
  }

  handlerIncreaseCount() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  handlerDecreaseCount() {
    if (this.state.counter > this.props.limit)
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  handlerResetCount() {
    this.setState(() => ({ counter: 0 }));
  }

  render() {
    return (
      <>
        <h1>{this.props.type} Component</h1>
        <p>There is some text here</p>
        <button onClick={this.handlerIncreaseCount}>Increment</button>
        <button onClick={this.handlerDecreaseCount}>Decrement</button>
        <button onClick={this.handlerResetCount}>Reset</button>
        <p>{this.props.counter}</p>
        <p>{this.state.counter}</p>
      </>
    );
  }
}
