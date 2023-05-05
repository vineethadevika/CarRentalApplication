import React, { useState } from 'react';
import { FaBars, FaUsers, FaCar, FaListAlt, FaHistory, FaCog, FaAd } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { hover } from '@testing-library/user-event/dist/hover';
const AdminDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    window.location.href = "/";
  };
  const menuItem = [
    { path: "/admin/users", name: "View All Users", icon: <FaUsers /> },
    { path: "/admin/viewallowners", name: "View All Owners", icon: <FaUsers /> },
    { path: "/admin/cars", name: "Cars", icon: <FaCar /> },
    { path: "/admin/viewstatus", name: "View Status", icon: <FaListAlt /> },
    { path: "/admin/carhistory", name: "Car History", icon: <FaHistory /> },
    { path: "/admin/manageusers", name: "Manage Users", icon: <FaCog /> },
    { path: "/admin/managecarowners", name: "Manage Car Owners", icon: <FaCog /> },
    { path: "/admin/managecars", name: "Manage Cars", icon: <FaCog /> },
    { path: "/admin/manageadvertisements", name: "Manage Advertisements", icon: <FaAd /> }
  ];

  return (
    <>
   
   <nav>
      <div className="navbar-container">
        <div className="navbar-left">
          <FontAwesomeIcon icon={faCar} className="logo-icon" />
          <span>Car Rental</span>
        </div>
        <div className="navbar-center">
          Admin Dashboard
        </div>
        <div className="navbar-right">
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" /> Logout
          </button>
        </div>
      </div>
    
      </nav>
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: '#F5F5F5' }}>
      <div style={{ width: isOpen ? '300px' : '70px', transition: 'width 0.3s ease', backgroundColor: 'blue', color: '#fff'  }}>
        <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: isOpen ? 'center' : 'flex-start', backgroundColor: 'darkblue', fontSize: '20px', fontWeight: 'bold', transition: 'justify-content 0.3s ease' }}>
          <span style={{ display: isOpen ? 'block' : 'none', textAlign: 'center' }}>CAR RENTAL</span>
          <FaBars style={{ marginLeft: 'auto', marginRight: '10px', cursor: 'pointer' }} onClick={toggle} />
        </div>
        <div style={{ paddingTop: '20px' }}>
          {menuItem.map((item, index) => (
            <Link to={item.path} key={index} className="link" activeClassName="active">
              <div style={{ display: 'flex', alignItems: 'center', padding: '10px', transition: 'padding 0.3s ease', color: '#fff', textDecoration: 'none', opacity: isOpen ? '1' : '0' }}>
                <div style={{ width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item.icon}</div>
                <div style={{ marginLeft: isOpen ? '10px' : '0px', display: isOpen ? 'block' : 'none', transition: 'margin-left 0.3s ease' }}>{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div style={{ flexGrow: 1, backgroundColor: 'lightgreen', padding: '20px' }}>
        {children}
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;




