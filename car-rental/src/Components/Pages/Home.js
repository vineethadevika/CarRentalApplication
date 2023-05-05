import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import image from "../assets/all-images/cars-img/background.png";
import Nav from '../NavBar';

function Home() {
  return (
    <>
    <Nav/>
    <div className="containerHome">
      <div className="image-container">
        <img src={image} alt="Profile" />
      </div>
      <div className="button-container">
      <Link to="/user-login" className="link">
          <button className="buttons">User Login</button>
      </Link>
      <Link to="/owner-login" className="link">
          <button className="buttons">Owner Login</button>
      </Link>
      <Link to="/admin-login" className="link">
          <button className="buttons">Admin Login</button>
      </Link>
      </div>
    </div>
    </>
  );
}

export default Home;

