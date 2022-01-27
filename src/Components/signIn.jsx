import React from "react";
import logo from "./images/image.png";
import "./StyleSheet.css";
import {Link,useNavigate} from 'react-router-dom'

export const Signin = () => {
  const navigate = useNavigate()

  const onSubmit = (e)=>{
    e.preventDefault()
    navigate('/home')
}
  return (
    <div>
      <div className="login-container">
        <div className="header">
          <div
            className="semiheader"
            style={{ paddingRight: "2%", display: "flex" }}
          >
            <h1 className="head">Edu</h1>
            <h1 className="sharp">Sharp</h1>
          </div>
          <h1 className="admin">Admin System</h1>
        </div>
        <div className="login-content-container">
          <img src={logo} alt="image" className="images" />
          <div className="login-content">
            <form className="login-Input">
              <h2>Sign In</h2>
              <input type={"text"} placeholder="Email Address" />
              <input type={"password"} placeholder="Password" />
            </form>
            <h3> Forgot Password ? </h3>
            <button type={"submit"} onClick={onSubmit} className="button-log">
              
              Sign In
            </button>
         <div className="link">
         <h4>Don't have an account?</h4>
       <Link to={'/'}>     <h4 style={{color:'red'}}  >Register</h4></Link>
         </div>
          </div>
        </div>
        <footer className="footer">
          <h2></h2>
        </footer>
      </div>
    </div>
  );
};
