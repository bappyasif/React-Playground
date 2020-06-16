import React from "react";
import { Link } from "react-router-dom";

function index(props) {
  return (
    <div className="font-bold">
      Existing Menus
      <ul>
        <li className="py-2 border-b">
          <Link to="/" onClick={props.closeMenu}>
            Home Page
          </Link>
        </li>
        <li className="py-2 border-b">
          <Link to="/about-us" onClick={props.closeMenu}>
            About Us
          </Link>
        </li>
        <li className="py-2 border-b">
          <Link to="/contact-us" onClick={props.closeMenu}>
            Contact Us
          </Link>
        </li>
        <li className="py-2 border-b">
          <Link to="/products" onClick={props.closeMenu}>
            Top Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
