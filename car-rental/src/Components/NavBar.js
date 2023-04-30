import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { TiTime } from 'react-icons/ti';
import { FaPhone } from 'react-icons/fa';


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
  <FontAwesomeIcon icon={faCar} className="logo-icon" />
  CAR RENTAL 
</NavLink>
<div className="nav-button">
            <button className="btn btn-primary btn-left"><TiTime size={16} color="white" />
      &nbsp;Sunday to Friday 10am - 7pm</button>  &ensp;
            <button className="btn btn-primary btn-right">Request a Call&nbsp;&nbsp;<FaPhone size={16} color="white" /></button>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cars"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cars
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          
          
        </div>
      </nav>
    </>
  );
}

export default NavBar;