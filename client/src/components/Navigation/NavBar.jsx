import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="left-container">
          <p>KTS Blog</p>
        </div>
        <div className="mid-container">
          <p></p>
        </div>
        <div className="right-container">
          <p>Art</p>
          <p>Technology</p>
          <p>Science</p>
          <p>Cinema</p>
          <p>Design</p>
          <p>Food</p>
          <p>Login</p>
          <p>Write</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar;