import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    const { total } = this.props;
    return (
      <nav className="flex items-center justify-between flex-wrap bg-dark-navbar p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#5B2CDE" fill-opacity="0.7" />
          </svg>

          <span className="font-semibold text-xl tracking-tight">Shop</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/cart"
              className="inline-block flex w-full text-center  text-sm px-6 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              <span className="font-semibold mr-2 text-left flex-auto">
                Cart
              </span>
              <span className="flex-auto rounded-full bg-yellow-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                {total}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      // <nav className="navbar navbar-expand-sm bg-light">
      //   <ul className="navbar-nav mr-auto">
      //     <li className="nav-item">
      //       <Link className="nav-link" to="/cart">
      //         <button className="nav-link btn btn-outline-secondary" href="#">
      //           <span className="badge badge-secondary badge-pill">
      //             {total}
      //           </span>
      //           <span className="m-2">Cart</span>
      //           <FontAwesomeIcon icon="shopping-cart" />
      //         </button>
      //       </Link>
      //     </li>
      //     <li className="nav-item">
      //       <Link className="nav-link" to="/products">
      //         Home
      //       </Link>
      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default Navbar;
