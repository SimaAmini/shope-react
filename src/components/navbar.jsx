import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    const { total } = this.props;
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link btn btn-outline-secondary" href="#">
              <span className="badge badge-secondary badge-pill">{total}</span>
              <span className="m-2">Cart</span>
              <FontAwesomeIcon icon="shopping-cart" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
