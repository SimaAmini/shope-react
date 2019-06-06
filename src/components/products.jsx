import React, { Component } from "react";
import Product from "./product";
import { getProducts } from "../services/productService";

class Products extends Component {
  state = {
    products: []
  };
  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products: products.data });
  }

  render() {
    const { products } = this.state;
    const { onAdd } = this.props;
    return (
      <div className="row">
        {products.map(product => (
          <Product key={product.id} addToCart={onAdd} product={product} />
        ))}
      </div>
    );
  }
}

export default Products;
