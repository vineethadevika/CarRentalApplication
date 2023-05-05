import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";
import Reservation from "../Pages/userpages/makeReservation"
import RentalHistory from "./userpages/rentalHistory";
import Payment from './userpages/payment';
import Feedback from './userpages/Feedback';
function Sidebar() {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  const handleLogout = () => {
    window.location.href = "/";
  };
  return (
   <>
      {/* Navbar */}
      
      <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <FontAwesomeIcon icon={faCar} className="logo-icon" />
          <span>Car Rental</span>
        </div>
        <div className="navbar-center">
          User Dashboard
        </div>
        <div className="navbar-right">
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" /> Logout
          </button>
        </div>
      </div>
    
      </nav>

      {/* Sidebar */}
      <div className="content-wrapper">
        <div className="sidebar-buttons">
          <button onClick={() => handleButtonClick(0)}>Make Reservation</button>
          <button onClick={() => handleButtonClick(1)}>Rental History</button>
          <button onClick={() => handleButtonClick(2)}>Make Payment</button>
          <button onClick={() => handleButtonClick(3)}>Feedback Form</button>
        </div>

        <main className="main-content">
          {selectedButton === 0 && <Reservation/>}
          {selectedButton === 1 && <RentalHistory/>}
          {selectedButton === 2 && <Payment/>}
          {selectedButton === 3 && <Feedback/>}
        </main>
      </div>
      </>
  );
}

export default Sidebar;
