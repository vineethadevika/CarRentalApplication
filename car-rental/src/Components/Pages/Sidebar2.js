import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";
import CarForm from  "../Pages/ownerpages/CarForm"
import CarList from '../Pages/ownerpages/CarList';
import CarDeleteForm from "../Pages/ownerpages/CarDeleteForm";
import CarHistory from "../Pages/ownerpages/CarHistory";
function Sidebar2() {
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
          Owner Dashboard
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
          <button onClick={() => handleButtonClick(0)}>Car List</button>
          <button onClick={() => handleButtonClick(1)}>Add Car</button>
          <button onClick={() => handleButtonClick(2)}>Delete Car</button>
          <button onClick={() => handleButtonClick(3)}>Booking History</button>
        </div>

        <main className="main-content">
          {selectedButton === 0 && <CarList/>}
          {selectedButton === 1 && <CarForm/>}
          {selectedButton === 2 && <CarDeleteForm/>}
          {selectedButton === 3 && <CarHistory/>}
        </main>
      </div>
       
      </>
  );
}

export default Sidebar2;
