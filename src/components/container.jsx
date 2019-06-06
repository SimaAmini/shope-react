import React, { Component } from "react";
import Navbar from "./navbar";
import Products from "./products";
import NotFound from "./notFound";
import ProductDetail from "./productDetail";
import Cart from "./cart";
import { Redirect, Route, Switch } from "react-router-dom";
class Container extends Component {
  state = { total: 0, products: [] };

  handleAddToCart = product => {
    const products = [...this.state.products];
    products.push(product);
    this.setState({ total: this.state.total + 1, products: products });
    // localStorage.setItem("cartItems", JSON.stringify(this.state.products));
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
        <main className="container">
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
