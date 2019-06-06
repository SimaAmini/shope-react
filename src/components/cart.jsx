import React, { Component } from "react";
class Cart extends Component {
  // async componentDidMount() {
  //   try {
  //     cartItams = localStorage.getItem
  //     const { data: product } = await getProduct(productId);
  //     this.setState({ product });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       return this.props.history.replace("/not-found");
  //   }
  // }
  render() {
    const { products } = this.props;

    return (
      <React.Fragment>
        <p>cart{this.props.total}</p>
        <table className="table">
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img
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
