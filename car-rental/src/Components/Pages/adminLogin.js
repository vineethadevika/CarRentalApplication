import { Link } from 'react-router-dom';
import image from "../assets/all-images/cars-img/background.png";
import Nav3 from '../Nav3';
import React, { useState } from "react";
import axios from "axios";
import "../styles/styling.css";
const styles = {
  color: 'black',
  fontSize: '24px',
  backgroundColor: 'skyblue',
  textAlign:'center',
  height:'50px'
};
function AdminLogin() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
      const [user, setUser] = useState({
        username:'',
        password:''
      })
      const handlchange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
  
      }
    const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3080/adminsignin', user)
      .then((res)=>{
        console.log(res.data);
        if(res.data.length > 0){
          window.location.href='/admin';
        }else{
          alert("Invalid details")
        }
        
      }).catch((err)=>{
        window.location.href = "/admin-login"
  
      })
    }
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            
            <input type="text" name="username" placeholder ="Enter Admin Name"onChange={handlchange} required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <input type="password" name="password" Placeholder="Enter Password " onChange={handlchange} required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" value="Login"/>
          </div>
        </form>
      </div>
    );
  
  
  return (
    <>
    <Nav3/>
    <h5 style={styles}>ADMIN LOGIN PAGE</h5>
    <div className="containerHome">
      <div className="image-container">
        <img src={image} alt="Profile" />
      </div>
      <div className="button-container">
     
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>Admin is successfully logged in</div> : renderForm}
      </div>
    </div>
    </div>
    </div>
   </>
  )
}

export default AdminLogin;





