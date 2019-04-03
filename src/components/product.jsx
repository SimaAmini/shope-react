import React, { Component } from "react";
import Counter from "./counter";

class Product extends Component {
  state = {};
  render() {
    const styles = {
      card: {
        // width: "18rem",
        // textAlign: "center"
      }
    };
    return (
      <React.Fragment>
        <div className="card col-sm-4" style={styles.card}>
          <img
            className="card-img-top img-thumbnail"
            src={this.props.thumbnailUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Counter />
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Product;
