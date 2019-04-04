import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
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
