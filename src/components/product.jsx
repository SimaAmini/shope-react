import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  state = {};
  render() {
    const { product, addToCart } = this.props;
    return (
      <React.Fragment>
        <div className="card col-sm-4">
          <Link to={`/products/${product.id}`}>
            <img
              className="card-img-top img-thumbnail"
              src={product.thumbnailUrl}
              alt={product.title}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary" onClick={addToCart}>
              +
            </button>
            <button>{product.price}</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Product;
