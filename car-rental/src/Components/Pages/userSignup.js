import  image from './background.png';
import Nav1 from '../Nav1';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles/stylingAC.css";

const styles = {
  color: 'black',
  fontSize: '24px',
  backgroundColor: 'skyblue',
  textAlign:'center',
  height:'50px'
};

function UserSignUp() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const [values, setvalues] = useState({
    // username:'',
    // password:''
  })
  const handlchange = (e) =>{
    setvalues({...values,[e.target.name]:e.target.value})

  }

  
const handleSubmit = (e) =>{
  e.preventDefault()
  if (values.pass !== values.confirmPass) {
    setErrorMessages({name: "pass", message: "Passwords do not match"});
    return;
  }
console.log(values)
  axios.post('http://localhost:3080/signup', {values})
  .then((res)=>{
    console.log(res.data);
    
  })
}
    // var { uname, pass } = document.forms[0];

    
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
         
          <input type="text" name="uname" placeholder="Enter User Name" required onChange={handlchange} />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
  <input type="password" name="pass" placeholder="Enter Password" required onChange={handlchange}/>
  {/* {renderErrorMessage("pass")} */}
</div>
<div className="input-container">
  <input type="password" name="confirmPass" placeholder="Confirm Password" required onChange={handlchange}/>
  {renderErrorMessage("pass")}
</div>

       
        <div className="button-container">
          <input type="submit" value="Create Account" onSubmit={handleSubmit}/>
        </div><br/>
        <div>
          <p>Already Have an Account ? <a href="/user-login">Login</a></p>
        </div>
      </form>
    </div>
  );

  return (
    <>
     <Nav1 />
            <h5 style={styles}>USER SIGNUP PAGE</h5>
            <div className="containerHome">
                <div className="image-container">
                    <img src={image} alt="Profile" />
                </div>
                <div className="button-container">
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default UserSignUp;