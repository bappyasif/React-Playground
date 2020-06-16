import React from "react";
import { Link } from "react-router-dom";

function index(props) {
  return (
    <div>
      <div className="font-bold py-2">Existing Menus</div>
      <ul className="font-bold p-4 text-blue-500">
        <li className="py-2 border-t border-b">
          <Link to="/" onClick={props.closeMenu}>
            Home Page
          </Link>
        </li>
        <li className="py-2 border-b">
          <Link to="/about" onClick={props.closeMenu}>
            About Us
          </Link>
        </li>
        <li className="py-2 border-b">
          <Link to="/contact" onClick={props.closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default index;
