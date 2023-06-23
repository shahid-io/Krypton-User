import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div className="container">
      <nav>
        <img alt="logo" src=""></img>
        <ul className="navbar">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/user" className="nav-link">
              User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
