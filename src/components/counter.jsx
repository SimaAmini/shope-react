import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  increment = () => {
    let count = this.state.count;

    ++count;
    this.setState({ count });
  };
  decrement = () => {
    let count = this.state.count;
    --count;
    this.setState({ count });
  };
  handleChangeCounter = event => {
    this.setState({ count: event.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <button className="btn btn-danger" onClick={this.decrement}>
            -
          </button>
          <input
            type="text"
            value={this.state.count}
            onChange={this.handleChangeCounter}
            className="count-input"
          />
          <button className="btn btn-success" onClick={this.increment}>
            +
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Counter;
