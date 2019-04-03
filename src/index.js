import React from "react";
import ReactDOM from "react-dom";

// import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
