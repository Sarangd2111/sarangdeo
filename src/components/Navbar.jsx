import React, { useState } from "react";
import { navElements } from "../utils/utils";
import "../stylesheets/nav.css";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleShowNavbar = () => {
    setShowMenu(!showMenu);
    setOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="nav-container">
        <div className="site-name">
          <Link to='/sarangdeo/' style={{ textDecoration: 'none' }}>{/* <img src="./sd_favicon.png" alt="sd_logo" className="logo"/> */}
            <span className="heading">Sarang Deo</span>
          </Link>
        </div>
        <div className="nav-menu">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className={`nav-elements  ${showMenu && "active"}`}>
            {navElements.map((element) => {
              return (
                <ul>
                  <li className="nav-element" onClick={handleShowNavbar}>
                    <Link to={element.path}>
                      <span className={`${location.pathname === element.path ? "text active-page": "text"}`}>{element.element}</span>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
