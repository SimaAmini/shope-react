import React, { Component } from "react";
import Navbar from "./navbar";
import Products from "./products";
import NotFound from "./notFound";
import ProductDetail from "./productDetail";
import Cart from "./cart";
import { Redirect, Route, Switch } from "react-router-dom";
import "../index.css";

class Container extends Component {
  state = { total: 0, products: [] };

  componentDidMount() {
    const cartItams = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartItams);
    if (cartItams && cartItams.length > 0) {
      this.setState({ total: cartItams.length });
    }
  }

  handleAddToCart = product => {
    const products = [...this.state.products];
    products.push(product);
    localStorage.setItem("cartItems", JSON.stringify(products));
    this.setState({ total: this.state.total + 1, products: products });
  };
  handleRemoveProduct = product => {
    const products = [...this.state.products];
    const productList = products.filter(p => p.id !== product.id);
    this.setState({ products: productList, total: this.state.total - 1 });
  };

  render() {
    const { total, products } = this.state;
    return (
      <React.Fragment>
        <Navbar total={total} />
        <main className="container mx-auto px-40">
          <Switch>
            <Route
              path="/products/:id"
              render={props => (
                <ProductDetail {...props} onAdd={this.handleAddToCart} />
              )}
            />
            <Route
              path="/products"
              render={() => <Products onAdd={this.handleAddToCart} />}
            />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  total={total}
                  products={products}
                  onRemoveFromCart={this.handleRemoveProduct}
                />
              )}
            />
            <Redirect exact from="/" to="/products" />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Container;
