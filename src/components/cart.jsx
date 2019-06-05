import React, { Component } from "react";
class Cart extends Component {
  state = {};
  render() {
    return <p>cart{this.props.total}</p>;
  }
}

export default Cart;
