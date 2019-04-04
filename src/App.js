import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React, { Component } from "react";
import Container from "./components/container";
library.add(faShoppingCart);

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

export default App;
