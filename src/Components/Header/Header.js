import React from "react";
import { Link } from "react-router-dom";
import { BiLogoVisualStudio } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <nav className="nav-bar">
        <Link to="/">
          <BiLogoVisualStudio size={50} color="black"/>
        </Link>
        <ul className="navbar">
          <li>
            <Link to="/" className="nav-link">
              <p>{<AiOutlineHome size={20} />}</p>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              <p>{<FcAbout size={20} />}</p>
            </Link>
          </li>
          <li>
            <Link to="/user" className="nav-link">
              <p>{<FiUsers size={20}/>}</p>
            </Link>
          </li>
        </ul>
      </nav>
      <hr/>
    </div>
  );
};

export default Header;
