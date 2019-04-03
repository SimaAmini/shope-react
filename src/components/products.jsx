import React, { Component } from "react";
import Product from "./product";
import { getProducts } from "../services/productService";

class Products extends Component {
  state = {
    products: []
  };
  async componentDidMount() {
    const products = await getProducts();
    console.log(products);
    this.setState({ products: products.data });
  }
  render() {
    const { products } = this.state;
    return (
      <div className="row">
        {products.map(product => (
          <Product
            key={product.id}
            title={product.title}
            thumbnailUrl={product.thumbnailUrl}
          />
        ))}
      </div>
      // {products.map(product => (
      //   <Product
      //     onDelete={this.props.onDelete}
      //     onIncrement={this.props.onIncrement}
      //     onDecrement={this.props.onDecrement}
      //     key={counter.id}
      //     counter={counter}
      //   />
      // ))}
    );
  }
}

export default Products;
