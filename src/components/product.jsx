import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  state = {};
  limitTextCharacter = (text, number) => {
    return text.substring(0, number) + " ...";
  };
  render() {
    const { product } = this.props;
    return (
      <Link to={`/products/${product.id}`}>
        <div className="flex-1 m-2 max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={product.thumbnailUrl}
            alt={product.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            {/* <p className="text-gray-700 text-base">{product.description}</p> */}
            <p className="text-gray-700 text-base">
              {this.limitTextCharacter(product.description, 60)}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              ${product.price}
            </span>
          </div>
        </div>
      </Link>
      // <React.Fragment>
      //   <div className="card col-sm-4">
      //     <Link to={`/products/${product.id}`}>
      //       <img
      //         className="card-img-top img-thumbnail"
      //         src={product.thumbnailUrl}
      //         alt={product.title}
      //       />
      //     </Link>
      //     <div className="card-body">
      //       <h5 className="card-title">{product.title}</h5>
      //       <p className="card-text">
      //         Some quick example text to build on the card title and make up the
      //         bulk of the card's content.
      //       </p>

      //       <span>{product.price}</span>
      //     </div>
      //   </div>
      // </React.Fragment>
    );
  }
}
export default Product;
