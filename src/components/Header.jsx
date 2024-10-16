import React from "react";
import "./Header.css";
import Logo from "../assets/LGCVSU.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />

        <h1>Cavite State University</h1>
        <div className="header-line"></div>
        <p>Student Portal</p>
      </div>
    </div>
  );
};
export default Header;
