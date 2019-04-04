import React, { Component } from "react";
import Navbar from "./navbar";
import Products from "./products";
import NotFound from "./notFound";
import ProductDetail from "./productDetail";
import { Redirect, Route, Switch } from "react-router-dom";
class Container extends Component {
  state = { total: 0 };

  handleAddToCart = () => {
    this.setState({ total: this.state.total + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar total={this.state.total} />
        <main className="container">
          <Switch>
            <Route path="/products/:id" component={ProductDetail} />
            <Route
              path="/products"
              render={() => <Products onAdd={this.handleAddToCart} />}
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
