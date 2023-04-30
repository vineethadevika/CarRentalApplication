import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function Nav1() {
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
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/user-login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/user-signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SignUp
              </NavLink>
            </li>
          </ul>
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav1;