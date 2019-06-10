import React, { Component } from "react";
class Cart extends Component {
  state = {
    products: []
  };
  async componentDidMount() {
    const products = JSON.parse(localStorage.getItem("cartItems"));
    if (products && products.length > 0) {
      this.setState({ products });
    }
  }
  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        <p>cart{this.props.total}</p>
        <table className="table">
          <tbody>
            {this.state.products.map(product => (
              <tr key={product.id}>
                <td>
                  <img
                    style={{ width: "100px" }}
                    className="img-thumbnail"
                    src={product.thumbnailUrl}
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <span onClick={() => this.props.onRemoveFromCart(product)}>
                    X
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Cart;
