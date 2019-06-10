import React, { Component } from "react";
import { getProduct } from "../services/productService";
import "../index.css";
class ProductDetail extends Component {
  state = {
    product: {
      title: " ",
      description: "",
      thumbnailUrl: "",
      images: [],
      price: 0,
      colors: [],
      category: 0
    }
  };
  async componentDidMount() {
    try {
      const productId = this.props.match.params.id;
      const { data: product } = await getProduct(productId);
      this.setState({ product });
      // if (localStorage.getItem("cartItems")) {
      //   const cartItems = localStorage.getItem("cartItems");
      //   const result = cartItems.find(item => item.id === productId);
      // }
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }
  render() {
    const { product } = this.state;

    return (
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-thumbnail"
            src={product.thumbnailUrl}
            alt={product.title}
          />
          {product.colors.map((color, index) => (
            <span key={index} className="badge">
              {color}
            </span>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => this.props.onAdd(product)}
          >
            + Add to Cart
          </button>
        </div>
        <div className="col-md-8">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
